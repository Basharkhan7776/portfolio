'use client';
import { ArrowUpRight, GithubIcon, Calendar } from "lucide-react";
import { AnimateOnScroll, AnimatedCard } from "./ui/motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import portfolio from "@/assets/screenshots/portfolio.png";
import cultureConnect from "@/assets/screenshots/culture-connect.png";
import agriMitra from "@/assets/screenshots/agriMitra.png";
import brainly from "@/assets/screenshots/brainly.png";
import roomChat from "@/assets/screenshots/roomChat.png";
import weatherApp from "@/assets/screenshots/weatherApp.png";
import anaMsg from "@/assets/screenshots/anaMsg.png";
import calculator from "@/assets/screenshots/calculator.png";
import ghibliVerse from "@/assets/screenshots/ghibliVerse.png";

const projects = [
  {
    title: "Portfolio Website",
    id: "portfolio",
    description: "A modern portfolio website built with React, featuring smooth animations and a clean design.",
    tags: ["Next", "Tailwind CSS", "Framer Motion"],
    imageUrl: portfolio,
    liveUrl: "/",
    githubUrl: "https://github.com/Basharkhan7776/portfolio",
    date: "April 2025"
  },
  {
    title: "Culture Connect",
    id: "cultureConnect",
    description: "A social networking platform for cultural exchange, allowing users to share experiences and connect with others.",
    tags: ["React", "Firebase", "Google Cloud", "Tailwind CSS"],
    imageUrl: cultureConnect,
    liveUrl: "https://culture-connect-bashar-khan.vercel.app/",
    githubUrl: "https://github.com/Basharkhan7776/Culture-Connect",
    date: "February 2025"
  },
  {
    title: "Brainly",
    id: "brainly",
    description: "Brainly is a web application designed to help users organize and share their knowledge and learning resources. The application allows users to create, store, and share notes, links, and other types of content.",
    tags: ["React", "Node", "Express", "MongoDB", "Tailwind"],
    imageUrl: brainly,
    liveUrl: "https://app-brainly.vercel.app/",
    githubUrl: "https://github.com/Basharkhan7776/Brainly",
    date: "January 2025"
  },
  {
    title: "Ghibli Verse",
    id: "ghibliVerse",
    description: "Ghibli Verse is a unique NFT marketplace for Ghibli-inspired digital art on the Solana blockchain.",
    tags: ["Next", "Tailwind CSS", "Solana", "Gorq AI"],
    imageUrl: ghibliVerse,
    liveUrl: "https://app-ghibliverse.vercel.app/",
    githubUrl: "https://github.com/Basharkhan7776/Ghibli-verse",
    date: "May 2025"
  },
  {
    title: "Agri-Mitra",
    id: "agriMitra",
    description: "A full-stack web application for farmers to manage their crops, track weather data, and connect with local markets.",
    tags: ["React", "Firebase", "Flutter", "Gemini"],
    imageUrl: agriMitra,
    liveUrl: "https://web-agrimitra.vercel.app/",
    githubUrl: "https://github.com/Basharkhan7776/AgriMitra",
    date: "March 2025"
  },
  {
    title: "Room Chat App",
    id: "roomChatApp",
    description: "Room-Chat-App is a simple chat application that allows users to create and join chat rooms, and send messages to other users in the same room.",
    tags: ["React", "Node", "Web Socket", "Tailwind"],
    imageUrl: roomChat,
    liveUrl: "https://roomchatapp.vercel.app/",
    githubUrl: "https://github.com/Basharkhan7776/Room-Chat-App",
    date: "January 2025"
  },
  {
    title: "Anonymous Message App",
    id: "anonymousMessageApp",
    description: "An anonymous messaging application that allows users to send and receive messages without revealing their identities.",
    tags: ["HTML", "CSS", "Javascript", "API"],
    imageUrl: anaMsg,
    liveUrl: "https://send-msg-to-pathan.netlify.app/",
    githubUrl: "https://github.com/Basharkhan7776/Anonymous_message",
    date: "November 2024"
  },
  {
    title: "Calculator App",
    id: "calculatorApp",
    description: "A simple yet elegant Calculator project built using HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: calculator,
    liveUrl: "https://basharkhan7776.github.io/Calculator_App/",
    githubUrl: "https://github.com/Basharkhan7776/Calculator_App",
    date: "November 2024"
  },
  {
    title: "Weather App",
    id: "weatherApp",
    description: "A simple and responsive Weather application built using HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "Javascript", "API"],
    imageUrl: weatherApp,
    liveUrl: "https://weather-app-pathan.netlify.app/",
    githubUrl: "https://github.com/Basharkhan7776/Weather_app",
    date: "October 2024"
  },
];

