# 💬 Chat Application – Backend

A scalable real-time chat backend built using **Node.js, Express, MongoDB, and Socket.IO**.
Supports authentication, messaging, file uploads, and real-time communication.

---

## 🚀 Features

* 🔐 User Authentication (JWT)
* 💬 One-to-One & Group Chat
* 📩 Real-time Messaging (Socket.IO)
* 📎 File Upload (Images/Documents)
* 🧹 Clear Chat
* 🟢 Online Users Tracking
* ✍️ Typing Indicator
* 🔄 Latest Message Sync

---

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB + Mongoose**
* **Socket.IO**
* **Multer (File Upload)**
* **JWT Authentication**
* **CORS**

---

## 📁 Folder Structure

```
backend/
│── controllers/
│   ├── auth.js
│   ├── user.js
│   ├── chat.js
│   └── message.js
│
│── models/
│   ├── user.js
│   ├── chat.js
│   └── message.js
|   |__upload.js
│
│── routes/
│   ├── auth.js
│   ├── user.js
│   ├── chat.js
│   └── message.js
│
│── middlewares/
│   ├── authorization.js
│   ├── upload.js
│   └── wrapAsync.js
│
│── uploads/          # Stored files
│── server.js
│── package.json
│── .env
```

---

## ⚙️ Environment Variables

Create a `.env` file in root:

```
PORT=3000
MONGODB_URI=mongodb+srv://suba72176_db_user:2jnDhcfcjwf8FBFY@cluster0.0pi0sip.mongodb.net/realtime
JWT_SECRET=supersecretkey
FRONTEND_URL=https://final-project-frontend-nine-puce.vercel.app
```

---

## ▶️ Installation & Setup

```bash
# Clone repo
git clone https://github.com/your-username/your-backend-repo.git

# Go to folder
cd backend

# Install dependencies
npm install

# Start server
npm run dev
```

---

## 🌐 API Endpoints

### 🔐 Auth Routes

| Method | Endpoint         | Description   |
| ------ | ---------------- | ------------- |
| POST   | /api/auth/signup | Register user |
| POST   | /api/auth/signin | Login user    |

---

### 👤 User Routes

| Method | Endpoint  | Description   |
| ------ | --------- | ------------- |
| GET    | /api/user | Get all users |

---

### 💬 Chat Routes

| Method | Endpoint  | Description    |
| ------ | --------- | -------------- |
| POST   | /api/chat | Create chat    |
| GET    | /api/chat | Get user chats |

---

### 📩 Message Routes

| Method | Endpoint                              | Description              |
| ------ | -------------------------------       | ------------------------ |
| POST   | /api/message/message                  | Send message (text/file) |
| GET    | /api/message/:chatId                  | Get all messages         |
| GET    | /api/message/clearChat/:chatId        | Clear chat               |

---

## 📎 File Upload

* Uses **Multer**
* Files stored in `/uploads`
* Access via:

```
[http://localhost:3000/uploads/<filename>](https://project-s4m5.onrender.com/api/message/message)
```

---

## 🔌 Socket.IO Events

### Client → Server

* `setup` → user connect
* `join chat` → join room
* `typing` → typing indicator
* `stop typing`
* `new message`

### Server → Client

* `connected`
* `message received`
* `typing`
* `stop typing`
* `update users`

---

## 🌍 Deployment

### Backend (Render-link)
  https://project-s4m5.onrender.com
  
* Add environment variables in Render dashboard
* Deploy using:

```
node server.js
```

### CORS Setup

```js
const allowedOrigins = [
  "https://your-frontend.vercel.app"
];
```

---

## 🧪 Testing

Use **Postman**

---

## 🛑 Common Errors

### ❌ 400 – Missing required fields

* Check `message`, `chatId`

### ❌ CORS Error

* Add correct frontend URL in backend

### ❌ 405 Method Not Allowed

* Wrong API route or method

---

## 📌 Future Improvements

* ✅ Message seen status
* ✅ Push notifications
* ✅ Cloud storage (Cloudinary / AWS S3)
* ✅ Voice messages
* ✅ Video calling

---

## 👩‍💻 Author

**Vaishnavi R**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
