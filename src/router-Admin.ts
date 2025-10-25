import express from "express";
import restaurantController from "./controller/restaurant.controller";
import productController from "./controller/product.controller";
const router = express.Router();

/** Restaurant */
router.get("/", restaurantController.goHome);
router
  .get("/login", restaurantController.getLogin)
  .post("/login", restaurantController.processLogin);
router
  .get("/signup", restaurantController.getSignup)
  .post("/signup", restaurantController.processSignup);
router.get("/logout", restaurantController.logout);
router.get("/check-me", restaurantController.checkAuthSession);

/** Product */
router.get(
  "/product/all",
  restaurantController.verifyRestaurant,
  productController.getAllProducts
);
router.post(
  "/product/create",
  restaurantController.verifyRestaurant,
  productController.createNewProduct
);
router.post(
  "/product/:id",
  restaurantController.verifyRestaurant,
  productController.updateChosenProduct
);

/** User */

export default router;
