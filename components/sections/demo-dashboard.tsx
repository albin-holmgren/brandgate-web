"use client";

import { useState } from "react";
import {
  ShoppingCart,
  Package,
  Users,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Activity,
  Search,
  Bell,
  HelpCircle,
  LayoutDashboard,
  Store,
  FileText,
  BarChart3,
  Settings,
  ChevronRight,
  UserPlus,
  Download,
  Euro,
  AlertTriangle,
  CreditCard,
  DollarSign,
  Plus,
  CalendarDays,
  Truck,
  CheckCircle2,
  XCircle,
  FileEdit,
  RotateCcw,
  Grid3X3,
  Tags,
  Filter,
  Save,
  Monitor,
  Smartphone,
  ExternalLink,
  Undo2,
  GripVertical,
  Eye,
  Image,
  ShoppingBag,
  Megaphone,
  Type,
  Mail,
  User,
  Building,
  Shield,
  Award,
  Globe,
} from "lucide-react";

/* ══════════════════════════════════════════════
   SHARED DATA — mirrors real pages exactly
   ══════════════════════════════════════════════ */

const stats = [
  { label: "Total Orders", value: "2,847", change: "+12.5%", trend: "up" as const, icon: ShoppingCart, period: "vs last month" },
  { label: "Active Products", value: "1,234", change: "+3.2%", trend: "up" as const, icon: Package, period: "vs last month" },
  { label: "Distributors", value: "48", change: "+2", trend: "up" as const, icon: Users, period: "new this month" },
  { label: "Revenue", value: "€847,320", change: "-2.1%", trend: "down" as const, icon: TrendingUp, period: "vs last month" },
];

const recentOrders = [
  { id: "ORD-4821", distributor: "Nordic Distribution AB", date: "2026-02-06", dueDate: "2026-03-06", total: "€12,450", vat: "€2,490", status: "Processing", items: 8 },
  { id: "ORD-4820", distributor: "Scandinavia Partners Ltd", date: "2026-02-05", dueDate: "2026-03-05", total: "€8,920", vat: "€1,784", status: "Shipped", items: 5 },
  { id: "ORD-4819", distributor: "Baltic Trade Co", date: "2026-02-05", dueDate: "2026-03-05", total: "€15,680", vat: "€3,136", status: "Delivered", items: 12 },
  { id: "ORD-4818", distributor: "Central EU Dist GmbH", date: "2026-02-04", dueDate: "2026-03-04", total: "€6,340", vat: "€1,268", status: "Processing", items: 3 },
  { id: "ORD-4817", distributor: "Nordic Distribution AB", date: "2026-02-04", dueDate: "2026-03-04", total: "€22,100", vat: "€4,420", status: "Delivered", items: 15 },
];

const activityFeed = [
  { time: "10 min ago", text: "New order ORD-4821 received from Nordic Distribution AB", type: "order" },
  { time: "1 hour ago", text: "Product PRD-006 marked as Low Stock (28 units)", type: "stock" },
  { time: "2 hours ago", text: "Invoice INV-2401 marked as Paid", type: "payment" },
  { time: "3 hours ago", text: "New distributor West Coast Wholesale invited", type: "distributor" },
  { time: "5 hours ago", text: "Order ORD-4820 shipped via DHL Express", type: "shipping" },
];

const orderStatusColor: Record<string, string> = {
  Processing: "bg-warning/10 text-warning",
  Shipped: "bg-primary/10 text-primary",
  Delivered: "bg-success/10 text-success",
  Cancelled: "bg-destructive/10 text-destructive",
};

const productStatusColor: Record<string, string> = {
  Active: "bg-success/10 text-success",
  "Out of Stock": "bg-destructive/10 text-destructive",
  "Low Stock": "bg-warning/10 text-warning",
};

const invoiceStatusColor: Record<string, string> = {
  Paid: "bg-success/10 text-success",
  Pending: "bg-warning/10 text-warning",
  Overdue: "bg-destructive/10 text-destructive",
};

const distStatusColor: Record<string, string> = {
  Active: "bg-success/10 text-success",
  Pending: "bg-warning/10 text-warning",
  Inactive: "bg-muted text-muted-foreground",
};

const activityDotColor: Record<string, string> = {
  order: "bg-primary",
  stock: "bg-warning",
  payment: "bg-success",
  distributor: "bg-accent",
  shipping: "bg-primary",
};

type DemoView = "dashboard" | "store" | "orders" | "products" | "distributors" | "invoices" | "reports" | "settings";

const sidebarItems: { icon: React.ElementType; label: string; view: DemoView }[] = [
  { icon: LayoutDashboard, label: "Dashboard", view: "dashboard" },
  { icon: Store, label: "Online Store", view: "store" },
  { icon: ShoppingCart, label: "Orders", view: "orders" },
  { icon: Package, label: "Products", view: "products" },
  { icon: Users, label: "Distributors", view: "distributors" },
  { icon: FileText, label: "Invoices", view: "invoices" },
  { icon: BarChart3, label: "Reports", view: "reports" },
];

const urlMap: Record<DemoView, string> = {
  dashboard: "app.brandgate.com/dashboard",
  store: "app.brandgate.com/store-editor",
  orders: "app.brandgate.com/orders",
  products: "app.brandgate.com/products",
  distributors: "app.brandgate.com/distributors",
  invoices: "app.brandgate.com/invoices",
  reports: "app.brandgate.com/reports",
  settings: "app.brandgate.com/settings",
};

/* ══════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════ */

