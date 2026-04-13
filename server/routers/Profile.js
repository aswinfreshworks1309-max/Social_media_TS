import express from "express";
import profile_controllers from "../controllers/Profile.js";
import multer from "multer";

const profileRouter = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

profileRouter.get("/stats", profile_controllers.getProfileStats);
profileRouter.get("/friends", profile_controllers.getFriendsList);
profileRouter.get("/:id", profile_controllers.getProfileById);
profileRouter.put("/:id", upload.single('avatar'), profile_controllers.updateProfile);

export default profileRouter;
