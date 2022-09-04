import express from "express";

import authCtrl from "../controller/authCtrls";

import { validRegister } from "../middleware/valid";
const router=express.Router()

router.post("/register",validRegister,authCtrl.register)


export default router;