import React, { useEffect } from 'react';
import { Button } from '@/components/common/Button';

interface FormStepProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  onNext?: () => void;
  onBack?: () => void;
  isLastStep?: boolean;
  isLoading?: boolean;
  stepNumber?: number;
}

export const FormStep: React.FC<FormStepProps> = ({
  title,
  description,
  children,
  onNext,
  onBack,
  isLastStep = false,
  isLoading = false,
  stepNumber = 1,
}) => {
  useEffect(() => {
    // Track form step view
    if (typeof window !== 'undefined' && (window as any).clarity) {
      (window as any).clarity("set", "form_step", stepNumber);
      (window as any).clarity("event", "form_step_view", { step: stepNumber, title });
    }
  }, [stepNumber, title]);

  const handleNext = () => {
    if (typeof window !== 'undefined' && (window as any).clarity) {
      (window as any).clarity("event", "form_step_next", { 
        step: stepNumber, 
        title,
        isLastStep 
      });
    }
    onNext?.();
  };

  const handleBack = () => {
    if (typeof window !== 'undefined' && (window as any).clarity) {
      (window as any).clarity("event", "form_step_back", { 
        step: stepNumber, 
        title 
      });
    }
    onBack?.();
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        {description && (
          <p className="mt-1 text-sm text-gray-600">{description}</p>
        )}
      </div>

      <div className="space-y-6">{children}</div>

      <div className="flex justify-between pt-6">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={isLoading}
        >
          Back
        </Button>
        <Button
          onClick={handleNext}
          isLoading={isLoading}
          disabled={isLoading}
        >
          {isLastStep ? 'Submit' : 'Next'}
        </Button>
      </div>
    </div>
  );
}; 