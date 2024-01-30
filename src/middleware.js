import { NextResponse } from "next/server";

export function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/api/product")) {
    const _reqHeader = new Headers(req.headers);
    const token = _reqHeader.get("token");

    if (token === "120-44") {
      _reqHeader.set("user_name", "Soumik");
      _reqHeader.set("user_email", "sarkarsoumik215@gmail.com");
      return NextResponse.next({
        request: { headers: _reqHeader },
      });
    } else {
      return NextResponse.json({}, { status: 401 });
    }
  }
}
