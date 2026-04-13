import express from "express";
import post_controllers from "../controllers/Post.js";
import multer from "multer";

const postRouter = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

postRouter.post("/", upload.single("image"), post_controllers.createPost);
postRouter.get("/", post_controllers.getPosts);
postRouter.put("/:id/like", post_controllers.likePost);
postRouter.post("/:id/comment", post_controllers.addComment);
postRouter.post("/save", post_controllers.savePost);
postRouter.get("/saved/:userId", post_controllers.getSavedPosts);
postRouter.delete("/:id", post_controllers.deletePost);

export default postRouter;
