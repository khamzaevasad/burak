import express from "express";
import restaurantController from "./controller/restaurant.controller";
import productController from "./controller/product.controller";
import makeUpLoader from "./libs/utils/uploader";
const router = express.Router();

/** Restaurant */
router.get("/", restaurantController.goHome);
router
  .get("/login", restaurantController.getLogin)
  .post("/login", restaurantController.processLogin);
router
  .get("/signup", restaurantController.getSignup)
  .post(
    "/signup",
    makeUpLoader("members").single("memberImage"),
    restaurantController.processSignup
  );
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
  makeUpLoader("products").array("productImages", 5),
  productController.createNewProduct
);
router.post(
  "/product/:id",
  restaurantController.verifyRestaurant,
  productController.updateChosenProduct
);

/** User */
router.get(
  "/user/all",
  restaurantController.verifyRestaurant,
  restaurantController.getUser
);

export default router;
