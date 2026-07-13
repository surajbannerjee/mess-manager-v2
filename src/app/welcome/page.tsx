'use client';

import Link from 'next/link';
import { IMAGES } from '../constants/images';
import Image from 'next/image';
import PrimaryButton from '@/components/buttons/PrimaryButton';




export default function WelcomePage() {
  
  return (
    <main
      className="relative flex flex-col h-screen w-full items-start bg-cover bg-no-repeat justify-end overflow-hidden py-10 px-5 backdrop-blur-2xl"
      style={{
        backgroundImage: `url(${IMAGES.BACKGROUND1})`,
      }}
    >
      <div className="flex flex-col justify-end items-start gap-6">
        <Image
          src={IMAGES.LOGO}
          alt="Logo"
          width={100}
          height={100}
          className="rounded-full w-20 h-20"
        />
        <h1 className="text-4xl font-bold text-white">
          Welcome to <span className="text-primary">Mess Manager</span>
        </h1>
        <p className="text-lg text-white">
          Manage meals, expenses, payments, and members—all in one place.
        </p>
        <PrimaryButton>Sign up</PrimaryButton>
        <p>
          Already have an account?{" "}
          <a href="/login" className="text-primary text-shadow-2xl font-semibold px-1">
            Log in here.
          </a>
        </p>
      </div>
    </main>
  );
}
