import express from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import http from 'http';
import { Server } from 'socket.io';

const SECRET = 'secret-key';
const app = express();
app.use(cors());
app.use(express.json());

export const users = [];
export const gigs = [];
export const messages = [];

function auth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.sendStatus(401);
  const token = authHeader.split(' ')[1];
  try {
    req.user = jwt.verify(token, SECRET);
    next();
  } catch (e) {
    return res.sendStatus(403);
  }
}

app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const user = { id: users.length + 1, email, password: hashed };
  users.push(user);
  res.json({ message: 'ok' });
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email);
  if (!user) return res.sendStatus(401);
  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.sendStatus(401);
  const token = jwt.sign({ id: user.id, email: user.email }, SECRET);
  res.json({ token });
});

app.get('/api/gigs', (req, res) => {
  res.json(gigs);
});

app.post('/api/gigs', auth, (req, res) => {
  const { title, price } = req.body;
  const gig = { id: gigs.length + 1, title, price, userId: req.user.id };
  gigs.push(gig);
  res.json(gig);
});

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

io.on('connection', (socket) => {
  socket.on('message', (msg) => {
    messages.push(msg);
    io.emit('message', msg);
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log('API running on ' + PORT));
