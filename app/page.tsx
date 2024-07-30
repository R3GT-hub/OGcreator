"use client"
import React from 'react';
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 bg-cover bg-center"
      style={{ backgroundImage: 'url(https://wallpaper.forfun.com/fetch/7a/7a335c4d4abc7c628d0470d44c82f76b.jpeg)' }}
    >
      <h1 className="text-4xl font-bold mb-6 text-white">AI Content Generator : OGcreator</h1>
      <p className="text-white mb-4">Your one stop solution for OG content creation</p>
      <a href="/dashboard">
        <Button 
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Dashboard
        </Button>
      </a>
    </div>
  );
}
