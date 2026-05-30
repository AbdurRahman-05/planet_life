import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { lazy, Suspense, useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ScrollToTop from "@/components/ScrollToTop";
import BackToTop from "@/components/BackToTop";
import { AdminProvider, useAdmin } from "@/context/AdminContext";

import WhatsAppWidget from "@/components/WhatsAppWidget";
import LoadingScreen from "@/components/LoadingScreen";
import { LeadFormModal } from "@/components/LeadFormModal";

// Lazy load all pages for code splitting
const Home = lazy(() => import("./pages/Home"));
const Destinations = lazy(() => import("./pages/Destinations"));
const DestinationDetail = lazy(() => import("./pages/DestinationDetail"));
const Packages = lazy(() => import("./pages/Packages"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Booking = lazy(() => import("./pages/Booking"));
const Quote = lazy(() => import("./pages/Quote"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AdminLogin = lazy(() => import("@/pages/admin/Login"));
const AdminDashboard = lazy(() => import("@/pages/admin/Dashboard"));

const queryClient = new QueryClient();

const PageLoader = () => <LoadingScreen />;

const AppContent = () => {
  const { isLoading, destinations } = useAdmin();
  const location = useLocation();
  const navigate = useNavigate();
  const prevPathnameRef = useRef(location.pathname);
  const seenPagesRef = useRef<Set<string>>(new Set([location.pathname]));
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  useEffect(() => {
    const prevPathname = prevPathnameRef.current;
    prevPathnameRef.current = location.pathname;

    const isAdminRoute = location.pathname.startsWith("/admin");
    const isSubmitted = localStorage.getItem("leadFormSubmitted") === "true";
    const showLead = new URLSearchParams(location.search).get("lead") === "true";

    if (showLead && !isAdminRoute) {
      setIsLeadModalOpen(true);
    } else if (location.pathname !== prevPathname && !isAdminRoute && !isSubmitted) {
      if (!seenPagesRef.current.has(location.pathname)) {
        setIsLeadModalOpen(true);
        seenPagesRef.current.add(location.pathname);
      }
    }
  }, [location.pathname, location.search]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <BackToTop />
      <WhatsAppWidget />
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/" element={<AdminLogin />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />

            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destination/:id" element={<DestinationDetail />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/booking/:packageId" element={<Booking />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />

      <LeadFormModal
        isOpen={isLeadModalOpen}
        onClose={() => {
          setIsLeadModalOpen(false);
          const searchParams = new URLSearchParams(location.search);
          if (searchParams.get("lead") === "true") {
            searchParams.delete("lead");
            const newSearch = searchParams.toString();
            navigate({
              pathname: location.pathname,
              search: newSearch ? `?${newSearch}` : "",
            }, { replace: true });
          }
        }}
        destinations={destinations || []}
      />
    </div>
  );
};

const App = () => {
  console.log("App component rendering");
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AdminProvider>
          <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <AppContent />
          </BrowserRouter>
        </AdminProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
