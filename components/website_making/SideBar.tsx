"use client";

import { docs } from "@/lib/docs";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 scrollbar-none h-screen w-64">
      <div className="flex h-full">
        <div className="w-full overflow-y-auto scrollbar-none px-6">
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
                    className="rounded-md px-2 py-1 text-[14px] text-gray-1 hover:text-white"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="h-screen w-[0.2px] shrink-0 bg-line" />
      </div>
    </aside>
  );
}