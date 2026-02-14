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
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
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
          <SheetTitle className="text-center">{brand}</SheetTitle>
        </SheetHeader>

        <Separator />

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
      </SheetContent>
    </Sheet>
  );
}
