'use client';

import { createContext, ReactNode, useContext, useState } from "react";

type Language = "en" | "es";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.questions": "Questions",
    "nav.social": "Social Media",
    "nav.resources": "Resources",
    "nav.assistant": "AI Assistant",
    "nav.about": "About",
    "nav.profile": "Profile",
    "nav.logout": "Logout",

    // Home Page
    "home.title": "EMPOWER YOUR BUSINESS",
    "home.subtitle": "Access AI-powered tools and resources designed specifically for Hispanic businesses",
    "home.start": "Start Your Business Assessment",

    // Common sections
    "business.diagnostics": "Business Diagnostics",
    "business.diagnostics.desc": "Answer key questions to get personalized recommendations",
    "social.media": "Social Media Strategy",
    "social.media.desc": "Get AI-powered social media marketing suggestions",
    "resource.center": "Resource Center",
    "resource.center.desc": "Access valuable resources and tools for your business",
    "ai.assistant": "AI Assistant",
    "ai.assistant.desc": "Chat with our AI to get instant business advice",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.questions": "Preguntas",
    "nav.social": "Redes Sociales",
    "nav.resources": "Recursos",
    "nav.assistant": "Asistente IA",
    "nav.about": "Nosotros",
    "nav.profile": "Perfil",
    "nav.logout": "Cerrar Sesión",

    // Home Page
    "home.title": "POTENCIA TU NEGOCIO",
    "home.subtitle": "Accede a herramientas y recursos impulsados por IA diseñados específicamente para negocios hispanos",
    "home.start": "Comienza Tu Evaluación de Negocio",

    // Common sections
    "business.diagnostics": "Diagnóstico de Negocio",
    "business.diagnostics.desc": "Responde preguntas clave para obtener recomendaciones personalizadas",
    "social.media": "Estrategia de Redes Sociales",
    "social.media.desc": "Obtén sugerencias de marketing en redes sociales impulsadas por IA",
    "resource.center": "Centro de Recursos",
    "resource.center.desc": "Accede a recursos y herramientas valiosas para tu negocio",
    "ai.assistant": "Asistente IA",
    "ai.assistant.desc": "Chatea con nuestra IA para obtener consejos instantáneos",
  },
};

export const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations["en"]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
