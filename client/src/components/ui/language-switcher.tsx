import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "es" : "en")}
      className="text-gray-300 hover:bg-[#6A5638] hover:text-white transition-colors duration-200"
    >
      {language.toUpperCase()}
    </Button>
  );
}
