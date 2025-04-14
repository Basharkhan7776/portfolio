
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import { AnimatedText, FadeIn, ScaleIn } from './ui/motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import profile1 from "@/assets/profile/profile1.jpeg";
import profile2 from "@/assets/profile/profile2.jpeg";

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#1c1c1c_1px,transparent_1px)] [background-size:32px_32px] dark:bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] opacity-50"></div>

      <div className="container-custom">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between max-w-5xl mx-auto">
          <div className="max-w-xl text-center md:text-left mt-8 md:mt-0">
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground mb-4">
                Hi, my name is
              </p>
            </FadeIn>

            <AnimatedText
              text="Bashar  Khan."
              className="text-4xl md:text-6xl font-bold mb-4"
              delay={0.4}
            />

            <AnimatedText
              text="I  build  digital  experiences."
              className="text-3xl md:text-5xl text-muted-foreground font-semibold mb-8"
              delay={0.8}
            />

            <FadeIn delay={1.2}>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0">
                I'm a software Developer specializing in building (and occasionally designing)
                exceptional digital experiences. Currently, I'm focused on building accessible,
                human-centered products.
              </p>
            </FadeIn>

            <FadeIn delay={1.5}>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <Button className="min-w-[150px]" asChild>
                  <Link to="/contact">Get in touch</Link>
                </Button>
                <Button variant="outline" className="min-w-[150px]" asChild>
                  <Link to="/projects">See my work</Link>
                </Button>
              </div>
            </FadeIn>

            <ScaleIn delay={1.8}>
              <div className="mt-12 flex items-center justify-center md:justify-start space-x-6">
                <a href="https://github.com/basharkhan7776" className="text-foreground hover:text-accent transition-colors" aria-label="GitHub">
                  <GithubIcon size={20} />
                </a>
                <a href="http://linkedin.com/in/bashar-khan-ba2564291/" className="text-foreground hover:text-accent transition-colors" aria-label="LinkedIn">
                  <LinkedinIcon size={20} />
                </a>
                <a href="https://twitter.com/_Bashar_khan_" className="text-foreground hover:text-accent transition-colors" aria-label="Twitter">
                  <TwitterIcon size={20} />
                </a>
              </div>
            </ScaleIn>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative mx-auto md:mx-0"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-[100px] overflow-hidden border-4 border-accent/30">
              {theme === 'dark' ? (
                <img
                  src={profile1}
                  alt="Bashar Khan - Dark Mode"
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={profile2}
                  alt="Bashar Khan - Light Mode"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="absolute inset-0 rounded-full bg-accent/10 animate-pulse" style={{ animationDuration: '3s' }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
