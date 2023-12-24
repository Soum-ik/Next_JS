import dbConnect from "@/utils/dbConnect";
import { NextResponse } from "next/server";
import User from "../../../../models/User";

export async function GET(request) {
  await dbConnect();
  const users = await User.find();
  return new NextResponse(JSON.stringify(users), { status: 200 });
}
