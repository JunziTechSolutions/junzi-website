"use client";

import { useFormContext } from "@/contexts/FormContext";
import { AnimatedFormContainer } from "@/components/shared/containers/AnimatedFormContainer";
import { StatusMessage } from "@/components/shared/status/StatusMessage";
import { CheckCircle, Phone } from "lucide-react";
import junziTextLogo from "@/assets/junzi_text_logo.png";

export default function ThankYouPage() {
  const { formData } = useFormContext();

  return (
    <AnimatedFormContainer>
      {/* Success check icon */}
      <div className="flex justify-center mb-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
      </div>

      {/* Logo */}
      <div className="flex justify-center items-center mb-6">
        <div className="w-32 md:w-40">
          <img
            src={typeof junziTextLogo === "string" ? junziTextLogo : junziTextLogo.src}
            alt="Junzi Tech Solutions"
            className="w-full"
          />
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
        Thank You!
      </h2>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <p className="text-gray-600 mb-6 text-center">
          Your information has been submitted successfully. Our team will be in touch with you shortly.
        </p>

        <div className="space-y-4 max-w-2xl mx-auto text-center">
          <StatusMessage
            variant="success"
            icon={CheckCircle}
            title="Form Submitted"
            message="We've received your project details. Our team will review your information and contact you soon!"
          />

          <StatusMessage
            variant="info"
            icon={Phone}
            title="Need immediate assistance?"
            message="Call us at +1 (617) 407 6181 or email nclark@junzitechsolutions.com"
          />
        </div>
      </div>
    </AnimatedFormContainer>
  );
}
