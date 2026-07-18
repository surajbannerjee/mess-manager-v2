"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { IMAGES } from "@/app/constants/images";
import OTPInput from "@/components/inputs/OTPInput";
import PrimaryButton from "@/components/buttons/PrimaryButton";

export default function VerifyOTP() {
  const [otp, setOtp] = useState("");

  return (
    <main
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat px-5"
      style={{
        backgroundImage: `url(${IMAGES.BACKGROUND6})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 w-full rounded-3xl border border-white/15 bg-dark/15 p-6 backdrop-blur-2xl">
        <div className="mb-8 flex flex-col items-center">
          <Image
            src={IMAGES.LOGO}
            alt="Logo"
            width={70}
            height={70}
            className="mb-4 rounded-full"
          />

          <h1 className="text-3xl font-bold text-white">Verify OTP</h1>

          <p className="mt-2 text-center text-sm text-white/70">
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
          <p className="text-white/60">Code expires in</p>

          <p className="mt-1 text-xl font-bold text-primary">00:45</p>
        </div>

        <div className="mt-8">
          <PrimaryButton disabled={otp.length !== 6}>Verify OTP</PrimaryButton>
        </div>

        <p className="mt-6 text-center text-sm text-white/70">
          Didn't receive the code?{" "}
          <button className="font-semibold text-primary">Resend OTP</button>
        </p>

        <Link
          href="/login"
          className="mt-6 block text-center text-sm text-white/70 hover:text-primary"
        >
          ← Back to Login
        </Link>
      </div>
    </main>
  );
}