"use client";

import { useFormContext } from "@/contexts/FormContext";
import { FormInput } from "@/components/shared/inputs/FormInput";
import { CustomPhoneInput } from "@/components/shared/inputs/PhoneInput";
import { NavigationButton } from "@/components/shared/buttons/NavigationButton";
import { Country } from "@/types/form";
import { useHubSpot } from "@/api/hooks/useHubSpot";
import { toast } from "@/hooks/use-toast";
import { prepareHubSpotFields } from "@/utils/hubspot";
import { SPECIAL_STEPS } from "@/config/form-steps";

export default function Step1() {
  const { formData, updateFormData, setCurrentStep } = useFormContext();
  const { submitForm } = useHubSpot();

  const handleInputChange = (field: string, value: string) => {
    updateFormData({ [field]: value });
  };

  const handlePhoneChange = (value: string, country: Country) => {
    updateFormData({
      phone: value.slice(country.dialCode.length),
      countryCode: country.dialCode,
    });
  };

  const handleBack = () => {
    setCurrentStep(2);
  };

  const handleSubmit = async () => {
    if (formData.name && formData.email && formData.phone) {
      try {
        const hubspotFields = prepareHubSpotFields(formData);
        
        await submitForm.mutateAsync({
          fields: hubspotFields,
          context: {
            pageUri: window.location.href,
            pageName: "Intake Form Submission",
          },
        });
        
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

  const isFormValid = formData.name && formData.email && formData.phone;

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <div className="p-4 sm:p-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-black mb-2">
          User Information
        </h1>
        <p className="text-sm sm:text-base text-black/80">
          Tell us about yourself if you are serious about your idea.
        </p>
      </div>

      {/* Form Fields Section */}
      <div className="p-4 sm:p-6">
        <div className="w-full max-w-2xl mx-auto space-y-4">
          <FormInput
            label="Full name"
            type="text"
            placeholder="John Doe"
            value={formData.name || ""}
            onChange={(value) => handleInputChange("name", value)}
            autoComplete="name"
          />

          <FormInput
            label="Email"
            type="email"
            placeholder="johndoe123@gmail.com"
            value={formData.email || ""}
            onChange={(value) => handleInputChange("email", value)}
            autoComplete="email"
          />

          <div className="space-y-2">
            <label className="block text-sm sm:text-base font-medium text-black">
              Phone number
            </label>
            <CustomPhoneInput
              value={`${formData.countryCode || ""}${formData.phone || ""}`}
              onChange={handlePhoneChange}
            />
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="p-4 sm:p-6 border-t border-gray-200 bg-white">
        <div className="max-w-2xl mx-auto flex justify-start gap-2 sm:gap-4">
          <NavigationButton variant="back" onClick={handleBack} />
          <NavigationButton
            variant="primary"
            onClick={handleSubmit}
            disabled={!isFormValid || submitForm.isPending}
            eventName="form_submission"
            eventData={{
              step_number: 3,
              step_name: "User Information"
            }}
          >
            {submitForm.isPending ? "Submitting..." : "Submit"}
          </NavigationButton>
        </div>
      </div>
    </div>
  );
} 