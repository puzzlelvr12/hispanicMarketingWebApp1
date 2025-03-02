import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5F1EE] py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="font-brandon text-4xl text-center text-[#501214] mb-8">
          ABOUT HISPANIC BUSINESS HUB
        </h1>
        
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="font-brandon text-2xl text-[#501214] mb-4">Our Mission</h2>
            <p className="font-nunito text-lg text-[#363534] mb-6">
              Hispanic Business Hub is dedicated to empowering Hispanic business owners 
              through technology and artificial intelligence. We provide tools and 
              resources to help your business thrive in the digital age.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-brandon text-xl text-[#501214] mb-3">
                What We Offer
              </h3>
              <ul className="font-nunito space-y-2 text-[#363534]">
                <li>• AI-powered business diagnostics</li>
                <li>• Social media marketing strategies</li>
                <li>• Resource library and tools</li>
                <li>• Bilingual support</li>
                <li>• Personalized recommendations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-brandon text-xl text-[#501214] mb-3">
                Our Values
              </h3>
              <ul className="font-nunito space-y-2 text-[#363534]">
                <li>• Community empowerment</li>
                <li>• Innovation and technology</li>
                <li>• Cultural understanding</li>
                <li>• Business growth</li>
                <li>• Accessible resources</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center font-roboto-mono tracking-[0.2em] text-sm text-[#6A5638]">
          CONTACT: support@hispanicbusinesshub.com
        </div>
      </div>
    </div>
  );
}
