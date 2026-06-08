
"use client";
import { useStoreUser } from '@/hooks/use-store-user';
import { SignUpButton ,SignInButton, UserButton, Show } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BarLoader } from 'react-spinners';

const Header = () => {

  const {isLoading}=useStoreUser();
  return (
    <div>
           <header className="fixed top-0 w-full border-b b-white/95 backdrop-blur z-50 supports-[backdrop-filter]:bg-white/60">
           <nav className='container mx-auto px-4 h-16 flex items-center justify-between'>
            <Link href='/' className="flex items-center gap-2">
            <Image
            src={"/logos/finiopay_H_wordmark.png"}
            alt="Finiopay Logo"
            width={250}
            height={60}
            className="h-11 w-auto object-contain"
            />
            </Link>
           {/* <Show when="signed-out">
              <SignInButton />
              <SignUpButton>
                <button className="bg-green-700 text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show> */}
            </nav>

            {isLoading && <BarLoader width={"100%"} color="#36d7b7"/>}
          </header>

    </div>
  )
}

export default Header
