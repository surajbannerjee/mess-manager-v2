"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link"

import { IMAGES } from "@/app/constants/images";
import OTPInput from "@/components/inputs/OTPInput";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { useRouter } from "next/navigation";
import BackButton from "@/components/navigation/BackButton";
import Logo from "@/components/layout/logo";

export default function VerifyOTP() {
const router = useRouter();

const [otp, setOtp] = useState("");
const [timeLeft, setTimeLeft] = useState(45); // 45 seconds

const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
const seconds = String(timeLeft % 60).padStart(2, "0");
useEffect(() => {
  if (timeLeft <= 0) return;

  const timer = setInterval(() => {
    setTimeLeft((prev) => prev - 1);
  }, 1000);

  return () => clearInterval(timer);
}, [timeLeft]);


  return (
    <main
      className="relative flex h-screen items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat px-5"
      style={{
        backgroundImage: `url(${IMAGES.BACKGROUND6})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 w-full rounded-3xl border border-white/15 bg-dark/15 p-6 backdrop-blur-2xl">
     <div className="absolute left-5 top-5">
  <BackButton />
</div>
        <div className="mb-8 flex flex-col items-center">
        <Logo className="mb-4" />

          <h1 className="text-3xl font-bold text-white">Verify OTP</h1>

          <p className="mt-2 text-center font-semibold text-sm text-white/70">
            Enter the verification code sent to
          </p>

          <p className="mt-1 font-semibold text-primary">
            suraj*****@gmail.com
          </p>
        </div>

        <OTPInput
          value={otp}
          onChange={setOtp}
          onComplete={(code) => {
            console.log(code);
          }}
        />

        <div className="mt-8 text-center">
          <p className="font-medium text-white/60">Code expires in</p>

        <p className="mt-1 text-xl font-bold text-primary">
  {minutes}:{seconds}
</p>
        </div>

        <div className="mt-8">
          <PrimaryButton onClick={() => router.push("/forgot-password")} disabled={otp.length !== 4}>Verify OTP</PrimaryButton>
        </div>

        <p className="mt-6 text-center text-white/70">
          Didn{"'"}t receive the code?{" "}
          <button
          disabled={timeLeft > 0}
  onClick={() => {
    // Call Resend OTP API
    setTimeLeft(45);
  }}
  className={`font-semibold ${
    timeLeft > 0
      ? "cursor-not-allowed text-white/40"
      : "text-primary hover:underline"
  }`}>Resend OTP</button>
        </p>

      </div>
    </main>
  );
}