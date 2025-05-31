import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { InputOTPPattern } from "./otp"

export function AuthComponent() {
  const [step, setStep] = useState<"email" | "otp">("email")
  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState("")

  const handleSendOtp = () => {
    if (!email) return alert("Please enter your email")
    // TODO: Trigger Supabase magic link or OTP here
    console.log("Sending OTP to", email)
    setStep("otp")
  }

  const handleVerifyOtp = () => {
    console.log("Verifying OTP:", otp)
    // TODO: Verify OTP with Supabase
  }

  return (
    <Card className="w-full max-w-lg bg-white text-black text-xl border-0 rounded-2xl">
      <CardHeader>
        <CardTitle className="text-lg items-center justify-center">Welcome to <br/><span className="text-3xl">SeedUp!</span></CardTitle>
        <CardDescription>
          {step === "email"
            ? "Enter your email below to login to your account"
            : `A code has been sent to ${email}`}
        </CardDescription>
      </CardHeader>

      <CardContent>
        {step === "email" ? (
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
            </div>
          </form>
        ) : (
          <div className="grid gap-4">
            <Label htmlFor="otp">Verification Code</Label>
            <InputOTPPattern key={otp} />
          </div>
        )}
      </CardContent>

      <CardFooter className="flex-col gap-2">
        {step === "email" ? (
          <Button
            variant="outline"
            className="w-full text-white font-bold h-12 bg-fuchsia-500 rounded-2xl"
            onClick={handleSendOtp}
          >
            Get Verification Code
          </Button>
        ) : (
          <>
            <Button
              variant="outline"
              className="w-full text-white font-bold h-12 bg-fuchsia-500 rounded-2xl"
              onClick={handleVerifyOtp}
            >
              Verify Code
            </Button>
            <Button variant="link" onClick={() => setStep("email")}>
              ← Back to Email
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  )
}
