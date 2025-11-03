"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState, useRef, useEffect, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { SimpleVideoPlayer } from "@/components/shared/video-player";
import { BackgroundVideo } from "@/components/ui/background-video";
import { useToast } from "@/components/ui/use-toast";
import { useHubSpot } from "@/api/hooks/useHubSpot";
import Link from "next/link";
import dynamic from "next/dynamic";

const MountainBackground = dynamic(() => import("./Mountain/mountain"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gray-50" />,
});

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message?: string;
};

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^\d{10}$/, "Enter a valid phone number"),
  message: yup.string(),
});

// Phone Input Component
interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  className?: string;
}

function PhoneInput({ value, onChange, onBlur, error, className = "" }: PhoneInputProps) {
  const [displayValue, setDisplayValue] = useState("");
  const [hasStartedTyping, setHasStartedTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Format phone number as (123) 456-7890 (without +1 prefix)
  const formatPhoneNumber = (rawValue: string): string => {
    const cleaned = rawValue.replace(/\D/g, '');
    if (cleaned.length === 0) return "";

    let formatted = "";
    if (cleaned.length >= 1) {
      formatted += `(${cleaned.slice(0, 3)}`;
    }
    if (cleaned.length >= 4) {
      formatted += `) ${cleaned.slice(3, 6)}`;
    }
    if (cleaned.length >= 7) {
      formatted += `-${cleaned.slice(6, 10)}`;
    }

    return formatted;
  };

  // Extract raw digits from formatted display
  const getRawValue = (formatted: string): string => {
    return formatted.replace(/\D/g, ''); // Get only digits
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Detect if user started typing or if autofill occurred
    if (!hasStartedTyping && inputValue.length > 0) {
      setHasStartedTyping(true);
    }

    // Handle different input scenarios
    let processedValue = inputValue;

    // If input starts with +1, remove it
    if (inputValue.startsWith('+1')) {
      processedValue = inputValue.slice(2).trim();
    }
    // If input is empty, clear everything
    else if (inputValue.length === 0) {
      processedValue = "";
      setHasStartedTyping(false);
    }
    // Otherwise, only allow digits and existing formatting characters
    else {
      processedValue = inputValue.replace(/[^\d()\s-]/g, '');
    }

    // Extract raw digits
    const rawDigits = processedValue.replace(/\D/g, '');

    // Limit to 10 digits
    if (rawDigits.length <= 10) {
      const formatted = formatPhoneNumber(rawDigits);
      setDisplayValue(formatted);
      onChange(rawDigits);
    }
  };

  // Handle focus
  const handleFocus = () => {
    // If there's content and user hasn't started typing, select all for easy replacement
    if (displayValue && !hasStartedTyping) {
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.select();
        }
      }, 0);
    }
  };

  // Handle autofill detection
  useEffect(() => {
    const handleAutofill = () => {
      if (inputRef.current && inputRef.current.value) {
        setHasStartedTyping(true);
        // Process the autofilled value
        let autofillValue = inputRef.current.value;

        // If autofill includes +1, remove it
        if (autofillValue.startsWith('+1')) {
          autofillValue = autofillValue.slice(2).trim();
        }

        // Set the input value to the processed autofill value
        inputRef.current.value = autofillValue;
        handleChange({ target: { value: autofillValue } } as React.ChangeEvent<HTMLInputElement>);
      }
    };

    // Check for autofill on mount and periodically
    const checkAutofill = () => {
      if (inputRef.current && inputRef.current.value && !hasStartedTyping) {
        handleAutofill();
      }
    };

    const interval = setInterval(checkAutofill, 100);

    return () => clearInterval(interval);
  }, [hasStartedTyping]);

  // Initialize display value when component mounts or value changes externally
  useEffect(() => {
    if (value && value !== getRawValue(displayValue)) {
      setDisplayValue(formatPhoneNumber(value));
      if (value.length > 0) {
        setHasStartedTyping(true);
      }
    }
  }, [value]);

  return (
    <div className="relative">
      <input
        ref={inputRef}
        type="tel"
        inputMode="numeric"
        value={displayValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={onBlur}
        placeholder="(617) 407-6181"
        className={`w-full p-3 sm:p-2 text-base sm:text-sm border border-gray-400 rounded-md bg-[rgba(255,255,255,0.1)] placeholder-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-none ${className}`}
        style={{ fontFamily: "Space Grotesk, sans-serif" }}
      />
      {error && (
        <p className="text-red-500 text-sm text-left ml-[8px] mt-1">
          {error}
        </p>
      )}
    </div>
  );
}