// Sort projects by date (newest first)
const sortedProjects = [...projects].sort((a, b) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
});

export default function Projects() {
  const [progress, setProgress] = useState(0);
  const featuredProjects = projects.slice(0, 3);
  const timelineProjects = sortedProjects;
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="section">
      <div className="container-custom mt-10">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="highlight">My Projects</span>
          </h2>
        </AnimateOnScroll>

        {/* Featured Projects - Top 3 */}
        <div className="mb-16">
          <AnimateOnScroll>
            <h3 className="text-xl font-medium mb-6 text-center">Featured Projects</h3>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <AnimatedCard key={project.title} delay={index * 0.1}>
                <Card
                  className="h-full flex flex-col overflow-hidden cursor-pointer group border border-border hover:border-accent/50 transition-all"
                  onClick={() => {
                    const targetElement = document.getElementById(project.id);
                    if (targetElement) {
                      targetElement.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                    }
                  }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.imageUrl.src}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="flex-grow p-5">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-5 pt-0 flex justify-between">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <GithubIcon className="mr-1 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <span>View Project</span>
                        <ArrowUpRight className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedCard>
            ))}
          </div>

        </div>

        {/* Timeline Projects - Timeline on left, cards on right */}
        <div className="mt-16">
          <AnimateOnScroll>
            <h3 className="text-xl font-medium mb-8 text-center">Project Timeline</h3>
          </AnimateOnScroll>

          {isMobile ? (
            // Mobile view - cards only
            <div className="space-y-8">
              {timelineProjects.map((project, index) => (
                <AnimateOnScroll key={project.title}>
                  <Card className="border border-border hover:border-accent/50 transition-all overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3 h-48 md:h-auto">
                        <img
                          src={project.imageUrl.src}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-5 md:w-2/3">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold">{project.title}</h4>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-3.5 w-3.5 mr-1" />
                            <span>{project.date}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex justify-between mt-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-muted-foreground"
                            asChild
                          >
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <GithubIcon className="mr-1 h-3 w-3" />
                              Code
                            </a>
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                          >
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <span>View</span>
                              <ArrowUpRight className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                        </div>
                      </div>
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
                      {timelineProjects.map((project, index) => (
                        <AnimateOnScroll key={project.title}>
                          <div className="relative">
                            {/* Timeline Dot */}
                            <div className="absolute left-[-1.9rem] top-0 w-4 h-4 rounded-full bg-accent z-10"></div>
                            <a
                              className="cursor-pointer"
                              href={`#${project.id}`}
                              onClick={(e) => {
                                e.preventDefault();
                                const targetElement = document.getElementById(project.id);
                                if (targetElement) {
                                  targetElement.scrollIntoView({
                                    behavior: "smooth",
                                    block: "center",
                                  });
                                }
                              }}
                            ><div className="mb-1 font-medium">{project.title}</div></a>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="h-3.5 w-3.5 mr-1.5" />
                              <span>{project.date}</span>
                            </div>
                          </div>
                        </AnimateOnScroll>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project cards on right */}
              <div className="md:w-2/3 ">
                <div className="space-y-8">
                  {timelineProjects.map((project, index) => (
                    <AnimateOnScroll key={project.title}>
                      <Card className="border border-border snap-center snap-always hover:border-accent/50 transition-all overflow-hidden" id={project.id}>
                        <div className="md:flex">
                          <div className="md:w-1/3 h-48 md:h-auto">
                            <img
                              src={project.imageUrl.src}
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-5 md:w-2/3">
                            <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.tags.map(tag => (
                                <Badge key={tag} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex justify-between mt-4">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-muted-foreground"
                                asChild
                              >
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                  <GithubIcon className="mr-1 h-3 w-3" />
                                  Code
                                </a>
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                asChild
                              >
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                  <span>View</span>
                                  <ArrowUpRight className="ml-1 h-3 w-3" />
                                </a>
                              </Button>
                            </div>
                          </div>
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
