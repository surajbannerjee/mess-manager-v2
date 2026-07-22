"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import React from "react";
import { useRouter } from 'next/navigation';
import { IMAGES } from "@/app/constants/images";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import Logo from "@/components/layout/logo";
import PasswordInput from "@/components/inputs/PasswordInput";

export default function CreatePasswordPage() {
  const router = useRouter();
    const [loading, setLoading] = React.useState(false);
  return (
    <main
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center px-5"
      style={{
        backgroundImage: `url(${IMAGES.BACKGROUND6})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 w-full rounded-3xl border border-white/15 bg-dark/15 p-6 backdrop-blur-2xl">
        <div className="mb-8 flex flex-col items-center">
        <Logo className="mb-4" />

          <h1 className="text-3xl font-bold text-white">
            Create Password
          </h1>

          <p className="mt-2 text-center leading-6 text-white/70">
            Enter your registered email address.
            We{"'"}ll send you a verification code to create your new password.
          </p>
        </div>

        <div className="space-y-6">
       <PasswordInput

        label="New Password" placeholder="Create password" />

          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm password"
          />

         <PrimaryButton 
          loading={loading}>Set Password</PrimaryButton>
        </div>

      </div>
    </main>
  );
}