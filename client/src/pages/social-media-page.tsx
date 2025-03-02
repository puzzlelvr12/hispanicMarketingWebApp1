import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SiFacebook, SiInstagram, SiX, SiLinkedin } from "react-icons/si";

export default function SocialMediaPage() {
  const platforms = [
    {
      id: "facebook",
      name: "Facebook",
      icon: SiFacebook,
      color: "#1877F2",
      strategies: [
        "Post during peak Hispanic audience times (6-9 PM)",
        "Share bilingual content to reach wider audience",
        "Use Facebook Live for product demonstrations",
        "Create community engagement posts",
      ],
    },
    {
      id: "instagram",
      name: "Instagram",
      icon: SiInstagram,
      color: "#E4405F",
      strategies: [
        "Use Spanish/English hashtags strategically",
        "Share behind-the-scenes content",
        "Post Stories highlighting Hispanic culture",
        "Utilize Reels for product showcases",
      ],
    },
    {
      id: "twitter",
      name: "Twitter/X",
      icon: SiX,
      color: "#000000",
      strategies: [
        "Engage with Hispanic business community",
        "Share industry news and updates",
        "Use trending Hispanic topics",
        "Post quick tips and insights",
      ],
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: SiLinkedin,
      color: "#0A66C2",
      strategies: [
        "Share professional achievements",
        "Connect with Hispanic business networks",
        "Post industry expertise content",
        "Highlight company culture",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F1EE] py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="font-brandon text-3xl text-center text-[#501214] mb-8">
          SOCIAL MEDIA STRATEGY
        </h1>

        <Card className="mb-8">
          <CardContent className="p-6">
            <p className="font-nunito text-lg text-[#363534]">
              Maximize your social media presence with these AI-generated strategies
              tailored for Hispanic businesses. Choose a platform to see specific
              recommendations.
            </p>
          </CardContent>
        </Card>

        <Tabs defaultValue="facebook">
          <TabsList className="grid grid-cols-4 w-full">
            {platforms.map((platform) => (
              <TabsTrigger
                key={platform.id}
                value={platform.id}
                className="flex items-center gap-2"
              >
                <platform.icon style={{ color: platform.color }} />
                <span className="hidden sm:inline">{platform.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {platforms.map((platform) => (
            <TabsContent key={platform.id} value={platform.id}>
              <Card>
                <CardHeader>
                  <CardTitle className="font-brandon text-xl flex items-center gap-2">
                    <platform.icon style={{ color: platform.color }} />
                    {platform.name} Strategy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {platform.strategies.map((strategy, index) => (
                      <li
                        key={index}
                        className="font-nunito flex items-center gap-2 text-[#363534]"
                      >
                        <span className="text-[#AC9155]">•</span>
                        {strategy}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}