export default function HeroSection() {
  const { toast } = useToast();
  const { submitForm } = useHubSpot();
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [phoneValue, setPhoneValue] = useState("");
  const [mountainOpacity, setMountainOpacity] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
    setValue,
    trigger,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  // Intersection observer to fade out mountain background
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const ratio = entry.intersectionRatio;
      
      if (ratio >= 0.7) {
        setMountainOpacity(1);
      } else if (ratio > 0.3) {
        // Map ratio from [0.3, 0.7] to opacity [0, 1]
        const opacity = (ratio - 0.3) / (0.7 - 0.3);
        setMountainOpacity(opacity);
      } else {
        setMountainOpacity(0);
      }
    });
  },
  {
    threshold: Array.from({ length: 51 }, (_, i) => i * 0.02), // Check every 2%
  }
);
observer.observe(section);
return () => observer.disconnect();
  }, []);

  const handlePhoneChange = (value: string) => {
    setPhoneValue(value);
    setValue('phone', value);
  };

  const handlePhoneBlur = async () => {
    await trigger('phone');
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmittingForm(true);

    try {
      // Submit to HubSpot
      await submitForm.mutateAsync({
        fields: [
          { name: "firstname", value: data.name.split(" ")[0] || data.name },
          {
            name: "lastname",
            value: data.name.split(" ").slice(1).join(" ") || "",
          },
          { name: "email", value: data.email },
          { name: "phone", value: data.phone || "" },
          { name: "message", value: data.message || "" },
        ],
        context: {
          pageUri: window.location.href,
          pageName: "Hero Section Contact Form",
        },
      });

      console.log("HubSpot submission successful, showing success toast...");
      toast({
        title: "Success",
        description: "Your information has been submitted successfully.",
      });

      // Reset form
      reset();
      setPhoneValue("");
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "Failed to submit your information. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmittingForm(false);
    }
  };
  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center overflow-hidden backdrop-blur-[100px] bg-gray-50"
      style={{ minHeight: '10vh' }}
    >
      {/* Mountain Background */}
      <div
        className="absolute inset-0 w-full h-full bg-"
        style={{
          zIndex: 8,
          opacity: mountainOpacity,
          transition: 'opacity 0.1s ease-out'
        }}
      >
        <MountainBackground />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ zIndex: 1 }}>
        <svg
          className="w-full h-full"
          viewBox="0 0 1280 622"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Grid lines */}
          {Array.from({ length: 6 }, (_, i) => (
            <g key={i}>
              <line
                x1="0"
                y1={100 * (i + 1)}
                x2="1280"
                y2={100 * (i + 1)}
                stroke="white"
                strokeWidth="0.5"
                opacity="0.3"
              />
              <line
                x1={100 * (i + 1)}
                y1="0"
                x2={100 * (i + 1)}
                y2="622"
                stroke="white"
                strokeWidth="0.5"
                opacity="0.3"
              />
            </g>
          ))}
          {/* Diagonal lines */}
          <line
            x1="0"
            y1="0"
            x2="1280"
            y2="622"
            stroke="white"
            strokeWidth="0.5"
            opacity="0.1"
          />
          <line
            x1="1280"
            y1="0"
            x2="0"
            y2="622"
            stroke="white"
            strokeWidth="0.5"
            opacity="0.1"
          />
          {/* Dots */}
          {Array.from({ length: 6 }, (_, i) => (
            <circle
              key={i}
              cx={100 * (i + 1)}
              cy={100 * (i + 1)}
              r="5"
              fill="white"
              opacity="0.2"
            />
          ))}
        </svg>
      </div>

      {/* Background Video */}
      {/* <BackgroundVideo src="/videos/animation1.mp4" opacity={0.3} /> */}


  {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-14 lg:pt-14 xl:pt-20 pb-5 lg:pb-7 xl:pb-10">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)]">
          {/* Text Content */}
          <div className="text-center max-w-3xl mx-auto flex flex-col mb-8 lg:mb-8 -mt-40 lg:-mt-64">
             <h1
               className="text-[48px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[60px] font-medium leading-tight tracking-tight mb-0"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                background:
                  "linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              From Idea to Launch<br />We Build Apps Others Can't.
            </h1>


             <p
               className="text-[20px] sm:text-lg md:text-xl lg:text-[22px] leading-relaxed mb-[50px] lg:mb-[60px]"
               style={{
                 fontFamily: "Manrope, sans-serif",
                 background: "linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)",
                 WebkitBackgroundClip: "text",
                 WebkitTextFillColor: "transparent",
                 backgroundClip: "text",
               }}
             >
               Junzi is your tech Co-Founder.
             </p>
            {/* form started */}
            <div style={{ zIndex: 12, transform: 'translateY(280px)' }} className="lg:translate-y-[170px]">
               <form
                 onSubmit={handleSubmit(onSubmit)}
                 className="max-w-sm sm:max-w-xl mx-auto p-3 space-y-3"
               >
                <div className="flex flex-col md:flex-row gap-3">
                  <div className="flex-1">
                    <input
                      type="text"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                      placeholder="Your name"
                      {...register("name")}
                       className="w-full p-3 sm:p-2 text-base sm:text-sm border border-gray-400 rounded-md bg-[rgba(255,255,255,0.1)] placeholder-white focus:outline-none focus-visible:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-none"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm text-left ml-[8px]">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="flex-1">
                    <input
                      type="email"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                      placeholder="Email address"
                      {...register("email")}
                      className="w-full p-3 sm:p-2 text-base sm:text-sm border border-gray-400 rounded-md bg-[rgba(255,255,255,0.1)] placeholder-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-none"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm text-left ml-[8px]">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <PhoneInput
                    value={phoneValue}
                    onChange={handlePhoneChange}
                    onBlur={handlePhoneBlur}
                    error={errors.phone?.message}
                  />
                </div>

                <div>
                  <textarea
                    placeholder="How can we help?"
                    rows={4}
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    {...register("message")}
                     className="w-full p-3 sm:p-2 text-base sm:text-sm border border-gray-400 rounded-md bg-[rgba(255,255,255,0.1)] placeholder-white resize-none focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-none"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm text-left ml-[8px]">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <div className="mb-[20px]">
                   <Button
                     type="submit"
                     size="sm"
                     disabled={isSubmittingForm}
                     className="px-10 py-5 sm:px-6 sm:py-1.5 text-base sm:text-xs font-medium bg-gradient-to-r from-[#0B1E54] to-[#4FABFF] hover:opacity-90 transition-all duration-300 rounded-full shadow-sm"
                     style={{ fontFamily: "Space Grotesk, sans-serif" }}
                   >
                    {isSubmittingForm
                      ? "Submitting..."
                      : "Schedule Introduction"}
                  </Button>
                </div>
              </form>
            </div>
            {/* form ended */}
            {/* <div className="mb-[30px] lg:mb-[40px] xl:mb-[56px]">
              <Link href="/form ">
              <Button
                size="lg"
                className="w-[216px] h-[55px] px-[22.26px] py-[12.98px] sm:w-auto sm:px-7 sm:py-3 lg:px-9 lg:py-4 text-base lg:text-lg font-bold bg-gradient-to-r from-[#0B1E54] to-[#4FABFF] hover:opacity-90 transition-all duration-300 rounded-full shadow-lg"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Schedule Introduction
              </Button>
              </Link>
            </div> */}
          </div>

        
       
        </div>
      </div>

    </section>
  );
}