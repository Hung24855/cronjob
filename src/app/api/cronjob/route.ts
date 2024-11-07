import { NextResponse } from "next/server";
export const revalidate = 0;
export async function GET() {
  console.log("Cron job executed : ", new Date());
  return NextResponse.json({ name: "Cron job " });
}
