"use client";

import { useFormContext } from "@/contexts/FormContext";
import { AnimatedFormContainer } from "@/components/shared/containers/AnimatedFormContainer";
import { NavigationButton } from "@/components/shared/buttons/NavigationButton";
import { BudgetOption } from "@/components/shared/budget/BudgetOption";
import { NdaSelection } from "@/components/shared/nda/NdaSelection";
import { budgetOptions } from "@/config/budgetOptions";
import { InvestmentRange, NdaOption } from "@/types/form";
import { useHubSpot } from "@/api/hooks/useHubSpot";
import { toast } from "@/hooks/use-toast";
import { prepareHubSpotFields } from "@/utils/hubspot";
import { SPECIAL_STEPS } from "@/config/form-steps";

export default function Step3() {
  const { formData, updateFormData, setCurrentStep } = useFormContext();
  const { submitForm } = useHubSpot();

  const handleBudgetSelect = (budget: InvestmentRange) => {
    updateFormData({ budget });
  };

  const handleNdaSelect = (needsNda: NdaOption) => {
    updateFormData({ needsNda });
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  const handleNextStep = () => {
    if (formData.budget) {
      setCurrentStep(3);
    }
  };

  const handleSubmit = async () => {
    if (formData.budget) {
      try {
        const hubspotFields = prepareHubSpotFields(formData);
        
        await submitForm.mutateAsync({
          fields: hubspotFields,
          context: {
            pageUri: window.location.href,
            pageName: "Intake Form Submission",
          },
        });
        
        // Navigate to thank you page after successful submission
        setCurrentStep(SPECIAL_STEPS.THANK_YOU);
        
        toast({
          title: "Success!",
          description: "Your information has been submitted successfully.",
        });
      } catch (error) {
        console.error("Error submitting to HubSpot:", error);
        toast({
          title: "Error",
          description: "Failed to submit your information. Please try again.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <AnimatedFormContainer 
      title="Investment"
      subtitle="How are you planning to structure the investment?"
    >
      <div className="space-y-[25px] sm:space-y-4">
        {budgetOptions.map((option) => (
          <BudgetOption
            key={option.id}
            {...option}
            isSelected={formData.budget === option.id}
            onSelect={handleBudgetSelect}
          />
        ))}
      </div>

      {formData.budget && (
        <NdaSelection
          selectedOption={formData.needsNda}
          onSelect={handleNdaSelect}
        />
      )}

      <div className="flex items-center gap-2 sm:gap-4 mt-5 sm:mt-6">
        <NavigationButton variant="back" onClick={handleBack} />
        <NavigationButton
          variant="primary"
          onClick={handleNextStep}
          disabled={!formData.budget}
          eventName="form_step_completed"
          eventData={{
            step_number: 2,
            step_name: "Budget"
          }}
        >
          Next
        </NavigationButton>
      </div>
    </AnimatedFormContainer>
  );
}
