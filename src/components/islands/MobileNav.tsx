import * as React from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

export type NavItem = {
  label: string;
  href: string;
};

export type SocialItem = {
  label: string;
  href: string;
};

type MobileNavProps = {
  brand: string;
  items: NavItem[];
  socials: SocialItem[];
};

export default function MobileNav({ brand, items, socials }: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Open menu">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col gap-6">
        <SheetHeader>
          <SheetTitle className="text-left">{brand}</SheetTitle>
          <SheetDescription>Menu navigasi cepat</SheetDescription>
        </SheetHeader>

        <nav className="flex flex-col gap-3 text-sm font-medium">
          {items.map((item) => (
            <SheetClose key={item.href} asChild>
              <a
                href={item.href}
                className="rounded-md px-2 py-2 transition hover:bg-secondary"
              >
                {item.label}
              </a>
            </SheetClose>
          ))}
        </nav>

        <Separator />

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Social
          </p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" className="w-full">
                Akses Sosial
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel>Terhubung</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {socials.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.label}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </SheetContent>
    </Sheet>
  );
}
