'use client';
import { useState, useEffect } from "react";
import { Ripple } from "@/components/magicui/ripple";
import { motion } from 'framer-motion';
import { Waves } from 'lucide-react';
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  // List of emotions with their value, label, and color
  const emotions = [
    { value: 0, label: "😞 Sad", color: "from-blue-500/50" },
    { value: 25, label: "😌 Content", color: "from-green-500/50" },
    { value: 50, label: "🙂 Calm", color: "from-purple-500/50" },
    { value: 75, label: "😁 Happy", color: "from-yellow-500/50" },
    { value: 100, label: "🤩 Thrilled", color: "from-pink-500/50" },
  ];

  // State to track the current emotion value (default: 50, "Calm")
  const [emotion, setEmotion] = useState(50);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Find the closest emotion object to the current emotion value
  // Defaults to "Calm" if none are within 15 units
  const currentEmotion =
    emotions.find((em) => Math.abs(emotion - em.value) < 15) || emotions[2];

  return (
    // Main page wrapper: fills the viewport and prevents overflow
    <div className="flex flex-col min-h-screen overflow-hidden">
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center">
        {/* Animated background ripple effect */}
        <Ripple className="absolute inset-0 -z-5 opacity-60" />

        {/* Tagline banner with subtle border and blur */}
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 
        text-sm border border-primary/20 bg-primary/5 backdrop-blur-sm 
        hover:border-primary/40 ">
          
        <Waves className="w-4 h-4 animate-wave text-primary" /> 

          <span className="relative text-foreground/90 ">
            Your Ai Chamber of Reflection
          </span>
        </div>

        {/* Main heading */}
        <motion.div
          className="mt-15 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold font-plus-jakarta tracking-tight">
            {/* "Find Peace" with gradient and hover effect */}
            <span className="inline-block bg-gradient-to-b from-primary via-primary/90 to-secondary 
            bg-clip-text text-transparent [text-shadow:_0_1px_0_rgb(0_0_0_/_20%)]">
              Let the River  
            </span>
            <br />
            <span className="inline-block mt-2 bg-gradient-to-b from-foreground to-foreground/50 
            bg-clip-text text-transparent">
              Flow
            </span>
          </h1>

          <motion.p
            className="mt-5 max-w[600px] msx-auto text-base md:text-lg text-muted-foreground 
            leading-relaxed tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Navigate the currents of your emotions. 
            Our AI companion is here to listen, understand and guide you through life's journey.
          </motion.p>

          {/*emotion slider*/ }
          <motion.div className="mt-8 w-full max-w-[600px] mx-auto space-y-6 py-8"
          initial={{opacity: 0, y:20}}
          animate={{opacity:mounted ? 1:0, y: mounted ? 0:20}}
          transition ={{delay: 0.3, duration:0.8}}
          >
            <div className="space-y-2 text-center">
              <p className="text-sm text-muted-foreground/80 font-medium">
              A space where every emotion finds its voice and we're here to listen
              </p>
              <div className="mt-5 flex justify-between items-center px-2">
                {emotions.map((em) => (
                  // Each emotion is clickable and updates the slider value
                  <div
                    key={em.value}
                    className={`transition-all duration-500 ease-out coursor-pointer hover:scale-105 ${
                      Math.abs(emotion - em.value) < 15
                        ? "opacity-100 scale-110 transform-gpu"
                        : "opacity-50 scale-100"
                    }`}
                    onClick={() => setEmotion(em.value)}
                  >
                    {/* Main emotion label (e.g., "Very", "Slightly", etc.) */}
                    <div className="text-2xl transform-gpu">
                      {em.label.split(" ")[0]}
                    </div>
                    {/* Secondary emotion label (e.g., "Sad", "Happy", etc.) */}
                    <div className="text-xs text-muted-foreground mt-1 font-medium">
                      {em.label.split(" ")[1]}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider */}
            <Slider
              value={[emotion]}
              onValueChange={(value) => setEmotion(value[0])}
              min={0}
              max={100}
              step={1}
              className="py-4"
            />
          </motion.div>

          {/*call to action button */}
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Button 
              size="lg" 
              className="relative group h-12 px-8 rounded-full 
                bg-gradient-to-m from-primary via-primary/90 to-secondary 
                shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              <span className="relative z-10 font-medium flex items-center gap-2">
                Begin Your Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"/>
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
