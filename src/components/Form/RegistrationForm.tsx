import { useState, useEffect } from 'react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  ticketType: 'standard' | 'vip' | 'student';
  dietaryRequirements: string;
}

interface RegistrationFormProps {
  onSuccess?: () => void;
}

export const RegistrationForm = ({ onSuccess }: RegistrationFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    ticketType: 'standard',
    dietaryRequirements: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Load saved form data from localStorage on component mount
  useEffect(() => {
    const savedFormData = localStorage.getItem('conferenceFormData');
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('conferenceFormData', JSON.stringify(formData));
  }, [formData]);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    let isValid = true;

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^\+?[0-9\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // In a real app, you would send the data to your backend here
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        ticketType: 'standard',
        dietaryRequirements: '',
      });
      // Clear any saved form data from localStorage
      localStorage.removeItem('conferenceFormData');
      
      // Call the onSuccess callback if provided
      if (onSuccess) {
        onSuccess();
      }
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Thank you for registering!</strong>
        <span className="block sm:inline"> We've received your details and will be in touch soon.</span>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Register for TechConf 2024</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-gray-700 font-medium mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.fullName ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="John Doe"
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="+1 (555) 123-4567"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="ticketType" className="block text-gray-700 font-medium mb-1">
            Ticket Type *
          </label>
          <select
            id="ticketType"
            name="ticketType"
            value={formData.ticketType}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="standard">Standard Pass ($199)</option>
            <option value="vip">VIP Pass ($399)</option>
            <option value="student">Student Pass ($99)</option>
          </select>
        </div>

        <div>
          <label htmlFor="dietaryRequirements" className="block text-gray-700 font-medium mb-1">
            Dietary Requirements
          </label>
          <textarea
            id="dietaryRequirements"
            name="dietaryRequirements"
            value={formData.dietaryRequirements}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Any dietary restrictions or allergies?"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg active:scale-95"
          >
            Register Now
          </button>
        </div>

        <p className="text-sm text-gray-500 mt-4">
          * Required fields
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
