import { NextResponse } from "next/server";

export async function GET() {
  console.log("Cron job executed : ", new Date());
  return NextResponse.json({ name: "Cron job " });
}
