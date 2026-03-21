// // const Chat = require("../models/chat");
// // const Message = require("../models/message");

// // const createMessage = async (req, res) => {
// // 	const { message, chatId } = req.body;
// // 	if (message) {
// // 		const newMessage = await Message.create({
// // 			sender: req.user._id,
// // 			message: message,
// // 			chat: chatId,
// // 		});
// // 		const chat = await Chat.findByIdAndUpdate(chatId, {
// // 			latestMessage: newMessage._id,
// // 		});
// // 		const fullMessage = await Message.findById(newMessage._id)
// // 			.populate("sender", "-password")
// // 			.populate({
// // 				path: "chat",
// // 				populate: { path: "users groupAdmin", select: "-password" },
// // 			});
// // 		return res.status(201).json({ data: fullMessage });
// // 	} else {
// // 		return res.status(400).json({ message: "Message not provide" });
// // 	}
// // };

// // const allMessage = async (req, res) => {
// // 	const chatId = req.params.chatId;
// // 	const messages = await Message.find({ chat: chatId })
// // 		.populate("sender", "-password")
// // 		.populate("chat");
// // 	return res.status(200).json({ data: messages });
// // };
// // const clearChat = async (req, res) => {
// // 	const chatId = req.params.chatId;
// // 	await Message.deleteMany({ chat: chatId });
// // 	return res.status(200).json({ message: "success" });
// // };

// // module.exports = { createMessage, allMessage, clearChat };



// const Chat = require("../models/chat");
// const Message = require("../models/message");

// const createMessage = async (req, res) => {
//   const { message, chatId } = req.body;

//   if (!message || !chatId) {
//     return res.status(400).json({ message: "Missing required fields" });
//   }

//   try {
//     const newMessage = await Message.create({
//       sender: req.user._id,
//       message,
//       chat: chatId,
//       file: req.file ? req.file.filename : null,
//     });

//     await Chat.findByIdAndUpdate(chatId, {
//       latestMessage: newMessage._id,
//     });

//     const fullMessage = await Message.findById(newMessage._id)
//       .populate("sender", "-password")
//       .populate({
//         path: "chat",
//         populate: { path: "users groupAdmin", select: "-password" },
//       });

//     return res.status(201).json({ data: fullMessage });
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ message: "Server error" });
//   }
// };
// const allMessage = async (req, res) => {
//   const chatId = req.params.chatId;
//   try {
//     const messages = await Message.find({ chat: chatId })
//       .populate("sender", "-password")
//       .populate("chat");
//     return res.status(200).json({ data: messages });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ message: "Server error" });
//   }
// };

// const clearChat = async (req, res) => {
//   const chatId = req.params.chatId;
//   try {
//     await Message.deleteMany({ chat: chatId });
//     return res.status(200).json({ message: "success" });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ message: "Server error" });
//   }
// };

// module.exports = { createMessage, allMessage, clearChat };


const Chat = require("../models/chat");
const Message = require("../models/message");

  const createMessage = async (req, res) => {
  let { message, chatId } = req.body;

  console.log("BODY:", req.body);
  console.log("FILE:", req.file);

  // ✅ FIX: allow file மட்டும் இருந்தாலும் ok
  if ((!message || message.trim() === "") && !req.file) {
    return res.status(400).json({ message: "Message or file required" });
  }

  if (!chatId) {
    return res.status(400).json({ message: "ChatId required" });
  }

  try {
    const newMessage = await Message.create({
      sender: req.user._id,
      message: message || "",
      chat: chatId,
      file: req.file ? req.file.filename : null,
    });

    await Chat.findByIdAndUpdate(chatId, {
      latestMessage: newMessage._id,
    });

    const fullMessage = await Message.findById(newMessage._id)
      .populate("sender", "-password")
      .populate({
        path: "chat",
        populate: { path: "users groupAdmin", select: "-password" },
      });

    return res.status(201).json({ data: fullMessage });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error" });
  }
};

const allMessage = async (req, res) => {
  const chatId = req.params.chatId;
  try {
    const messages = await Message.find({ chat: chatId })
      .populate("sender", "-password")
      .populate("chat");
    return res.status(200).json({ data: messages });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

const clearChat = async (req, res) => {
  const chatId = req.params.chatId;
  try {
    await Message.deleteMany({ chat: chatId });
    return res.status(200).json({ message: "success" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createMessage, allMessage, clearChat };