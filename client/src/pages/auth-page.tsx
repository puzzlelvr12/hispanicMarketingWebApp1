import { useAuth } from "@/hooks/use-auth";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertUserSchema } from "@shared/schema";
import { Redirect } from "wouter";

export default function AuthPage() {
  const { user, loginMutation, registerMutation } = useAuth();
  
  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      <div className="flex items-center justify-center p-8">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="font-brandon text-center text-2xl text-[#501214]">
              WELCOME TO HISPANIC BUSINESS HUB
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <LoginForm onSubmit={(data) => loginMutation.mutate(data)} />
              </TabsContent>
              <TabsContent value="register">
                <RegisterForm onSubmit={(data) => registerMutation.mutate(data)} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      <div className="hidden md:flex flex-col justify-center p-8 bg-[#501214] text-white">
        <h2 className="font-brandon text-4xl mb-6">GROW YOUR BUSINESS WITH AI</h2>
        <p className="text-lg mb-4 font-nunito">
          Join our platform designed specifically for Hispanic businesses:
        </p>
        <ul className="space-y-4 font-nunito">
          <li>• AI-powered marketing assistance</li>
          <li>• Business diagnostics and insights</li>
          <li>• Social media strategy development</li>
          <li>• Access to valuable resources</li>
        </ul>
      </div>
    </div>
  );
}

function LoginForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(insertUserSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="username">Username</Label>
        <Input id="username" {...register("username")} />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" {...register("password")} />
      </div>
      <Button type="submit" className="w-full bg-[#AC9155] hover:bg-[#6A5638]">
        Login
      </Button>
    </form>
  );
}

function RegisterForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(insertUserSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="reg-username">Username</Label>
        <Input id="reg-username" {...register("username")} />
      </div>
      <div>
        <Label htmlFor="reg-password">Password</Label>
        <Input type="password" id="reg-password" {...register("password")} />
      </div>
      <Button type="submit" className="w-full bg-[#AC9155] hover:bg-[#6A5638]">
        Register
      </Button>
    </form>
  );
}
