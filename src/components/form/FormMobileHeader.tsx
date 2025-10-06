import React from 'react';
import Image from "next/image";
import { useFormContext } from "@/contexts/FormContext";
import { STEP_INFO } from "@/config/form-steps";
import { CodeBackground } from "@/components/ui/code-background";

export function FormMobileHeader() {
  const { currentStep } = useFormContext();
  const stepInfo = STEP_INFO[currentStep as keyof typeof STEP_INFO] || { title: "Intake Form", stepLabel: "" };

  return (
    <div className="md:hidden bg-gradient-to-r from-[#2757b3] to-[#1b4388] text-white p-3 relative overflow-hidden rounded-b-2xl">
      <CodeBackground />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between h-8">
          <div className="w-16">
            <Image
              src="/images/logo3.svg"
              alt="Junzi Tech Solutions"
              width={64}
              height={29}
              className="w-full"
            />
          </div>

        </div>
      </div>
    </div>
  );
} 
