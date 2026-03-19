// const dotenv = require("dotenv");
// dotenv.config();
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const { Server } = require("socket.io");

// const app = express();

// const corsOptions = {
// 	origin: process.env.FRONTEND_URL,
// 	methods: ["GET", "POST", "DELETE"],
// 	allowedHeaders: ["Content-Type", "Authorization"],
// 	credentials: true,
// };

// app.use(cors(corsOptions));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// const PORT = process.env.PORT || 3000;

// // All routers
// const authRouter = require("./routes/auth");
// const userRouter = require("./routes/user");
// const chatRouter = require("./routes/chat");
// const messageRouter = require("./routes/message");

// // Connect to Database
// main()
// 	.then(() => console.log("Database Connection established"))
// 	.catch((err) => console.log(err));

// async function main() {
// 	await mongoose.connect(process.env.MONGODB_URI);
// }
// // Root route
// app.get("/", (req, res) => {
// 	res.json({
// 		message: "Welcome to Chat Application!",
// 		frontend_url: process.env.FRONTEND_URL,
// 	});
// });

// // All routes
// app.use("/api/auth", authRouter);
// app.use("/api/user", userRouter);
// app.use("/api/chat", chatRouter);
// app.use("/api/message", messageRouter);

// // Invaild routes
// app.all("*", (req, res) => {
// 	res.json({ error: "Invaild Route" });
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
// 	const errorMessage = err.message || "Something Went Wrong!";
// 	res.status(500).json({ message: errorMessage });
// });

// // Start the server
// const server = app.listen(PORT, async () => {
// 	console.log(`Server listening on ${PORT}`);
// });

// // Socket.IO setup
// const io = new Server(server, {
//   pingTimeout: 60000,
//   transports: ["websocket"],
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"],
//     credentials: true
//   },
// });

// // Socket connection
// io.on("connection", (socket) => {
// 	console.log("Connected to socket.io:", socket.id);

// 	// Join user and message send to client
// 	const setupHandler = (userId) => {
// 		if (!socket.hasJoined) {
// 			socket.join(userId);
// 			socket.hasJoined = true;
// 			console.log("User joined:", userId);
// 			socket.emit("connected");
// 		}
// 	};
// 	const newMessageHandler = (newMessageReceived) => {
// 		let chat = newMessageReceived?.chat;
// 		chat?.users.forEach((user) => {
// 			if (user._id === newMessageReceived.sender._id) return;
// 			console.log("Message received by:", user._id);
// 			socket.in(user._id).emit("message received", newMessageReceived);
// 		});
// 	};

// 	// Join a Chat Room and Typing effect
// 	const joinChatHandler = (room) => {
// 		if (socket.currentRoom) {
// 			if (socket.currentRoom === room) {
// 				console.log(`User already in Room: ${room}`);
// 				return;
// 			}
// 			socket.leave(socket.currentRoom);
// 			console.log(`User left Room: ${socket.currentRoom}`);
// 		}
// 		socket.join(room);
// 		socket.currentRoom = room;
// 		console.log("User joined Room:", room);
// 	};
// 	const typingHandler = (room) => {
// 		socket.in(room).emit("typing");
// 	};
// 	const stopTypingHandler = (room) => {
// 		socket.in(room).emit("stop typing");
// 	};

// 	// Clear, Delete and Create chat handlers
// 	const clearChatHandler = (chatId) => {
// 		socket.in(chatId).emit("clear chat", chatId);
// 	};
// 	const deleteChatHandler = (chat, authUserId) => {
// 		chat.users.forEach((user) => {
// 			if (authUserId === user._id) return;
// 			console.log("Chat delete:", user._id);
// 			socket.in(user._id).emit("delete chat", chat._id);
// 		});
// 	};
// 	const chatCreateChatHandler = (chat, authUserId) => {
// 		chat.users.forEach((user) => {
// 			if (authUserId === user._id) return;
// 			console.log("Create chat:", user._id);
// 			socket.in(user._id).emit("chat created", chat);
// 		});
// 	};

// 	socket.on("setup", setupHandler);
// 	socket.on("new message", newMessageHandler);
// 	socket.on("join chat", joinChatHandler);
// 	socket.on("typing", typingHandler);
// 	socket.on("stop typing", stopTypingHandler);
// 	socket.on("clear chat", clearChatHandler);
// 	socket.on("delete chat", deleteChatHandler);
// 	socket.on("chat created", chatCreateChatHandler);

