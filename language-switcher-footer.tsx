// Language Switcher Component for Footer
// components/language-switcher-footer.tsx

"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const languages = [
  { code: "en", name: "English", flag: "🇬🇧", hreflang: "en" },
  { code: "sv", name: "Svenska", flag: "🇸🇪", hreflang: "sv-SE" },
];

export default function LanguageSwitcherFooter() {
  const pathname = usePathname();
  
  // Determine current locale
  const currentLocale = pathname.startsWith("/sv") ? "sv" : "en";

  // Generate href for each language
  const getHref = (locale: string) => {
    if (locale === currentLocale) return pathname;
    
    if (locale === "en") {
      // Remove /sv prefix for English
      return pathname.replace(/^\/sv/, "") || "/";
    } else {
      // Add /sv prefix for Swedish
      return pathname.startsWith("/sv") ? pathname : `/sv${pathname}`;
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-sm text-[#6E6B6B]">Select language:</span>
      <div className="flex items-center gap-2">
        {languages.map((lang) => {
          const isActive = currentLocale === lang.code;
          const href = getHref(lang.code);
          
          return (
            <Link
              key={lang.code}
              href={href}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                isActive
                  ? "bg-[#003822] text-white"
                  : "bg-white text-[#6E6B6B] hover:bg-[#F5F5F5] border border-[#E3E3E3]"
              }`}
              hrefLang={lang.hreflang}
              onClick={() => {
                // Set cookie for preference
                document.cookie = `NEXT_LOCALE=${lang.code}; path=/; max-age=31536000`;
              }}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
