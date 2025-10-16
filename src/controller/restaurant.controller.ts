import { T } from "../libs/types/common";
import { Response, Request } from "express";
import MemberService from "../models/Member.service";

const restaurantController: T = {};

// Home
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    // send | json | redirect | end | render
    res.send("Home Page");
  } catch (err) {
    console.log("ERROR goHome", err);
  }
};

// Login
restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin");
    res.send("Login Page");
  } catch (err) {
    console.log("ERROR getLogin", err);
  }
};

// Signup
restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");
    res.send("Signup Page");
  } catch (err) {
    console.log("ERROR getSignup", err);
  }
};

// Login process
restaurantController.processLogin = (req: Request, res: Response) => {
  try {
    console.log("processLogin");
    res.send("Done");
  } catch (err) {
    console.log("ERROR processLogin", err);
  }
};

// Signup process
restaurantController.processSignup = (req: Request, res: Response) => {
  try {
    console.log("processSignup");
    res.send("Done");
  } catch (err) {
    console.log("ERROR processSignup", err);
  }
};
export default restaurantController;
