"use client"
import React from 'react';
// import { useRouter } from 'next/router';  // Import useRouter
import { Button } from "@/components/ui/button";

export default function Home() {
  // const router = useRouter();  // Initialize useRouter

  // const handleNavigation = () => {
  //   router.push('/dashboard');  // Use router to navigate to /dashboard
  // };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">AI Content Generator : OGcreator</h1>
      <a href="/dashboard"><Button 
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        // onClick={handleNavigation}  // Attach handleNavigation to onClick
      >
        Dashboard
      </Button>
      </a>
    </div>
  );
}
