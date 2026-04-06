'use client';

import { useState } from 'react';
import {
  formWrapperClass,
  inputClass,
  statusClass,
  submitButtonClass,
  fieldGridClass,
  spinnerClass,
  FORMSPREE_ENDPOINT,
} from '@/lib/form-styles';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '', // Honeypot field
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const errors = [];
    
    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      errors.push('First and last name are required');
    }
    
    if (formData.firstName.trim().length < 2 || formData.lastName.trim().length < 2) {
      errors.push('Names must be at least 2 characters');
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.push('Please enter a valid email address');
    }
    
    if (formData.message.trim().length < 10) {
      errors.push('Message must be at least 10 characters');
    }
    
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.company.trim()) {
      return;
    }
    
    // Client-side validation
    const errors = validateForm();
    if (errors.length > 0) {
      setStatus({ type: 'error', message: errors[0] });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          message: formData.message
        }),
      });

      const result = await response.json().catch(() => null);

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thanks — your message was sent. We\'ll get back to you shortly.'
        });
        // Clear form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          message: ''
        });
      } else {
        const message =
          result?.error ||
          result?.errors?.[0]?.message ||
          'Something went wrong. Please try again.';
        setStatus({ type: 'error', message });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={formWrapperClass}>
      {/* Status Messages */}
      {status && (
        <div className={statusClass(status.type)}>
          {status.message}
        </div>
      )}

      <div className={fieldGridClass}>
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          value={formData.firstName}
          onChange={handleChange}
          required
          className={inputClass}
          disabled={isSubmitting}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          value={formData.lastName}
          onChange={handleChange}
          required
          className={inputClass}
          disabled={isSubmitting}
        />
      </div>

      <input
        type="email"
        name="email"
        placeholder="Email address"
        value={formData.email}
        onChange={handleChange}
        required
        className={inputClass}
        disabled={isSubmitting}
      />

      {/* Honeypot field - hidden from users */}
      <input
        type="text"
        name="company"
        placeholder="Company name (optional)"
        value={formData.company}
        onChange={handleChange}
        className={inputClass}
        disabled={isSubmitting}
        style={{ display: 'none' }}
        aria-hidden="true"
        tabIndex="-1"
      />

      <textarea
        name="message"
        rows="5"
        placeholder="Tell us about your business and what you’re trying to improve."
        value={formData.message}
        onChange={handleChange}
        required
        className={inputClass}
        disabled={isSubmitting}
      ></textarea>

      <button
        type="submit"
        disabled={isSubmitting}
        className={submitButtonClass}
      >
        {isSubmitting ? (
          <>
            <div className={spinnerClass}></div>
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
}
