import { NextRequest, NextResponse } from "next/server";

export async function GET( request: NextRequest ) {
    const baseUrl = request.nextUrl.clone().origin;
    return NextResponse.redirect(baseUrl);
};