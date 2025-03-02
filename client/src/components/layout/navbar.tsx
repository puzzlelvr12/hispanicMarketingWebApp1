import { Link, useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Home, Users, MessageSquare, Share2, BookOpen, HelpCircle, User } from "lucide-react";
import { LanguageSwitcher } from "@/components/ui/language-switcher";

export default function Navbar() {
  const [location] = useLocation();
  const { user, logoutMutation } = useAuth();
  const { t } = useLanguage();

  const navigation = [
    { name: t("nav.home"), href: "/", icon: Home },
    { name: t("nav.questions"), href: "/questions", icon: HelpCircle },
    { name: t("nav.social"), href: "/social-media", icon: Share2 },
    { name: t("nav.resources"), href: "/resources", icon: BookOpen },
    { name: t("nav.assistant"), href: "/chatbot", icon: MessageSquare },
    { name: t("nav.about"), href: "/about", icon: Users },
  ];

  if (!user && location === "/auth") return null;

  return (
    <nav className="bg-[#501214] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <a className="flex items-center">
                <img 
                  src="/assets/SCALEUP-Logo-2-White.png" 
                  alt="SCALEUP Logo" 
                  className="h-8 w-auto"
                />
              </a>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link key={item.name} href={item.href}>
                    <a
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        location === item.href
                          ? "bg-[#AC9155] text-white"
                          : "text-gray-300 hover:bg-[#6A5638] hover:text-white"
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {item.name}
                    </a>
                  </Link>
                );
              })}
              {user && (
                <>
                  <Link href="/profile">
                    <a className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      location === "/profile"
                        ? "bg-[#AC9155] text-white"
                        : "text-gray-300 hover:bg-[#6A5638] hover:text-white"
                    }`}>
                      <User className="w-4 h-4 mr-2" />
                      {t("nav.profile")}
                    </a>
                  </Link>
                  <LanguageSwitcher />
                  <Button
                    variant="ghost"
                    className="text-gray-300 hover:bg-[#6A5638] hover:text-white transition-colors duration-200"
                    onClick={() => logoutMutation.mutate()}
                  >
                    {t("nav.logout")}
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}