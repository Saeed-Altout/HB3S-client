"use client";

import Link from "next/link";
import Image from "next/image";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { routes } from "@/config";

export const Navbar = () => {
  return (
    <header className="sticky top-0 h-16 flex items-center justify-between gap-4 border-b bg-background px-4 md:px-6 z-50">
      <nav className="relative hidden gap-5 md:flex flex-row items-center font-medium ">
        <Logo />
        {routes.map(({ label, href }, index) => (
          <Link
            key={index}
            href={href}
            className="text-muted-foreground hover:text-foreground"
          >
            {label}
          </Link>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="z-[10000]">
          <nav className="grid gap-4 font-medium">
            <Logo />
            {routes.map(({ label, href }, index) => (
              <Link
                key={index}
                href={href}
                className="text-muted-foreground hover:text-foreground"
              >
                {label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      logout
    </header>
  );
};

export const Logo = () => {
  return (
    <Link href="#" className="w-fit">
      <Image src="/logo.png" alt="Logo" width={70} height={50} />
    </Link>
  );
};
