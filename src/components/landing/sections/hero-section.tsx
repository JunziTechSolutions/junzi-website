"use client";
import Image from "next/image";
import { Suspense, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useHubSpot } from "@/api/hooks/useHubSpot";

/* ------------ phone helpers ------------ */
const onlyDigits = (s: string) => s.replace(/\D/g, "");
const formatUS = (raw: string) => {
  const d = onlyDigits(raw).slice(0, 10);
  if (!d) return "";
  if (d.length <= 3) return `(${d}`;
  if (d.length <= 6) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
};
const toE164US = (rawDigits: string) => (rawDigits.length === 10 ? `+1${rawDigits}` : null);

/* ------------ phone input ------------ */
function PhoneInput({ value, onChange, onBlur, error }: any) {
  const display = formatUS(value);
  return (
    <div className="relative">
      <input
        type="tel"
        inputMode="numeric"
        autoComplete="tel"
        placeholder="(617) 407-6181"
        value={display}
        onChange={(e) => onChange(onlyDigits(e.target.value).slice(0, 10))}
        onBlur={onBlur}
        className="w-full p-2 sm:p-2 text-sm sm:text-sm border border-gray-400 rounded-md bg-[rgba(255,255,255,0.25)] placeholder-white text-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-none"
        style={{ fontFamily: "Space Grotesk, sans-serif" }}
      />
      {error && <p className="text-red-500 text-xs sm:text-sm text-left ml-[8px] mt-1">{error}</p>}
    </div>
  );
}

/* ------------ schema ------------ */
const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .test("ten-digits", "Enter a valid 10-digit phone", (v) => (v ?? "").replace(/\D/g, "").length === 10)
    .required("Phone number is required"),
  message: yup.string().max(2000, "Keep it under 2,000 chars"),
  company: yup.string().max(0), // honeypot
});

/* ------------ mountain bg ------------ */
const MountainBackground = dynamic(() => import("./Mountain/mountain"), {
  ssr: false,
  suspense: true,
});

const MIN_LOADER_DURATION = 500;

interface EntryLoaderProps {
  active: boolean;
  progress: number;
}

