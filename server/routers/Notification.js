import express from "express";
import notification_controllers from "../controllers/Notification.js";

const notificationRouter = express.Router();

notificationRouter.get("/user/:id", notification_controllers.getNotifications);
notificationRouter.put("/:id/read", notification_controllers.markRead);
notificationRouter.post("/clear-message", notification_controllers.clearMessageNotifications);

export default notificationRouter;
