"use client"

import { ClipboardList, Users, MessageSquare, Shield } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import CalComponent from "./cal";

const calComponentStyle = {
  width: '100%',
  maxWidth: '1279px',
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
        {/* Background effects commented out for now */}
      </div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Content */}
        <div className="relative text-center">
          <h2 
            className="development-title"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 500,
              fontStyle: 'normal',
              fontSize: '51.37px',
              lineHeight: '140%',
              letterSpacing: '-3%',
              textAlign: 'center',
              background: 'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '24px'
            }}
          >
            Your Vision, Brought to Life in Just 4 Weeks
          </h2>
          <p 
            className="development-subtitle"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '18.35px',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#111827',
              marginBottom: '32px'
            }}
          >
            In this free 30-minute call, we'll help you visualize your
            software, create a simple prototype, and guide you on the next
            steps—quick and easy.
          </p>
          <div style={calComponentStyle}>
            <CalComponent />
          </div>
        </div>
      </div>

      <style jsx>{`
        .development-title {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 500;
          font-style: normal;
          font-size: 51.37px;
          line-height: 140%;
          letter-spacing: -3%;
          text-align: center;
          background: linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 24px;
        }
        
        .development-subtitle {
          font-family: 'Manrope', sans-serif;
          font-weight: 400;
          font-style: normal;
          font-size: 18.35px;
          line-height: 100%;
          letter-spacing: 0%;
          text-align: center;
          color: #111827;
          margin-bottom: 32px;
        }
        
        @media (max-width: 768px) {
          .development-title {
            font-size: 36px !important;
            margin-bottom: 25px !important;
          }
          
          .development-subtitle {
            font-size: 16px !important;
          }
        }
      `}</style>
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
