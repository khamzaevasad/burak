import { T } from "../libs/types/common";
import { Response, Request } from "express";
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const memberService = new MemberService();
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

// Signup
restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");
    res.send("Signup Page");
  } catch (err) {
    console.log("ERROR getSignup", err);
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

// Signup process
restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("processSignup");
    console.log("body", req.body);
    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;
    const result = await memberService.processSignup(newMember);
    //   Todo: Sessions
    res.send(result);
  } catch (err) {
    console.log("ERROR processSignup", err);
    res.send(err);
  }
};

// Login process
restaurantController.processLogin = async (req: Request, res: Response) => {
  try {
    console.log("processLogin");
    console.log("body", req.body);
    const input: LoginInput = req.body;
    const result = await memberService.processLogin(input);
    //   Todo: Sessions
    res.send(result);
  } catch (err) {
    console.log("ERROR processLogin", err);
    res.send(err);
  }
};

export default restaurantController;
