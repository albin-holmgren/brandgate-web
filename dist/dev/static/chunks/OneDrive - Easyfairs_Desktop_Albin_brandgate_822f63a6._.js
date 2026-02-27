(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript) <export * as Slot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant = "default", size = "default", asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__["Slot"].Root : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        "data-variant": variant,
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/ui/button.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/layout/navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const navLinks = [
    {
        href: "/features",
        label: "Features"
    },
    {
        href: "/pricing",
        label: "Pricing"
    },
    {
        href: "/about",
        label: "About"
    },
    {
        href: "/contact",
        label: "Contact"
    }
];
function Navbar() {
    _s();
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 bg-primary border-b border-primary-foreground/10 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto flex items-center justify-between px-6 h-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/logo-cropped.png",
                            alt: "BrandGate",
                            width: 146,
                            height: 27,
                            className: "h-5 w-auto brightness-0 invert",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/layout/navbar.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/layout/navbar.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden md:flex items-center gap-8",
                        children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: link.href,
                                className: `text-sm font-medium transition-colors hover:text-primary-foreground ${pathname === link.href ? "text-primary-foreground" : "text-primary-foreground/60"}`,
                                children: link.label
                            }, link.href, false, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/layout/navbar.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/layout/navbar.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://app.brandgate.dev/login",
                                className: "text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors",
                                children: "Login"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/layout/navbar.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                asChild: true,
                                size: "sm",
                                className: "bg-gold text-gold-foreground hover:bg-gold/90 rounded-full px-6 font-semibold",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://app.brandgate.dev/signup",
                                    children: "Get Started"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/layout/navbar.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/layout/navbar.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/layout/navbar.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setMobileOpen(!mobileOpen),
                        className: "md:hidden p-2 text-primary-foreground",
                        "aria-label": "Toggle menu",
                        children: mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/layout/navbar.tsx",
                            lineNumber: 62,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/layout/navbar.tsx",
                            lineNumber: 62,
                            columnNumber: 53
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/layout/navbar.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/layout/navbar.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden border-t border-primary-foreground/10 bg-primary px-6 py-4 space-y-3",
                children: [
                    navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: link.href,
                            onClick: ()=>setMobileOpen(false),
                            className: `block py-2 text-sm font-medium ${pathname === link.href ? "text-primary-foreground" : "text-primary-foreground/60"}`,
                            children: link.label
                        }, link.href, false, {
                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/layout/navbar.tsx",
                            lineNumber: 70,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-3 border-t border-primary-foreground/10 flex flex-col gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://app.brandgate.dev/login",
                                onClick: ()=>setMobileOpen(false),
                                className: "text-sm font-medium text-primary-foreground/60",
                                children: "Login"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/layout/navbar.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                asChild: true,
                                size: "sm",
                                className: "w-full bg-gold text-gold-foreground hover:bg-gold/90 rounded-full font-semibold",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://app.brandgate.dev/signup",
                                    onClick: ()=>setMobileOpen(false),
                                    children: "Get Started"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/layout/navbar.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/layout/navbar.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/layout/navbar.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/layout/navbar.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/layout/navbar.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(Navbar, "p69SjiVQe3LlOWLboCZMEWHmVbU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/ui/separator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Separator$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript) <export * as Separator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Separator({ className, orientation = "horizontal", decorative = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Separator$3e$__["Separator"].Root, {
        "data-slot": "separator",
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/ui/separator.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = Separator;
;
var _c;
__turbopack_context__.k.register(_c, "Separator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/motion/fade-in.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FadeIn",
    ()=>FadeIn,
    "ScrollReveal",
    ()=>ScrollReveal,
    "StaggerContainer",
    ()=>StaggerContainer,
    "StaggerItem",
    ()=>StaggerItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function FadeIn({ children, delay = 0, duration = 0.3, direction = "up", className = "" }) {
    const directions = {
        up: {
            y: 16
        },
        down: {
            y: -16
        },
        left: {
            x: 16
        },
        right: {
            x: -16
        },
        none: {}
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            ...directions[direction]
        },
        animate: {
            opacity: 1,
            x: 0,
            y: 0
        },
        transition: {
            duration,
            delay,
            ease: [
                0.25,
                0.1,
                0.25,
                1
            ]
        },
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/motion/fade-in.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = FadeIn;
function ScrollReveal({ children, delay = 0, duration = 0.3, direction = "up", className = "", amount = 0 }) {
    const directions = {
        up: {
            y: 16
        },
        down: {
            y: -16
        },
        left: {
            x: 16
        },
        right: {
            x: -16
        },
        none: {}
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            ...directions[direction]
        },
        whileInView: {
            opacity: 1,
            x: 0,
            y: 0
        },
        viewport: {
            once: true,
            amount
        },
        transition: {
            duration,
            delay,
            ease: [
                0.25,
                0.1,
                0.25,
                1
            ]
        },
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/motion/fade-in.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_c1 = ScrollReveal;
function StaggerContainer({ children, staggerDelay = 0.1, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: "hidden",
        whileInView: "visible",
        viewport: {
            once: true,
            amount: 0
        },
        variants: {
            hidden: {},
            visible: {
                transition: {
                    staggerChildren: staggerDelay
                }
            }
        },
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/motion/fade-in.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_c2 = StaggerContainer;
function StaggerItem({ children, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        variants: {
            hidden: {
                opacity: 0,
                y: 16
            },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.3,
                    ease: [
                        0.25,
                        0.1,
                        0.25,
                        1
                    ]
                }
            }
        },
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/motion/fade-in.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_c3 = StaggerItem;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "FadeIn");
__turbopack_context__.k.register(_c1, "ScrollReveal");
__turbopack_context__.k.register(_c2, "StaggerContainer");
__turbopack_context__.k.register(_c3, "StaggerItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownRight$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/arrow-down-right.js [app-client] (ecmascript) <export default as ArrowDownRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/circle-question-mark.js [app-client] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/store.js [app-client] (ecmascript) <export default as Store>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$euro$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Euro$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/euro.js [app-client] (ecmascript) <export default as Euro>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-client] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileEdit$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/file-pen.js [app-client] (ecmascript) <export default as FileEdit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3X3$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [app-client] (ecmascript) <export default as Grid3X3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tags$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/tags.js [app-client] (ecmascript) <export default as Tags>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/monitor.js [app-client] (ecmascript) <export default as Monitor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-client] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo2$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/undo-2.js [app-client] (ecmascript) <export default as Undo2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/grip-vertical.js [app-client] (ecmascript) <export default as GripVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/megaphone.js [app-client] (ecmascript) <export default as Megaphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/type.js [app-client] (ecmascript) <export default as Type>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/building.js [app-client] (ecmascript) <export default as Building>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature();
"use client";
;
;
/* ══════════════════════════════════════════════
   SHARED DATA — mirrors real pages exactly
   ══════════════════════════════════════════════ */ const stats = [
    {
        label: "Total Orders",
        value: "2,847",
        change: "+12.5%",
        trend: "up",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"],
        period: "vs last month"
    },
    {
        label: "Active Products",
        value: "1,234",
        change: "+3.2%",
        trend: "up",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"],
        period: "vs last month"
    },
    {
        label: "Distributors",
        value: "48",
        change: "+2",
        trend: "up",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        period: "new this month"
    },
    {
        label: "Revenue",
        value: "€847,320",
        change: "-2.1%",
        trend: "down",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
        period: "vs last month"
    }
];
const recentOrders = [
    {
        id: "ORD-4821",
        distributor: "Nordic Distribution AB",
        date: "2026-02-06",
        dueDate: "2026-03-06",
        total: "€12,450",
        vat: "€2,490",
        status: "Processing",
        items: 8
    },
    {
        id: "ORD-4820",
        distributor: "Scandinavia Partners Ltd",
        date: "2026-02-05",
        dueDate: "2026-03-05",
        total: "€8,920",
        vat: "€1,784",
        status: "Shipped",
        items: 5
    },
    {
        id: "ORD-4819",
        distributor: "Baltic Trade Co",
        date: "2026-02-05",
        dueDate: "2026-03-05",
        total: "€15,680",
        vat: "€3,136",
        status: "Delivered",
        items: 12
    },
    {
        id: "ORD-4818",
        distributor: "Central EU Dist GmbH",
        date: "2026-02-04",
        dueDate: "2026-03-04",
        total: "€6,340",
        vat: "€1,268",
        status: "Processing",
        items: 3
    },
    {
        id: "ORD-4817",
        distributor: "Nordic Distribution AB",
        date: "2026-02-04",
        dueDate: "2026-03-04",
        total: "€22,100",
        vat: "€4,420",
        status: "Delivered",
        items: 15
    }
];
const activityFeed = [
    {
        time: "10 min ago",
        text: "New order ORD-4821 received from Nordic Distribution AB",
        type: "order"
    },
    {
        time: "1 hour ago",
        text: "Product PRD-006 marked as Low Stock (28 units)",
        type: "stock"
    },
    {
        time: "2 hours ago",
        text: "Invoice INV-2401 marked as Paid",
        type: "payment"
    },
    {
        time: "3 hours ago",
        text: "New distributor West Coast Wholesale invited",
        type: "distributor"
    },
    {
        time: "5 hours ago",
        text: "Order ORD-4820 shipped via DHL Express",
        type: "shipping"
    }
];
const orderStatusColor = {
    Processing: "bg-warning/10 text-warning",
    Shipped: "bg-primary/10 text-primary",
    Delivered: "bg-success/10 text-success",
    Cancelled: "bg-destructive/10 text-destructive"
};
const productStatusColor = {
    Active: "bg-success/10 text-success",
    "Out of Stock": "bg-destructive/10 text-destructive",
    "Low Stock": "bg-warning/10 text-warning"
};
const invoiceStatusColor = {
    Paid: "bg-success/10 text-success",
    Pending: "bg-warning/10 text-warning",
    Overdue: "bg-destructive/10 text-destructive"
};
const distStatusColor = {
    Active: "bg-success/10 text-success",
    Pending: "bg-warning/10 text-warning",
    Inactive: "bg-muted text-muted-foreground"
};
const activityDotColor = {
    order: "bg-primary",
    stock: "bg-warning",
    payment: "bg-success",
    distributor: "bg-accent",
    shipping: "bg-primary"
};
const sidebarItems = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"],
        label: "Dashboard",
        view: "dashboard"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"],
        label: "Online Store",
        view: "store"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"],
        label: "Orders",
        view: "orders"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"],
        label: "Products",
        view: "products"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        label: "Distributors",
        view: "distributors"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
        label: "Invoices",
        view: "invoices"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
        label: "Reports",
        view: "reports"
    }
];
const urlMap = {
    dashboard: "app.brandgate.com/dashboard",
    store: "app.brandgate.com/store-editor",
    orders: "app.brandgate.com/orders",
    products: "app.brandgate.com/products",
    distributors: "app.brandgate.com/distributors",
    invoices: "app.brandgate.com/invoices",
    reports: "app.brandgate.com/reports",
    settings: "app.brandgate.com/settings"
};
/* ══════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════ */ const DemoDashboard = ()=>{
    _s();
    const [activeView, setActiveView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dashboard");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-secondary rounded-2xl border border-border shadow-2xl overflow-hidden select-none",
        style: {
            fontSize: "11px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-muted px-4 py-2.5 flex items-center gap-3 border-b border-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2.5 h-2.5 rounded-full bg-destructive/40"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2.5 h-2.5 rounded-full bg-warning/40"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2.5 h-2.5 rounded-full bg-success/40"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 bg-card rounded-md px-3 py-1 text-[10px] text-muted-foreground text-center",
                        children: urlMap[activeView]
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex",
                style: {
                    height: "520px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex w-[160px] bg-primary text-primary-foreground flex-col shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-4 border-b border-primary-foreground/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-bold text-[12px] tracking-tight",
                                        children: "BrandGate"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[9px] text-primary-foreground/40 mt-0.5",
                                        children: "Distribution Platform"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 166,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "flex-1 py-2 px-2 space-y-0.5 overflow-auto",
                                children: sidebarItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveView(item.view),
                                        className: `w-full flex items-center gap-2 px-2.5 py-2 rounded-md text-[10px] transition-colors group ${activeView === item.view ? "bg-accent text-accent-foreground font-medium" : "text-primary-foreground/50 hover:bg-accent/50 hover:text-primary-foreground/80"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                className: "w-3 h-3 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 179,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex-1 text-left",
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 180,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                className: "w-2.5 h-2.5 opacity-0 group-hover:opacity-40 transition-opacity"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 181,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, item.label, true, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 170,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-primary-foreground/10 p-3 space-y-0.5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveView("settings"),
                                    className: `w-full flex items-center gap-2 px-2.5 py-2 rounded-md text-[10px] transition-colors ${activeView === "settings" ? "bg-accent text-accent-foreground font-medium" : "text-primary-foreground/50 hover:bg-accent/50 hover:text-primary-foreground/80"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                            lineNumber: 192,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Settings"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-primary-foreground/10 px-4 py-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[9px] font-medium truncate",
                                        children: "Admin User"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[8px] text-primary-foreground/40 truncate",
                                        children: "Acme Brands AB"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-10 bg-card border-b border-border flex items-center justify-between px-4 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex md:hidden items-center gap-1 overflow-x-auto",
                                        children: sidebarItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveView(item.view),
                                                className: `px-2 py-1 rounded text-[8px] font-medium transition-colors whitespace-nowrap ${activeView === item.view ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary"}`,
                                                children: item.label
                                            }, item.label, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 208,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 206,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden md:block relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 215,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pl-7 pr-3 py-1 rounded-md border border-input bg-secondary text-[10px] text-muted-foreground w-48",
                                                children: "Search orders, products..."
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 216,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 214,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                                                className: "w-3 h-3 text-muted-foreground hidden md:block"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 219,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                                        className: "w-3 h-3 text-muted-foreground"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-destructive"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 220,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ml-1 pl-2 border-l border-border hidden sm:block",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-medium text-foreground",
                                                    children: "Acme Brands AB"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 224,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 218,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 p-4 overflow-y-auto",
                                children: [
                                    activeView === "dashboard" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ViewDashboard, {}, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 232,
                                        columnNumber: 44
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    activeView === "store" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ViewStoreEditor, {}, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 233,
                                        columnNumber: 40
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    activeView === "orders" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ViewOrders, {}, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 234,
                                        columnNumber: 41
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    activeView === "products" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ViewProducts, {}, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 235,
                                        columnNumber: 43
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    activeView === "distributors" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ViewDistributors, {}, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 236,
                                        columnNumber: 47
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    activeView === "invoices" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ViewInvoices, {}, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 237,
                                        columnNumber: 43
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    activeView === "reports" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ViewReports, {}, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 238,
                                        columnNumber: 42
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    activeView === "settings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ViewSettings, {}, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 239,
                                        columnNumber: 43
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 231,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
        lineNumber: 148,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DemoDashboard, "XwNR4FjxKHPH8zHpNRRjAqfD2l4=");
_c = DemoDashboard;
/* ══════════════════════════════════════════════
   VIEW: Dashboard  (mirrors DashboardPage.tsx)
   ══════════════════════════════════════════════ */ const ViewDashboard = ()=>{
    _s1();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("overview");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-card rounded-lg border border-border px-4 py-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] font-semibold text-foreground",
                                    children: "Welcome back, Admin"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1 mt-0.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                                            className: "w-2.5 h-2.5 text-muted-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                            lineNumber: 260,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[9px] text-muted-foreground",
                                            children: "Monday, February 17, 2026"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                            lineNumber: 261,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 259,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[8px] text-muted-foreground mt-0.5",
                                    children: "Acme Brands AB"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 263,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                            lineNumber: 257,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center gap-1",
                            children: [
                                {
                                    label: "New Order",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"]
                                },
                                {
                                    label: "Add Product",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"]
                                },
                                {
                                    label: "Invite",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"]
                                }
                            ].map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "inline-flex items-center gap-1 px-2 py-1 rounded border border-input text-[8px] font-medium text-foreground hover:bg-secondary transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(a.icon, {
                                            className: "w-2.5 h-2.5"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                            lineNumber: 268,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        a.label
                                    ]
                                }, a.label, true, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 267,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                            lineNumber: 265,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                    lineNumber: 256,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 255,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniTabs, {
                tabs: [
                    {
                        key: "overview",
                        label: "Overview"
                    },
                    {
                        key: "activity",
                        label: "Activity Log"
                    }
                ],
                active: tab,
                onChange: (t)=>setTab(t)
            }, void 0, false, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 276,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            tab === "overview" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-2",
                        children: stats.map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-card rounded-lg border border-border p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[8px] font-medium text-muted-foreground uppercase tracking-wider",
                                                        children: stat.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                        lineNumber: 286,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[14px] font-bold text-foreground mt-1",
                                                        children: stat.value
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                        lineNumber: 287,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 285,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-1 rounded bg-primary/10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(stat.icon, {
                                                    className: "w-2.5 h-2.5 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 62
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 289,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 284,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 mt-1.5",
                                        children: [
                                            stat.trend === "up" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                className: "w-2.5 h-2.5 text-success"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 292,
                                                columnNumber: 42
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownRight$3e$__["ArrowDownRight"], {
                                                className: "w-2.5 h-2.5 text-destructive"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 292,
                                                columnNumber: 98
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-[8px] font-medium ${stat.trend === "up" ? "text-success" : "text-destructive"}`,
                                                children: stat.change
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 293,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[8px] text-muted-foreground",
                                                children: stat.period
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 294,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 291,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, stat.label, true, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 283,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 281,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-2 bg-card rounded-lg border border-border",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-3 py-2.5 border-b border-border flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-semibold text-foreground",
                                                        children: "Recent Orders"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                        lineNumber: 305,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[8px] text-muted-foreground",
                                                        children: "Latest orders from your distributors"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                        lineNumber: 306,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 304,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1 text-[8px] text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                        className: "w-2.5 h-2.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                        lineNumber: 308,
                                                        columnNumber: 91
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Updated just now"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                        lineNumber: 308,
                                                        columnNumber: 124
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 308,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 303,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniTable, {
                                        headers: [
                                            "Order ID",
                                            "Distributor",
                                            "Date",
                                            "Amount",
                                            "Status"
                                        ],
                                        children: recentOrders.slice(0, 4).map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniRow, {
                                                cols: 5,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-medium text-primary",
                                                        children: o.id
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                        lineNumber: 313,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] text-foreground truncate",
                                                        children: o.distributor
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                        lineNumber: 314,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] text-muted-foreground",
                                                        children: o.date
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                        lineNumber: 315,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-medium text-foreground",
                                                        children: o.total
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                        lineNumber: 316,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                                                        status: o.status,
                                                        map: orderStatusColor
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                        lineNumber: 317,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, o.id, true, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 312,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 310,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 302,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-card rounded-lg border border-border",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-3 py-2.5 border-b border-border flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                className: "w-3 h-3 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 324,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] font-semibold text-foreground",
                                                children: "Activity Feed"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 325,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 323,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 space-y-3",
                                        children: activityFeed.slice(0, 5).map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `w-1.5 h-1.5 rounded-full mt-1 shrink-0 ${activityDotColor[item.type] ?? "bg-muted"}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                        lineNumber: 330,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[9px] text-foreground leading-relaxed",
                                                                children: item.text
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                                lineNumber: 332,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[8px] text-muted-foreground mt-0.5",
                                                                children: item.time
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                                lineNumber: 333,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                        lineNumber: 331,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 329,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 327,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 322,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 301,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true),
            tab === "activity" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-card rounded-lg border border-border p-3 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] font-semibold text-foreground",
                        children: "Full Activity Log"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 345,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    activityFeed.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-5 h-5 rounded flex items-center justify-center shrink-0 ${activityDotColor[item.type] ? activityDotColor[item.type].replace("bg-", "bg-") + "/10" : "bg-muted"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                        className: "w-2.5 h-2.5 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 349,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 348,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[9px] text-foreground",
                                            children: item.text
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                            lineNumber: 352,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[8px] text-muted-foreground",
                                            children: item.time
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                            lineNumber: 353,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 351,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, i, true, {
                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                            lineNumber: 347,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 344,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
        lineNumber: 253,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(ViewDashboard, "fwSif3bMdUCo7vIvmW1ohX/mXTY=");
_c1 = ViewDashboard;
/* ══════════════════════════════════════════════
   VIEW: Store Editor (mirrors StoreEditorPage.tsx)
   3-panel layout: section list | preview | settings
   ══════════════════════════════════════════════ */ const storeSections = [
    {
        id: "hero",
        type: "Hero Banner",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"],
        visible: true,
        heading: "Welcome to Our B2B Store"
    },
    {
        id: "cats",
        type: "Product Categories",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3X3$3e$__["Grid3X3"],
        visible: true,
        heading: "Shop by Category"
    },
    {
        id: "feat",
        type: "Featured Products",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"],
        visible: true,
        heading: "Featured Products"
    },
    {
        id: "banner",
        type: "Promotional Banner",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"],
        visible: true,
        heading: "Bulk Order Discounts"
    },
    {
        id: "text",
        type: "Text with Image",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__["Type"],
        visible: true,
        heading: "Why Choose Us"
    },
    {
        id: "news",
        type: "Newsletter Signup",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
        visible: false,
        heading: "Stay Updated"
    }
];
const ViewStoreEditor = ()=>{
    _s2();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("hero");
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("desktop");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "-m-4 flex flex-col",
        style: {
            height: "calc(100% + 2rem)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-8 bg-card border-b border-border flex items-center justify-between px-3 shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[9px] font-semibold text-foreground",
                                children: "Store Editor"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 385,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[8px] text-muted-foreground",
                                children: "|"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 386,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[8px] text-muted-foreground",
                                children: "Online Store"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 387,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[8px] text-warning font-medium",
                                children: "• Unsaved changes"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 388,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 384,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center bg-secondary rounded p-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setViewMode("desktop"),
                                        className: `p-0.5 rounded transition-colors ${viewMode === "desktop" ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"], {
                                            className: "w-2.5 h-2.5"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                            lineNumber: 393,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 392,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setViewMode("mobile"),
                                        className: `p-0.5 rounded transition-colors ${viewMode === "mobile" ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
                                            className: "w-2.5 h-2.5"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                            lineNumber: 396,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 395,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 391,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "p-1 rounded text-muted-foreground hover:text-foreground transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                    className: "w-2.5 h-2.5"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 399,
                                    columnNumber: 105
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 399,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "p-1 rounded text-muted-foreground hover:text-foreground transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo2$3e$__["Undo2"], {
                                    className: "w-2.5 h-2.5"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 400,
                                    columnNumber: 105
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 400,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "inline-flex items-center gap-1 px-2 py-1 rounded bg-primary text-primary-foreground text-[8px] font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                        className: "w-2.5 h-2.5"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 402,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Save"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 401,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 390,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 383,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[120px] bg-card border-r border-border flex flex-col shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-2 py-2 border-b border-border",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[9px] font-semibold text-foreground",
                                        children: "Sections"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 412,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[7px] text-muted-foreground",
                                        children: "Drag to reorder"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 413,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 411,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto py-1 px-1 space-y-0.5",
                                children: storeSections.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSelected(s.id),
                                        className: `w-full flex items-center gap-1.5 px-1.5 py-1.5 rounded text-left transition-colors ${selected === s.id ? "bg-primary/10 border border-primary/20" : "hover:bg-secondary border border-transparent"} ${!s.visible ? "opacity-50" : ""}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__["GripVertical"], {
                                                className: "w-2 h-2 text-muted-foreground/50 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 421,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-1 rounded bg-secondary shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(s.icon, {
                                                    className: "w-2 h-2 text-muted-foreground"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                    lineNumber: 422,
                                                    columnNumber: 68
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 422,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[8px] font-medium text-foreground truncate",
                                                        children: s.type
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                        lineNumber: 424,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[7px] text-muted-foreground truncate",
                                                        children: s.heading
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                        lineNumber: 425,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 423,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            s.visible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                className: "w-2 h-2 text-muted-foreground/40 shrink-0 ml-auto"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 427,
                                                columnNumber: 31
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, s.id, true, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 417,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 415,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-1.5 border-t border-border",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-full flex items-center justify-center gap-1 px-2 py-1.5 rounded border border-dashed border-border text-[8px] text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "w-2.5 h-2.5"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                            lineNumber: 433,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Add section"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 432,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 431,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 410,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 bg-secondary overflow-y-auto flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${viewMode === "mobile" ? "w-[140px] mx-auto border-x border-border" : "w-full"} max-w-[280px]`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "py-2 px-2 space-y-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-card rounded-t border border-border px-3 py-1.5 flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[8px] font-bold text-foreground",
                                                children: "Your Store"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 444,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-[7px] text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Products"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                        lineNumber: 446,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Categories"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                        lineNumber: 446,
                                                        columnNumber: 40
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "About"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                        lineNumber: 446,
                                                        columnNumber: 63
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 445,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 443,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `bg-primary/90 px-4 py-8 text-center border-x border-border ${selected === "hero" ? "ring-1 ring-primary ring-inset" : ""}`,
                                        onClick: ()=>setSelected("hero"),
                                        children: [
                                            selected === "hero" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[7px] bg-primary text-primary-foreground px-1 py-0.5 rounded absolute",
                                                children: "Editing"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 451,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] font-bold text-primary-foreground",
                                                children: "Welcome to Our B2B Store"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 452,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[8px] text-primary-foreground/70 mt-1",
                                                children: "Quality industrial supplies"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 453,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "mt-2 px-2 py-1 rounded bg-card text-foreground text-[8px] font-medium",
                                                children: "Browse Products"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 454,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 450,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `bg-card px-3 py-4 border-x border-border ${selected === "cats" ? "ring-1 ring-primary ring-inset" : ""}`,
                                        onClick: ()=>setSelected("cats"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[9px] font-semibold text-foreground",
                                                children: "Shop by Category"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 458,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-3 gap-1 mt-2",
                                                children: [
                                                    "Bearings",
                                                    "Pumps",
                                                    "Connectors"
                                                ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-secondary rounded p-1.5 text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center mx-auto",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3X3$3e$__["Grid3X3"], {
                                                                    className: "w-2 h-2 text-primary"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                                    lineNumber: 462,
                                                                    columnNumber: 116
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                                lineNumber: 462,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[7px] text-foreground mt-1",
                                                                children: c
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                                lineNumber: 463,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, c, true, {
                                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                        lineNumber: 461,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 459,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 457,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `bg-card px-3 py-4 border-x border-border ${selected === "feat" ? "ring-1 ring-primary ring-inset" : ""}`,
                                        onClick: ()=>setSelected("feat"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[9px] font-semibold text-foreground",
                                                children: "Featured Products"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 470,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-4 gap-1 mt-2",
                                                children: [
                                                    1,
                                                    2,
                                                    3,
                                                    4
                                                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-secondary rounded overflow-hidden",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-6 bg-muted flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                                    className: "w-3 h-3 text-muted-foreground/30"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                                    lineNumber: 474,
                                                                    columnNumber: 86
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                                lineNumber: 474,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[7px] text-foreground",
                                                                        children: [
                                                                            "Product ",
                                                                            i
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                                        lineNumber: 475,
                                                                        columnNumber: 44
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[7px] font-semibold text-primary",
                                                                        children: [
                                                                            "€",
                                                                            99 + i * 47
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                                        lineNumber: 475,
                                                                        columnNumber: 101
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                                lineNumber: 475,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                        lineNumber: 473,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 471,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 469,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `bg-primary px-3 py-3 border-x border-border ${selected === "banner" ? "ring-1 ring-card ring-inset" : ""}`,
                                        onClick: ()=>setSelected("banner"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[9px] font-semibold text-primary-foreground",
                                                children: "Bulk Order Discounts"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 482,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[7px] text-primary-foreground/70 mt-0.5",
                                                children: "Save up to 25% on orders over €5,000"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 483,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 481,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-card rounded-b border border-border px-3 py-2 flex items-center justify-between text-[7px] text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "© 2026 Your Store"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 487,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Privacy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                        lineNumber: 488,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Terms"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                        lineNumber: 488,
                                                        columnNumber: 65
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 488,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 486,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 441,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                            lineNumber: 440,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 439,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[110px] bg-card border-l border-border shrink-0 hidden md:flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-2 py-2 border-b border-border",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[9px] font-semibold text-foreground",
                                        children: storeSections.find((s)=>s.id === selected)?.type
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 497,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[7px] text-muted-foreground",
                                        children: "Edit settings"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 498,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 496,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 space-y-2 overflow-y-auto flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniField, {
                                        label: "Heading",
                                        value: storeSections.find((s)=>s.id === selected)?.heading ?? ""
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 501,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniField, {
                                        label: "Subheading",
                                        value: "Quality industrial supplies"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 502,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniField, {
                                        label: "Button Text",
                                        value: "Browse Products"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 503,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[7px] font-medium text-muted-foreground",
                                                children: "Alignment"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 505,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-0.5",
                                                children: [
                                                    "Left",
                                                    "Center",
                                                    "Right"
                                                ].map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: `flex-1 px-1 py-0.5 rounded text-[7px] ${a === "Center" ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`,
                                                        children: a
                                                    }, a, false, {
                                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                        lineNumber: 508,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 506,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 504,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 500,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 495,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 408,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
        lineNumber: 381,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s2(ViewStoreEditor, "nGxgIFgfuUMhYbGwDR/+Wnd88Uc=");
_c2 = ViewStoreEditor;
/* ══════════════════════════════════════════════
   VIEW: Orders (mirrors OrdersPage.tsx)
   ══════════════════════════════════════════════ */ const ViewOrders = ()=>{
    _s3();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHeader, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"],
                        title: "Orders",
                        subtitle: "Manage and track all distributor orders"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 528,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniBtn, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"],
                        label: "Create Order",
                        primary: true
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 529,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 527,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-4 gap-2",
                children: [
                    {
                        label: "Processing",
                        count: 3,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"],
                        color: "text-warning bg-warning/10"
                    },
                    {
                        label: "Shipped",
                        count: 2,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"],
                        color: "text-primary bg-primary/10"
                    },
                    {
                        label: "Delivered",
                        count: 3,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"],
                        color: "text-success bg-success/10"
                    },
                    {
                        label: "Cancelled",
                        count: 0,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"],
                        color: "text-destructive bg-destructive/10"
                    }
                ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-card rounded-lg border border-border px-3 py-2 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-1 rounded ${s.color}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(s.icon, {
                                    className: "w-2.5 h-2.5"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 541,
                                    columnNumber: 55
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 541,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[12px] font-bold text-foreground",
                                        children: s.count
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 543,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[8px] text-muted-foreground",
                                        children: s.label
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 544,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 542,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, s.label, true, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 540,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 533,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniTabs, {
                tabs: [
                    {
                        key: "all",
                        label: "All Orders",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"]
                    },
                    {
                        key: "drafts",
                        label: "Draft Orders",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileEdit$3e$__["FileEdit"]
                    },
                    {
                        key: "returns",
                        label: "Returns",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"]
                    }
                ],
                active: tab,
                onChange: (t)=>setTab(t)
            }, void 0, false, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 550,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            tab === "all" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    "All",
                                    "Processing",
                                    "Shipped",
                                    "Delivered"
                                ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setFilter(f),
                                        className: `px-1.5 py-0.5 rounded text-[8px] font-medium transition-colors ${filter === f ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground hover:bg-secondary"}`,
                                        children: f
                                    }, f, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 557,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 555,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                        className: "w-2.5 h-2.5 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 561,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        className: "w-2.5 h-2.5 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 562,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 560,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 554,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-card rounded-lg border border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniTable, {
                                headers: [
                                    "Order ID",
                                    "Distributor",
                                    "Items",
                                    "Date",
                                    "Total",
                                    "VAT",
                                    "Status"
                                ],
                                children: recentOrders.filter((o)=>filter === "All" || o.status === filter).map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniRow, {
                                        cols: 7,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] font-medium text-primary",
                                                children: o.id
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 569,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] text-foreground truncate",
                                                children: o.distributor
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 570,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] text-muted-foreground",
                                                children: o.items
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 571,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] text-muted-foreground",
                                                children: o.date
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 572,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] font-medium text-foreground",
                                                children: o.total
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 573,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] text-muted-foreground",
                                                children: o.vat
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 574,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                                                status: o.status,
                                                map: orderStatusColor
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 575,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, o.id, true, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 568,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 566,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between px-3 py-1.5 border-t border-border",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[8px] text-muted-foreground",
                                        children: [
                                            "Showing ",
                                            recentOrders.filter((o)=>filter === "All" || o.status === filter).length,
                                            " orders"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 580,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center justify-center w-4 h-4 rounded bg-primary text-primary-foreground text-[8px] font-medium",
                                        children: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 581,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 579,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 565,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true),
            tab === "drafts" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-card rounded-lg border border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniTable, {
                    headers: [
                        "Draft ID",
                        "Distributor",
                        "Created",
                        "Items",
                        "Total"
                    ],
                    children: [
                        {
                            id: "DRF-0012",
                            dist: "Nordic Distribution AB",
                            date: "2026-02-06",
                            items: 4,
                            total: "€3,200"
                        },
                        {
                            id: "DRF-0011",
                            dist: "Baltic Trade Co",
                            date: "2026-02-04",
                            items: 6,
                            total: "€7,800"
                        }
                    ].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniRow, {
                            cols: 5,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] font-medium text-primary",
                                    children: d.id
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 595,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-foreground truncate",
                                    children: d.dist
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 596,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-muted-foreground",
                                    children: d.date
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 597,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-muted-foreground",
                                    children: d.items
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 598,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] font-medium text-foreground",
                                    children: d.total
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 599,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, d.id, true, {
                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                            lineNumber: 594,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                    lineNumber: 589,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 588,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            tab === "returns" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-card rounded-lg border border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniTable, {
                    headers: [
                        "Return",
                        "Order",
                        "Distributor",
                        "Amount",
                        "Status"
                    ],
                    children: [
                        {
                            id: "RET-0045",
                            order: "ORD-4810",
                            dist: "Central EU Dist",
                            amount: "€1,240",
                            status: "Approved"
                        },
                        {
                            id: "RET-0044",
                            order: "ORD-4805",
                            dist: "Nordic Distribution",
                            amount: "€560",
                            status: "Pending"
                        }
                    ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniRow, {
                            cols: 5,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] font-medium text-primary",
                                    children: r.id
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 614,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-muted-foreground",
                                    children: r.order
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 615,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-foreground truncate",
                                    children: r.dist
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 616,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] font-medium text-foreground",
                                    children: r.amount
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 617,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                                    status: r.status,
                                    map: {
                                        Approved: "bg-success/10 text-success",
                                        Pending: "bg-warning/10 text-warning",
                                        Refunded: "bg-primary/10 text-primary"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 618,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, r.id, true, {
                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                            lineNumber: 613,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                    lineNumber: 608,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 607,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
        lineNumber: 526,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s3(ViewOrders, "eJ4YU2CtEi9xIL8JK8ciQ2BO/UY=");
_c3 = ViewOrders;
/* ══════════════════════════════════════════════
   VIEW: Products (mirrors ProductsPage.tsx)
   ══════════════════════════════════════════════ */ const products = [
    {
        sku: "PRD-001",
        name: "Industrial Bearing Set A",
        category: "Bearings",
        price: "€245.00",
        stock: 1240,
        status: "Active"
    },
    {
        sku: "PRD-002",
        name: "Hydraulic Pump HP-500",
        category: "Pumps",
        price: "€1,890.00",
        stock: 85,
        status: "Active"
    },
    {
        sku: "PRD-003",
        name: "Steel Connector Kit B12",
        category: "Connectors",
        price: "€78.50",
        stock: 3200,
        status: "Active"
    },
    {
        sku: "PRD-004",
        name: "Precision Valve V-200",
        category: "Valves",
        price: "€435.00",
        stock: 420,
        status: "Active"
    },
    {
        sku: "PRD-005",
        name: "Rubber Gasket Set C",
        category: "Gaskets",
        price: "€32.00",
        stock: 0,
        status: "Out of Stock"
    },
    {
        sku: "PRD-006",
        name: "Motor Assembly MA-750",
        category: "Motors",
        price: "€2,340.00",
        stock: 28,
        status: "Low Stock"
    }
];
const ViewProducts = ()=>{
    _s4();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHeader, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"],
                        title: "Products",
                        subtitle: "Manage your product catalog"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 645,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniBtn, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"],
                        label: "Add Product",
                        primary: true
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 646,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 644,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-4 gap-2",
                children: [
                    {
                        label: "Total SKUs",
                        value: products.length,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"]
                    },
                    {
                        label: "Active",
                        value: products.filter((p)=>p.status === "Active").length,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"]
                    },
                    {
                        label: "Low Stock",
                        value: 1,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"]
                    },
                    {
                        label: "Out of Stock",
                        value: 1,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"]
                    }
                ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-card rounded-lg border border-border px-3 py-2 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-1 rounded bg-primary/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(s.icon, {
                                    className: "w-2.5 h-2.5 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 656,
                                    columnNumber: 56
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 656,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[12px] font-bold text-foreground",
                                        children: s.value
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 658,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[8px] text-muted-foreground",
                                        children: s.label
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 659,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 657,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, s.label, true, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 655,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 648,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniTabs, {
                tabs: [
                    {
                        key: "all",
                        label: "All Products",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"]
                    },
                    {
                        key: "categories",
                        label: "Categories",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3X3$3e$__["Grid3X3"]
                    },
                    {
                        key: "pricelists",
                        label: "Price Lists",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tags$3e$__["Tags"]
                    }
                ],
                active: tab,
                onChange: (t)=>setTab(t)
            }, void 0, false, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 665,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            tab === "all" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-card rounded-lg border border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniTable, {
                    headers: [
                        "SKU",
                        "Product Name",
                        "Category",
                        "Price",
                        "Stock",
                        "Status"
                    ],
                    children: products.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniRow, {
                            cols: 6,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] font-medium text-primary",
                                    children: p.sku
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 672,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-foreground truncate",
                                    children: p.name
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 673,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-muted-foreground",
                                    children: p.category
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 674,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] font-medium text-foreground",
                                    children: p.price
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 675,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-[10px] font-medium ${p.stock === 0 ? "text-destructive" : p.stock < 50 ? "text-warning" : "text-foreground"}`,
                                    children: p.stock.toLocaleString()
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 676,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                                    status: p.status,
                                    map: productStatusColor
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 677,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, p.sku, true, {
                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                            lineNumber: 671,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                    lineNumber: 669,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 668,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            tab === "categories" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 gap-2",
                children: [
                    {
                        name: "Bearings",
                        icon: "⚙️",
                        count: 1
                    },
                    {
                        name: "Pumps",
                        icon: "🔧",
                        count: 1
                    },
                    {
                        name: "Connectors",
                        icon: "🔗",
                        count: 1
                    },
                    {
                        name: "Valves",
                        icon: "🔩",
                        count: 1
                    },
                    {
                        name: "Motors",
                        icon: "⚡",
                        count: 1
                    },
                    {
                        name: "Filters",
                        icon: "🔍",
                        count: 1
                    }
                ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-card rounded-lg border border-border p-3 hover:shadow-sm transition-shadow cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[14px]",
                                children: c.icon
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 695,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[9px] font-semibold text-foreground mt-1",
                                children: c.name
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 696,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[7px] text-muted-foreground",
                                children: [
                                    c.count,
                                    " product"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 697,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, c.name, true, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 694,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 685,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            tab === "pricelists" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-card rounded-lg border border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniTable, {
                    headers: [
                        "Price List",
                        "Distributors",
                        "Products",
                        "Status"
                    ],
                    children: [
                        {
                            name: "Q1 2026 Standard",
                            dists: 12,
                            prods: 8,
                            status: "Active"
                        },
                        {
                            name: "Premium Partners",
                            dists: 3,
                            prods: 8,
                            status: "Active"
                        }
                    ].map((pl)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniRow, {
                            cols: 4,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] font-medium text-foreground",
                                    children: pl.name
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 711,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-muted-foreground",
                                    children: pl.dists
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 712,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-muted-foreground",
                                    children: pl.prods
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 713,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                                    status: pl.status,
                                    map: productStatusColor
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 714,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, pl.name, true, {
                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                            lineNumber: 710,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                    lineNumber: 705,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 704,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
        lineNumber: 643,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s4(ViewProducts, "Dlmv3IMCBsPZ3HFWhu9hT23hC2U=");
_c4 = ViewProducts;
/* ══════════════════════════════════════════════
   VIEW: Distributors (mirrors DistributorsPage.tsx)
   ══════════════════════════════════════════════ */ const distributors = [
    {
        name: "Nordic Distribution AB",
        contact: "Erik Johansson",
        region: "Scandinavia",
        orders: 342,
        revenue: "€1,245,000",
        status: "Active"
    },
    {
        name: "Scandinavia Partners Ltd",
        contact: "Anna Lindberg",
        region: "Scandinavia",
        orders: 218,
        revenue: "€890,500",
        status: "Active"
    },
    {
        name: "Baltic Trade Co",
        contact: "Janis Ozols",
        region: "Baltics",
        orders: 156,
        revenue: "€620,000",
        status: "Active"
    },
    {
        name: "Central EU Dist GmbH",
        contact: "Hans Mueller",
        region: "Central Europe",
        orders: 89,
        revenue: "€340,200",
        status: "Active"
    },
    {
        name: "West Coast Wholesale",
        contact: "Lisa Berg",
        region: "Scandinavia",
        orders: 0,
        revenue: "€0",
        status: "Pending"
    }
];
const ViewDistributors = ()=>{
    _s5();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHeader, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                        title: "Distributors",
                        subtitle: "Manage your distribution partners"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 740,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniBtn, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"],
                        label: "Invite Distributor",
                        primary: true
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 741,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 739,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 md:grid-cols-5 gap-2",
                children: [
                    {
                        name: "Scandinavia",
                        count: 3,
                        icon: "🇸🇪"
                    },
                    {
                        name: "Baltics",
                        count: 1,
                        icon: "🇱🇻"
                    },
                    {
                        name: "Central Europe",
                        count: 1,
                        icon: "🇩🇪"
                    },
                    {
                        name: "Southern Europe",
                        count: 1,
                        icon: "🇮🇹"
                    },
                    {
                        name: "Eastern Europe",
                        count: 1,
                        icon: "🇵🇱"
                    }
                ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-card rounded-lg border border-border px-2 py-2 flex items-center gap-2 cursor-pointer hover:shadow-sm transition-shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[12px]",
                                children: r.icon
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 752,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-semibold text-foreground",
                                        children: r.count
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 754,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[7px] text-muted-foreground",
                                        children: r.name
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 755,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 753,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, r.name, true, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 751,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 743,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniTabs, {
                tabs: [
                    {
                        key: "all",
                        label: "All Distributors",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
                    },
                    {
                        key: "pending",
                        label: "Pending Invites",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"]
                    },
                    {
                        key: "groups",
                        label: "Groups",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"]
                    }
                ],
                active: tab,
                onChange: (t)=>setTab(t)
            }, void 0, false, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 761,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            tab === "all" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-card rounded-lg border border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniTable, {
                    headers: [
                        "Company",
                        "Contact",
                        "Region",
                        "Orders",
                        "Revenue",
                        "Status"
                    ],
                    children: distributors.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniRow, {
                            cols: 6,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] font-medium text-foreground truncate",
                                    children: d.name
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 768,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-muted-foreground truncate",
                                    children: d.contact
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 769,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-muted-foreground",
                                    children: d.region
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 770,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-foreground",
                                    children: d.orders
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 771,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] font-medium text-foreground",
                                    children: d.revenue
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 772,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                                    status: d.status,
                                    map: distStatusColor
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 773,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, d.name, true, {
                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                            lineNumber: 767,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                    lineNumber: 765,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 764,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            tab === "pending" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-card rounded-lg border border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniTable, {
                    headers: [
                        "Company",
                        "Email",
                        "Sent",
                        "Expires"
                    ],
                    children: [
                        {
                            company: "Alpine Distribution AG",
                            email: "info@alpinedist.ch",
                            sent: "2026-02-05",
                            expires: "2026-02-12"
                        },
                        {
                            company: "Iberian Wholesale SL",
                            email: "contact@iberianws.es",
                            sent: "2026-02-03",
                            expires: "2026-02-10"
                        }
                    ].map((inv)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniRow, {
                            cols: 4,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] font-medium text-foreground",
                                    children: inv.company
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 788,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-muted-foreground truncate",
                                    children: inv.email
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 789,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-muted-foreground",
                                    children: inv.sent
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 790,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-muted-foreground",
                                    children: inv.expires
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 791,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, inv.email, true, {
                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                            lineNumber: 787,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                    lineNumber: 782,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 781,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            tab === "groups" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 gap-2",
                children: [
                    {
                        name: "Premium Partners",
                        count: 3,
                        discount: "15%"
                    },
                    {
                        name: "Standard",
                        count: 3,
                        discount: "10%"
                    },
                    {
                        name: "New Partners",
                        count: 1,
                        discount: "5%"
                    }
                ].map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-card rounded-lg border border-border p-3 hover:shadow-sm transition-shadow cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                        className: "w-2.5 h-2.5 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 806,
                                        columnNumber: 61
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[9px] font-semibold text-foreground",
                                        children: g.name
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 806,
                                        columnNumber: 107
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 806,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-[8px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-foreground font-medium",
                                        children: [
                                            g.count,
                                            " distributors"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 808,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary font-medium",
                                        children: [
                                            g.discount,
                                            " discount"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 809,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 807,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, g.name, true, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 805,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 799,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
        lineNumber: 738,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s5(ViewDistributors, "Dlmv3IMCBsPZ3HFWhu9hT23hC2U=");
_c5 = ViewDistributors;
/* ══════════════════════════════════════════════
   VIEW: Invoices (mirrors InvoicesPage.tsx)
   ══════════════════════════════════════════════ */ const invoices = [
    {
        id: "INV-2401",
        distributor: "Nordic Distribution AB",
        date: "2026-02-01",
        dueDate: "2026-03-01",
        total: "€12,450",
        vat: "€2,490",
        status: "Paid",
        paidDate: "2026-02-15"
    },
    {
        id: "INV-2400",
        distributor: "Scandinavia Partners Ltd",
        date: "2026-01-28",
        dueDate: "2026-02-28",
        total: "€8,920",
        vat: "€1,784",
        status: "Pending",
        paidDate: "—"
    },
    {
        id: "INV-2399",
        distributor: "Baltic Trade Co",
        date: "2026-01-25",
        dueDate: "2026-02-25",
        total: "€15,680",
        vat: "€3,136",
        status: "Overdue",
        paidDate: "—"
    },
    {
        id: "INV-2398",
        distributor: "Central EU Dist GmbH",
        date: "2026-01-20",
        dueDate: "2026-02-20",
        total: "€6,340",
        vat: "€1,268",
        status: "Paid",
        paidDate: "2026-02-05"
    }
];
const ViewInvoices = ()=>{
    _s6();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHeader, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
                        title: "Invoices",
                        subtitle: "Track payments and billing"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 835,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniBtn, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"],
                        label: "Export"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 836,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 834,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-4 gap-2",
                children: [
                    {
                        label: "Total Outstanding",
                        value: "€34,470",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$euro$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Euro$3e$__["Euro"],
                        color: "text-foreground"
                    },
                    {
                        label: "Overdue",
                        value: "€15,680",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
                        color: "text-destructive"
                    },
                    {
                        label: "Paid This Month",
                        value: "€40,890",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"],
                        color: "text-success"
                    },
                    {
                        label: "Avg. Payment Time",
                        value: "18 days",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
                        color: "text-muted-foreground"
                    }
                ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-card rounded-lg border border-border px-3 py-2 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-1 rounded bg-primary/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(s.icon, {
                                    className: "w-2.5 h-2.5 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 846,
                                    columnNumber: 56
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 846,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-[12px] font-bold ${s.color}`,
                                        children: s.value
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 848,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[8px] text-muted-foreground",
                                        children: s.label
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 849,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 847,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, s.label, true, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 845,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 838,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniTabs, {
                tabs: [
                    {
                        key: "all",
                        label: "All Invoices",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
                    },
                    {
                        key: "creditnotes",
                        label: "Credit Notes",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"]
                    },
                    {
                        key: "payments",
                        label: "Payment History"
                    }
                ],
                active: tab,
                onChange: (t)=>setTab(t)
            }, void 0, false, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 855,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            tab === "all" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            "All",
                            "Paid",
                            "Pending",
                            "Overdue"
                        ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setFilter(f),
                                className: `px-1.5 py-0.5 rounded text-[8px] font-medium transition-colors ${filter === f ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground hover:bg-secondary"}`,
                                children: f
                            }, f, false, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 861,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 859,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-card rounded-lg border border-border",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniTable, {
                            headers: [
                                "Invoice",
                                "Distributor",
                                "Date",
                                "Due",
                                "Total",
                                "VAT",
                                "Status"
                            ],
                            children: invoices.filter((inv)=>filter === "All" || inv.status === filter).map((inv)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniRow, {
                                    cols: 7,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] font-medium text-primary",
                                            children: inv.id
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                            lineNumber: 868,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-foreground truncate",
                                            children: inv.distributor
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                            lineNumber: 869,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-muted-foreground",
                                            children: inv.date
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                            lineNumber: 870,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-muted-foreground",
                                            children: inv.dueDate
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                            lineNumber: 871,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] font-medium text-foreground",
                                            children: inv.total
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                            lineNumber: 872,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-muted-foreground",
                                            children: inv.vat
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                            lineNumber: 873,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                                            status: inv.status,
                                            map: invoiceStatusColor
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                            lineNumber: 874,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, inv.id, true, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 867,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                            lineNumber: 865,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 864,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true),
            tab === "creditnotes" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-card rounded-lg border border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniTable, {
                    headers: [
                        "Credit Note",
                        "Invoice",
                        "Distributor",
                        "Amount",
                        "Reason"
                    ],
                    children: [
                        {
                            id: "CN-0034",
                            inv: "INV-2390",
                            dist: "Central EU Dist",
                            amount: "€1,240",
                            reason: "Returned goods"
                        },
                        {
                            id: "CN-0033",
                            inv: "INV-2385",
                            dist: "Nordic Distribution",
                            amount: "€560",
                            reason: "Pricing adjustment"
                        }
                    ].map((cn)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniRow, {
                            cols: 5,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] font-medium text-primary",
                                    children: cn.id
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 890,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-muted-foreground",
                                    children: cn.inv
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 891,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-foreground truncate",
                                    children: cn.dist
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 892,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] font-medium text-foreground",
                                    children: cn.amount
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 893,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-muted-foreground truncate",
                                    children: cn.reason
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 894,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, cn.id, true, {
                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                            lineNumber: 889,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                    lineNumber: 884,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 883,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            tab === "payments" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-card rounded-lg border border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniTable, {
                    headers: [
                        "Payment",
                        "Invoice",
                        "Distributor",
                        "Amount",
                        "Method"
                    ],
                    children: [
                        {
                            id: "PAY-1201",
                            inv: "INV-2401",
                            dist: "Nordic Distribution",
                            amount: "€12,450",
                            method: "Bank Transfer"
                        },
                        {
                            id: "PAY-1200",
                            inv: "INV-2398",
                            dist: "Central EU Dist",
                            amount: "€6,340",
                            method: "Bank Transfer"
                        }
                    ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniRow, {
                            cols: 5,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] font-medium text-primary",
                                    children: p.id
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 909,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-muted-foreground",
                                    children: p.inv
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 910,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-foreground truncate",
                                    children: p.dist
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 911,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] font-medium text-foreground",
                                    children: p.amount
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 912,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-muted-foreground",
                                    children: p.method
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 913,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, p.id, true, {
                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                            lineNumber: 908,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                    lineNumber: 903,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 902,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
        lineNumber: 833,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s6(ViewInvoices, "eJ4YU2CtEi9xIL8JK8ciQ2BO/UY=");
_c6 = ViewInvoices;
/* ══════════════════════════════════════════════
   VIEW: Reports (mirrors ReportsPage.tsx)
   ══════════════════════════════════════════════ */ const ViewReports = ()=>{
    _s7();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("sales");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHeader, {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
                title: "Reports",
                subtitle: "Analytics and performance insights"
            }, void 0, false, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 930,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniTabs, {
                tabs: [
                    {
                        key: "sales",
                        label: "Sales",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"]
                    },
                    {
                        key: "products",
                        label: "Products",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"]
                    },
                    {
                        key: "distributors",
                        label: "Distributors",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
                    },
                    {
                        key: "financial",
                        label: "Financial",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"]
                    }
                ],
                active: tab,
                onChange: (t)=>setTab(t)
            }, void 0, false, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 931,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            tab === "sales" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 gap-2",
                        children: [
                            {
                                label: "Total Revenue",
                                value: "€847,320",
                                change: "+12.5%",
                                up: true
                            },
                            {
                                label: "Orders This Month",
                                value: "284",
                                change: "+8.3%",
                                up: true
                            },
                            {
                                label: "Avg. Order Value",
                                value: "€2,983",
                                change: "-1.2%",
                                up: false
                            }
                        ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-card rounded-lg border border-border p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[8px] text-muted-foreground uppercase tracking-wider",
                                        children: s.label
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 942,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[14px] font-bold text-foreground mt-1",
                                        children: s.value
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 943,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 mt-1",
                                        children: [
                                            s.up ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                className: "w-2.5 h-2.5 text-success"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 945,
                                                columnNumber: 27
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownRight$3e$__["ArrowDownRight"], {
                                                className: "w-2.5 h-2.5 text-destructive"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 945,
                                                columnNumber: 83
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-[8px] font-medium ${s.up ? "text-success" : "text-destructive"}`,
                                                children: s.change
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 946,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 944,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, s.label, true, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 941,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 935,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-card rounded-lg border border-border p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[9px] font-semibold text-foreground mb-2",
                                children: "Revenue Trend (Last 6 Months)"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 952,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-16 bg-secondary rounded flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[8px] text-muted-foreground",
                                    children: "Chart — connect backend for live data"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 953,
                                    columnNumber: 89
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 953,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 951,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-card rounded-lg border border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-3 py-2 border-b border-border",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[9px] font-semibold text-foreground",
                                    children: "Top Products by Revenue"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 956,
                                    columnNumber: 63
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 956,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniTable, {
                                headers: [
                                    "Product",
                                    "Revenue",
                                    "Units",
                                    "Trend"
                                ],
                                children: [
                                    {
                                        name: "Hydraulic Pump HP-500",
                                        rev: "€156,240",
                                        units: 83,
                                        up: true
                                    },
                                    {
                                        name: "Industrial Bearing Set A",
                                        rev: "€98,780",
                                        units: 403,
                                        up: true
                                    },
                                    {
                                        name: "Motor Assembly MA-750",
                                        rev: "€65,520",
                                        units: 28,
                                        up: false
                                    }
                                ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniRow, {
                                        cols: 4,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] font-medium text-foreground truncate",
                                                children: p.name
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 964,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] font-medium text-foreground",
                                                children: p.rev
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 965,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] text-muted-foreground",
                                                children: p.units
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 966,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: p.up ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                    className: "w-2.5 h-2.5 text-success"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                    lineNumber: 967,
                                                    columnNumber: 30
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownRight$3e$__["ArrowDownRight"], {
                                                    className: "w-2.5 h-2.5 text-destructive"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                    lineNumber: 967,
                                                    columnNumber: 86
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 967,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, p.name, true, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 963,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 957,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 955,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 934,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            tab === "products" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-card rounded-lg border border-border p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[9px] font-semibold text-foreground mb-2",
                        children: "Revenue by Category"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 977,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    [
                        {
                            name: "Pumps",
                            pct: 32
                        },
                        {
                            name: "Bearings",
                            pct: 20
                        },
                        {
                            name: "Motors",
                            pct: 14
                        },
                        {
                            name: "Valves",
                            pct: 11
                        },
                        {
                            name: "Connectors",
                            pct: 10
                        }
                    ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 mb-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[8px] text-foreground w-14",
                                    children: c.name
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 980,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 bg-secondary rounded-full h-1.5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-primary rounded-full h-1.5",
                                        style: {
                                            width: `${c.pct}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 981,
                                        columnNumber: 71
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 981,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[8px] font-medium text-foreground w-8 text-right",
                                    children: [
                                        c.pct,
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 982,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, c.name, true, {
                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                            lineNumber: 979,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 976,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            tab === "distributors" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-card rounded-lg border border-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 py-2 border-b border-border",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[9px] font-semibold text-foreground",
                            children: "Distributor Ranking"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                            lineNumber: 990,
                            columnNumber: 61
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 990,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniTable, {
                        headers: [
                            "#",
                            "Distributor",
                            "Revenue",
                            "Orders",
                            "Share"
                        ],
                        children: [
                            {
                                name: "Nordic Distribution AB",
                                rev: "€1,245,000",
                                orders: 342,
                                share: "38%"
                            },
                            {
                                name: "Scandinavia Partners",
                                rev: "€890,500",
                                orders: 218,
                                share: "27%"
                            },
                            {
                                name: "Baltic Trade Co",
                                rev: "€620,000",
                                orders: 156,
                                share: "19%"
                            }
                        ].map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniRow, {
                                cols: 5,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-muted-foreground",
                                        children: i + 1
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 998,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-medium text-foreground truncate",
                                        children: d.name
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 999,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-medium text-foreground",
                                        children: d.rev
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 1000,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-muted-foreground",
                                        children: d.orders
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 1001,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 bg-secondary rounded-full h-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-primary rounded-full h-1",
                                                    style: {
                                                        width: d.share
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                    lineNumber: 1003,
                                                    columnNumber: 70
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 1003,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[8px] font-medium text-foreground",
                                                children: d.share
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 1004,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 1002,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, d.name, true, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 997,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 991,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 989,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            tab === "financial" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-card rounded-lg border border-border p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[8px] text-muted-foreground uppercase tracking-wider",
                                        children: "Revenue (YTD)"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 1016,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[14px] font-bold text-foreground mt-1",
                                        children: "€1,694,640"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 1017,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 1015,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-card rounded-lg border border-border p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[8px] text-muted-foreground uppercase tracking-wider",
                                        children: "Outstanding Invoices"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 1020,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[14px] font-bold text-foreground mt-1",
                                        children: "€34,470"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 1021,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 1019,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 1014,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-card rounded-lg border border-border p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[9px] font-semibold text-foreground mb-2",
                                children: "Revenue vs Expenses"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 1025,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-16 bg-secondary rounded flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[8px] text-muted-foreground",
                                    children: "Chart — connect backend"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                    lineNumber: 1026,
                                    columnNumber: 89
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 1026,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 1024,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 1013,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
        lineNumber: 929,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s7(ViewReports, "KNBDnJyi0gmfSPuFyn0s6EoIBxs=");
_c7 = ViewReports;
/* ══════════════════════════════════════════════
   VIEW: Settings (mirrors SettingsPage.tsx)
   ══════════════════════════════════════════════ */ const ViewSettings = ()=>{
    _s8();
    const [section, setSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("profile");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHeader, {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
                title: "Settings",
                subtitle: "Manage your account and preferences"
            }, void 0, false, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 1041,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "w-24 shrink-0 space-y-0.5",
                        children: [
                            {
                                key: "profile",
                                label: "Profile",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"]
                            },
                            {
                                key: "company",
                                label: "Company",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"]
                            },
                            {
                                key: "security",
                                label: "Security",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"]
                            },
                            {
                                key: "notifications",
                                label: "Notifications",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"]
                            },
                            {
                                key: "billing",
                                label: "Billing",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"]
                            }
                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSection(item.key),
                                className: `flex items-center gap-1.5 w-full px-2 py-1.5 rounded text-[9px] transition-colors ${section === item.key ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                        className: "w-2.5 h-2.5"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 1056,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    item.label
                                ]
                            }, item.key, true, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 1052,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 1044,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            section === "profile" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-card rounded-lg border border-border p-3 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-semibold text-foreground",
                                        children: "Profile Information"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 1063,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniField, {
                                                label: "Full Name",
                                                value: "Admin User"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 1065,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniField, {
                                                label: "Email",
                                                value: "admin@acmebrands.se"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 1066,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 1064,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniField, {
                                        label: "Role",
                                        value: "Administrator",
                                        disabled: true
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 1068,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-end",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "px-3 py-1 rounded bg-primary text-primary-foreground text-[8px] font-medium",
                                            children: "Save Changes"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                            lineNumber: 1069,
                                            columnNumber: 49
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 1069,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 1062,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            section === "company" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-card rounded-lg border border-border p-3 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-semibold text-foreground",
                                        children: "Company Details"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 1074,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniField, {
                                                label: "Company",
                                                value: "Acme Brands AB"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 1076,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniField, {
                                                label: "VAT",
                                                value: "SE556677889901"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 1077,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 1075,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniField, {
                                        label: "Address",
                                        value: "Industrivägen 42, Stockholm"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 1079,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-end",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "px-3 py-1 rounded bg-primary text-primary-foreground text-[8px] font-medium",
                                            children: "Save Changes"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                            lineNumber: 1080,
                                            columnNumber: 49
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 1080,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 1073,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            section === "security" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-card rounded-lg border border-border p-3 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] font-semibold text-foreground",
                                                children: "Change Password"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 1086,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniField, {
                                                label: "Current Password",
                                                value: "••••••••"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 1087,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniField, {
                                                label: "New Password",
                                                value: ""
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 1088,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-end",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "px-3 py-1 rounded bg-primary text-primary-foreground text-[8px] font-medium",
                                                    children: "Update"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                    lineNumber: 1089,
                                                    columnNumber: 51
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 1089,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 1085,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-card rounded-lg border border-border p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] font-semibold text-foreground",
                                                children: "Two-Factor Authentication"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 1092,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mt-2 p-2 rounded bg-secondary",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[9px] font-medium text-foreground",
                                                                children: "2FA Status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                                lineNumber: 1094,
                                                                columnNumber: 24
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[7px] text-muted-foreground",
                                                                children: "Not enabled"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                                lineNumber: 1094,
                                                                columnNumber: 92
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                        lineNumber: 1094,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "px-2 py-0.5 rounded border border-input text-[8px] text-foreground",
                                                        children: "Enable"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                        lineNumber: 1095,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 1093,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 1091,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 1084,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            section === "notifications" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-card rounded-lg border border-border p-3 space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-semibold text-foreground mb-2",
                                        children: "Email Notifications"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 1102,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    [
                                        "New orders",
                                        "Order status changes",
                                        "Low stock alerts",
                                        "Invoice payments",
                                        "New distributor sign-ups"
                                    ].map((n, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between py-1.5 border-b border-border last:border-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] text-foreground",
                                                    children: n
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                    lineNumber: 1105,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-7 h-4 ${i < 3 ? "bg-primary" : "bg-border"} rounded-full relative cursor-pointer`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `absolute top-0.5 ${i < 3 ? "right-0.5" : "left-0.5"} w-3 h-3 rounded-full bg-card`
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                        lineNumber: 1107,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                    lineNumber: 1106,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, n, true, {
                                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                            lineNumber: 1104,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 1101,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            section === "billing" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-card rounded-lg border border-border p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] font-semibold text-foreground",
                                                children: "Current Plan"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 1116,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mt-2 p-2 rounded bg-secondary",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[9px] font-medium text-foreground",
                                                                children: "Enterprise Plan"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                                lineNumber: 1118,
                                                                columnNumber: 24
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[7px] text-muted-foreground",
                                                                children: "Unlimited everything"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                                lineNumber: 1118,
                                                                columnNumber: 97
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                        lineNumber: 1118,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                                                        status: "Active",
                                                        map: productStatusColor
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                        lineNumber: 1119,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 1117,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 1115,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-card rounded-lg border border-border p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] font-semibold text-foreground",
                                                children: "Payment Method"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 1123,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mt-2 p-2 rounded bg-secondary",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                                                className: "w-3 h-3 text-muted-foreground"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                                lineNumber: 1125,
                                                                columnNumber: 60
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[9px] text-foreground",
                                                                        children: "•••• 4242"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                                        lineNumber: 1125,
                                                                        columnNumber: 121
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[7px] text-muted-foreground",
                                                                        children: "Expires 12/2027"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                                        lineNumber: 1125,
                                                                        columnNumber: 176
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                                lineNumber: 1125,
                                                                columnNumber: 116
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                        lineNumber: 1125,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "text-[8px] text-primary font-medium",
                                                        children: "Update"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                        lineNumber: 1126,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                                lineNumber: 1124,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                        lineNumber: 1122,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                                lineNumber: 1114,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 1060,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 1042,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
        lineNumber: 1040,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s8(ViewSettings, "SK5or6jN4+TvZXJIrFogkXkMOUQ=");
_c8 = ViewSettings;
/* ══════════════════════════════════════════════
   REUSABLE MINI COMPONENTS
   ══════════════════════════════════════════════ */ const PageHeader = ({ icon: Icon, title, subtitle })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-1.5 rounded-lg bg-primary/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    className: "w-3.5 h-3.5 text-primary"
                }, void 0, false, {
                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                    lineNumber: 1143,
                    columnNumber: 53
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 1143,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[12px] font-semibold text-foreground",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 1145,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[9px] text-muted-foreground",
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 1146,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 1144,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
        lineNumber: 1142,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c9 = PageHeader;
const MiniTabs = ({ tabs, active, onChange })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-b border-border",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-3",
            children: tabs.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onChange(t.key),
                    className: `flex items-center gap-1 pb-2 text-[9px] font-medium transition-colors border-b-2 ${active === t.key ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`,
                    children: [
                        t.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(t.icon, {
                            className: "w-2.5 h-2.5"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                            lineNumber: 1159,
                            columnNumber: 22
                        }, ("TURBOPACK compile-time value", void 0)),
                        t.label
                    ]
                }, t.key, true, {
                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                    lineNumber: 1155,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
            lineNumber: 1153,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
        lineNumber: 1152,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c10 = MiniTabs;
const MiniTable = ({ headers, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid px-3 py-1.5 bg-secondary border-b border-border",
                style: {
                    gridTemplateColumns: `repeat(${headers.length}, minmax(0, 1fr))`
                },
                children: headers.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[8px] font-semibold text-muted-foreground uppercase tracking-wider",
                        children: h
                    }, h, false, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                        lineNumber: 1170,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 1168,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
        lineNumber: 1167,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c11 = MiniTable;
const MiniRow = ({ cols, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid px-3 py-2 border-b border-border hover:bg-secondary/50 transition-colors cursor-pointer",
        style: {
            gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
        lineNumber: 1178,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c12 = MiniRow;
const StatusBadge = ({ status, map })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex px-1.5 py-0.5 rounded text-[8px] font-medium ${map[status] ?? "bg-muted text-muted-foreground"}`,
        children: status
    }, void 0, false, {
        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
        lineNumber: 1184,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c13 = StatusBadge;
const MiniField = ({ label, value, disabled })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-0.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[8px] font-medium text-muted-foreground",
                children: label
            }, void 0, false, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 1191,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `px-2 py-1.5 rounded border border-input text-[10px] ${disabled ? "bg-secondary text-muted-foreground" : "bg-card text-foreground"}`,
                children: value || "\u00A0"
            }, void 0, false, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 1192,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
        lineNumber: 1190,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c14 = MiniField;
const MiniBtn = ({ icon: Icon, label, primary })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `inline-flex items-center gap-1 px-2 py-1 rounded text-[9px] font-medium transition-colors ${primary ? "bg-primary text-primary-foreground hover:bg-accent" : "border border-input text-foreground hover:bg-secondary"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                className: "w-2.5 h-2.5"
            }, void 0, false, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
                lineNumber: 1202,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            " ",
            label
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx",
        lineNumber: 1199,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c15 = MiniBtn;
const __TURBOPACK__default__export__ = DemoDashboard;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15;
__turbopack_context__.k.register(_c, "DemoDashboard");
__turbopack_context__.k.register(_c1, "ViewDashboard");
__turbopack_context__.k.register(_c2, "ViewStoreEditor");
__turbopack_context__.k.register(_c3, "ViewOrders");
__turbopack_context__.k.register(_c4, "ViewProducts");
__turbopack_context__.k.register(_c5, "ViewDistributors");
__turbopack_context__.k.register(_c6, "ViewInvoices");
__turbopack_context__.k.register(_c7, "ViewReports");
__turbopack_context__.k.register(_c8, "ViewSettings");
__turbopack_context__.k.register(_c9, "PageHeader");
__turbopack_context__.k.register(_c10, "MiniTabs");
__turbopack_context__.k.register(_c11, "MiniTable");
__turbopack_context__.k.register(_c12, "MiniRow");
__turbopack_context__.k.register(_c13, "StatusBadge");
__turbopack_context__.k.register(_c14, "MiniField");
__turbopack_context__.k.register(_c15, "MiniBtn");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HomePage",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/store.js [app-client] (ecmascript) <export default as Store>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$components$2f$motion$2f$fade$2d$in$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/motion/fade-in.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$components$2f$sections$2f$demo$2d$dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/demo-dashboard.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const DEMO_MAILTO = `mailto:albin.holmgren97@gmail.com?subject=Book%20a%20Demo%20-%20BrandGate&body=Hi%2C%20I'd%20like%20to%20book%20a%20demo%20of%20BrandGate.`;
const features = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        title: "Distributor Portal",
        desc: "Give each distributor their own branded portal to browse products, place orders, and track deliveries."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"],
        title: "Order Management",
        desc: "Process, track, and fulfill orders with real-time status updates and automated notifications."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"],
        title: "Online Store Builder",
        desc: "Create a custom B2B storefront with drag-and-drop editing. No coding required."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"],
        title: "Product Catalog",
        desc: "Manage unlimited SKUs, pricing tiers, and inventory with low-stock alerts across your network."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
        title: "Automated Invoicing",
        desc: "Generate invoices from orders automatically. Track payments and send overdue reminders."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
        title: "Analytics & Reports",
        desc: "Revenue dashboards, distributor performance, and product insights to drive growth."
    }
];
const steps = [
    {
        step: "01",
        title: "Set up your store",
        desc: "Create your branded B2B storefront, add products, and configure pricing tiers for different distributor groups."
    },
    {
        step: "02",
        title: "Invite distributors",
        desc: "Send invitations to your distribution network. Each distributor gets their own login and personalized catalog."
    },
    {
        step: "03",
        title: "Manage orders",
        desc: "Receive and process orders, generate invoices, and track everything from your central dashboard."
    }
];
function HomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "aria-label": "Hero",
                className: "relative bg-primary text-primary-foreground overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-[0.04]",
                        style: {
                            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                            backgroundSize: '40px 40px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        style: {
                            background: 'radial-gradient(ellipse at 50% 80%, hsl(45 93% 47% / 0.04) 0%, transparent 60%)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative max-w-7xl mx-auto px-6 py-28 md:py-40 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$components$2f$motion$2f$fade$2d$in$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-1 bg-gold mx-auto mb-8 shadow-[0_0_12px_hsl(45,93%,47%,0.4)]"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$components$2f$motion$2f$fade$2d$in$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                                delay: 0.1,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] uppercase max-w-5xl mx-auto",
                                    children: "The B2B distribution platform for brands"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$components$2f$motion$2f$fade$2d$in$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                                delay: 0.2,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-primary-foreground/60 text-lg md:text-xl mt-8 max-w-2xl mx-auto leading-relaxed font-light",
                                    children: "Manage your entire distribution network from one place. Orders, products, invoicing, and your own branded storefront — all in one platform."
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$components$2f$motion$2f$fade$2d$in$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                                delay: 0.3,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-4 justify-center mt-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            asChild: true,
                                            size: "lg",
                                            className: "bg-gold text-gold-foreground hover:bg-gold/90 text-base px-10 rounded-full font-semibold h-12",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://app.brandgate.dev/signup",
                                                children: [
                                                    "Get Started ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "w-4 h-4 ml-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 72
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                                                lineNumber: 55,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            asChild: true,
                                            size: "lg",
                                            variant: "outline",
                                            className: "text-base px-10 bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground rounded-full h-12",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: DEMO_MAILTO,
                                                children: "Book a Demo"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                                                lineNumber: 58,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "aria-label": "Interactive product demo",
                className: "bg-card -mt-16 relative z-10 pb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$components$2f$motion$2f$fade$2d$in$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                    className: "max-w-6xl mx-auto px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$components$2f$sections$2f$demo$2d$dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-xs text-muted-foreground mt-4",
                            children: "↑ Interactive demo — click the sidebar to explore different views"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "aria-label": "Key features",
                className: "py-24 md:py-32 bg-card border-t border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$components$2f$motion$2f$fade$2d$in$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                            className: "text-center mb-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-1 bg-gold mx-auto mb-6 shadow-[0_0_12px_hsl(45,93%,47%,0.4)]"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-5xl font-bold text-foreground uppercase tracking-tight",
                                    children: "Everything your brand needs"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground mt-5 text-lg max-w-xl mx-auto",
                                    children: "One platform to manage distributors, process orders, and grow your wholesale business."
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$components$2f$motion$2f$fade$2d$in$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerContainer"], {
                            staggerDelay: 0.08,
                            className: "grid md:grid-cols-3 gap-6",
                            children: features.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$components$2f$motion$2f$fade$2d$in$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerItem"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: "group bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300 relative overflow-hidden h-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 right-0 w-24 h-24 opacity-[0.04]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    viewBox: "0 0 100 100",
                                                    fill: "none",
                                                    "aria-hidden": "true",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "80",
                                                            cy: "20",
                                                            r: "40",
                                                            stroke: "currentColor",
                                                            strokeWidth: "0.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                                                            lineNumber: 89,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "80",
                                                            cy: "20",
                                                            r: "25",
                                                            stroke: "currentColor",
                                                            strokeWidth: "0.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                                                            lineNumber: 90,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "80",
                                                            cy: "20",
                                                            r: "10",
                                                            stroke: "currentColor",
                                                            strokeWidth: "0.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                                                            lineNumber: 91,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                                                lineNumber: 87,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6 group-hover:scale-105 transition-transform",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(f.icon, {
                                                    className: "w-7 h-7 text-primary-foreground",
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                                                lineNumber: 94,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-bold text-foreground mb-3",
                                                children: f.title
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                                                lineNumber: 97,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground text-sm leading-relaxed",
                                                children: f.desc
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                                                lineNumber: 98,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                                        lineNumber: 86,
                                        columnNumber: 17
                                    }, this)
                                }, f.title, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "aria-label": "How it works",
                className: "py-24 md:py-32 bg-primary text-primary-foreground",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$components$2f$motion$2f$fade$2d$in$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                            className: "text-center mb-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-1 bg-gold mx-auto mb-6 shadow-[0_0_12px_hsl(45,93%,47%,0.4)]"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-5xl font-bold uppercase tracking-tight",
                                    children: "How it works"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-primary-foreground/50 mt-5 text-lg",
                                    children: "Get started in three simple steps."
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$components$2f$motion$2f$fade$2d$in$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerContainer"], {
                            staggerDelay: 0.1,
                            className: "grid md:grid-cols-3 gap-12 md:gap-8",
                            children: steps.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$components$2f$motion$2f$fade$2d$in$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerItem"], {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-6xl md:text-7xl font-bold text-gold/20 block mb-4",
                                            "aria-hidden": "true",
                                            children: s.step
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold mb-4",
                                            children: s.title
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-primary-foreground/50 text-sm leading-relaxed max-w-sm mx-auto",
                                            children: s.desc
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                                            lineNumber: 119,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, s.step, true, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                                    lineNumber: 116,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "aria-label": "Call to action",
                className: "bg-primary text-primary-foreground py-24 md:py-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$components$2f$motion$2f$fade$2d$in$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                    className: "max-w-4xl mx-auto px-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-1 bg-gold mx-auto mb-8 shadow-[0_0_12px_hsl(45,93%,47%,0.4)]"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl md:text-5xl font-bold uppercase tracking-tight",
                            children: "Ready to streamline your distribution?"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-primary-foreground/50 mt-6 text-lg",
                            children: "Start your free trial or book a personalized demo."
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-4 justify-center mt-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    asChild: true,
                                    size: "lg",
                                    className: "bg-gold text-gold-foreground hover:bg-gold/90 text-base px-10 rounded-full font-semibold h-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://app.brandgate.dev/signup",
                                        children: [
                                            "Get Started Free ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "w-4 h-4 ml-2"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                                                lineNumber: 134,
                                                columnNumber: 75
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    asChild: true,
                                    size: "lg",
                                    variant: "outline",
                                    className: "text-base px-10 bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground rounded-full h-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Easyfairs$2f$Desktop$2f$Albin$2f$brandgate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: DEMO_MAILTO,
                                        children: "Book a Demo"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive - Easyfairs/Desktop/Albin/brandgate/components/sections/home-page.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OneDrive%20-%20Easyfairs_Desktop_Albin_brandgate_822f63a6._.js.map