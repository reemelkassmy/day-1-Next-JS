"use server"
import { dbConnect } from "@/app/_lib/dbConnection.js";

const { userModel } = require("@/app/_lib/models/user");
dbConnect();
export async function Get(){
    const req =await userModel.find();
    return new Response(JSON.stringify(req));
}