import { headers } from "next/headers";
import { NextResponse } from "next/server";

export function GET() {
  const list = headers();
  const user_name = list.get("user_name");
  const user_email = list.get("user_email");
  console.log("product api", list);
  return NextResponse.json({ user_email: user_email, user_name: user_name });
}

// user_name
// user_email
