"use client";

import React from "react";

// Hero Visual Component - Abstract geometric shapes
export function HeroVisual({ variant = "default" }: { variant?: "default" | "fashion" | "food" | "home" | "beauty" | "tech" | "startup" | "growth" | "enterprise" }) {
  const colors = {
    default: { primary: "#E5A400", secondary: "#003822", accent: "#ffffff" },
    fashion: { primary: "#E5A400", secondary: "#003822", accent: "#f8f4f0" },
    food: { primary: "#E5A400", secondary: "#003822", accent: "#f0f8f4" },
    home: { primary: "#E5A400", secondary: "#003822", accent: "#f4f0f8" },
    beauty: { primary: "#E5A400", secondary: "#003822", accent: "#f8f0f4" },
    tech: { primary: "#E5A400", secondary: "#003822", accent: "#f0f4f8" },
    startup: { primary: "#E5A400", secondary: "#003822", accent: "#fff8f0" },
    growth: { primary: "#E5A400", secondary: "#003822", accent: "#f0fff8" },
    enterprise: { primary: "#E5A400", secondary: "#003822", accent: "#f8f8f8" },
  };

  const c = colors[variant];

  return (
    <div className="relative w-full h-full min-h-[300px] md:min-h-[400px]">
      <svg viewBox="0 0 400 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background circle */}
        <circle cx="200" cy="200" r="150" fill={c.secondary} opacity="0.1" />
        
        {/* Main shapes */}
        <rect x="100" y="100" width="120" height="120" rx="20" fill={c.primary} opacity="0.9" />
        <rect x="180" y="180" width="140" height="140" rx="16" fill={c.secondary} opacity="0.8" />
        <circle cx="280" cy="120" r="60" fill={c.primary} opacity="0.6" />
        
        {/* Decorative elements */}
        <circle cx="120" cy="280" r="40" fill={c.secondary} opacity="0.4" />
        <rect x="260" y="260" width="80" height="80" rx="12" fill={c.primary} opacity="0.5" />
        
        {/* Lines */}
        <line x1="50" y1="200" x2="100" y2="200" stroke={c.primary} strokeWidth="4" opacity="0.5" />
        <line x1="300" y1="200" x2="350" y2="200" stroke={c.primary} strokeWidth="4" opacity="0.5" />
      </svg>
    </div>
  );
}

// Feature Card Visual
export function FeatureVisual({ icon: Icon, color = "gold" }: { icon: React.ComponentType<{ className?: string }>; color?: "gold" | "green" | "blue" | "purple" }) {
  const colorClasses = {
    gold: "bg-gold/10 text-gold",
    green: "bg-primary/10 text-primary",
    blue: "bg-blue-500/10 text-blue-500",
    purple: "bg-purple-500/10 text-purple-500",
  };

  return (
    <div className={`w-16 h-16 ${colorClasses[color]} rounded-2xl flex items-center justify-center`}>
      <Icon className="w-8 h-8" />
    </div>
  );
}

// Stats Visual
export function StatsVisual({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center p-6">
      <div className="text-4xl md:text-5xl font-bold text-gold mb-2">{value}</div>
      <p className="text-primary-foreground/60 text-sm md:text-base">{label}</p>
    </div>
  );
}

// Gradient Background
export function GradientBackground({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// Abstract Pattern
export function AbstractPattern({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 opacity-[0.02] pointer-events-none ${className}`}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="2" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
