import MemberService from "../models/Member.service";
import { T } from "../libs/types/common";
import { Response, Request } from "express";
import { MemberInput, LoginInput, Member } from "../libs/types/member";
import Errors from "../libs/Errors";
const memberService = new MemberService();
const membersController: T = {};

// Signup
membersController.signup = async (req: Request, res: Response) => {
  try {
    console.log("signup");
    console.log("body", req.body);
    const input: MemberInput = req.body,
      result: Member = await memberService.signup(input);
    //   Todo: Tokens

    res.json({ member: result });
  } catch (err) {
    console.log("ERROR signup", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

// Login
membersController.login = async (req: Request, res: Response) => {
  try {
    console.log("login");
    console.log("body", req.body);
    const input: LoginInput = req.body,
      result = await memberService.login(input);
    //   Todo: Tokens

    res.json({ member: result });
  } catch (err) {
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default membersController;
