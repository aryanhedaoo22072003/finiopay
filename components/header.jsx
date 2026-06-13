
"use client";
import { useStoreUser } from '@/hooks/use-store-user';
import { SignUpButton ,SignInButton, UserButton, Show } from '@clerk/nextjs';
import { Authenticated, Unauthenticated } from 'convex/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { BarLoader } from 'react-spinners';
import { Button } from './ui/button';
import { LayoutDashboard } from 'lucide-react';

const Header = () => {

  const {isLoading}=useStoreUser();

  const path=usePathname();
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
            {path==='/'&& (
              <div className="hidden md:flex items-center gap-6">
                <Link href='#features'
                className="text-sm font-medium hover:text-purple-600 transition">
                  Features
                </Link>

                <Link href='#how-it-works'
                className="text-sm font-medium hover:text-purple-600 transition">
                  How It Works
                </Link>
              </div>
            )}
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

            <div className="flex items-center gap-4">
              <Authenticated>
                <Link href="/dashboard">
                <Button 
                variant='outline'
                className="hidden md:inline-flex items-center gap-2 hover:text-purple-600
                hover:border-purple-600 transition">
                <LayoutDashboard className="h-4 w-4"/>
                Dashboard
                </Button>

                <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
                  <LayoutDashboard className="h-4 w-4"/>
                </Button>
                </Link>

                <UserButton/>

              </Authenticated>
              <Unauthenticated>
                <SignInButton>
                  <Button variant={'ghost'}>Sign In</Button>
                </SignInButton>

                <SignUpButton>
                  <Button className="bg-purple-600 hover:bg-purple-700 border-2">
                    Get Started
                  </Button>
                </SignUpButton>
              </Unauthenticated>
            </div>
            </nav>

            {isLoading && <BarLoader width={"100%"} color="#36d7b7"/>}
          </header>

    </div>
  )
}

export default Header
