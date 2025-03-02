import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MessageSquare, Share2, BookOpen, HelpCircle } from "lucide-react";

export default function HomePage() {
  const features = [
    {
      title: "Business Diagnostics",
      description: "Answer key questions to get personalized recommendations",
      icon: HelpCircle,
      href: "/questions",
      color: "bg-[#EB2E47]",
    },
    {
      title: "Social Media Strategy",
      description: "Get AI-powered social media marketing suggestions",
      icon: Share2,
      href: "/social-media",
      color: "bg-[#EBBA45]",
    },
    {
      title: "Resource Center",
      description: "Access valuable resources and tools for your business",
      icon: BookOpen,
      href: "/resources",
      color: "bg-[#266725]",
    },
    {
      title: "AI Assistant",
      description: "Chat with our AI to get instant business advice",
      icon: MessageSquare,
      href: "/chatbot",
      color: "bg-[#007096]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F1EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-brandon text-4xl font-bold text-[#501214] mb-4">
            EMPOWER YOUR BUSINESS
          </h1>
          <p className="font-nunito text-xl text-[#363534]">
            Access AI-powered tools and resources designed for Hispanic businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Link key={feature.title} href={feature.href}>
              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`p-3 rounded-full w-fit ${feature.color}`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="font-brandon mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-nunito text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild className="bg-[#AC9155] hover:bg-[#6A5638]">
            <Link href="/questions">Start Your Business Assessment</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
