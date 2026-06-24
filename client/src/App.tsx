import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router } from "wouter"; // Adicionei 'Router' aqui
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

function RouterComponent() {
  return (
    /* O segredo está nesta linha abaixo: base="/portfolio-tecnico-pablo" */
    <Router base="/portfolio-tecnico-pablo">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <RouterComponent />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
