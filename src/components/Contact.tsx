import { AnimateOnScroll, ScaleIn } from "./ui/motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MailIcon, MessageSquare, Send } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Contact() {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN; 
    const chatId = import.meta.env.VITE_TELEGRAM_BOT_CHAT_ID; 
    const message = `
      New Contact Form Submission:
      - Name: ${formData.name}
      - Email: ${formData.email}
      - Message: ${formData.message}
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,//
          text: message,
        }),
      });

      if (response.ok) {
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Failed to send message to Telegram");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`section min-h-screen ${isContactPage ? "pt-28" : ""}`}>
      <div className="container-custom">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="highlight">Get In Touch</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Have a project in mind or just want to chat? Feel free to reach out!
              I'm currently open to new opportunities.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <AnimateOnScroll>
            <Card className="p-6 bg-background shadow-sm flex flex-col h-full">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
                <p className="text-muted-foreground text-sm">
                  Feel free to reach out through the form or directly via email or social media.
                </p>
              </div>

              <div className="space-y-4 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="bg-accent/10 p-2 rounded-full">
                    <MailIcon size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=basharkhan7776@gmail.com"
                      className="text-sm text-muted-foreground hover:text-accent"
                    >
                      basharkhan7776@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-accent/10 p-2 rounded-full">
                    <MessageSquare size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Social</p>
                    <div className="flex gap-2 text-sm text-muted-foreground">
                      <a
                        href="https://twitter.com/_Bashar_khan_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent"
                      >
                        Twitter
                      </a>
                      <span>•</span>
                      <a
                        href="https://www.linkedin.com/in/bashar-khan-ba2564291/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent"
                      >
                        LinkedIn
                      </a>
                      <span>•</span>
                      <a
                        href="https://github.com/Basharkhan7776"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <Card className="p-6 bg-background shadow-sm">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="text-sm font-medium block mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium block mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium block mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="What would you like to discuss?"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button className="w-full" type="submit" disabled={isSubmitting}>
                  <Send className="mr-2 h-4 w-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
              {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
            </Card>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
