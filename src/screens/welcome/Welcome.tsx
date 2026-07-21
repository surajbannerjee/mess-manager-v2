'use client';

import Link from 'next/link';
import { IMAGES } from '../../app/constants/images';
import Image from 'next/image';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import { useRouter } from 'next/navigation';
import Logo from '@/components/layout/logo';


export default function Welcome() {
  const router = useRouter();
  
  
  return (
    <main
      className="relative flex flex-col h-screen w-full items-start bg-cover bg-no-repeat justify-end overflow-hidden py-10 px-5 backdrop-blur-2xl"
      style={{
        backgroundImage: `url(${IMAGES.BACKGROUND1})`,
      }}
    >
      <div className="flex flex-col justify-end items-start gap-6">
       <Logo className="mb-4 w-25 h-25" />
        <h1 className="text-4xl font-bold text-white">
          Welcome to <span className="text-primary">Mess Manager</span>
        </h1>
        <p className="text-lg text-white">
          Manage meals, expenses, payments, and members—all in one place.
        </p>
        <PrimaryButton onClick={() => router.push("/register")}>
          Get Started
        </PrimaryButton>
        <p>
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
