import dbConnect from "@/utils/dbConnect";
import { NextResponse } from "next/server";
// import User from "../../../../models/User";

export async function GET(request) {
  const db = await dbConnect();
  return new NextResponse({ massage : "Hello world", data : db});
}
