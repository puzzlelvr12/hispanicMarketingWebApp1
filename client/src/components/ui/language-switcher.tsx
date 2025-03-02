import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "es" : "en")}
      className="flex items-center gap-2 text-gray-300 hover:bg-[#6A5638] hover:text-white transition-colors duration-200"
    >
      <Globe className="h-4 w-4" />
      {language === "en" ? "English" : "Español"}
    </Button>
  );
}