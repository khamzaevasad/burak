import { T } from "../libs/types/common";
import { Response, Request } from "express";
import MemberService from "../models/Member.service";

const restaurantController: T = {};

// Home
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    res.send("Home Page");
  } catch (err) {
    console.log("ERROR goHome", err);
  }
};

// Login
restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    res.send("Login Page");
  } catch (err) {
    console.log("ERROR getLogin", err);
  }
};

// Signup
restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    res.send("Signup Page");
  } catch (err) {
    console.log("ERROR getSignup", err);
  }
};

export default restaurantController;
