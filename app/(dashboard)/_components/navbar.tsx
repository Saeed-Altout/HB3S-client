import { Menu } from "lucide-react";

import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { UserButton } from "@/components/auth/user-button";

export const Navbar = () => {
  return (
    <header className="sticky top-0 h-16 flex items-center justify-between gap-4 border-b bg-background px-4 md:px-6 z-50">
      <nav className=" relative hidden gap-5 md:flex flex-row items-center font-medium ">
        <Logo />
        <Nav />
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
            <Nav />
          </nav>
        </SheetContent>
      </Sheet>
      <UserButton />
    </header>
  );
};
