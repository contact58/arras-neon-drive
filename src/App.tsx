import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyContact from "@/components/StickyContact";
import Index from "./pages/Index";
import Reserver from "./pages/Reserver";
import Blog from "./pages/Blog";
import Avis from "./pages/Avis";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/reserver" element={<Reserver />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/avis" element={<Avis />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <StickyContact />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
