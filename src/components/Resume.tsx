import { useState } from "react";
import { AnimateOnScroll } from "./ui/motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

export default function Resume() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState("");
  const [verified, setVerified] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState<any>(null);
  const [driveLink, setDriveLink] = useState("");
  const [message, setMessage] = useState("");

  const handleSendOTP = async () => {
    // Simple phone number validation
    if (!phoneNumber || phoneNumber.length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }

    // Send phone number to Telegram bot
    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_BOT_CHAT_ID;
    const message = `New Resume Request:\nPhone Number: ${phoneNumber}`;

    try {
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

      if (response.ok) {
        toast.success("OTP sent to your phone number!");
        setShowOTP(true);
      } else {
        toast.error("Failed to send phone number to Telegram");
      }
    } catch (error) {
      console.error("Error sending phone number to Telegram:", error);
      toast.error("An error occurred while sending the phone number");
    }
  };

  const handleVerifyOTP = async () => {
    // For demo purposes, any 6-digit OTP is valid
    if (!otp || otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }

    // Simulate OTP verification
    toast.success("OTP verified successfully!");
    setVerified(true);
  };

  const handleDownloadResume = () => {
    // Redirect to Google Drive or any other external link
    window.open(import.meta.env.VITE_RESUME_LINK, "_blank");
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
                <h3 className="text-xl font-medium mb-6 text-center">Verify Your Number</h3>
                <p className="text-muted-foreground text-center mb-6">
                  To access my resume, please verify your phone number with an OTP.
                </p>

                {!showOTP ? (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    <Button className="w-full" onClick={handleSendOTP}>
                      Send OTP
                    </Button>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Enter OTP sent to {phoneNumber}
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
                      <Button className="flex-1" onClick={handleVerifyOTP}>
                        Verify OTP
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