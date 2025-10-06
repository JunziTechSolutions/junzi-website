"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { X, Mail, User, Smartphone, Building2, Globe, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { useHubSpot } from '@/api/hooks/useHubSpot';
import SimpleVideoPlayer from '@/components/shared/video-player/SimpleVideoPlayer';

interface FormData {
  platform: string;
  budget: string;
  fullName: string;
  phoneNumber: string;
  email: string;
}

interface FormErrors {
  platform?: string;
  budget?: string;
  fullName?: string;
  phoneNumber?: string;
  email?: string;
}

export default function Form() {
  const { toast } = useToast();
  const { submitForm } = useHubSpot();
  
  const [formData, setFormData] = useState<FormData>({
    platform: '',
    budget: '',
    fullName: '',
    phoneNumber: '',
    email: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Basic validation
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.platform) newErrors.platform = 'Please select your platform';
    if (!formData.budget) newErrors.budget = 'Please select your budget';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Submit to HubSpot
      await submitForm.mutateAsync({
        fields: [
          { name: 'firstname', value: formData.fullName.split(' ')[0] || formData.fullName },
          { name: 'lastname', value: formData.fullName.split(' ').slice(1).join(' ') || '' },
          { name: 'email', value: formData.email },
          { name: 'phone', value: formData.phoneNumber },
          { name: 'platform', value: formData.platform },
          { name: 'budget_range', value: formData.budget },
        ],
        context: {
          pageUri: window.location.href,
          pageName: 'Software Development Consultation',
        },
      });

      toast({
        title: 'Success',
        description: 'Your information has been submitted successfully.',
      });

      // Reset form
      setFormData({
        platform: '',
        budget: '',
        fullName: '',
        phoneNumber: '',
        email: ''
      });
      setErrors({});
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to submit your information. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'mobile':
        return <Smartphone className="w-5 h-5" />;
      case 'website':
        return <Building2 className="w-5 h-5" />;
      case 'web':
        return <Globe className="w-5 h-5" />;
      default:
        return <MoreHorizontal className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm">
      
      <div className="w-full">
        <Card className="border-0 shadow-none bg-white/20 backdrop-blur-md">
          <CardHeader className="text-center pb-6">
            <div className="mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#334ad7] to-[#5C6BC0] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-[#334ad7] mb-2">
              Request Your Free, Personalized<br />
              Consultation—No Obligations.
            </CardTitle>
            
            <CardDescription className="text-gray-600 text-sm max-w-md mx-auto">
              Your information is Secure. We never spam or share your details.
            </CardDescription>
          </CardHeader>

          <CardContent className="p-6 space-y-8">
            {/* Video Player */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <SimpleVideoPlayer
                src="/videos/1080.mp4"
                title="Abstract background video"
                autoPlay={true}
                loop={true}
                muted={false}
                playsInline={true}
                previewImage="/slider/image.png"
                className="w-full h-full"
              />
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Platform Selection */}
              <div className="space-y-4">
                <Label className="text-base font-semibold text-gray-900">
                  Software Type
                </Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { value: 'mobile', label: 'Mobile Application', icon: <Smartphone className="w-6 h-6" /> },
                    { value: 'website', label: 'Website', icon: <Building2 className="w-6 h-6" /> },
                    { value: 'web', label: 'Web Application', icon: <Globe className="w-6 h-6" /> },
                    { value: 'other', label: 'Other', icon: <MoreHorizontal className="w-6 h-6" /> }
                  ].map((option) => (
                    <div
                      key={option.value}
                      onClick={() => updateFormData('platform', option.value)}
                      className={cn(
                        "flex flex-col items-center justify-center p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 backdrop-blur-sm",
                        formData.platform === option.value
                            ? "border-[#334ad7] bg-blue-50/20"
                            : "border-gray-200 hover:border-gray-300 hover:bg-gray-50/20"
                      )}
                    >
                      <div className={cn("mb-3", formData.platform === option.value ? "text-[#334ad7]" : "text-gray-500")}>
                        {option.icon}
                      </div>
                      <p className={cn("font-medium text-sm text-center", formData.platform === option.value ? "text-[#334ad7]" : "text-gray-700")}>
                        {option.label}
                      </p>
                    </div>
                  ))}
                </div>
                {errors.platform && (
                  <p className="text-red-500 text-sm">{errors.platform}</p>
                )}
              </div>

              {/* Budget Selection */}
              <div className="space-y-4">
                <Label className="text-base font-semibold text-gray-900 flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#334ad7] rounded-full"></div>
                  What is your budget?
                </Label>
                <RadioGroup
                  value={formData.budget}
                  onValueChange={(value) => updateFormData('budget', value)}
                  className="grid grid-cols-1 md:grid-cols-2 gap-3"
                >
                  {[
                    { value: 'Option 1', label: '$15,000 - $25,000 – Launch Ready MVP', color: 'from-[#5C6BC0] to-[#3F51B5]' },
                    { value: 'Option 2', label: '$25,000 - $40,000 – Custom features & design', color: 'from-[#0099CC] to-[#0066CC]' },
                    { value: 'Option 3', label: '$50,000+ – Scalable with integrations', color: 'from-[#2BB673] to-[#1E8A5A]' }
                  ].map((option) => (
                    <div key={option.value} className="flex items-start space-x-3 p-4 border rounded-xl hover:border-[#334ad7] hover:bg-blue-50/20 transition-all duration-200 group backdrop-blur-sm">
                      <RadioGroupItem value={option.value} id={option.value} className="mt-0.5 border-[#334ad7] text-[#334ad7]" />
                      <div className="flex-1">
                        <Label htmlFor={option.value} className="text-sm leading-relaxed cursor-pointer font-medium">
                          {option.label}
                        </Label>
                        <div className={cn("w-full h-1 rounded-full mt-2 bg-gradient-to-r", option.color, "opacity-0 group-hover:opacity-100 transition-opacity duration-200")}></div>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
                {errors.budget && (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    {errors.budget}
                  </p>
                )}
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="text-base font-semibold text-gray-900 flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-[#334ad7] rounded-full"></div>
                  Contact Information
                </div>
                
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-medium text-gray-900">
                    Full Name*
                  </Label>
                  <div className="relative group">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400 group-focus-within:text-[#334ad7] transition-colors" />
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => updateFormData('fullName', e.target.value)}
                      className={cn(
                        "pl-10 h-12 border-gray-300 focus:border-[#334ad7] focus:ring-[#334ad7] rounded-lg transition-all duration-200 bg-white/20 backdrop-blur-sm",
                        errors.fullName && "border-red-500 focus:border-red-500 focus:ring-red-500"
                      )}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-red-500 text-sm flex items-center gap-1">
                      <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Phone Number */}
                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber" className="text-sm font-medium text-gray-900">
                      Phone Number*
                    </Label>
                    <div className="phone-input-container">
                      <PhoneInput
                        country={'us'}
                        value={formData.phoneNumber}
                        onChange={(phone) => updateFormData('phoneNumber', phone)}
                        inputProps={{
                          name: 'phone',
                          required: true,
                          className: cn(
                            "w-full h-12 pl-12 pr-3 border bg-white/20 backdrop-blur-sm border-gray-300 rounded-lg focus:border-[#334ad7] focus:ring-[#334ad7] focus:ring-1 focus:outline-none transition-all duration-200",
                            errors.phoneNumber && "border-red-500 focus:border-red-500 focus:ring-red-500"
                          )
                        }}
                        containerClass="w-full"
                        buttonClass="border-gray-300 hover:bg-gray-50 rounded-l-lg"
                        dropdownClass="border-gray-300 rounded-lg"
                      />
                    </div>
                    {errors.phoneNumber && (
                      <p className="text-red-500 text-sm flex items-center gap-1">
                        <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-900">
                      Email ID*
                    </Label>
                    <div className="relative group">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400 group-focus-within:text-[#334ad7] transition-colors" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="johndoe123@gmail.com"
                        value={formData.email}
                        onChange={(e) => updateFormData('email', e.target.value)}
                        className={cn(
                          "pl-10 h-12 border-gray-300 focus:border-[#334ad7] focus:ring-[#334ad7] rounded-lg transition-all duration-200 bg-white/20 backdrop-blur-sm",
                          errors.email && "border-red-500 focus:border-red-500 focus:ring-red-500"
                        )}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-sm flex items-center gap-1">
                        <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-gradient-to-r from-[#334ad7]/60 to-[#5C6BC0]/60 hover:from-[#2a3fb8]/70 hover:to-[#3F51B5]/70 text-white font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 backdrop-blur-sm"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <style jsx global>{`
        .phone-input-container .react-tel-input .form-control {
          width: 100% !important;
          height: 48px !important;
          border-color: #d1d5db !important;
          border-radius: 8px !important;
          font-size: 14px !important;
          transition: all 0.2s ease !important;
          background-color: rgba(255, 255, 255, 0.2) !important;
          backdrop-filter: blur(4px) !important;
        }
        
        .phone-input-container .react-tel-input .form-control:focus {
          border-color: #334ad7 !important;
          box-shadow: 0 0 0 1px #334ad7 !important;
        }
        
        .phone-input-container .react-tel-input .flag-dropdown {
          border-color: #d1d5db !important;
          border-radius: 8px 0 0 8px !important;
          background-color: rgba(249, 250, 251, 0.2) !important;
          backdrop-filter: blur(4px) !important;
          transition: all 0.2s ease !important;
        }
        
        .phone-input-container .react-tel-input .flag-dropdown:hover {
          background-color: #f3f4f6 !important;
        }
        
        .phone-input-container .react-tel-input .selected-flag {
          padding: 0 8px !important;
        }
        
        .phone-input-container .react-tel-input .country-list {
          border-color: #d1d5db !important;
          border-radius: 8px !important;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
        }
        
        .phone-input-container .react-tel-input .country-list .country:hover {
          background-color: #f3f4f6 !important;
        }
        
        .phone-input-container .react-tel-input .country-list .country.highlight {
          background-color: #334ad7 !important;
          color: white !important;
        }
      `}</style>
    </div>
  );
}