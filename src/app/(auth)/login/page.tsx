"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { IMAGES } from "@/app/constants/images";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import TextInput from "@/components/inputs/TextInput";
import PasswordInput from "@/components/inputs/PasswordInput";
import Checkbox from "@/components/inputs/Checkbox";

export default function LoginPage() {
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      // email store for verify page
      sessionStorage.setItem("verifyEmail", email);

      router.push("/verify-otp");
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };



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
          <Image
            src={IMAGES.LOGO}
            alt="Logo"
            width={70}
            height={70}
            className="mb-4 rounded-full"
          />

          <h1 className="text-center text-3xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="mt-2 text-center text-sm text-white/70">
            Sign in to continue managing your mess.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <TextInput
            type="email"
            label="Email Address"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            leftIcon={<Mail size={18} />}
          />

          <PasswordInput 
          label="Password" 
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
           />

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between gap-4">
            <Checkbox
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            >
              Remember me
            </Checkbox>

            <Link
              href="/forgot-password"
              className="text-sm font-medium text-primary hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <PrimaryButton type="submit" loading={loading}>Sign In</PrimaryButton>
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
          className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 text-white transition-all duration-300 hover:bg-white/20"
        >
          <Image src={IMAGES.GOOGLE} alt="Google" width={20} height={20} />
          Continue with Google
        </button>

        {/* Register */}
        <p className="mt-6 text-center text-sm text-white/70">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-primary hover:underline"
          >
            Create Account
          </Link>
        </p>
      </div>
    </main>
  );
}
