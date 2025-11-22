import MemberService from "../models/Member.service";
import { T } from "../libs/types/common";
import { Response, Request } from "express";
import { MemberInput, LoginInput, Member } from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/Errors";
import AuthService from "../models/Auth.service";
import { AUTH_TIMER } from "../libs/config";
const memberService = new MemberService();
const authService = new AuthService();
const membersController: T = {};

// Signup
membersController.signup = async (req: Request, res: Response) => {
  try {
    console.log("signup");
    const input: MemberInput = req.body,
      result: Member = await memberService.signup(input),
      token = await authService.createToken(result);
    res.cookie("accessToken", token, {
      maxAge: AUTH_TIMER * 3600 * 1000,
      httpOnly: false,
    });

    res.status(HttpCode.CREATED).json({ member: result, accessToken: token });
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
    const input: LoginInput = req.body,
      result = await memberService.login(input),
      token = await authService.createToken(result);

    res.cookie("accessToken", token, {
      maxAge: AUTH_TIMER * 3600 * 1000,
      httpOnly: false,
    });

    res.status(HttpCode.OK).json({ member: result, accessToken: token });
  } catch (err) {
    console.log("ERROR login", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

// Verify Auth
membersController.verifyAuth = async (req: Request, res: Response) => {
  let member = null;
  try {
    const token = req.cookies["accessToken"];
    if (token) member = await authService.checkAuth(token);
    if (!member)
      throw new Errors(HttpCode.UNAUTHORIZED, Message.NOT_AUTHENTICATED);
    res.status(HttpCode.OK).json({ member: member });
  } catch (err) {
    console.log("ERROR verifyAuth", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default membersController;
