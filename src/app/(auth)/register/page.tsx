"use client";

import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/app/constants/images";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import TextInput from "@/components/inputs/TextInput";
import PasswordInput from "@/components/inputs/PasswordInput";
import { User, Mail, Phone } from "lucide-react";
import Checkbox from "@/components/inputs/Checkbox";
import { useState } from "react";

export default function RegisterPage() {
  const [agree, setAgree] = useState(false);
  
  return (
    <main
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat px-5 py-8"
      style={{
        backgroundImage: `url(${IMAGES.BACKGROUND3})`,
      }}
    >
      {/* Form Card */}
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
            Create Account
          </h1>

          <p className="mt-2 text-center text-sm text-white/70">
            Join your mess and manage everything in one place.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <TextInput
            label="Full Name"
            placeholder="Enter your full name"
            leftIcon={<User size={18} />}
          />

          <TextInput
            type="email"
            label="Email Address"
            placeholder="Enter your email"
            leftIcon={<Mail size={18} />}
          />

          <TextInput
            label="Phone Number"
            placeholder="9876543210"
            startContent="+91"
            leftIcon={<Phone size={18} />}
          />

          <PasswordInput label="Password" placeholder="Create password" />

          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm password"
          />

          {/* Checkbox */}
          <Checkbox
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          >
            I agree to the{" "}
            <Link href="/terms" className="text-primary-hover font-semibold">
              Terms
            </Link>{" "}
            &{" "}
            <Link
              href="/privacy-policy"
              className="text-primary-hover font-semibold"
            >
              Privacy Policy
            </Link>
          </Checkbox>

          <PrimaryButton disabled={!agree}>Create Account</PrimaryButton>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/20" />
          <span className="text-sm text-white/60">OR</span>
          <div className="h-px flex-1 bg-white/20" />
        </div>

        {/* Google Button */}
        <button
          type="button"
          className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
        >
          <Image src={IMAGES.GOOGLE} alt="Google" width={20} height={20} />
          Continue with Google
        </button>

        {/* Login */}
        <p className="text-center mt-4">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-primary text-shadow-2xl font-semibold px-1"
          >
            Log in here.
          </a>
        </p>
      </div>
    </main>
  );
}
