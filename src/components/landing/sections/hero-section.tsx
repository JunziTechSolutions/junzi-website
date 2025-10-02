"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SimpleVideoPlayer } from "@/components/shared/video-player";
import { BackgroundVideo } from "@/components/ui/background-video";
import { useToast } from "@/components/ui/use-toast";
import { useHubSpot } from "@/api/hooks/useHubSpot";
import Link from "next/link";

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
    .matches(/^[0-9+\s()-]*$/, "Invalid phone number"),
  message: yup.string(),
});

export default function HeroSection() {
  const { toast } = useToast();
  const { submitForm } = useHubSpot();
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

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
          { name: "message", value: data.message || ""},
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden backdrop-blur-[100px] bg-gray-50"
      style={{
        backgroundImage: `
        radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)
      `,
        backgroundSize: "3px 3px",
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
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
      <BackgroundVideo src="/videos/animation1.mp4" opacity={0.3} />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-14 lg:pt-14 xl:pt-20 pb-5 lg:pb-7 xl:pb-10">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)]">
          {/* Text Content */}
          <div className="text-center max-w-3xl mx-auto flex flex-col mb-8 lg:mb-12">
            <h1
              className="text-[48px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[60px] font-medium leading-tight tracking-tight mb-[30px] lg:mb-[27px]"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                background:
                  "linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Innovate.
              <br />
              Build. Conquer.
            </h1>

            <p
              className="text-[20px] sm:text-lg md:text-xl lg:text-[22px] text-gray-800 leading-relaxed mb-[30px] lg:mb-[27px]"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Junzi is your development partner.
            </p>
            {/* form started */}
            <div style={{ zIndex: 12 }}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-2xl mx-auto p-4 space-y-4"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                      placeholder="Your name"
                      {...register("name")}
                      className="w-full p-3 text-xl border border-gray-300 rounded-lg bg-[rgba(255,255,255,0.6)] placeholder-[rgba(70,84,120,1)] focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-blue-400 transition-none"
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
                      className="w-full p-3 text-xl border border-gray-300 rounded-lg bg-[rgba(255,255,255,0.6)] placeholder-[rgba(70,84,120,1)] focus:outline-none focus:ring-2 focus:ring-blue-400 transition-none"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm text-left ml-[8px]">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    type="tel"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    placeholder="Phone - we will call you back"
                    {...register("phone")}
                    className="w-full p-3 text-xl border border-gray-300 rounded-lg bg-[rgba(255,255,255,0.6)] placeholder-[rgba(70,84,120,1)] focus:outline-none focus:ring-2 focus:ring-blue-400 transition-none"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm text-left ml-[8px]">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    placeholder="How can we help?"
                    rows={5}
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    {...register("message")}
                    className="w-full p-3 text-xl border border-gray-300 rounded-lg  bg-[rgba(255,255,255,0.6)] placeholder-[rgba(70,84,120,1)] resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition-none"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm text-left ml-[8px]">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <div className="mb-[30px] lg:mb-[40px] xl:mb-[56px]">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmittingForm}
                    className="w-full sm:w-[100%] px-[22.26px] py-[12.98px] sm:px-7 sm:py-3 lg:px-9 lg:py-4 text-base lg:text-lg font-bold bg-gradient-to-r from-[#0B1E54] to-[#4FABFF] hover:opacity-90 transition-all duration-300 rounded-full shadow-lg"
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

          {/* Decorative Background Element - Desktop Only */}
          <div
            className="hidden xl:block absolute left-[-100px] top-1/4 w-[600px] h-[600px] pointer-events-none"
            style={{ zIndex: 10 }}
          >
            <div className="absolute inset-0 bg-[rgba(150,202,230,0.8)] rounded-full scale-x-125 blur-2xl"></div>
            <div className="absolute inset-0 bg-gradient-radial from-[rgba(150,202,230,0.9)] via-transparent to-transparent rounded-full scale-x-150 blur-3xl"></div>
          </div>

          {/* Video Container */}
          <div className="relative w-full max-w-[398px] h-[394px] sm:max-w-[1150px] sm:h-auto mx-auto flex items-center justify-center">
            <div className="relative w-full h-full sm:aspect-video lg:aspect-[16/10] xl:aspect-[16/9] rounded-[32px] lg:rounded-2xl overflow-hidden shadow-none border-[4.83px] sm:border-4 lg:border-8 border-white/5">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-radial from-[rgba(150,202,230,0.5)] via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-radial from-[rgba(150,202,230,0.5)] via-transparent to-transparent scale-x-[-1]"></div>

              {/* Video Player */}
              <div className="relative z-10 w-full h-full">
                <SimpleVideoPlayer
                  src="/videos/1080.mp4"
                  title="Abstract background video"
                  autoPlay={false}
                  loop={true}
                  muted={false}
                  playsInline={true}
                  className="w-full h-full rounded-[32px] sm:rounded-lg lg:rounded-xl"
                  previewImage="/slider/image.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}