// 	socket.on("disconnect", () => {
// 		console.log("User disconnected:", socket.id);
// 		socket.off("setup", setupHandler);
// 		socket.off("new message", newMessageHandler);
// 		socket.off("join chat", joinChatHandler);
// 		socket.off("typing", typingHandler);
// 		socket.off("stop typing", stopTypingHandler);
// 		socket.off("clear chat", clearChatHandler);
// 		socket.off("delete chat", deleteChatHandler);
// 		socket.off("chat created", chatCreateChatHandler);
// 	});
// });


// const dotenv = require("dotenv");
// dotenv.config();
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const { Server } = require("socket.io");

// const app = express();

// const corsOptions = {
//   origin: process.env.FRONTEND_URL || "*", // allow your frontend
//   methods: ["GET", "POST", "DELETE", "PUT"],
//   allowedHeaders: ["Content-Type", "Authorization"],
//   credentials: true,
// };

// app.use(cors(corsOptions));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// const PORT = process.env.PORT || 3000;

// // Routers
// const authRouter = require("./routes/auth");
// const userRouter = require("./routes/user");
// const chatRouter = require("./routes/chat");
// const messageRouter = require("./routes/message");

// app.use("/api/auth", authRouter);
// app.use("/api/user", userRouter);
// app.use("/api/chat", chatRouter);
// app.use("/api/message", messageRouter);

// // Connect to Database
// main()
//   .then(() => console.log("Database Connection established"))
//   .catch((err) => console.log(err));

// async function main() {
//   await mongoose.connect(process.env.MONGODB_URI);
// }

// // Root route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to Chat Application!" });
// });

// // Invalid routes
// app.all("*", (req, res) => {
//   res.status(404).json({ error: "Invalid Route" });
// });

// // Error handling
// app.use((err, req, res, next) => {
//   const errorMessage = err.message || "Something Went Wrong!";
//   res.status(500).json({ message: errorMessage });
// });

// // Start server
// const server = app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });

// // ====================== SOCKET.IO ======================
// const io = new Server(server, {
//   pingTimeout: 60000,
//   transports: ["websocket"],
//   cors: {
//     origin: process.env.FRONTEND_URL || "*",
//     methods: ["GET", "POST"],
//     credentials: true,
//   },
// });

// // Keep track of online users
// const onlineUsers = new Map();

// io.on("connection", (socket) => {
//   console.log("Socket connected:", socket.id);

//   // Setup user
//   socket.on("setup", (userId) => {
//     socket.userId = userId;
//     onlineUsers.set(userId, socket.id);
//     io.emit("update users", Array.from(onlineUsers.keys()));
//     socket.emit("connected");
//   });

//   // New message
//   socket.on("new message", (newMessage) => {
//     const chat = newMessage.chat;
//     chat.users.forEach((user) => {
//       if (user._id === newMessage.sender._id) return; // don't send to sender
//       const socketId = onlineUsers.get(user._id);
//       if (socketId) {
//         io.to(socketId).emit("message received", newMessage);
//       }
//     });
//   });

//   // Join chat room (for typing etc)
//   socket.on("join chat", (room) => {
//     if (socket.currentRoom === room) return;
//     if (socket.currentRoom) socket.leave(socket.currentRoom);
//     socket.join(room);
//     socket.currentRoom = room;
//   });

//   socket.on("typing", (room) => {
//     socket.in(room).emit("typing");
//   });
//   socket.on("stop typing", (room) => {
//     socket.in(room).emit("stop typing");
//   });

//   // Clear chat
//   socket.on("clear chat", (chatId) => {
//     socket.in(chatId).emit("clear chat", chatId);
//   });

//   // Delete chat
//   socket.on("delete chat", (chat, authUserId) => {
//     chat.users.forEach((user) => {
//       if (user._id === authUserId) return;
//       const socketId = onlineUsers.get(user._id);
//       if (socketId) io.to(socketId).emit("delete chat", chat._id);
//     });
//   });

//   // Create new chat
//   socket.on("chat created", (chat, authUserId) => {
//     chat.users.forEach((user) => {
//       if (user._id === authUserId) return;
//       const socketId = onlineUsers.get(user._id);
//       if (socketId) io.to(socketId).emit("chat created", chat);
//     });
//   });

