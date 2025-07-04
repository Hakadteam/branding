import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Heart, Star, Zap, Rocket, Coffee, Code, Palette } from 'lucide-react';

const AnimatedCharacter = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentEmoji, setCurrentEmoji] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const emojis = ['👋', '🚀', '💡', '🎨', '⚡', '🌟'];
  const floatingIcons = [
    { Icon: Sparkles, delay: 0, color: 'text-yellow-400' },
    { Icon: Heart, delay: 0.5, color: 'text-red-400' },
    { Icon: Star, delay: 1, color: 'text-blue-400' },
    { Icon: Zap, delay: 1.5, color: 'text-purple-400' },
    { Icon: Rocket, delay: 2, color: 'text-green-400' },
    { Icon: Coffee, delay: 2.5, color: 'text-orange-400' },
    { Icon: Code, delay: 3, color: 'text-cyan-400' },
    { Icon: Palette, delay: 3.5, color: 'text-pink-400' }
  ];

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEmoji((prev) => (prev + 1) % emojis.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: 100,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.2
      }
    }
  };

  const characterVariants = {
    hidden: { 
      opacity: 0,
      scale: 0,
      rotate: -180
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 1.5
      }
    },
    hover: {
      scale: 1.1,
      rotate: [0, -10, 10, -5, 5, 0],
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
        rotate: {
          duration: 0.6,
          ease: "easeInOut"
        }
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const floatingVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const bounceVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.5
      }
    }
  };

  const iconVariants = {
    hidden: { 
      opacity: 0,
      scale: 0,
      rotate: -180
    },
    visible: (delay: number) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: delay + 1
      }
    }),
    float: {
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-green-200/30 to-yellow-200/30 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center"
        >
          {/* Main Character */}
          <div className="relative flex justify-center mb-12">
            {/* Floating Icons Around Character */}
            {floatingIcons.map((item, index) => {
              const Icon = item.Icon;
              const angle = (index * 45) - 22.5; // Distribute around circle
              const radius = 120;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              
              return (
                <motion.div
                  key={index}
                  className={`absolute ${item.color}`}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  variants={iconVariants}
                  initial="hidden"
                  animate={["visible", "float"]}
                  custom={item.delay}
                >
                  <Icon className="h-6 w-6 md:h-8 md:w-8" />
                </motion.div>
              );
            })}

            {/* Pulsing Background Circle */}
            <motion.div
              className="absolute inset-0 w-48 h-48 md:w-64 md:h-64 mx-auto bg-gradient-to-r from-brand-blue-400/20 to-brand-green-400/20 rounded-full"
              variants={pulseVariants}
              animate="animate"
            />

            {/* Main Character Container */}
            <motion.div
              className="relative w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-white to-gray-50 rounded-full shadow-2xl border-4 border-white cursor-pointer"
              variants={characterVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              {/* Character Face */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="text-6xl md:text-8xl"
                  animate={{
                    scale: isHovered ? 1.2 : 1,
                    rotate: isHovered ? [0, -10, 10, 0] : 0
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15
                  }}
                >
                  {emojis[currentEmoji]}
                </motion.div>
              </div>

              {/* Floating Animation */}
              <motion.div
                className="absolute inset-0"
                variants={bounceVariants}
                animate="animate"
              />

              {/* Sparkle Effects on Hover */}
              {isHovered && (
                <>
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${20 + (i % 2) * 60}%`
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        y: [0, -20, -40]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </>
              )}
            </motion.div>
          </div>

          {/* Text Content */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={controls}
            className="space-y-6"
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
              animate={{
                backgroundPosition: isHovered ? ['0%', '100%'] : '0%'
              }}
              style={{
                background: 'linear-gradient(90deg, #1f2937, #3b82f6, #10b981, #1f2937)',
                backgroundSize: '300% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
              transition={{
                duration: 2,
                repeat: isHovered ? Infinity : 0,
                ease: "linear"
              }}
            >
              Let's Create Something Amazing Together!
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              variants={textVariants}
            >
              Ready to transform your digital presence? Our team is excited to bring your vision to life 
              with innovative design and cutting-edge technology.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
              variants={textVariants}
            >
              <motion.button
                className="group bg-gradient-to-r from-brand-blue-600 to-brand-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Start Your Project</span>
                  <motion.div
                    animate={{ x: isHovered ? 5 : 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Rocket className="h-5 w-5" />
                  </motion.div>
                </span>
              </motion.button>

              <motion.button
                className="text-brand-blue-600 border-2 border-brand-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-blue-600 hover:text-white transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#2563eb",
                  color: "#ffffff"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('portfolio');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                View Our Work
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Bottom Decorative Elements */}
          <motion.div 
            className="flex justify-center space-x-8 mt-16"
            variants={floatingVariants}
            initial="hidden"
            animate={controls}
          >
            {[Sparkles, Star, Heart].map((Icon, index) => (
              <motion.div
                key={index}
                className="text-brand-blue-400"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: "easeInOut"
                }}
              >
                <Icon className="h-8 w-8" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedCharacter;