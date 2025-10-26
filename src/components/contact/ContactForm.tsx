"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState, useRef, useEffect } from "react";
import { CustomButton } from "../common/CustomButton";
import { Icon } from "../ui/Icon";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject?: string;
  message?: string;
  submit?: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const successTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      if (successTimeoutRef.current) {
        clearTimeout(successTimeoutRef.current);
        successTimeoutRef.current = null;
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validate = () => {
    const newErrors: FormErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.email) {
      newErrors.email = "Email Address is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    setLoading(true);
    setErrors((prev) => ({ ...prev, submit: undefined }));

    timeoutRef.current = setTimeout(async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setSubmitted(true);
        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
        if (successTimeoutRef.current) {
          clearTimeout(successTimeoutRef.current);
          successTimeoutRef.current = null;
        }
        successTimeoutRef.current = setTimeout(() => setSubmitted(false), 5000);
      } catch (error) {
        setErrors(prev => ({ ...prev, submit: 'Failed to send message. Please try again.' }));
      } finally {
        setLoading(false);
      }
    }, 1000);
  };  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <Card className="p-8">
        <div className="flex items-center gap-3 mb-6">
          <Users className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold">Send us a Message</h2>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-background ${errors.firstName ? "border-red-500" : "border-border"}`}
                placeholder="John"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-background ${errors.lastName ? "border-red-500" : "border-border"}`}
                placeholder="Doe"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-background ${errors.email ? "border-red-500" : "border-border"}`}
              placeholder="john.doe@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-background ${errors.subject ? "border-red-500" : "border-border"}`}
              placeholder="How can we help you?"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-background resize-none ${errors.message ? "border-red-500" : "border-border"}`}
              placeholder="Tell us more about your inquiry..."
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full px-6 py-3 rounded-lg bg-gradient-to-r from-secondary to-accent text-primary-foreground font-semibold shadow-lg duration-300 transition-transform ${loading ? "opacity-50 cursor-not-allowed" : "hover:scale-105"}`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {errors.submit && (
            <p className="text-red-500 text-sm mt-2">{errors.submit}</p>
          )}

          {submitted && (
            <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">
              Your message has been sent successfully!
            </div>
          )}
        </form>

        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> This is a demo form. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore.
          </p>
        </div>
      </Card>
    </motion.div>
  );
}
