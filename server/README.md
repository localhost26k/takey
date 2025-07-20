# Server

Simple Express API with JWT authentication and Socket.io chat. Data is stored in memory for demo purposes.

```
cd server
npm install
npm start
```

The API exposes:
- `POST /api/register` – register a new user
- `POST /api/login` – login and receive JWT
- `GET /api/gigs` – list gigs
- `POST /api/gigs` – create gig (requires Authorization header `Bearer <token>`)

Socket.io endpoint is available at the same host for real-time messages.
