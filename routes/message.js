// const express = require("express");
// const router = express.Router();
// const wrapAsync = require("../middlewares/wrapAsync");
// const { authorization } = require("../middlewares/authorization");
// const messageController = require("../controllers/message");
// const upload = require("../middlewares/upload");

// router.post("/message", upload.single("file"), createMessage);
// router.post("/", authorization, wrapAsync(messageController.createMessage));
// router.get("/:chatId", authorization, wrapAsync(messageController.allMessage));
// router.get(
// 	"/clearChat/:chatId",
// 	authorization,
// 	wrapAsync(messageController.clearChat)
// );

// module.exports = router;



const express = require("express");
const router = express.Router();

const wrapAsync = require("../middlewares/wrapAsync");
const { authorization } = require("../middlewares/authorization");
const messageController = require("../controllers/message");
const upload = require("../middlewares/upload");

// ✅ SEND MESSAGE (WITH FILE)
router.post(
  "/message",
  authorization,
  upload.single("file"),
  wrapAsync(messageController.createMessage)
);




// ✅ GET ALL MESSAGES
router.get(
  "/:chatId",
  authorization,
  wrapAsync(messageController.allMessage)
);

// ✅ CLEAR CHAT
router.get(
  "/clearChat/:chatId",
  authorization,
  wrapAsync(messageController.clearChat)
);

module.exports = router;