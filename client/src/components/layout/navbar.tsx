import { Link, useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Home, MessageSquare, BookOpen, User, Menu } from "lucide-react";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { useState } from "react";

export default function Navbar() {
  const [location] = useLocation();
  const { user, logoutMutation } = useAuth();
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: t("nav.home"), href: "/", icon: Home },
    { name: t("nav.questions"), href: "/questions", icon: MessageSquare },
    { name: t("nav.resources"), href: "/resources", icon: BookOpen },
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

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
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
                <div className="h-6 w-px bg-gray-600 mx-2" />
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

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link key={item.name} href={item.href}>
                    <a
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                        location === item.href
                          ? "bg-[#AC9155] text-white"
                          : "text-gray-300 hover:bg-[#6A5638] hover:text-white"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
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
                    <a
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                        location === "/profile"
                          ? "bg-[#AC9155] text-white"
                          : "text-gray-300 hover:bg-[#6A5638] hover:text-white"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <User className="w-4 h-4 mr-2" />
                      {t("nav.profile")}
                    </a>
                  </Link>
                  <div className="px-3 py-2">
                    <LanguageSwitcher />
                  </div>
                  <Button
                    variant="ghost"
                    className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:bg-[#6A5638] hover:text-white"
                    onClick={() => {
                      logoutMutation.mutate();
                      setIsMenuOpen(false);
                    }}
                  >
                    {t("nav.logout")}
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}