import { NextResponse } from "next/server";

export function middleware(request) {
    // return Response.json({
    //     msg: 'hello there'
    // })
    return NextResponse.redirect(new URL('/', request.url));
    //redirect to home page
}

export const config = {
    matcher: ['/about/:path*', '/tasks/:path*']
    // restrict access to specific resource after about
};