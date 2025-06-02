"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoginUser, RegisterUser, GetUserSession } from "@/utils/helper";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";



export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        router.push("/");
      }
    };

    checkSession();
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verified] = useState(false);

  const handleSignIn = async () => {
    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }

    try {
      try {
        await LoginUser(email, password);
        toast.success("Logged in successfully!");
      } catch (loginError) {
        await RegisterUser(email, password);
        toast.success("User registered successfully!");
      }

      router.push("/");

    } catch (err) {
      toast.error("Authentication failed: Invalid email or password");
    }
  };


  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card className="w-full max-w-lg bg-white text-black text-xl border-0 rounded-2xl">
      <CardHeader>
        <CardTitle className="text-lg items-center justify-center">
          Welcome to <br />
          <span className="text-3xl">SeedUp!</span>
        </CardTitle>
        <CardDescription>Enter your credentials to login or register</CardDescription>
      </CardHeader>

      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex-col gap-2">
        <Button
          variant="outline"
          className="w-full text-white font-bold h-12 bg-fuchsia-500 rounded-2xl"
          onClick={handleSignIn}
        >
          Sign In / Register
        </Button>
      </CardFooter>
    </Card>
    </div>
  );
}
