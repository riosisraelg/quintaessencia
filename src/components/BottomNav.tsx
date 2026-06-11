"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 w-full z-50 flex justify-around items-center h-20 bg-primary border-t-4 border-on-surface">
      <Link 
        href="/"
        className={`flex flex-col items-center justify-center p-2 w-1/2 h-full transition-colors ${
          pathname === "/" 
            ? "bg-on-surface text-bone-white" 
            : "text-on-primary hover:bg-on-surface hover:text-bone-white"
        }`}
      >
        <span className="material-symbols-outlined mb-1">home</span>
        <span className="font-label-caps">HOME</span>
      </Link>
      <Link 
        href="/info-tickets"
        className={`flex flex-col items-center justify-center p-2 w-1/2 h-full transition-colors ${
          pathname === "/info-tickets" 
            ? "bg-on-surface text-bone-white" 
            : "text-on-primary hover:bg-on-surface hover:text-bone-white"
        }`}
      >
        <span className="material-symbols-outlined mb-1">local_activity</span>
        <span className="font-label-caps">INFO Y TICKETS</span>
      </Link>
    </nav>
  );
}
