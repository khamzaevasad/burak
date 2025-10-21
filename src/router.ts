import express from "express";
import membersController from "./controller/member.controller";
const router = express.Router();

router.post("/login", membersController.login);
router.post("/signup", membersController.signup);

export default router;
