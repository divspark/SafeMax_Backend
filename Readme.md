# SafeMax Security Backend

This project is a **Node.js and Express** backend API for an appointment management system. It supports features such as creating appointments, managing admin users, updating appointment statuses, and assigning appointments to specific departments. The API is built with **Express** and uses **MongoDB** for data storage.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
  - [Appointment Routes](#appointment-routes)
  - [Admin Routes](#admin-routes)

## Features

- **Appointment Management**:
  - Create, view, update, and assign appointments.
  - Role-based access with protected routes for admins.
- **User Authentication**:
  - Secure JWT-based authentication for admin users.
  - Login and registration for admin accounts.
- **Middleware**:
  - Authentication middleware for secure access to protected routes.

## Technologies Used

- **Backend**: Node.js, Express
- **Database**: MongoDB (connected using Mongoose)
- **Authentication**: JSON Web Token (JWT)
- **Environment Configuration**: dotenv
- **Security**: bcryptjs (for password hashing)

## Project Structure

```plaintext
backend/
├── config/
│   └── db.js                  # MongoDB connection setup
├── controllers/
│   ├── AdminController.js      # Logic for admin registration/login
│   └── AppointmentController.js # Logic for appointment management
├── middlewares/
│   └── authMiddleware.js       # Middleware for authentication
├── models/
│   ├── Admin.js                # Admin user schema
│   └── Appointment.js          # Appointment schema
├── routes/
│   ├── AdminRoutes.js          # Routes for admin actions
│   └── AppointmentRoutes.js    # Routes for appointment actions
├── .env                        # Environment variables (not included in version control)
├── app.js                      # Main application file
├── package.json                # Project dependencies and scripts
└── README.md                   # Project documentation
```

## Getting Started

### Prerequisites

- **Node.js** (v12+)
- **MongoDB** (local instance or MongoDB Atlas)
- **npm** (included with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/backend.git
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Configuration

Create a `.env` file in the root directory with the following environment variables:

```plaintext
MONGO_URI=your_mongo_connection_string
PORT=5000
JWT_SECRET=your_secret_key_here
```

- `MONGO_URI`: MongoDB connection string (local or MongoDB Atlas).
- `PORT`: Port number for the server (default: 5000).
- `JWT_SECRET`: Secret key for JWT authentication.

### Running the Server

- **Development Mode**:
  ```bash
  npm run dev
  ```

- **Production Mode**:
  ```bash
  npm start
  ```

The server will start on `http://localhost:5000` (or the specified port in `.env`).

## API Endpoints

### Appointment Routes

| Method | Endpoint                        | Description                                        | Authentication |
|--------|---------------------------------|----------------------------------------------------|----------------|
| POST   | `/api/appointment/create`       | Create a new appointment                           | No             |
| GET    | `/api/appointment/all`          | Get all appointments                               | Yes            |
| PATCH  | `/api/appointment/update/:id`   | Update appointment status                          | Yes            |
| PATCH  | `/api/appointment/update/:id/department` | Assign appointment to a department         | Yes            |

### Admin Routes

| Method | Endpoint                | Description                     |
|--------|--------------------------|---------------------------------|
| POST   | `/api/admin/register`    | Register a new admin           |
| POST   | `/api/admin/login`       | Login an admin                  |

