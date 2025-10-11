import { T } from "../libs/types/common";
import { Response, Request } from "express";

const membersController: T = {};

// Home
membersController.goHome = (req: Request, res: Response) => {
  try {
    res.send("Home Page");
  } catch (err) {
    console.log("ERROR goHome", err);
  }
};

// Login
membersController.getLogin = (req: Request, res: Response) => {
  try {
    res.send("Login Page");
  } catch (err) {
    console.log("ERROR getLogin", err);
  }
};

// Signup
membersController.getSignup = (req: Request, res: Response) => {
  try {
    res.send("Signup Page");
  } catch (err) {
    console.log("ERROR getSignup", err);
  }
};

export default membersController;