//   // Disconnect
//   socket.on("disconnect", () => {
//     if (socket.userId) onlineUsers.delete(socket.userId);
//     io.emit("update users", Array.from(onlineUsers.keys()));
//     console.log("Socket disconnected:", socket.id);
//   });
// });





const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { Server } = require("socket.io");

const app = express();

// const corsOptions = {
//   origin: process.env.FRONTEND_URL || "*", // allow your frontend
//   methods: ["GET", "POST", "DELETE", "PUT"],
//   allowedHeaders: ["Content-Type", "Authorization"],
//   credentials: true,
// };

// app.use(cors(corsOptions));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));



const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  methods: ["GET", "POST", "DELETE", "PUT"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // preflight
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));
const PORT = process.env.PORT || 3000;

// Routers
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const chatRouter = require("./routes/chat");
const messageRouter = require("./routes/message");

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/chat", chatRouter);
app.use("/api/message", messageRouter);

// Connect to Database
main()
  .then(() => console.log("Database Connection established"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
}

// Root route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Chat Application!" });
});

// Invalid routes
app.all("*", (req, res) => {
  res.status(404).json({ error: "Invalid Route" });
});

// Error handling
app.use((err, req, res, next) => {
  const errorMessage = err.message || "Something Went Wrong!";
  res.status(500).json({ message: errorMessage });
});

// Start server
const server = app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// ====================== SOCKET.IO ======================
const io = new Server(server, {
  pingTimeout: 60000,
  transports: ["websocket"],
  cors: {
    origin: process.env.FRONTEND_URL || "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// Keep track of online users
const onlineUsers = new Map();

io.on("connection", (socket) => {
  console.log("Socket connected:", socket.id);

  // Setup user
  socket.on("setup", (userId) => {
    socket.userId = userId;
    onlineUsers.set(userId, socket.id);
    io.emit("update users", Array.from(onlineUsers.keys()));
    socket.emit("connected");
  });

  // New message
  // socket.on("new message", (newMessage) => {
  //   const chat = newMessage.chat;
  //   chat.users.forEach((user) => {
  //     if (user._id === newMessage.sender._id) return; // don't send to sender
  //     const socketId = onlineUsers.get(user._id);
  //     if (socketId) {
  //       io.to(socketId).emit("message received", newMessage);
  //     }
  //   });
  // });


  socket.on("new message", (newMessage) => {
  const receiverId = newMessage.receiver?._id || null;

  if (receiverId) {
    const socketId = onlineUsers.get(receiverId);
    if (socketId) {
      io.to(socketId).emit("message received", newMessage);
    }
  } else {
    // fallback: send to all users except sender
    const chat = newMessage.chat;
    chat.users.forEach((user) => {
      if (user._id === newMessage.sender._id) return;
      const socketId = onlineUsers.get(user._id);
      if (socketId) io.to(socketId).emit("message received", newMessage);
    });
  }
});

  // Join chat room (for typing etc)
  socket.on("join chat", (room) => {
    if (socket.currentRoom === room) return;
    if (socket.currentRoom) socket.leave(socket.currentRoom);
    socket.join(room);
    socket.currentRoom = room;
  });

  socket.on("typing", (room) => {
    socket.in(room).emit("typing");
  });
  socket.on("stop typing", (room) => {
    socket.in(room).emit("stop typing");
  });

  // Clear chat
  socket.on("clear chat", (chatId) => {
    socket.in(chatId).emit("clear chat", chatId);
  });

  // Delete chat
  socket.on("delete chat", (chat, authUserId) => {
    chat.users.forEach((user) => {
      if (user._id === authUserId) return;
      const socketId = onlineUsers.get(user._id);
      if (socketId) io.to(socketId).emit("delete chat", chat._id);
    });
  });

  // Create new chat
  socket.on("chat created", (chat, authUserId) => {
    chat.users.forEach((user) => {
      if (user._id === authUserId) return;
      const socketId = onlineUsers.get(user._id);
      if (socketId) io.to(socketId).emit("chat created", chat);
    });
  });

  // Disconnect
  socket.on("disconnect", () => {
    if (socket.userId) onlineUsers.delete(socket.userId);
    io.emit("update users", Array.from(onlineUsers.keys()));
    console.log("Socket disconnected:", socket.id);
  });
});