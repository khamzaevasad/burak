import express from "express";
import restaurantController from "./controller/restaurant.controller";
const router = express.Router();

/** Restaurant */
router.get("/", restaurantController.goHome);
router
  .get("/login", restaurantController.getLogin)
  .post("/login", restaurantController.processLogin);
router
  .get("/signup", restaurantController.getSignup)
  .post("/signup", restaurantController.processSignup);

router.get("/check-me", restaurantController.checkAuthSession);

/** Product */
/** User */

export default router;
