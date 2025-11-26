import express from "express";
import membersController from "./controller/member.controller";
const router = express.Router();

/** Member **/
router.get("/member/restaurant", membersController.getRestaurant);
router.post("/member/login", membersController.login);
router.post("/member/signup", membersController.signup);
router.post(
  "/member/logout",
  membersController.verifyAuth,
  membersController.logout
);
router.get(
  "/member/detail",
  membersController.verifyAuth,
  membersController.getMemberDetail
);

router.get("/member/top-users", membersController.getTopUsers);

/** Product **/

/** Order **/

export default router;
