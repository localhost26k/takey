# API Documentation

## Authentication

### POST /api/register
Create a new user.

Body:
```
{ "email": "user@example.com", "password": "pass" }
```

### POST /api/login
Login and receive JWT token.

Body:
```
{ "email": "user@example.com", "password": "pass" }
```

Returns `{ token: "JWT" }`

## Gigs

### GET /api/gigs
List all gigs.

### POST /api/gigs
Create a new gig. Requires `Authorization: Bearer <token>`.

Body:
```
{ "title": "Logo Design", "price": 50 }
```

## WebSocket
Connect to the server via Socket.io and emit `message` events for real-time chat.
