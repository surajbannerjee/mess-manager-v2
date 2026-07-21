"use client";
  
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { IMAGES } from "@/app/constants/images";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import TextInput from "@/components/inputs/TextInput";
import PasswordInput from "@/components/inputs/PasswordInput";
import Checkbox from "@/components/inputs/Checkbox";
import React from "react";
import { useRouter } from 'next/navigation';
import Logo from "@/components/layout/logo";

export default function LoginPage() {
  const router = useRouter();
  const [rememberMe, setRememberMe] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  
  

  return (
    <main
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat px-5 py-8"
      style={{
        backgroundImage: `url(${IMAGES.BACKGROUND6})`,
      }}
    >
      {/* Card */}
      <div className="relative z-10 w-full rounded-3xl border border-white/15 bg-dark/15 p-6 backdrop-blur-2xl">
        {/* Logo */}
        <div className="mb-8 flex flex-col items-center">
        <Logo className="mb-4" />

          <h1 className="text-center text-3xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="mt-2 text-center text-sm text-white/70">
            Sign in to continue managing your mess.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <TextInput
            type="email"
            label="Email Address"
            placeholder="Enter your email"
           
            leftIcon={<Mail size={18} />}
          />

          <PasswordInput 
          label="Password" 
          placeholder="Enter your password"
         
           />

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between gap-4">
            <Checkbox
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="font-semibold text-white/70"
            >
              Remember me
            </Checkbox>

            <Link
              href="/forgot-password"
              className="text-sm font-semibold text-primary hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <PrimaryButton 
          onClick={() => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              router.push("/dashboard");
            }, 2000);
          }}
          loading={loading}>Sign In</PrimaryButton>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/20" />
          <span className="text-sm text-white/60">OR</span>
          <div className="h-px flex-1 bg-white/20" />
        </div>

        {/* Google Login */}
        <button
          type="button"
          onClick={() => router.push("/verify-otp")}
          className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 text-white transition-all duration-300 hover:bg-white/20"
        >
          <Image src={IMAGES.GOOGLE} alt="Google" width={20} height={20} />
          Continue with Google
        </button>

        {/* Register */}
        <p className="text-center mt-4">
          Don{"'"}t have an account?{" "}
          <Link
            href="/register"
            className="text-primary text-shadow-2xl font-semibold px-1"
          >
            Create Account
          </Link>
        </p>
      </div>
    </main>
  );
}
