import { sendOTP } from "@/lib/mail";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Check user from database
  // if invalid return error

  // Generate OTP
  const otp = Math.floor(100000 + Math.random() * 900000);

  console.log("OTP:", otp);

//   Save OTP in DB with expiry
//   await prisma.oTP.create(...)

//   Send Email
  await sendOTP(email, otp.toString());

  return NextResponse.json({
    success: true,
    message: "OTP sent successfully",
  });
}