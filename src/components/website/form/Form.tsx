"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { X, Mail, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import SimpleVideoPlayer from '@/components/shared/video-player/SimpleVideoPlayer';

interface FormData {
  primaryGoal: string;
  investmentLevel: string;
  fullName: string;
  phoneNumber: string;
  email: string;
}

interface FormErrors {
  primaryGoal?: string;
  investmentLevel?: string;
  fullName?: string;
  phoneNumber?: string;
  email?: string;
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    primaryGoal: '',
    investmentLevel: '',
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
    if (!formData.primaryGoal) newErrors.primaryGoal = 'Please select your primary goal';
    if (!formData.investmentLevel) newErrors.investmentLevel = 'Please select your investment level';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your interest! We will contact you soon.');
      setIsSubmitting(false);
      setFormData({
        primaryGoal: '',
        investmentLevel: '',
        fullName: '',
        phoneNumber: '',
        email: ''
      });
      setErrors({});
    }, 1000);
  };

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="bg-white">
      <div className="w-full">
        <Card className="border-0 shadow-none">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold text-[#334ad7] mb-2">
              Request Your Free, Personalized<br />
              Consultation—No Obligations.
            </CardTitle>
            
            <CardDescription className="text-gray-600 text-sm">
              Your information is Secure. We never spam or share your details.
            </CardDescription>
          </CardHeader>

          <CardContent className="p-6 space-y-8">
            {/* Video Player */}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
              <SimpleVideoPlayer
                src="/videos/1080.mp4"
                title="Why should you invest in the US Real Estate"
                autoPlay={true}
                loop={true}
                muted={false}
                playsInline={true}
                previewImage="/slider/image.png"
                className="w-full h-full"
              />
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Primary Goal Question */}
              <div className="space-y-4">
                <Label className="text-base font-semibold text-gray-900">
                  What best describes your primary goal for considering US real estate investment?
                </Label>
                <RadioGroup
                  value={formData.primaryGoal}
                  onValueChange={(value) => updateFormData('primaryGoal', value)}
                  className="space-y-3"
                >
                  <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                    <RadioGroupItem value="rental-income" id="rental-income" className="mt-0.5 border-[#334ad7] text-[#334ad7]" />
                    <Label htmlFor="rental-income" className="text-sm leading-relaxed cursor-pointer">
                      Earning stable rental income in USD & long-term appreciation
                    </Label>
                  </div>
                  <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                    <RadioGroupItem value="diversifying" id="diversifying" className="mt-0.5 border-[#334ad7] text-[#334ad7]" />
                    <Label htmlFor="diversifying" className="text-sm leading-relaxed cursor-pointer">
                      Diversifying my investment portfolio internationally
                    </Label>
                  </div>
                  <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                    <RadioGroupItem value="short-term" id="short-term" className="mt-0.5 border-[#334ad7] text-[#334ad7]" />
                    <Label htmlFor="short-term" className="text-sm leading-relaxed cursor-pointer">
                      Seeking quick, short-term profits or property flipping
                    </Label>
                  </div>
                  <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                    <RadioGroupItem value="learning" id="learning" className="mt-0.5 border-[#334ad7] text-[#334ad7]" />
                    <Label htmlFor="learning" className="text-sm leading-relaxed cursor-pointer">
                      Just learning
                    </Label>
                  </div>
                </RadioGroup>
                {errors?.primaryGoal && (
                  <p className="text-red-500 text-sm">{errors.primaryGoal}</p>
                )}
              </div>

              {/* Investment Level Question */}
              <div className="space-y-4">
                <Label className="text-base font-semibold text-gray-900">
                  What approximate level of investment in U.S. fractional real estate are you looking to make?
                </Label>
                <RadioGroup
                  value={formData.investmentLevel}
                  onValueChange={(value) => updateFormData('investmentLevel', value)}
                  className="grid grid-cols-1 md:grid-cols-2 gap-3"
                >
                  <div className="flex items-start space-x-3 p-4 border rounded-lg hover:border-[#334ad7] hover:bg-blue-50 transition-all">
                    <RadioGroupItem value="gathering-info" id="gathering-info" className="mt-0.5 border-[#334ad7] text-[#334ad7]" />
                    <Label htmlFor="gathering-info" className="text-sm leading-relaxed cursor-pointer">
                      Primarily gathering information / Undecided for now
                    </Label>
                  </div>
                  <div className="flex items-start space-x-3 p-4 border rounded-lg hover:border-[#334ad7] hover:bg-blue-50 transition-all">
                    <RadioGroupItem value="minimum-level" id="minimum-level" className="mt-0.5 border-[#334ad7] text-[#334ad7]" />
                    <Label htmlFor="minimum-level" className="text-sm leading-relaxed cursor-pointer">
                      Around the minimum level (approx. $1,000 - $5,000)
                    </Label>
                  </div>
                  <div className="flex items-start space-x-3 p-4 border rounded-lg hover:border-[#334ad7] hover:bg-blue-50 transition-all">
                    <RadioGroupItem value="moderate" id="moderate" className="mt-0.5 border-[#334ad7] text-[#334ad7]" />
                    <Label htmlFor="moderate" className="text-sm leading-relaxed cursor-pointer">
                      Moderate investment (approx. $5,000 - $20,000)
                    </Label>
                  </div>
                  <div className="flex items-start space-x-3 p-4 border rounded-lg hover:border-[#334ad7] hover:bg-blue-50 transition-all">
                    <RadioGroupItem value="substantial" id="substantial" className="mt-0.5 border-[#334ad7] text-[#334ad7]" />
                    <Label htmlFor="substantial" className="text-sm leading-relaxed cursor-pointer">
                      Substantial investment (Above $20,000)
                    </Label>
                  </div>
                </RadioGroup>
                {errors?.investmentLevel && (
                  <p className="text-red-500 text-sm">{errors.investmentLevel}</p>
                )}
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-medium text-gray-900">
                    Full Name*
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Your Name"
                      value={formData.fullName}
                      onChange={(e) => updateFormData('fullName', e.target.value)}
                      className={cn(
                        "pl-10 h-12 border-gray-300 focus:border-[#334ad7] focus:ring-[#334ad7]",
                        errors?.fullName && "border-red-500 focus:border-red-500 focus:ring-red-500"
                      )}
                    />
                  </div>
                  {errors?.fullName && (
                    <p className="text-red-500 text-sm">{errors.fullName}</p>
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
                            "w-full h-12 pl-12 pr-3 border border-gray-300 rounded-md focus:border-[#334ad7] focus:ring-[#334ad7] focus:ring-1 focus:outline-none",
                            errors?.phoneNumber && "border-red-500 focus:border-red-500 focus:ring-red-500"
                          )
                        }}
                        containerClass="w-full"
                        buttonClass="border-gray-300 hover:bg-gray-50"
                        dropdownClass="border-gray-300"
                      />
                    </div>
                    {errors?.phoneNumber && (
                      <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-900">
                      Email ID*
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Email ID"
                        value={formData.email}
                        onChange={(e) => updateFormData('email', e.target.value)}
                        className={cn(
                          "pl-10 h-12 border-gray-300 focus:border-[#334ad7] focus:ring-[#334ad7]",
                          errors?.email && "border-red-500 focus:border-red-500 focus:ring-red-500"
                        )}
                      />
                    </div>
                    {errors?.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-[#334ad7] hover:bg-[#2a3fb8] text-white font-medium rounded-lg transition-colors"
              >
                {isSubmitting ? 'Submitting...' : 'Please fill all details'}
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
          border-radius: 6px !important;
          font-size: 14px !important;
        }
        
        .phone-input-container .react-tel-input .form-control:focus {
          border-color: #334ad7 !important;
          box-shadow: 0 0 0 1px #334ad7 !important;
        }
        
        .phone-input-container .react-tel-input .flag-dropdown {
          border-color: #d1d5db !important;
          border-radius: 6px 0 0 6px !important;
          background-color: #f9fafb !important;
        }
        
        .phone-input-container .react-tel-input .flag-dropdown:hover {
          background-color: #f3f4f6 !important;
        }
        
        .phone-input-container .react-tel-input .selected-flag {
          padding: 0 8px !important;
        }
        
        .phone-input-container .react-tel-input .country-list {
          border-color: #d1d5db !important;
          border-radius: 6px !important;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
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