import { useAuth } from "@/hooks/use-auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { User, Settings } from "lucide-react";

export default function ProfilePage() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#F5F1EE] py-12">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-brandon text-3xl text-center text-[#501214] mb-8">
            YOUR PROFILE
          </h1>

          <Card className="mb-8">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-3 rounded-full bg-[#501214]">
                <User className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="font-brandon text-xl">Account Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 font-nunito">
                <div>
                  <label className="text-sm text-gray-500">Username/Email</label>
                  <p className="text-lg text-[#363534]">{user.username}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Account Type</label>
                  <p className="text-lg text-[#363534]">Business Owner</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Member Since</label>
                  <p className="text-lg text-[#363534]">
                    {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-3 rounded-full bg-[#AC9155]">
                <Settings className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="font-brandon text-xl">Preferences</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 font-nunito">
                <div>
                  <label className="text-sm text-gray-500">Language Preference</label>
                  <p className="text-lg text-[#363534]">English</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Business Category</label>
                  <p className="text-lg text-[#363534]">Not Set</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Notification Settings</label>
                  <p className="text-lg text-[#363534]">Email Notifications Enabled</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