const DemoDashboard = () => {
  const [activeView, setActiveView] = useState<DemoView>("dashboard");

  return (
    <div className="bg-secondary rounded-2xl border border-border shadow-2xl overflow-hidden select-none" style={{ fontSize: "11px" }}>
      {/* Browser chrome */}
      <div className="bg-muted px-4 py-2.5 flex items-center gap-3 border-b border-border">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-destructive/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-warning/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-success/40" />
        </div>
        <div className="flex-1 bg-card rounded-md px-3 py-1 text-[10px] text-muted-foreground text-center">
          {urlMap[activeView]}
        </div>
      </div>

      <div className="flex" style={{ height: "520px" }}>
        {/* Sidebar — hidden on mobile */}
        <div className="hidden md:flex w-[160px] bg-primary text-primary-foreground flex-col shrink-0">
          <div className="px-4 py-4 border-b border-primary-foreground/10">
            <p className="font-bold text-[12px] tracking-tight">BrandGate</p>
            <p className="text-[9px] text-primary-foreground/40 mt-0.5">Distribution Platform</p>
          </div>
          <nav className="flex-1 py-2 px-2 space-y-0.5 overflow-auto">
            {sidebarItems.map((item) => (
              <button
                key={item.label}
                onClick={() => setActiveView(item.view)}
                className={`w-full flex items-center gap-2 px-2.5 py-2 rounded-md text-[10px] transition-colors group ${
                  activeView === item.view
                    ? "bg-accent text-accent-foreground font-medium"
                    : "text-primary-foreground/50 hover:bg-accent/50 hover:text-primary-foreground/80"
                }`}
              >
                <item.icon className="w-3 h-3 shrink-0" />
                <span className="flex-1 text-left">{item.label}</span>
                <ChevronRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-40 transition-opacity" />
              </button>
            ))}
          </nav>
          <div className="border-t border-primary-foreground/10 p-3 space-y-0.5">
            <button
              onClick={() => setActiveView("settings")}
              className={`w-full flex items-center gap-2 px-2.5 py-2 rounded-md text-[10px] transition-colors ${
                activeView === "settings" ? "bg-accent text-accent-foreground font-medium" : "text-primary-foreground/50 hover:bg-accent/50 hover:text-primary-foreground/80"
              }`}
            >
              <Settings className="w-3 h-3" />
              <span>Settings</span>
            </button>
          </div>
          <div className="border-t border-primary-foreground/10 px-4 py-3">
            <p className="text-[9px] font-medium truncate">Admin User</p>
            <p className="text-[8px] text-primary-foreground/40 truncate">Acme Brands AB</p>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* TopBar */}
          <div className="h-10 bg-card border-b border-border flex items-center justify-between px-4 shrink-0">
            <div className="flex md:hidden items-center gap-1 overflow-x-auto">
              {sidebarItems.map((item) => (
                <button key={item.label} onClick={() => setActiveView(item.view)}
                  className={`px-2 py-1 rounded text-[8px] font-medium transition-colors whitespace-nowrap ${
                    activeView === item.view ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary"
                  }`}>{item.label}</button>
              ))}
            </div>
            <div className="hidden md:block relative">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-muted-foreground" />
              <div className="pl-7 pr-3 py-1 rounded-md border border-input bg-secondary text-[10px] text-muted-foreground w-48">Search orders, products...</div>
            </div>
            <div className="flex items-center gap-2">
              <HelpCircle className="w-3 h-3 text-muted-foreground hidden md:block" />
              <div className="relative">
                <Bell className="w-3 h-3 text-muted-foreground" />
                <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-destructive" />
              </div>
              <div className="ml-1 pl-2 border-l border-border hidden sm:block">
                <span className="text-[10px] font-medium text-foreground">Acme Brands AB</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-4 overflow-y-auto">
            {activeView === "dashboard" && <ViewDashboard />}
            {activeView === "store" && <ViewStoreEditor />}
            {activeView === "orders" && <ViewOrders />}
            {activeView === "products" && <ViewProducts />}
            {activeView === "distributors" && <ViewDistributors />}
            {activeView === "invoices" && <ViewInvoices />}
            {activeView === "reports" && <ViewReports />}
            {activeView === "settings" && <ViewSettings />}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════
   VIEW: Dashboard  (mirrors DashboardPage.tsx)
   ══════════════════════════════════════════════ */
const ViewDashboard = () => {
  const [tab, setTab] = useState<"overview" | "activity">("overview");
  return (
    <div className="space-y-3">
      {/* Welcome banner — matches DashboardPage */}
      <div className="bg-card rounded-lg border border-border px-4 py-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold text-foreground">Welcome back, Admin</p>
            <div className="flex items-center gap-1 mt-0.5">
              <CalendarDays className="w-2.5 h-2.5 text-muted-foreground" />
              <p className="text-[9px] text-muted-foreground">Monday, February 17, 2026</p>
            </div>
            <p className="text-[8px] text-muted-foreground mt-0.5">Acme Brands AB</p>
          </div>
          <div className="hidden md:flex items-center gap-1">
            {[{ label: "New Order", icon: Plus }, { label: "Add Product", icon: Package }, { label: "Invite", icon: UserPlus }].map((a) => (
              <button key={a.label} className="inline-flex items-center gap-1 px-2 py-1 rounded border border-input text-[8px] font-medium text-foreground hover:bg-secondary transition-colors">
                <a.icon className="w-2.5 h-2.5" />{a.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <MiniTabs tabs={[{ key: "overview", label: "Overview" }, { key: "activity", label: "Activity Log" }]} active={tab} onChange={(t) => setTab(t as any)} />

      {tab === "overview" && (
        <>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card rounded-lg border border-border p-3">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[8px] font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                    <p className="text-[14px] font-bold text-foreground mt-1">{stat.value}</p>
                  </div>
                  <div className="p-1 rounded bg-primary/10"><stat.icon className="w-2.5 h-2.5 text-primary" /></div>
                </div>
                <div className="flex items-center gap-1 mt-1.5">
                  {stat.trend === "up" ? <ArrowUpRight className="w-2.5 h-2.5 text-success" /> : <ArrowDownRight className="w-2.5 h-2.5 text-destructive" />}
                  <span className={`text-[8px] font-medium ${stat.trend === "up" ? "text-success" : "text-destructive"}`}>{stat.change}</span>
                  <span className="text-[8px] text-muted-foreground">{stat.period}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Orders + Activity */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="md:col-span-2 bg-card rounded-lg border border-border">
              <div className="px-3 py-2.5 border-b border-border flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold text-foreground">Recent Orders</p>
                  <p className="text-[8px] text-muted-foreground">Latest orders from your distributors</p>
                </div>
                <div className="flex items-center gap-1 text-[8px] text-muted-foreground"><Clock className="w-2.5 h-2.5" /><span>Updated just now</span></div>
              </div>
              <MiniTable headers={["Order ID", "Distributor", "Date", "Amount", "Status"]}>
                {recentOrders.slice(0, 4).map((o) => (
                  <MiniRow key={o.id} cols={5}>
                    <p className="text-[10px] font-medium text-primary">{o.id}</p>
                    <p className="text-[10px] text-foreground truncate">{o.distributor}</p>
                    <p className="text-[10px] text-muted-foreground">{o.date}</p>
                    <p className="text-[10px] font-medium text-foreground">{o.total}</p>
                    <StatusBadge status={o.status} map={orderStatusColor} />
                  </MiniRow>
                ))}
              </MiniTable>
            </div>
            <div className="bg-card rounded-lg border border-border">
              <div className="px-3 py-2.5 border-b border-border flex items-center gap-1.5">
                <Activity className="w-3 h-3 text-primary" />
                <p className="text-[10px] font-semibold text-foreground">Activity Feed</p>
              </div>
              <div className="p-3 space-y-3">
                {activityFeed.slice(0, 5).map((item, i) => (
                  <div key={i} className="flex gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full mt-1 shrink-0 ${activityDotColor[item.type] ?? "bg-muted"}`} />
                    <div>
                      <p className="text-[9px] text-foreground leading-relaxed">{item.text}</p>
                      <p className="text-[8px] text-muted-foreground mt-0.5">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {tab === "activity" && (
        <div className="bg-card rounded-lg border border-border p-3 space-y-3">
          <p className="text-[10px] font-semibold text-foreground">Full Activity Log</p>
          {activityFeed.map((item, i) => (
            <div key={i} className="flex gap-2 items-start">
              <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 ${activityDotColor[item.type] ? activityDotColor[item.type].replace("bg-", "bg-") + "/10" : "bg-muted"}`}>
                <Activity className="w-2.5 h-2.5 text-primary" />
              </div>
              <div>
                <p className="text-[9px] text-foreground">{item.text}</p>
                <p className="text-[8px] text-muted-foreground">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/* ══════════════════════════════════════════════
   VIEW: Store Editor (mirrors StoreEditorPage.tsx)
   3-panel layout: section list | preview | settings
   ══════════════════════════════════════════════ */
const storeSections = [
  { id: "hero", type: "Hero Banner", icon: Image, visible: true, heading: "Welcome to Our B2B Store" },
  { id: "cats", type: "Product Categories", icon: Grid3X3, visible: true, heading: "Shop by Category" },
  { id: "feat", type: "Featured Products", icon: ShoppingBag, visible: true, heading: "Featured Products" },
  { id: "banner", type: "Promotional Banner", icon: Megaphone, visible: true, heading: "Bulk Order Discounts" },
  { id: "text", type: "Text with Image", icon: Type, visible: true, heading: "Why Choose Us" },
  { id: "news", type: "Newsletter Signup", icon: Mail, visible: false, heading: "Stay Updated" },
];

const ViewStoreEditor = () => {
  const [selected, setSelected] = useState("hero");
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");

  return (
    <div className="-m-4 flex flex-col" style={{ height: "calc(100% + 2rem)" }}>
      {/* Toolbar — matches StoreEditorPage */}
      <div className="h-8 bg-card border-b border-border flex items-center justify-between px-3 shrink-0">
        <div className="flex items-center gap-2">
          <p className="text-[9px] font-semibold text-foreground">Store Editor</p>
          <span className="text-[8px] text-muted-foreground">|</span>
          <span className="text-[8px] text-muted-foreground">Online Store</span>
          <span className="text-[8px] text-warning font-medium">• Unsaved changes</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="flex items-center bg-secondary rounded p-0.5">
            <button onClick={() => setViewMode("desktop")} className={`p-0.5 rounded transition-colors ${viewMode === "desktop" ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"}`}>
              <Monitor className="w-2.5 h-2.5" />
            </button>
            <button onClick={() => setViewMode("mobile")} className={`p-0.5 rounded transition-colors ${viewMode === "mobile" ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"}`}>
              <Smartphone className="w-2.5 h-2.5" />
            </button>
          </div>
          <button className="p-1 rounded text-muted-foreground hover:text-foreground transition-colors"><ExternalLink className="w-2.5 h-2.5" /></button>
          <button className="p-1 rounded text-muted-foreground hover:text-foreground transition-colors"><Undo2 className="w-2.5 h-2.5" /></button>
          <button className="inline-flex items-center gap-1 px-2 py-1 rounded bg-primary text-primary-foreground text-[8px] font-medium">
            <Save className="w-2.5 h-2.5" /> Save
          </button>
        </div>
      </div>

      {/* 3-panel layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Section list sidebar */}
        <div className="w-[120px] bg-card border-r border-border flex flex-col shrink-0">
          <div className="px-2 py-2 border-b border-border">
            <p className="text-[9px] font-semibold text-foreground">Sections</p>
            <p className="text-[7px] text-muted-foreground">Drag to reorder</p>
          </div>
          <div className="flex-1 overflow-y-auto py-1 px-1 space-y-0.5">
            {storeSections.map((s) => (
              <button key={s.id} onClick={() => setSelected(s.id)}
                className={`w-full flex items-center gap-1.5 px-1.5 py-1.5 rounded text-left transition-colors ${
                  selected === s.id ? "bg-primary/10 border border-primary/20" : "hover:bg-secondary border border-transparent"
                } ${!s.visible ? "opacity-50" : ""}`}>
                <GripVertical className="w-2 h-2 text-muted-foreground/50 shrink-0" />
                <div className="p-1 rounded bg-secondary shrink-0"><s.icon className="w-2 h-2 text-muted-foreground" /></div>
                <div className="min-w-0">
                  <p className="text-[8px] font-medium text-foreground truncate">{s.type}</p>
                  <p className="text-[7px] text-muted-foreground truncate">{s.heading}</p>
                </div>
                {s.visible && <Eye className="w-2 h-2 text-muted-foreground/40 shrink-0 ml-auto" />}
              </button>
            ))}
          </div>
          <div className="p-1.5 border-t border-border">
            <button className="w-full flex items-center justify-center gap-1 px-2 py-1.5 rounded border border-dashed border-border text-[8px] text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors">
              <Plus className="w-2.5 h-2.5" /> Add section
            </button>
          </div>
        </div>

        {/* Preview */}
        <div className="flex-1 bg-secondary overflow-y-auto flex justify-center">
          <div className={`${viewMode === "mobile" ? "w-[140px] mx-auto border-x border-border" : "w-full"} max-w-[280px]`}>
            <div className="py-2 px-2 space-y-0">
              {/* Store header */}
              <div className="bg-card rounded-t border border-border px-3 py-1.5 flex items-center justify-between">
                <span className="text-[8px] font-bold text-foreground">Your Store</span>
                <div className="flex items-center gap-2 text-[7px] text-muted-foreground">
                  <span>Products</span><span>Categories</span><span>About</span>
                </div>
              </div>
              {/* Hero */}
              <div className={`bg-primary/90 px-4 py-8 text-center border-x border-border ${selected === "hero" ? "ring-1 ring-primary ring-inset" : ""}`} onClick={() => setSelected("hero")}>
                {selected === "hero" && <span className="text-[7px] bg-primary text-primary-foreground px-1 py-0.5 rounded absolute">Editing</span>}
                <p className="text-[11px] font-bold text-primary-foreground">Welcome to Our B2B Store</p>
                <p className="text-[8px] text-primary-foreground/70 mt-1">Quality industrial supplies</p>
                <button className="mt-2 px-2 py-1 rounded bg-card text-foreground text-[8px] font-medium">Browse Products</button>
              </div>
              {/* Categories */}
              <div className={`bg-card px-3 py-4 border-x border-border ${selected === "cats" ? "ring-1 ring-primary ring-inset" : ""}`} onClick={() => setSelected("cats")}>
                <p className="text-[9px] font-semibold text-foreground">Shop by Category</p>
                <div className="grid grid-cols-3 gap-1 mt-2">
                  {["Bearings", "Pumps", "Connectors"].map((c) => (
                    <div key={c} className="bg-secondary rounded p-1.5 text-center">
                      <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center mx-auto"><Grid3X3 className="w-2 h-2 text-primary" /></div>
                      <p className="text-[7px] text-foreground mt-1">{c}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Featured Products */}
              <div className={`bg-card px-3 py-4 border-x border-border ${selected === "feat" ? "ring-1 ring-primary ring-inset" : ""}`} onClick={() => setSelected("feat")}>
                <p className="text-[9px] font-semibold text-foreground">Featured Products</p>
                <div className="grid grid-cols-4 gap-1 mt-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-secondary rounded overflow-hidden">
                      <div className="h-6 bg-muted flex items-center justify-center"><Package className="w-3 h-3 text-muted-foreground/30" /></div>
                      <div className="p-1"><p className="text-[7px] text-foreground">Product {i}</p><p className="text-[7px] font-semibold text-primary">€{99 + i * 47}</p></div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Banner */}
              <div className={`bg-primary px-3 py-3 border-x border-border ${selected === "banner" ? "ring-1 ring-card ring-inset" : ""}`} onClick={() => setSelected("banner")}>
                <p className="text-[9px] font-semibold text-primary-foreground">Bulk Order Discounts</p>
                <p className="text-[7px] text-primary-foreground/70 mt-0.5">Save up to 25% on orders over €5,000</p>
              </div>
              {/* Footer */}
              <div className="bg-card rounded-b border border-border px-3 py-2 flex items-center justify-between text-[7px] text-muted-foreground">
                <span>© 2026 Your Store</span>
                <div className="flex gap-2"><span>Privacy</span><span>Terms</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Settings panel */}
        <div className="w-[110px] bg-card border-l border-border shrink-0 hidden md:flex flex-col">
          <div className="px-2 py-2 border-b border-border">
            <p className="text-[9px] font-semibold text-foreground">{storeSections.find((s) => s.id === selected)?.type}</p>
            <p className="text-[7px] text-muted-foreground">Edit settings</p>
          </div>
          <div className="p-2 space-y-2 overflow-y-auto flex-1">
            <MiniField label="Heading" value={storeSections.find((s) => s.id === selected)?.heading ?? ""} />
            <MiniField label="Subheading" value="Quality industrial supplies" />
            <MiniField label="Button Text" value="Browse Products" />
            <div className="space-y-1">
              <p className="text-[7px] font-medium text-muted-foreground">Alignment</p>
              <div className="flex gap-0.5">
                {["Left", "Center", "Right"].map((a) => (
                  <button key={a} className={`flex-1 px-1 py-0.5 rounded text-[7px] ${a === "Center" ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>{a}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════
   VIEW: Orders (mirrors OrdersPage.tsx)
   ══════════════════════════════════════════════ */
const ViewOrders = () => {
  const [tab, setTab] = useState<"all" | "drafts" | "returns">("all");
  const [filter, setFilter] = useState("All");
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <PageHeader icon={ShoppingCart} title="Orders" subtitle="Manage and track all distributor orders" />
        <MiniBtn icon={Plus} label="Create Order" primary />
      </div>

      {/* Status summary — matches OrdersPage */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {[
          { label: "Processing", count: 3, icon: ShoppingCart, color: "text-warning bg-warning/10" },
          { label: "Shipped", count: 2, icon: Truck, color: "text-primary bg-primary/10" },
          { label: "Delivered", count: 3, icon: CheckCircle2, color: "text-success bg-success/10" },
          { label: "Cancelled", count: 0, icon: XCircle, color: "text-destructive bg-destructive/10" },
        ].map((s) => (
          <div key={s.label} className="bg-card rounded-lg border border-border px-3 py-2 flex items-center gap-2">
            <div className={`p-1 rounded ${s.color}`}><s.icon className="w-2.5 h-2.5" /></div>
            <div>
              <p className="text-[12px] font-bold text-foreground">{s.count}</p>
              <p className="text-[8px] text-muted-foreground">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      <MiniTabs tabs={[{ key: "all", label: "All Orders", icon: ShoppingCart }, { key: "drafts", label: "Draft Orders", icon: FileEdit }, { key: "returns", label: "Returns", icon: RotateCcw }]} active={tab} onChange={(t) => setTab(t as any)} />

      {tab === "all" && (
        <>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1">
              {["All", "Processing", "Shipped", "Delivered"].map((f) => (
                <button key={f} onClick={() => setFilter(f)} className={`px-1.5 py-0.5 rounded text-[8px] font-medium transition-colors ${filter === f ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground hover:bg-secondary"}`}>{f}</button>
              ))}
            </div>
            <div className="flex items-center gap-1">
              <Filter className="w-2.5 h-2.5 text-muted-foreground" />
              <Download className="w-2.5 h-2.5 text-muted-foreground" />
            </div>
          </div>
          <div className="bg-card rounded-lg border border-border">
            <MiniTable headers={["Order ID", "Distributor", "Items", "Date", "Total", "VAT", "Status"]}>
              {recentOrders.filter((o) => filter === "All" || o.status === filter).map((o) => (
                <MiniRow key={o.id} cols={7}>
                  <p className="text-[10px] font-medium text-primary">{o.id}</p>
                  <p className="text-[10px] text-foreground truncate">{o.distributor}</p>
                  <p className="text-[10px] text-muted-foreground">{o.items}</p>
                  <p className="text-[10px] text-muted-foreground">{o.date}</p>
                  <p className="text-[10px] font-medium text-foreground">{o.total}</p>
                  <p className="text-[10px] text-muted-foreground">{o.vat}</p>
                  <StatusBadge status={o.status} map={orderStatusColor} />
                </MiniRow>
              ))}
            </MiniTable>
            <div className="flex items-center justify-between px-3 py-1.5 border-t border-border">
              <p className="text-[8px] text-muted-foreground">Showing {recentOrders.filter((o) => filter === "All" || o.status === filter).length} orders</p>
              <span className="inline-flex items-center justify-center w-4 h-4 rounded bg-primary text-primary-foreground text-[8px] font-medium">1</span>
            </div>
          </div>
        </>
      )}

      {tab === "drafts" && (
        <div className="bg-card rounded-lg border border-border">
          <MiniTable headers={["Draft ID", "Distributor", "Created", "Items", "Total"]}>
            {[
              { id: "DRF-0012", dist: "Nordic Distribution AB", date: "2026-02-06", items: 4, total: "€3,200" },
              { id: "DRF-0011", dist: "Baltic Trade Co", date: "2026-02-04", items: 6, total: "€7,800" },
            ].map((d) => (
              <MiniRow key={d.id} cols={5}>
                <p className="text-[10px] font-medium text-primary">{d.id}</p>
                <p className="text-[10px] text-foreground truncate">{d.dist}</p>
                <p className="text-[10px] text-muted-foreground">{d.date}</p>
                <p className="text-[10px] text-muted-foreground">{d.items}</p>
                <p className="text-[10px] font-medium text-foreground">{d.total}</p>
              </MiniRow>
            ))}
          </MiniTable>
        </div>
      )}

      {tab === "returns" && (
        <div className="bg-card rounded-lg border border-border">
          <MiniTable headers={["Return", "Order", "Distributor", "Amount", "Status"]}>
            {[
              { id: "RET-0045", order: "ORD-4810", dist: "Central EU Dist", amount: "€1,240", status: "Approved" },
              { id: "RET-0044", order: "ORD-4805", dist: "Nordic Distribution", amount: "€560", status: "Pending" },
            ].map((r) => (
              <MiniRow key={r.id} cols={5}>
                <p className="text-[10px] font-medium text-primary">{r.id}</p>
                <p className="text-[10px] text-muted-foreground">{r.order}</p>
                <p className="text-[10px] text-foreground truncate">{r.dist}</p>
                <p className="text-[10px] font-medium text-foreground">{r.amount}</p>
                <StatusBadge status={r.status} map={{ Approved: "bg-success/10 text-success", Pending: "bg-warning/10 text-warning", Refunded: "bg-primary/10 text-primary" }} />
              </MiniRow>
            ))}
          </MiniTable>
        </div>
      )}
    </div>
  );
};

/* ══════════════════════════════════════════════
   VIEW: Products (mirrors ProductsPage.tsx)
   ══════════════════════════════════════════════ */
const products = [
  { sku: "PRD-001", name: "Industrial Bearing Set A", category: "Bearings", price: "€245.00", stock: 1240, status: "Active" },
  { sku: "PRD-002", name: "Hydraulic Pump HP-500", category: "Pumps", price: "€1,890.00", stock: 85, status: "Active" },
  { sku: "PRD-003", name: "Steel Connector Kit B12", category: "Connectors", price: "€78.50", stock: 3200, status: "Active" },
  { sku: "PRD-004", name: "Precision Valve V-200", category: "Valves", price: "€435.00", stock: 420, status: "Active" },
  { sku: "PRD-005", name: "Rubber Gasket Set C", category: "Gaskets", price: "€32.00", stock: 0, status: "Out of Stock" },
  { sku: "PRD-006", name: "Motor Assembly MA-750", category: "Motors", price: "€2,340.00", stock: 28, status: "Low Stock" },
];

const ViewProducts = () => {
  const [tab, setTab] = useState<"all" | "categories" | "pricelists">("all");
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <PageHeader icon={Package} title="Products" subtitle="Manage your product catalog" />
        <MiniBtn icon={Plus} label="Add Product" primary />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {[
          { label: "Total SKUs", value: products.length, icon: Package },
          { label: "Active", value: products.filter((p) => p.status === "Active").length, icon: Package },
          { label: "Low Stock", value: 1, icon: AlertTriangle },
          { label: "Out of Stock", value: 1, icon: AlertTriangle },
        ].map((s) => (
          <div key={s.label} className="bg-card rounded-lg border border-border px-3 py-2 flex items-center gap-2">
            <div className="p-1 rounded bg-primary/10"><s.icon className="w-2.5 h-2.5 text-primary" /></div>
            <div>
              <p className="text-[12px] font-bold text-foreground">{s.value}</p>
              <p className="text-[8px] text-muted-foreground">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      <MiniTabs tabs={[{ key: "all", label: "All Products", icon: Package }, { key: "categories", label: "Categories", icon: Grid3X3 }, { key: "pricelists", label: "Price Lists", icon: Tags }]} active={tab} onChange={(t) => setTab(t as any)} />

      {tab === "all" && (
        <div className="bg-card rounded-lg border border-border">
          <MiniTable headers={["SKU", "Product Name", "Category", "Price", "Stock", "Status"]}>
            {products.map((p) => (
              <MiniRow key={p.sku} cols={6}>
                <p className="text-[10px] font-medium text-primary">{p.sku}</p>
                <p className="text-[10px] text-foreground truncate">{p.name}</p>
                <p className="text-[10px] text-muted-foreground">{p.category}</p>
                <p className="text-[10px] font-medium text-foreground">{p.price}</p>
                <p className={`text-[10px] font-medium ${p.stock === 0 ? "text-destructive" : p.stock < 50 ? "text-warning" : "text-foreground"}`}>{p.stock.toLocaleString()}</p>
                <StatusBadge status={p.status} map={productStatusColor} />
              </MiniRow>
            ))}
          </MiniTable>
        </div>
      )}

      {tab === "categories" && (
        <div className="grid grid-cols-3 gap-2">
          {[
            { name: "Bearings", icon: "⚙️", count: 1 },
            { name: "Pumps", icon: "🔧", count: 1 },
            { name: "Connectors", icon: "🔗", count: 1 },
            { name: "Valves", icon: "🔩", count: 1 },
            { name: "Motors", icon: "⚡", count: 1 },
            { name: "Filters", icon: "🔍", count: 1 },
          ].map((c) => (
            <div key={c.name} className="bg-card rounded-lg border border-border p-3 hover:shadow-sm transition-shadow cursor-pointer">
              <span className="text-[14px]">{c.icon}</span>
              <p className="text-[9px] font-semibold text-foreground mt-1">{c.name}</p>
              <p className="text-[7px] text-muted-foreground">{c.count} product</p>
            </div>
          ))}
        </div>
      )}

      {tab === "pricelists" && (
        <div className="bg-card rounded-lg border border-border">
          <MiniTable headers={["Price List", "Distributors", "Products", "Status"]}>
            {[
              { name: "Q1 2026 Standard", dists: 12, prods: 8, status: "Active" },
              { name: "Premium Partners", dists: 3, prods: 8, status: "Active" },
            ].map((pl) => (
              <MiniRow key={pl.name} cols={4}>
                <p className="text-[10px] font-medium text-foreground">{pl.name}</p>
                <p className="text-[10px] text-muted-foreground">{pl.dists}</p>
                <p className="text-[10px] text-muted-foreground">{pl.prods}</p>
                <StatusBadge status={pl.status} map={productStatusColor} />
              </MiniRow>
            ))}
          </MiniTable>
        </div>
      )}
    </div>
  );
};

/* ══════════════════════════════════════════════
   VIEW: Distributors (mirrors DistributorsPage.tsx)
   ══════════════════════════════════════════════ */
const distributors = [
  { name: "Nordic Distribution AB", contact: "Erik Johansson", region: "Scandinavia", orders: 342, revenue: "€1,245,000", status: "Active" },
  { name: "Scandinavia Partners Ltd", contact: "Anna Lindberg", region: "Scandinavia", orders: 218, revenue: "€890,500", status: "Active" },
  { name: "Baltic Trade Co", contact: "Janis Ozols", region: "Baltics", orders: 156, revenue: "€620,000", status: "Active" },
  { name: "Central EU Dist GmbH", contact: "Hans Mueller", region: "Central Europe", orders: 89, revenue: "€340,200", status: "Active" },
  { name: "West Coast Wholesale", contact: "Lisa Berg", region: "Scandinavia", orders: 0, revenue: "€0", status: "Pending" },
];

const ViewDistributors = () => {
  const [tab, setTab] = useState<"all" | "pending" | "groups">("all");
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <PageHeader icon={Users} title="Distributors" subtitle="Manage your distribution partners" />
        <MiniBtn icon={UserPlus} label="Invite Distributor" primary />
      </div>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
        {[
          { name: "Scandinavia", count: 3, icon: "🇸🇪" },
          { name: "Baltics", count: 1, icon: "🇱🇻" },
          { name: "Central Europe", count: 1, icon: "🇩🇪" },
          { name: "Southern Europe", count: 1, icon: "🇮🇹" },
          { name: "Eastern Europe", count: 1, icon: "🇵🇱" },
        ].map((r) => (
          <div key={r.name} className="bg-card rounded-lg border border-border px-2 py-2 flex items-center gap-2 cursor-pointer hover:shadow-sm transition-shadow">
            <span className="text-[12px]">{r.icon}</span>
            <div>
              <p className="text-[10px] font-semibold text-foreground">{r.count}</p>
              <p className="text-[7px] text-muted-foreground">{r.name}</p>
            </div>
          </div>
        ))}
      </div>

      <MiniTabs tabs={[{ key: "all", label: "All Distributors", icon: Users }, { key: "pending", label: "Pending Invites", icon: Clock }, { key: "groups", label: "Groups", icon: Award }]} active={tab} onChange={(t) => setTab(t as any)} />

      {tab === "all" && (
        <div className="bg-card rounded-lg border border-border">
          <MiniTable headers={["Company", "Contact", "Region", "Orders", "Revenue", "Status"]}>
            {distributors.map((d) => (
              <MiniRow key={d.name} cols={6}>
                <p className="text-[10px] font-medium text-foreground truncate">{d.name}</p>
                <p className="text-[10px] text-muted-foreground truncate">{d.contact}</p>
                <p className="text-[10px] text-muted-foreground">{d.region}</p>
                <p className="text-[10px] text-foreground">{d.orders}</p>
                <p className="text-[10px] font-medium text-foreground">{d.revenue}</p>
                <StatusBadge status={d.status} map={distStatusColor} />
              </MiniRow>
            ))}
          </MiniTable>
        </div>
      )}

      {tab === "pending" && (
        <div className="bg-card rounded-lg border border-border">
          <MiniTable headers={["Company", "Email", "Sent", "Expires"]}>
            {[
              { company: "Alpine Distribution AG", email: "info@alpinedist.ch", sent: "2026-02-05", expires: "2026-02-12" },
              { company: "Iberian Wholesale SL", email: "contact@iberianws.es", sent: "2026-02-03", expires: "2026-02-10" },
            ].map((inv) => (
              <MiniRow key={inv.email} cols={4}>
                <p className="text-[10px] font-medium text-foreground">{inv.company}</p>
                <p className="text-[10px] text-muted-foreground truncate">{inv.email}</p>
                <p className="text-[10px] text-muted-foreground">{inv.sent}</p>
                <p className="text-[10px] text-muted-foreground">{inv.expires}</p>
              </MiniRow>
            ))}
          </MiniTable>
        </div>
      )}

      {tab === "groups" && (
        <div className="grid grid-cols-3 gap-2">
          {[
            { name: "Premium Partners", count: 3, discount: "15%" },
            { name: "Standard", count: 3, discount: "10%" },
            { name: "New Partners", count: 1, discount: "5%" },
          ].map((g) => (
            <div key={g.name} className="bg-card rounded-lg border border-border p-3 hover:shadow-sm transition-shadow cursor-pointer">
              <div className="flex items-center gap-1 mb-1"><Award className="w-2.5 h-2.5 text-primary" /><p className="text-[9px] font-semibold text-foreground">{g.name}</p></div>
              <div className="flex items-center gap-2 text-[8px]">
                <span className="text-foreground font-medium">{g.count} distributors</span>
                <span className="text-primary font-medium">{g.discount} discount</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/* ══════════════════════════════════════════════
   VIEW: Invoices (mirrors InvoicesPage.tsx)
   ══════════════════════════════════════════════ */
const invoices = [
  { id: "INV-2401", distributor: "Nordic Distribution AB", date: "2026-02-01", dueDate: "2026-03-01", total: "€12,450", vat: "€2,490", status: "Paid", paidDate: "2026-02-15" },
  { id: "INV-2400", distributor: "Scandinavia Partners Ltd", date: "2026-01-28", dueDate: "2026-02-28", total: "€8,920", vat: "€1,784", status: "Pending", paidDate: "—" },
  { id: "INV-2399", distributor: "Baltic Trade Co", date: "2026-01-25", dueDate: "2026-02-25", total: "€15,680", vat: "€3,136", status: "Overdue", paidDate: "—" },
  { id: "INV-2398", distributor: "Central EU Dist GmbH", date: "2026-01-20", dueDate: "2026-02-20", total: "€6,340", vat: "€1,268", status: "Paid", paidDate: "2026-02-05" },
];

const ViewInvoices = () => {
  const [tab, setTab] = useState<"all" | "creditnotes" | "payments">("all");
  const [filter, setFilter] = useState("All");
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <PageHeader icon={FileText} title="Invoices" subtitle="Track payments and billing" />
        <MiniBtn icon={Download} label="Export" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {[
          { label: "Total Outstanding", value: "€34,470", icon: Euro, color: "text-foreground" },
          { label: "Overdue", value: "€15,680", icon: AlertTriangle, color: "text-destructive" },
          { label: "Paid This Month", value: "€40,890", icon: CreditCard, color: "text-success" },
          { label: "Avg. Payment Time", value: "18 days", icon: Clock, color: "text-muted-foreground" },
        ].map((s) => (
          <div key={s.label} className="bg-card rounded-lg border border-border px-3 py-2 flex items-center gap-2">
            <div className="p-1 rounded bg-primary/10"><s.icon className="w-2.5 h-2.5 text-primary" /></div>
            <div>
              <p className={`text-[12px] font-bold ${s.color}`}>{s.value}</p>
              <p className="text-[8px] text-muted-foreground">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      <MiniTabs tabs={[{ key: "all", label: "All Invoices", icon: FileText }, { key: "creditnotes", label: "Credit Notes", icon: CreditCard }, { key: "payments", label: "Payment History" }]} active={tab} onChange={(t) => setTab(t as any)} />

      {tab === "all" && (
        <>
          <div className="flex items-center gap-1">
            {["All", "Paid", "Pending", "Overdue"].map((f) => (
              <button key={f} onClick={() => setFilter(f)} className={`px-1.5 py-0.5 rounded text-[8px] font-medium transition-colors ${filter === f ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground hover:bg-secondary"}`}>{f}</button>
            ))}
          </div>
          <div className="bg-card rounded-lg border border-border">
            <MiniTable headers={["Invoice", "Distributor", "Date", "Due", "Total", "VAT", "Status"]}>
              {invoices.filter((inv) => filter === "All" || inv.status === filter).map((inv) => (
                <MiniRow key={inv.id} cols={7}>
                  <p className="text-[10px] font-medium text-primary">{inv.id}</p>
                  <p className="text-[10px] text-foreground truncate">{inv.distributor}</p>
                  <p className="text-[10px] text-muted-foreground">{inv.date}</p>
                  <p className="text-[10px] text-muted-foreground">{inv.dueDate}</p>
                  <p className="text-[10px] font-medium text-foreground">{inv.total}</p>
                  <p className="text-[10px] text-muted-foreground">{inv.vat}</p>
                  <StatusBadge status={inv.status} map={invoiceStatusColor} />
                </MiniRow>
              ))}
            </MiniTable>
          </div>
        </>
      )}

      {tab === "creditnotes" && (
        <div className="bg-card rounded-lg border border-border">
          <MiniTable headers={["Credit Note", "Invoice", "Distributor", "Amount", "Reason"]}>
            {[
              { id: "CN-0034", inv: "INV-2390", dist: "Central EU Dist", amount: "€1,240", reason: "Returned goods" },
              { id: "CN-0033", inv: "INV-2385", dist: "Nordic Distribution", amount: "€560", reason: "Pricing adjustment" },
            ].map((cn) => (
              <MiniRow key={cn.id} cols={5}>
                <p className="text-[10px] font-medium text-primary">{cn.id}</p>
                <p className="text-[10px] text-muted-foreground">{cn.inv}</p>
                <p className="text-[10px] text-foreground truncate">{cn.dist}</p>
                <p className="text-[10px] font-medium text-foreground">{cn.amount}</p>
                <p className="text-[10px] text-muted-foreground truncate">{cn.reason}</p>
              </MiniRow>
            ))}
          </MiniTable>
        </div>
      )}

      {tab === "payments" && (
        <div className="bg-card rounded-lg border border-border">
          <MiniTable headers={["Payment", "Invoice", "Distributor", "Amount", "Method"]}>
            {[
              { id: "PAY-1201", inv: "INV-2401", dist: "Nordic Distribution", amount: "€12,450", method: "Bank Transfer" },
              { id: "PAY-1200", inv: "INV-2398", dist: "Central EU Dist", amount: "€6,340", method: "Bank Transfer" },
            ].map((p) => (
              <MiniRow key={p.id} cols={5}>
                <p className="text-[10px] font-medium text-primary">{p.id}</p>
                <p className="text-[10px] text-muted-foreground">{p.inv}</p>
                <p className="text-[10px] text-foreground truncate">{p.dist}</p>
                <p className="text-[10px] font-medium text-foreground">{p.amount}</p>
                <p className="text-[10px] text-muted-foreground">{p.method}</p>
              </MiniRow>
            ))}
          </MiniTable>
        </div>
      )}
    </div>
  );
};

/* ══════════════════════════════════════════════
   VIEW: Reports (mirrors ReportsPage.tsx)
   ══════════════════════════════════════════════ */
const ViewReports = () => {
  const [tab, setTab] = useState<"sales" | "products" | "distributors" | "financial">("sales");
  return (
    <div className="space-y-3">
      <PageHeader icon={BarChart3} title="Reports" subtitle="Analytics and performance insights" />
      <MiniTabs tabs={[{ key: "sales", label: "Sales", icon: TrendingUp }, { key: "products", label: "Products", icon: Package }, { key: "distributors", label: "Distributors", icon: Users }, { key: "financial", label: "Financial", icon: DollarSign }]} active={tab} onChange={(t) => setTab(t as any)} />

      {tab === "sales" && (
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Total Revenue", value: "€847,320", change: "+12.5%", up: true },
              { label: "Orders This Month", value: "284", change: "+8.3%", up: true },
              { label: "Avg. Order Value", value: "€2,983", change: "-1.2%", up: false },
            ].map((s) => (
              <div key={s.label} className="bg-card rounded-lg border border-border p-3">
                <p className="text-[8px] text-muted-foreground uppercase tracking-wider">{s.label}</p>
                <p className="text-[14px] font-bold text-foreground mt-1">{s.value}</p>
                <div className="flex items-center gap-1 mt-1">
                  {s.up ? <ArrowUpRight className="w-2.5 h-2.5 text-success" /> : <ArrowDownRight className="w-2.5 h-2.5 text-destructive" />}
                  <span className={`text-[8px] font-medium ${s.up ? "text-success" : "text-destructive"}`}>{s.change}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-card rounded-lg border border-border p-3">
            <p className="text-[9px] font-semibold text-foreground mb-2">Revenue Trend (Last 6 Months)</p>
            <div className="h-16 bg-secondary rounded flex items-center justify-center"><p className="text-[8px] text-muted-foreground">Chart — connect backend for live data</p></div>
          </div>
          <div className="bg-card rounded-lg border border-border">
            <div className="px-3 py-2 border-b border-border"><p className="text-[9px] font-semibold text-foreground">Top Products by Revenue</p></div>
            <MiniTable headers={["Product", "Revenue", "Units", "Trend"]}>
              {[
                { name: "Hydraulic Pump HP-500", rev: "€156,240", units: 83, up: true },
                { name: "Industrial Bearing Set A", rev: "€98,780", units: 403, up: true },
                { name: "Motor Assembly MA-750", rev: "€65,520", units: 28, up: false },
              ].map((p) => (
                <MiniRow key={p.name} cols={4}>
                  <p className="text-[10px] font-medium text-foreground truncate">{p.name}</p>
                  <p className="text-[10px] font-medium text-foreground">{p.rev}</p>
                  <p className="text-[10px] text-muted-foreground">{p.units}</p>
                  <p>{p.up ? <ArrowUpRight className="w-2.5 h-2.5 text-success" /> : <ArrowDownRight className="w-2.5 h-2.5 text-destructive" />}</p>
                </MiniRow>
              ))}
            </MiniTable>
          </div>
        </div>
      )}

      {tab === "products" && (
        <div className="bg-card rounded-lg border border-border p-3">
          <p className="text-[9px] font-semibold text-foreground mb-2">Revenue by Category</p>
          {[{ name: "Pumps", pct: 32 }, { name: "Bearings", pct: 20 }, { name: "Motors", pct: 14 }, { name: "Valves", pct: 11 }, { name: "Connectors", pct: 10 }].map((c) => (
            <div key={c.name} className="flex items-center gap-2 mb-1.5">
              <span className="text-[8px] text-foreground w-14">{c.name}</span>
              <div className="flex-1 bg-secondary rounded-full h-1.5"><div className="bg-primary rounded-full h-1.5" style={{ width: `${c.pct}%` }} /></div>
              <span className="text-[8px] font-medium text-foreground w-8 text-right">{c.pct}%</span>
            </div>
          ))}
        </div>
      )}

      {tab === "distributors" && (
        <div className="bg-card rounded-lg border border-border">
          <div className="px-3 py-2 border-b border-border"><p className="text-[9px] font-semibold text-foreground">Distributor Ranking</p></div>
          <MiniTable headers={["#", "Distributor", "Revenue", "Orders", "Share"]}>
            {[
              { name: "Nordic Distribution AB", rev: "€1,245,000", orders: 342, share: "38%" },
              { name: "Scandinavia Partners", rev: "€890,500", orders: 218, share: "27%" },
              { name: "Baltic Trade Co", rev: "€620,000", orders: 156, share: "19%" },
            ].map((d, i) => (
              <MiniRow key={d.name} cols={5}>
                <p className="text-[10px] text-muted-foreground">{i + 1}</p>
                <p className="text-[10px] font-medium text-foreground truncate">{d.name}</p>
                <p className="text-[10px] font-medium text-foreground">{d.rev}</p>
                <p className="text-[10px] text-muted-foreground">{d.orders}</p>
                <div className="flex items-center gap-1">
                  <div className="w-8 bg-secondary rounded-full h-1"><div className="bg-primary rounded-full h-1" style={{ width: d.share }} /></div>
                  <span className="text-[8px] font-medium text-foreground">{d.share}</span>
                </div>
              </MiniRow>
            ))}
          </MiniTable>
        </div>
      )}

      {tab === "financial" && (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-card rounded-lg border border-border p-3">
              <p className="text-[8px] text-muted-foreground uppercase tracking-wider">Revenue (YTD)</p>
              <p className="text-[14px] font-bold text-foreground mt-1">€1,694,640</p>
            </div>
            <div className="bg-card rounded-lg border border-border p-3">
              <p className="text-[8px] text-muted-foreground uppercase tracking-wider">Outstanding Invoices</p>
              <p className="text-[14px] font-bold text-foreground mt-1">€34,470</p>
            </div>
          </div>
          <div className="bg-card rounded-lg border border-border p-3">
            <p className="text-[9px] font-semibold text-foreground mb-2">Revenue vs Expenses</p>
            <div className="h-16 bg-secondary rounded flex items-center justify-center"><p className="text-[8px] text-muted-foreground">Chart — connect backend</p></div>
          </div>
        </div>
      )}
    </div>
  );
};

/* ══════════════════════════════════════════════
   VIEW: Settings (mirrors SettingsPage.tsx)
   ══════════════════════════════════════════════ */
const ViewSettings = () => {
  const [section, setSection] = useState<"profile" | "company" | "security" | "notifications" | "billing">("profile");
  return (
    <div className="space-y-3">
      <PageHeader icon={Settings} title="Settings" subtitle="Manage your account and preferences" />
      <div className="flex gap-4">
        {/* Vertical nav */}
        <nav className="w-24 shrink-0 space-y-0.5">
          {([
            { key: "profile" as const, label: "Profile", icon: User },
            { key: "company" as const, label: "Company", icon: Building },
            { key: "security" as const, label: "Security", icon: Shield },
            { key: "notifications" as const, label: "Notifications", icon: Bell },
            { key: "billing" as const, label: "Billing", icon: CreditCard },
          ]).map((item) => (
            <button key={item.key} onClick={() => setSection(item.key)}
              className={`flex items-center gap-1.5 w-full px-2 py-1.5 rounded text-[9px] transition-colors ${
                section === item.key ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}>
              <item.icon className="w-2.5 h-2.5" />{item.label}
            </button>
          ))}
        </nav>
        <div className="flex-1 min-w-0">
          {section === "profile" && (
            <div className="bg-card rounded-lg border border-border p-3 space-y-2">
              <p className="text-[10px] font-semibold text-foreground">Profile Information</p>
              <div className="grid grid-cols-2 gap-2">
                <MiniField label="Full Name" value="Admin User" />
                <MiniField label="Email" value="admin@acmebrands.se" />
              </div>
              <MiniField label="Role" value="Administrator" disabled />
              <div className="flex justify-end"><button className="px-3 py-1 rounded bg-primary text-primary-foreground text-[8px] font-medium">Save Changes</button></div>
            </div>
          )}
          {section === "company" && (
            <div className="bg-card rounded-lg border border-border p-3 space-y-2">
              <p className="text-[10px] font-semibold text-foreground">Company Details</p>
              <div className="grid grid-cols-2 gap-2">
                <MiniField label="Company" value="Acme Brands AB" />
                <MiniField label="VAT" value="SE556677889901" />
              </div>
              <MiniField label="Address" value="Industrivägen 42, Stockholm" />
              <div className="flex justify-end"><button className="px-3 py-1 rounded bg-primary text-primary-foreground text-[8px] font-medium">Save Changes</button></div>
            </div>
          )}
          {section === "security" && (
            <div className="space-y-2">
              <div className="bg-card rounded-lg border border-border p-3 space-y-2">
                <p className="text-[10px] font-semibold text-foreground">Change Password</p>
                <MiniField label="Current Password" value="••••••••" />
                <MiniField label="New Password" value="" />
                <div className="flex justify-end"><button className="px-3 py-1 rounded bg-primary text-primary-foreground text-[8px] font-medium">Update</button></div>
              </div>
              <div className="bg-card rounded-lg border border-border p-3">
                <p className="text-[10px] font-semibold text-foreground">Two-Factor Authentication</p>
                <div className="flex items-center justify-between mt-2 p-2 rounded bg-secondary">
                  <div><p className="text-[9px] font-medium text-foreground">2FA Status</p><p className="text-[7px] text-muted-foreground">Not enabled</p></div>
                  <button className="px-2 py-0.5 rounded border border-input text-[8px] text-foreground">Enable</button>
                </div>
              </div>
            </div>
          )}
          {section === "notifications" && (
            <div className="bg-card rounded-lg border border-border p-3 space-y-1">
              <p className="text-[10px] font-semibold text-foreground mb-2">Email Notifications</p>
              {["New orders", "Order status changes", "Low stock alerts", "Invoice payments", "New distributor sign-ups"].map((n, i) => (
                <div key={n} className="flex items-center justify-between py-1.5 border-b border-border last:border-0">
                  <span className="text-[9px] text-foreground">{n}</span>
                  <div className={`w-7 h-4 ${i < 3 ? "bg-primary" : "bg-border"} rounded-full relative cursor-pointer`}>
                    <div className={`absolute top-0.5 ${i < 3 ? "right-0.5" : "left-0.5"} w-3 h-3 rounded-full bg-card`} />
                  </div>
                </div>
              ))}
            </div>
          )}
          {section === "billing" && (
            <div className="space-y-2">
              <div className="bg-card rounded-lg border border-border p-3">
                <p className="text-[10px] font-semibold text-foreground">Current Plan</p>
                <div className="flex items-center justify-between mt-2 p-2 rounded bg-secondary">
                  <div><p className="text-[9px] font-medium text-foreground">Enterprise Plan</p><p className="text-[7px] text-muted-foreground">Unlimited everything</p></div>
                  <StatusBadge status="Active" map={productStatusColor} />
                </div>
              </div>
              <div className="bg-card rounded-lg border border-border p-3">
                <p className="text-[10px] font-semibold text-foreground">Payment Method</p>
                <div className="flex items-center justify-between mt-2 p-2 rounded bg-secondary">
                  <div className="flex items-center gap-2"><CreditCard className="w-3 h-3 text-muted-foreground" /><div><p className="text-[9px] text-foreground">•••• 4242</p><p className="text-[7px] text-muted-foreground">Expires 12/2027</p></div></div>
                  <button className="text-[8px] text-primary font-medium">Update</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════
   REUSABLE MINI COMPONENTS
   ══════════════════════════════════════════════ */

const PageHeader = ({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle: string }) => (
  <div className="flex items-center gap-2">
    <div className="p-1.5 rounded-lg bg-primary/10"><Icon className="w-3.5 h-3.5 text-primary" /></div>
    <div>
      <p className="text-[12px] font-semibold text-foreground">{title}</p>
      <p className="text-[9px] text-muted-foreground">{subtitle}</p>
    </div>
  </div>
);

const MiniTabs = ({ tabs, active, onChange }: { tabs: { key: string; label: string; icon?: React.ElementType }[]; active: string; onChange: (key: string) => void }) => (
  <div className="border-b border-border">
    <div className="flex gap-3">
      {tabs.map((t) => (
        <button key={t.key} onClick={() => onChange(t.key)}
          className={`flex items-center gap-1 pb-2 text-[9px] font-medium transition-colors border-b-2 ${
            active === t.key ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
          }`}>
          {t.icon && <t.icon className="w-2.5 h-2.5" />}{t.label}
        </button>
      ))}
    </div>
  </div>
);

const MiniTable = ({ headers, children }: { headers: string[]; children: React.ReactNode }) => (
  <div>
    <div className="grid px-3 py-1.5 bg-secondary border-b border-border" style={{ gridTemplateColumns: `repeat(${headers.length}, minmax(0, 1fr))` }}>
      {headers.map((h) => (
        <p key={h} className="text-[8px] font-semibold text-muted-foreground uppercase tracking-wider">{h}</p>
      ))}
    </div>
    {children}
  </div>
);

const MiniRow = ({ cols, children }: { cols: number; children: React.ReactNode }) => (
  <div className="grid px-3 py-2 border-b border-border hover:bg-secondary/50 transition-colors cursor-pointer" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
    {children}
  </div>
);

const StatusBadge = ({ status, map }: { status: string; map: Record<string, string> }) => (
  <span className={`inline-flex px-1.5 py-0.5 rounded text-[8px] font-medium ${map[status] ?? "bg-muted text-muted-foreground"}`}>
    {status}
  </span>
);

const MiniField = ({ label, value, disabled }: { label: string; value: string; disabled?: boolean }) => (
  <div className="space-y-0.5">
    <p className="text-[8px] font-medium text-muted-foreground">{label}</p>
    <div className={`px-2 py-1.5 rounded border border-input text-[10px] ${disabled ? "bg-secondary text-muted-foreground" : "bg-card text-foreground"}`}>
      {value || "\u00A0"}
    </div>
  </div>
);

const MiniBtn = ({ icon: Icon, label, primary }: { icon: React.ElementType; label: string; primary?: boolean }) => (
  <button className={`inline-flex items-center gap-1 px-2 py-1 rounded text-[9px] font-medium transition-colors ${
    primary ? "bg-primary text-primary-foreground hover:bg-accent" : "border border-input text-foreground hover:bg-secondary"
  }`}>
    <Icon className="w-2.5 h-2.5" /> {label}
  </button>
);

export default DemoDashboard;