function EntryLoader({ active, progress }: EntryLoaderProps) {
  return (
    <div
      aria-hidden={!active}
      className={`fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-white transition-opacity duration-500 ${
        active ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <Image
          src="/assets/icons/Artifex_ME_1v_cv.png"
          alt="Junzi logo"
          width={180}
          height={180}
          priority
          className="w-[160px] md:w-[180px] h-auto"
        />
        <div className="w-[200px] md:w-[220px] space-y-3">
          <div className="h-2 w-full overflow-hidden rounded-full bg-[#0B1E54]/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#0B1E54] to-[#4FABFF] transition-[width]"
              style={{ width: `${progress}%`, transitionDuration: "120ms" }}
            />
          </div>
          <div
            className="text-center text-sm font-medium text-[#0B1E54]"
            aria-live="polite"
            aria-atomic="true"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            {progress}%
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------ main component ------------ */
export default function HeroSection() {
  const { toast } = useToast();
  const { submitForm } = useHubSpot();
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [isMountainReady, setIsMountainReady] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [hasMinDelayElapsed, setHasMinDelayElapsed] = useState(false);
  const [isLoaderActive, setIsLoaderActive] = useState(true);
  const [progress, setProgress] = useState(0);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { name: "", email: "", phone: "", message: "", company: "" },
  });

  useEffect(() => {
    const timer = window.setTimeout(() => setHasMinDelayElapsed(true), MIN_LOADER_DURATION);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const markPageLoaded = () => setIsPageLoaded(true);

    if (document.readyState === "complete") {
      markPageLoaded();
      return;
    }

    window.addEventListener("load", markPageLoaded, { once: true });
    return () => window.removeEventListener("load", markPageLoaded);
  }, []);

  useEffect(() => {
    if (!isLoaderActive) return;

    const target = hasMinDelayElapsed && (isMountainReady || isPageLoaded) ? 100 : 90;
    const id = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= target) {
          return prev;
        }
        const increment = target === 100 ? 3 : 1;
        return Math.min(prev + increment, target);
      });
    }, 40);

    return () => window.clearInterval(id);
  }, [isLoaderActive, hasMinDelayElapsed, isMountainReady, isPageLoaded]);

  useEffect(() => {
    if (!isLoaderActive) return;
    if (progress < 100) return;

    const timeout = window.setTimeout(() => setIsLoaderActive(false), 200);
    return () => window.clearTimeout(timeout);
  }, [progress, isLoaderActive]);

  useEffect(() => {
    if (!isLoaderActive) {
      setProgress(100);
    }
  }, [isLoaderActive]);

  const onSubmit = async (data: any) => {
    if (data.company && data.company.trim().length > 0) return; // honeypot
    setIsSubmittingForm(true);
    try {
      const rawDigits = onlyDigits(data.phone).slice(0, 10);
      const e164 = toE164US(rawDigits);
      await submitForm.mutateAsync({
        fields: [
          { name: "firstname", value: data.name.split(" ")[0] || data.name },
          { name: "lastname", value: data.name.split(" ").slice(1).join(" ") || "" },
          { name: "email", value: data.email },
          { name: "phone", value: rawDigits ? `(${rawDigits.slice(0, 3)}) ${rawDigits.slice(3, 6)}-${rawDigits.slice(6)}` : "" },
          ...(e164 ? [{ name: "phone_e164", value: e164 }] : []),
          { name: "message", value: data.message || "" },
        ],
        context: {
          pageUri: typeof window !== "undefined" ? window.location.href : "",
          pageName: "Hero Section Contact Form",
        },
      });
      toast({ title: "Success", description: "Your information has been submitted successfully." });
      reset();
    } catch (err) {
      console.error("Form submission error:", err);
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
    <>
      <EntryLoader active={isLoaderActive} progress={progress} />
      <section
        ref={sectionRef}
        className="relative flex items-center justify-center overflow-hidden backdrop-blur-[100px] bg-gray-50"
        style={{ minHeight: "10vh" }}
      >
      {/* Mountain layer (static) */}
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: 8, opacity: 1 }}>
        <Suspense fallback={null}>
          <MountainBackground onReady={() => setIsMountainReady(true)} />
        </Suspense>
      </div>

      {/* Grid background with mask */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          zIndex: 1,
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
        }}
      >
        <svg className="w-full h-full" viewBox="0 0 1280 622" fill="none" xmlns="http://www.w3.org/2000/svg">
          {Array.from({ length: 6 }, (_, i) => (
            <g key={i}>
              <line x1="0" y1={100 * (i + 1)} x2="1280" y2={100 * (i + 1)} stroke="white" strokeWidth="0.5" opacity="0.3" />
              <line x1={100 * (i + 1)} y1="0" x2={100 * (i + 1)} y2="622" stroke="white" strokeWidth="0.5" opacity="0.3" />
            </g>
          ))}
          <line x1="0" y1="0" x2="1280" y2="622" stroke="white" strokeWidth="0.5" opacity="0.1" />
          <line x1="1280" y1="0" x2="0" y2="622" stroke="white" strokeWidth="0.5" opacity="0.1" />
          {Array.from({ length: 6 }, (_, i) => (
            <circle key={i} cx={100 * (i + 1)} cy={100 * (i + 1)} r="5" fill="white" opacity="0.2" />
          ))}
        </svg>
      </div>

      {/* Static fade to next section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0"
        style={{
          zIndex: 9,
          height: "22vh",
          background: "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.88) 35%, rgba(255,255,255,0.0) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-14 lg:pt-14 xl:pt-20 pb-5 lg:pb-7 xl:pb-10">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)]">
          <div className="text-center max-w-3xl mx-auto flex flex-col mb-8 lg:mb-8 -mt-38 sm:-mt-40 lg:-mt-64">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[60px] font-medium leading-tight tracking-tight mb-0"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                background: "linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              <span className="hidden sm:inline">From Idea to Launch<br /></span>We Build Apps Others Can't.
            </h1>

            <p
              className="text-sm sm:text-lg md:text-xl lg:text-[22px] leading-relaxed mb-[50px] lg:mb-[60px]"
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

            {/* FORM: mobile higher; desktop original via responsive classes (NO inline style) */}
            <div
              className="
                relative z-[12]
                translate-y-[80px]       /* mobile: higher */
                sm:translate-y-[120px]    /* small screens */
                md:translate-y-[170px]    /* tablets */
                lg:translate-y-[280px]    /* desktop: original spacing */
              "
            >
                <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm sm:max-w-xl mx-auto p-2 sm:p-3 space-y-2 sm:space-y-3">
                {/* Honeypot */}
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="organization"
                  className="hidden"
                  aria-hidden="true"
                  {...register("company")}
                />

                <div className="flex flex-col md:flex-row gap-2 sm:gap-3">
                  <div className="flex-1">
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      {...register("name")}
                      className="w-full p-2 sm:p-2 text-sm sm:text-sm border border-gray-400 rounded-md bg-[rgba(255,255,255,0.25)] placeholder-white text-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-none"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    />
                    {errors.name && <p className="text-red-500 text-xs sm:text-sm text-left ml-[8px]">{errors.name.message}</p>}
                  </div>

                  <div className="flex-1">
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="Email address"
                      {...register("email")}
                      className="w-full p-2 sm:p-2 text-sm sm:text-sm border border-gray-400 rounded-md bg-[rgba(255,255,255,0.25)] placeholder-white text-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-none"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    />
                    {errors.email && <p className="text-red-500 text-xs sm:text-sm text-left ml-[8px]">{errors.email.message}</p>}
                  </div>
                </div>

                <Controller
                  name="phone"
                  control={control}
                  render={({ field, fieldState }) => (
                    <PhoneInput
                      value={field.value ?? ""}
                      onChange={(digits: string) => field.onChange(digits)}
                      onBlur={field.onBlur}
                      error={fieldState.error?.message}
                    />
                  )}
                />

                <div>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="How can we help?"
                    {...register("message")}
                    className="w-full p-2 sm:p-2 text-sm sm:text-sm border border-gray-400 rounded-md bg-[rgba(255,255,255,0.25)] placeholder-white text-white resize-none focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-none"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  />
                </div>

                <div className="mb-3 sm:mb-[20px]">
                  <Button
                    type="submit"
                    size="sm"
                    disabled={isSubmittingForm}
                    className="px-6 py-3 sm:px-6 sm:py-1.5 text-xs sm:text-xs font-medium bg-gradient-to-r from-[#0B1E54] to-[#4FABFF] hover:opacity-90 transition-all duration-300 rounded-full shadow-sm"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {isSubmittingForm ? "Submitting..." : "Schedule Introduction"}
                  </Button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
      </section>
    </>
  );
}
