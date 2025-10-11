import express from "express";
import membersController from "./controller/member.controller";
const router = express.Router();

router.get("/", membersController.goHome);

router.get("/login", membersController.getLogin);

router.get("/signup", membersController.getSignup);

export default router;
