import express from "express";
import restaurantController from "./controller/restaurant.controller";
const router = express.Router();

router.get("/", restaurantController.goHome);

router.get("/login", restaurantController.getLogin);

router.get("/signup", restaurantController.getSignup);

export default router;
