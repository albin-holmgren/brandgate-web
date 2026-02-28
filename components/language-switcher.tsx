"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Globe, Check } from "lucide-react";

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "sv", name: "Svenska", flag: "🇸🇪" },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  // Determine current locale
  const currentLocale = pathname.startsWith("/sv") ? "sv" : "en";
  const currentLang = languages.find((l) => l.code === currentLocale);

  const switchLanguage = (locale: string) => {
    setIsOpen(false);

    // Set cookie for preference
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;

    // Navigate to new locale
    if (locale === "en") {
      // Remove /sv prefix for English
      const newPath = pathname.replace(/^\/sv/, "") || "/";
      router.push(newPath);
    } else {
      // Add /sv prefix for Swedish
      const newPath = pathname.startsWith("/sv") ? pathname : `/sv${pathname}`;
      router.push(newPath);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
        aria-label="Switch language"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{currentLang?.flag}</span>
        <span className="text-sm hidden sm:inline">{currentLang?.name}</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-200 py-1 z-50">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang.code)}
                className={`w-full flex items-center justify-between px-4 py-2 text-sm hover:bg-slate-50 transition-colors ${
                  currentLocale === lang.code
                    ? "text-blue-600 font-medium"
                    : "text-slate-700"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>{lang.flag}</span>
                  <span>{lang.name}</span>
                </span>
                {currentLocale === lang.code && (
                  <Check className="w-4 h-4" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
