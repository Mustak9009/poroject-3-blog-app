import { NextRequest, NextResponse } from "next/server";
export const revalidate = 0
export const GET = async () => {
  try {
    return NextResponse.json({ ok: "Ok" }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Something going wrong....!!!" },{ status: 500 });
  }
};
