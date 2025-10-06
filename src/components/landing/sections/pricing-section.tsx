"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Palette, Settings, Package, Check, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Form from "../form/Form";
import { Modal } from "@/components/ui/modal";
import { useModal } from "../hooks/useModal";
import { motion } from "framer-motion";
import Link from "next/link";

interface PricingPlan {
  icon: LucideIcon;
  title: string;
  price: string;
  pricePeriod?: string;
  description: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    icon: Palette,
    title: "MVP + Custom Features",
    price: "$15,000 - $25,000",
    description:
      "MVP + Custom Features, upgraded design, and light integration",
    features: [
      "User-centered design approach",
      "Custom visuals tailored to your brand",
      "Wireframes and prototypes included",
      "Responsive design for all devices",
      "Design revisions to ensure satisfaction",
    ],
    ctaText: "Get Started",
  },
  {
    icon: Settings,
    title: "Scalable build",
    price: "$25,000 - 40,000",
    description:
      "Scalable build with multiple integrations and admin tools",
    features: [
      "Full-stack development for web or mobile",
      "Clean, scalable code",
      "Integration with existing tools",
      "Testing and debugging included",
      "Clear timeline with milestones",
    ],
    ctaText: "Get Started",
    isPopular: true,
  },
  {
    icon: Package,
    title: "Enterprise system",
    price: "$50,000+",
    description:
      "Enterprise system with full integration, dashboard, and advanced backend",
    features: [
      "Complete design and development package",
      "Seamless integration between design and development teams",
      "End-to-end project management",
      "Testing and quality assurance",
      "Post-launch support included",
    ],
    ctaText: "Get Started",
  },
];

export default function PricingSection() {
  const { isOpen, isClosing, openModal, closeModal } = useModal();

  const handleButtonClick = () => {
    openModal();
  };

  // Анимации для карточек
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: 0.5 + i * 0.1,
      },
    }),
  };

  return (
    <>
      <section
        id="pricing"
        className="relative py-32 md:py-40 bg-background overflow-hidden scroll-mt-40"
        style={{ background: '#f4f3fa' }}
      >
        {/* Размытые круги (blobs) */}
        <div
          aria-hidden="true"
          className="absolute"
          style={{
            width: 400,
            height: 400,
            left: '10%',
            top: '40%',
            background: 'radial-gradient(circle, #6c63ff 60%, transparent 100%)',
            filter: 'blur(80px)',
            opacity: 0.5,
            borderRadius: '50%',
            zIndex: 0,
          }}
        />
        <div
          aria-hidden="true"
          className="absolute"
          style={{
            width: 300,
            height: 300,
            left: '60%',
            top: '60%',
            background: 'radial-gradient(circle, #a084ff 60%, transparent 100%)',
            filter: 'blur(90px)',
            opacity: 0.4,
            borderRadius: '50%',
            zIndex: 0,
          }}
        />
        <div
          aria-hidden="true"
          className="absolute"
          style={{
            width: 500,
            height: 500,
            left: '40%',
            top: '70%',
            background: 'radial-gradient(circle, #6c63ff 40%, transparent 100%)',
            filter: 'blur(120px)',
            opacity: 0.3,
            borderRadius: '50%',
            zIndex: 0,
          }}
        />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div 
            className="max-w-3xl text-center mx-auto mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-slate-900 dark:text-slate-50">
              Transparent Pricing for Digital Excellence.
            </h2>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
              Choose a package that aligns with your project goals, or let's
              discuss a custom solution tailored to your unique needs.
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.title}
                variants={cardVariants}
                custom={index}
                className="h-full"
              >
                <Card
                  className={`flex flex-col h-full rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl ${plan.isPopular ? "border-2 border-[#0b1e54] bg-slate-50 dark:bg-slate-800/50 relative" : "bg-card dark:bg-slate-800/30"}`}
                >
                  {plan.isPopular && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <Badge className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0b1e54] text-primary-foreground px-3 py-1 text-xs font-semibold rounded-full flex items-center gap-1">
                        <Star className="h-3.5 w-3.5" /> Most Popular
                      </Badge>
                    </motion.div>
                  )}
                  <motion.div
                    variants={contentVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <CardHeader className="items-center text-center pt-10 pb-6">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        viewport={{ once: true }}
                        className={`p-3.5 rounded-lg mb-5 ${plan.isPopular ? "bg-primary/10 dark:bg-primary/20" : "bg-slate-100 dark:bg-slate-700"}`}
                      >
                        <plan.icon
                          className={`h-7 w-7 ${plan.isPopular ? "text-[#0b1e54]" : "text-slate-700 dark:text-slate-300"}`}
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <CardTitle className="text-2xl font-semibold">
                          {plan.title}
                        </CardTitle>
                        <div className="mt-3">
                          <span className="text-2xl font-bold">{plan.price}</span>
                          {plan.pricePeriod && (
                            <span className="text-muted-foreground">
                              {plan.pricePeriod}
                            </span>
                          )}
                        </div>
                        <CardDescription className="text-muted-foreground mt-2 min-h-[40px]">
                          {plan.description}
                        </CardDescription>
                      </motion.div>
                    </CardHeader>
                  </motion.div>
                  <CardContent className="flex-grow pt-0 pb-8 px-8">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          custom={featureIndex}
                          variants={featureVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          className="flex items-center text-sm text-foreground"
                        >
                          <Check className="h-4 w-4 mr-2.5 text-primary flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.9 }}
                    viewport={{ once: true }}
                    className="mt-auto"
                  >
                    <CardFooter className="p-8 pt-0">
                      <Link href="/form">
                        <Button
                          size="lg"
                          className={`w-full rounded-full py-3 text-base font-semibold ${plan.isPopular ? "bg-[#0b1e54] hover:bg-primary/90 text-primary-foreground" : "bg-slate-800 hover:bg-slate-900 text-white dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-300"}`}
                        >
                          {plan.ctaText}
                        </Button>
                      </Link>
                    </CardFooter>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Modal Form */}
      <Modal isOpen={isOpen} isClosing={isClosing} onClose={closeModal}>
        <Form />
      </Modal>
    </>
  );
}
