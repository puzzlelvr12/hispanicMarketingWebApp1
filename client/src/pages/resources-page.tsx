import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Globe, ChartBar, Users, DollarSign, Lightbulb } from "lucide-react";

export default function ResourcesPage() {
  const resources = [
    {
      category: "Business Planning",
      icon: ChartBar,
      color: "text-[#EB2E47]",
      items: [
        "Business Plan Templates",
        "Market Analysis Tools",
        "Financial Projection Sheets",
        "Strategic Planning Guides",
      ],
    },
    {
      category: "Marketing Resources",
      icon: Globe,
      color: "text-[#EBBA45]",
      items: [
        "Social Media Calendar Templates",
        "Bilingual Content Guidelines",
        "Marketing Plan Templates",
        "Brand Development Guide",
      ],
    },
    {
      category: "Financial Tools",
      icon: DollarSign,
      color: "text-[#266725]",
      items: [
        "Cash Flow Calculator",
        "Expense Tracking Templates",
        "Grant Opportunities",
        "Loan Application Guides",
      ],
    },
    {
      category: "Hispanic Business Networks",
      icon: Users,
      color: "text-[#007096]",
      items: [
        "Local Business Associations",
        "Mentorship Programs",
        "Networking Events",
        "Industry Specific Groups",
      ],
    },
    {
      category: "Educational Content",
      icon: BookOpen,
      color: "text-[#EA664D]",
      items: [
        "Business Management Courses",
        "Digital Marketing Workshops",
        "Financial Literacy Programs",
        "Leadership Training",
      ],
    },
    {
      category: "Innovation & Technology",
      icon: Lightbulb,
      color: "text-[#6EA095]",
      items: [
        "Digital Tools Directory",
        "E-commerce Solutions",
        "Automation Resources",
        "Tech Implementation Guides",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F1EE] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="font-brandon text-3xl text-center text-[#501214] mb-8">
          BUSINESS RESOURCES
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <Card key={resource.category}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <resource.icon className={`h-6 w-6 ${resource.color}`} />
                  <CardTitle className="font-brandon text-xl">
                    {resource.category}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {resource.items.map((item) => (
                    <li
                      key={item}
                      className="font-nunito flex items-center gap-2 text-[#363534]"
                    >
                      <span className="text-[#AC9155]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
