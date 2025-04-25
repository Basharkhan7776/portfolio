'use client';
import { useState, useEffect } from "react";
import { AnimateOnScroll } from "./ui/motion";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, Quote, Twitter } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const jobs = [
  {
    company: "E-Cell IIT Bombay",
    role: "Frontend React Developer",
    duration: "August 2024 - October 2024",
    date: "2024-10-24",
    description: ["Pitch a new Figma design for an old web application for campus ambassadors.", "Collaborated with Other Developers to build enhance components in it"],
    technologies: ["React", "Javascript", "Tailwind", "Figma"]
  },
  {
    company: "XYZ Agency",
    role: "Junior Frontend Developer",
    duration: "February 2024 - March 2024",
    date: "2024-02-14",
    description: ["Design UI in Figma for Web 3 trading Flutter App", "Collaborated with Senior Developers to build features and components in it"],
    technologies: ["Flutter", "Firebase", "Figma"]
  },
];

// Sort jobs by date (newest first)
const sortedJobs = [...jobs].sort((a, b) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
});

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    content: "Bashar's ability to translate complex requirements into elegant code is remarkable. He delivered our project ahead of schedule and exceeded all our expectations.",
    avatar: "https://i.pravatar.cc/150?img=1",
    company: "TechCorp",
    date: "March 2023"
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState("Netflix");
  const [progress, setProgress] = useState(0);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 500);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section id="experience" className="min-h-screen pt-24 section">
      <div className="container-custom">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold mb-12 text-center">
            Professional Experience
          </h2>
        </AnimateOnScroll>

        {/* Testimonials Carousel */}
        <div className="mb-16">
          <AnimateOnScroll>
            <h3 className="text-xl font-medium mb-8 text-center">What People Say</h3>
          </AnimateOnScroll>
          
          <Carousel className="w-full max-w-3xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-4">
                    <Card className="p-6 relative">
                      <Quote className="absolute top-4 right-4 h-10 w-10 text-accent/20" />
                      <div className="flex items-center gap-4 mb-4">
                        <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">{testimonial.date}</span>
                        <div className="flex items-center text-sm">
                          <Twitter className="h-4 w-4 mr-1 text-accent" />
                          <span>{testimonial.company}</span>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="static transform-none mx-2" />
              <CarouselNext className="static transform-none mx-2" />
            </div>
          </Carousel>
        </div>

        {/* Experience Timeline - Timeline on left, details on right */}
        <div className="mt-16">
          <AnimateOnScroll>
            <h3 className="text-xl font-medium mb-8 text-center">Tech Career Timeline</h3>
          </AnimateOnScroll>
          
          {isMobile ? (
            // Mobile view - cards only
            <div className="space-y-8">
              {sortedJobs.map((job, index) => (
                <AnimateOnScroll key={job.company}>
                  <Card className="p-6 border border-border hover:border-accent/50 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold">{job.company}</h4>
                      <p className="text-accent font-medium text-sm">{job.role}</p>
                    </div>
                    <div className="flex items-center gap-2 mb-4 text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{job.duration}</span>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {job.description.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2"></div>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {job.technologies.map(tech => (
                        <span key={tech} className="text-xs bg-secondary px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
          ) : (
            // Desktop view - timeline + cards
            <div className="flex flex-col md:flex-row gap-8">
              {/* Timeline on left */}
              <div className="md:w-1/3 relative">
                <div className="sticky top-24">
                  <div className="relative h-full">
                    {/* Vertical Line */}
                    <div className="absolute left-4 top-0 h-full w-1 bg-border">
                      <Progress value={progress} className="h-full w-1" />
                    </div>

                    <div className="space-y-12 ml-10">
                      {sortedJobs.map((job, index) => (
                        <AnimateOnScroll key={job.company}>
                          <div className="relative">
                            {/* Timeline Dot */}
                            <div className="absolute left-[-1.90rem] top-1 w-4 h-4 rounded-full bg-accent z-10"></div>
                            
                            <div className="mb-1 font-medium">{job.company}</div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="h-3.5 w-3.5 mr-1.5" />
                              <span>{job.duration}</span>
                            </div>
                          </div>
                        </AnimateOnScroll>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Job details on right */}
              <div className="md:w-2/3">
                <div className="space-y-8">
                  {sortedJobs.map((job, index) => (
                    <AnimateOnScroll key={job.company}>
                      <Card className="p-6 border border-border hover:border-accent/50 transition-all">
                        <h4 className="text-lg font-semibold">{job.company}</h4>
                        <p className="text-accent font-medium text-sm mb-4">{job.role}</p>
                        <div className="flex items-center gap-2 mb-4 text-muted-foreground text-sm">
                          <Calendar className="h-4 w-4" />
                          <span>{job.duration}</span>
                        </div>
                        <ul className="space-y-2 mb-4">
                          {job.description.map((point, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2"></div>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {job.technologies.map(tech => (
                            <span key={tech} className="text-xs bg-secondary px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </Card>
                    </AnimateOnScroll>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
