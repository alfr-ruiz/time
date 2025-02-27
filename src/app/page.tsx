'use client';

import React from 'react';
import { supabase } from '../lib/supabaseClient';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <a href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">Alfredo's Timepieces</span>
            </a>
          </div>
          <nav className="flex items-center space-x-4 lg:space-x-6 ml-auto">
            <Button variant="ghost">Collection</Button>
            <Button variant="ghost">About</Button>
            <Button>Contact</Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?q=80&w=2070)' }}>
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="bg-background/80 backdrop-blur-sm p-6 rounded-lg">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Craftsmanship Through Time</h1>
                <p className="mt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover our curated collection of exceptional timepieces that blend traditional craftsmanship with modern design.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button size="lg">View Collection</Button>
                  <Button variant="outline" size="lg">Our Story</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Timepieces</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Each piece in our collection tells a unique story.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((id) => (
                <Card key={id} className="overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=${400 + id * 10}`}
                      alt={`Luxury watch ${id}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Timepiece {id}</CardTitle>
                    <CardDescription>Precision Engineering</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>A masterpiece of mechanical precision and elegant design.</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">View Details</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm text-gray-500 md:text-left">
            2025 Alfredo's Timepieces. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" size="sm">Privacy</Button>
            <Button variant="ghost" size="sm">Terms</Button>
            <Button variant="ghost" size="sm">Contact</Button>
          </div>
        </div>
      </footer>
    </div>
  );
}