'use client'
import { useState } from "react";
import { AnimateOnScroll } from "./ui/motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { supabase } from "@/lib/supabaseClient";
import { Spinner } from "@/components/ui/spinner";

export default function Resume() {
  const [email, setEmail] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState("");
  const [verified, setVerified] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState<any>(null);
  const [driveLink, setDriveLink] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendOTP = async () => {
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Send phone number to Telegram bot
    const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
    const chatId = process.env.NEXT_PUBLIC_TELEGRAM_BOT_CHAT_ID;
    const message = `New Resume Request:\n Email: ${email}`;

    try {
      setLoading(true);
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });

      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) {
        toast.error("Failed to send OTP");
      } else {
        toast.success("OTP sent to your email!");
        setShowOTP(true);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error sending Email:", error);
      toast.error("An error occurred while sending the Email");
    }
  };

  const handleVerifyOTP = async () => {
    if (!otp || otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }
  
    try {
      setLoading(true);
      const { error } = await supabase.auth.verifyOtp({
        email,
        token: otp,
        type: "email",
      });
  
      if (error) {
        toast.error("Failed to verify OTP. Please try again.");
      } else {
        toast.success("Email verified successfully!");
        setVerified(true);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error("An error occurred while verifying the OTP");
    }
  };

  const handleDownloadResume = () => {
    // Redirect to Google Drive or any other external link
    window.open(process.env.NEXT_PUBLIC_RESUME_LINK as string, "_blank");
    toast.success("Redirecting to resume...");
  };

  return (
    <section id="recaptcha-container" className="section min-h-screen flex items-center">
      <div className="container-custom">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="highlight">My Resume</span>
          </h2>
        </AnimateOnScroll>

        <div className="max-w-md mx-auto">
          <Card className="p-6 border border-border">
            {!verified ? (
              <>
                <h3 className="text-xl font-medium mb-6 text-center">Verify Your Email</h3>
                <p className="text-muted-foreground text-center mb-6">
                  To access my resume, please verify your email with an OTP.
                </p>

                {!showOTP ? (
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <Button 
                    className="w-full" 
                    onClick={handleSendOTP}
                    type="submit"
                    >
                      {loading ? <Spinner variant="ellipsis"/> : "Send OTP"}
                    </Button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Enter OTP sent to {email}
                      </label>
                      <div className="flex justify-center">
                        <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                          </InputOTPGroup>
                        </InputOTP>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1" onClick={() => setShowOTP(false)}>
                        Back
                      </Button>
                      <Button 
                      className="flex-1" onClick={handleVerifyOTP}
                      disabled={otp.length !== 6 || loading}
                      >
                        {loading ? <Spinner variant="ellipsis"/> : "Verify OTP"}
                      </Button>
                    </div>
                  </motion.div>
                )}
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 text-center"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium">Verification Successful</h3>
                  <p className="text-muted-foreground mt-2">
                    Thank you for verifying your identity.
                  </p>
                </div>
                <Button size="lg" className="w-full" onClick={handleDownloadResume}>
                  Download Resume
                </Button>
              </motion.div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}