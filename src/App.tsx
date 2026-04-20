import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const removeLovableBranding = () => {
      const selectors = [
        'a[href*="lovable" i]',
        'a[href*="gptengineer" i]',
        'img[alt*="lovable" i]',
        'img[src*="lovable" i]',
        '[data-lovable]',
      ];

      document.querySelectorAll(selectors.join(",")).forEach((element) => {
        const text = element.textContent?.toLowerCase() ?? "";
        if (text.includes("lovable") || element.matches('a[href*="lovable" i], a[href*="gptengineer" i], img[alt*="lovable" i], img[src*="lovable" i], [data-lovable]')) {
          element.remove();
        }
      });
    };

    removeLovableBranding();
    const observer = new MutationObserver(removeLovableBranding);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
