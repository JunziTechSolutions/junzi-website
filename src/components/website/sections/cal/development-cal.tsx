"use client"

import { ClipboardList, Users, MessageSquare, Shield } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import CalComponent from "./cal";

// Добавляем стили для шрифтов
const titleStyle = {
  fontFamily: 'Space Grotesk, sans-serif',
  fontWeight: 500,
  fontStyle: 'normal',
  fontSize: '51.37px',
  lineHeight: '140%',
  letterSpacing: '-3%',
  textAlign: 'center' as const,
  background: 'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  marginBottom: '24px'
}

const subtitleStyle = {
  fontFamily: 'Manrope, sans-serif',
  fontWeight: 400,
  fontStyle: 'normal',
  fontSize: '18.35px',
  lineHeight: '100%',
  letterSpacing: '0%',
  textAlign: 'center' as const,
  color: '#111827',
  marginBottom: '32px'
}

const calComponentStyle = {
  width: '100%',
  maxWidth: '1279px',
 // Увеличиваем минимальную высоту для мобильных
  borderRadius: '21.35px',
  margin: '0 auto',
  overflow: 'hidden'
}

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export function DevelopmentSprints() {
  const features = [
    {
      icon: ClipboardList,
      title: "Guidance from Idea to Launch",
      description: "Step-by-step support to bring your concept to life.",
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "A dedicated team to make your vision a reality.",
    },
    {
      icon: MessageSquare,
      title: "Clear Communication",
      description: "Ongoing collaboration throughout the entire process.",
    },
    {
      icon: Shield,
      title: "Project Confidence",
      description: "Assurance that your project is managed by experts.",
    },
  ]

  return (
    <section className="py-24 relative" id="development-sprints">
      {/* Background spray effect - positioned behind the content */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        {/* Main spray effect - desktop */}
        <div 
          className="absolute hidden md:block"
          style={{
            left: '50%',
            top: '50%',
            width: '1200px',
            height: '1200px',
            background: `
              radial-gradient(circle 600px at 50% 50%, rgba(188, 213, 227, 0.6) 0%, rgba(188, 213, 227, 0.4) 20%, rgba(188, 213, 227, 0.25) 40%, rgba(188, 213, 227, 0.15) 60%, transparent 80%),
              radial-gradient(circle 450px at 50% 50%, rgba(188, 213, 227, 0.5) 0%, rgba(188, 213, 227, 0.3) 25%, rgba(188, 213, 227, 0.2) 45%, rgba(188, 213, 227, 0.1) 65%, transparent 85%),
              radial-gradient(circle 300px at 50% 50%, rgba(188, 213, 227, 0.45) 0%, rgba(188, 213, 227, 0.28) 30%, rgba(188, 213, 227, 0.18) 50%, rgba(188, 213, 227, 0.08) 70%, transparent 90%)
            `,
            filter: 'blur(3px)',
            transform: 'translate(-50%, -50%)',
            zIndex: -1
          }}
        />
        
        {/* Main spray effect - mobile */}
        <div 
          className="absolute md:hidden"
          style={{
            left: '50%',
            top: '50%',
            width: '600px',
            height: '600px',
            background: `
              radial-gradient(circle 300px at 50% 50%, rgba(188, 213, 227, 0.6) 0%, rgba(188, 213, 227, 0.4) 20%, rgba(188, 213, 227, 0.25) 40%, rgba(188, 213, 227, 0.15) 60%, transparent 80%),
              radial-gradient(circle 225px at 50% 50%, rgba(188, 213, 227, 0.5) 0%, rgba(188, 213, 227, 0.3) 25%, rgba(188, 213, 227, 0.2) 45%, rgba(188, 213, 227, 0.1) 65%, transparent 85%),
              radial-gradient(circle 150px at 50% 50%, rgba(188, 213, 227, 0.45) 0%, rgba(188, 213, 227, 0.28) 30%, rgba(188, 213, 227, 0.18) 50%, rgba(188, 213, 227, 0.08) 70%, transparent 90%)
            `,
            filter: 'blur(2px)',
            transform: 'translate(-50%, -50%)',
            zIndex: -1
          }}
        />
        
        {/* Additional subtle spray elements for depth - desktop */}
        <div 
          className="absolute hidden md:block"
          style={{
            left: 'calc(50% - 100px)',
            top: '60%',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(89, 103, 181, 0.08) 0%, rgba(144, 142, 237, 0.05) 40%, transparent 70%)',
            filter: 'blur(20px)',
            transform: 'translate(-50%, -50%)',
            zIndex: -1
          }}
        />
        
        {/* Additional subtle spray elements for depth - mobile */}
        <div 
          className="absolute md:hidden"
          style={{
            left: '50%',
            top: '60%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(89, 103, 181, 0.06) 0%, rgba(144, 142, 237, 0.04) 40%, transparent 70%)',
            filter: 'blur(15px)',
            transform: 'translate(-50%, -50%)',
            zIndex: -1
          }}
        />
        
        {/* Extended bottom spray effect - desktop */}
        <div 
          className="absolute hidden md:block"
          style={{
            left: '50%',
            top: '75%',
            width: '1000px',
            height: '350px',
            background: `
              radial-gradient(circle 500px at 50% 50%, rgba(188, 213, 227, 0.3) 0%, rgba(188, 213, 227, 0.2) 25%, rgba(188, 213, 227, 0.15) 45%, rgba(188, 213, 227, 0.08) 65%, transparent 85%),
              radial-gradient(circle 300px at 50% 50%, rgba(89, 103, 181, 0.12) 0%, rgba(144, 142, 237, 0.08) 30%, rgba(188, 213, 227, 0.04) 50%, transparent 70%)
            `,
            filter: 'blur(4px)',
            transform: 'translate(-50%, -50%)',
            zIndex: -1
          }}
        />
        
        {/* Extended bottom spray effect - mobile */}
        <div 
          className="absolute md:hidden"
          style={{
            left: '50%',
            top: '75%',
            width: '500px',
            height: '300px',
            background: `
              radial-gradient(circle 250px at 50% 50%, rgba(188, 213, 227, 0.25) 0%, rgba(188, 213, 227, 0.15) 25%, rgba(188, 213, 227, 0.1) 45%, rgba(188, 213, 227, 0.05) 65%, transparent 85%),
              radial-gradient(circle 150px at 50% 50%, rgba(89, 103, 181, 0.1) 0%, rgba(144, 142, 237, 0.06) 30%, rgba(188, 213, 227, 0.03) 50%, transparent 70%)
            `,
            filter: 'blur(3px)',
            transform: 'translate(-50%, -50%)',
            zIndex: -1
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
      {/* Header */}

        {/* CTA Section */}
      
          {/* Background Patterns */}
      

          {/* Content */}
          <div className="relative text-center">
            <h2 style={titleStyle}>
              Your Vision, Brought to Life in Just 4 Weeks
            </h2>
            <p style={subtitleStyle}>
              In this free 30-minute call, we'll help you visualize your
              software, create a simple prototype, and guide you on the next
              steps—quick and easy.
            </p>
            <div style={calComponentStyle}>
              <CalComponent />
            </div>
          </div>
        </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      className="space-y-4 px-6 py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} 
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="w-14 h-14 rounded-full bg-[#4c73e4]/10 border border-[#4c73e4]/20 flex items-center justify-center"
        initial={{ scale: 0, rotate: -180 }}
        animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <feature.icon className="w-7 h-7 text-[#4c73e4]" />
      </motion.div>
      <div>
        <motion.h3
          className="text-xl font-semibold text-gray-900 mb-2"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {feature.title}
        </motion.h3>
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {feature.description}
        </motion.p>
      </div>
    </motion.div>
  )
}

export default DevelopmentSprints;
