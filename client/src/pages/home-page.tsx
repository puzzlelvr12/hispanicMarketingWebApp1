import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MessageSquare, Share2, BookOpen, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

const MotionCard = motion(Card);

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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <img 
            src="/assets/scaleup-logo-color-no-txstate.png"
            alt="SCALEUP Logo"
            className="h-16 mx-auto mb-6"
          />
          <h1 className="font-brandon text-4xl font-bold text-[#501214] mb-4 tracking-wide">
            EMPOWER YOUR BUSINESS
          </h1>
          <p className="font-nunito text-xl text-[#363534] max-w-2xl mx-auto">
            Access AI-powered tools and resources designed specifically for Hispanic businesses
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Link key={feature.title} href={feature.href}>
              <MotionCard 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardHeader>
                  <div className={`p-3 rounded-full w-fit ${feature.color}`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="font-brandon mt-4 tracking-wide">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-nunito text-gray-600">{feature.description}</p>
                </CardContent>
              </MotionCard>
            </Link>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Button 
            asChild 
            className="bg-[#AC9155] hover:bg-[#6A5638] transition-colors duration-300 text-lg px-8 py-6"
          >
            <Link href="/questions">Start Your Business Assessment</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}