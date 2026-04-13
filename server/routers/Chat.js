import express from "express";
import chat_controllers from "../controllers/Chat.js";

const chatRouter = express.Router();

chatRouter.post("/send", chat_controllers.sendMessage);
chatRouter.get("/history", chat_controllers.getChatHistory);

export default chatRouter;
