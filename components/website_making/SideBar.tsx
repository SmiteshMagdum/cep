"use client";

import { useState } from "react";
import { docs } from "@/lib/docs";
import { Menu, X } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-15 z-50 flex h-10 w-10 items-center justify-center rounded-md border border-line bg-background text-white md:hidden"
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0  z-40 h-screen w-64 bg-background transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0`}
      >
        <div className="flex h-full">
          <div className="mt-12 w-full overflow-y-auto px-6 pb-10 scrollbar-none">
            {docs.map((section) => (
              <div key={section.title} className="mt-8">
                <h2 className="text-[14px] text-white-1">
                  {section.title}
                </h2>

                <div className="mt-2 flex flex-col gap-1">
                  {section.items.map((item) => (
                    <a
                      key={item.slug}
                      href={`#${item.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="rounded-md px-2 py-1 text-[14px] text-gray-1 hover:text-white"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="h-screen w-px shrink-0 bg-line" />
        </div>
      </aside>
    </>
  );
}