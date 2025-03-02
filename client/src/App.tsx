import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "./hooks/use-auth";
import NotFound from "@/pages/not-found";
import AuthPage from "@/pages/auth-page";
import { ProtectedRoute } from "./lib/protected-route";
import HomePage from "@/pages/home-page";
import QuestionsPage from "@/pages/questions-page";
import SocialMediaPage from "@/pages/social-media-page";
import ResourcesPage from "@/pages/resources-page";
import ChatbotPage from "@/pages/chatbot-page";
import AboutPage from "@/pages/about-page";
import Navbar from "./components/layout/navbar";

function Router() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/auth" component={AuthPage} />
        <Route path="/about" component={AboutPage} />
        <ProtectedRoute path="/" component={HomePage} />
        <ProtectedRoute path="/questions" component={QuestionsPage} />
        <ProtectedRoute path="/social-media" component={SocialMediaPage} />
        <ProtectedRoute path="/resources" component={ResourcesPage} />
        <ProtectedRoute path="/chatbot" component={ChatbotPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
