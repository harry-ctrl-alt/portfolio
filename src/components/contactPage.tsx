"use client";

import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { Heading, SubHeading, Body } from "../components/text";
import SummaryCard from "../components/summaryCard";
import Divider from "./divider";
import emailjs from "@emailjs/browser";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("PVlx1ZsJTdIk2y9_X"); // You'll replace this with your actual public key
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Update the handleSubmit function in your ContactPage component

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const templateParams = {
        name: formData.name, // {{name}} in template
        email: formData.email, // {{email}} in template
        subject: formData.subject, // {{subject}} in template (if you add it to template)
        message: formData.message, // {{message}} in template
        time: new Date().toLocaleString(), // {{time}} in template
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        "service_dupumbh",
        "template_hc1vts3",
        templateParams,
        "PVlx1ZsJTdIk2y9_X"
      );

      console.log("Email sent successfully:", result);
      setSubmitStatus("success");

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} className="text-blue-400" />,
      title: "Email",
      desc: "harrymurray088@gmail.com",
    },
    {
      icon: <Phone size={24} className="text-blue-400" />,
      title: "Phone",
      desc: "+44 7123 456789",
    },
    {
      icon: <MapPin size={24} className="text-blue-400" />,
      title: "Location",
      desc: "Belfast, Northern Ireland",
    },
    {
      icon: <MessageCircle size={24} className="text-blue-400" />,
      title: "Response Time",
      desc: "Usually within 24 hours",
    },
  ];

  return (
    <div className="mb-8">
      {/* Header */}
      <div className="mb-8">
        <Heading bold>Contact Me</Heading>
        <Divider />
        <Body size="large" textColour="text-gray-300">
          Have a project in mind or want to discuss opportunities? I&apos;d love
          to hear from you. Feel free to reach out through any of the methods
          below.
        </Body>
      </div>

      {/* Contact Information Cards */}
      <section className="mb-12">
        <SubHeading bold className="mb-6">
          Get In Touch
        </SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {contactInfo.map((item, idx) => (
            <SummaryCard
              key={idx}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section>
        <SubHeading bold className="mb-6">
          Send a Message
        </SubHeading>

        {/* Success/Error Messages */}
        {submitStatus === "success" && (
          <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
            <Body textColour="text-green-400">
              Thank you! Your message has been sent successfully. I'll get back
              to you soon.
            </Body>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <Body textColour="text-red-400">
              Sorry, there was an error sending your message. Please try again
              or contact me directly via email.
            </Body>
          </div>
        )}

        <div className="group relative rounded-2xl transition-all duration-200">
          <div
            className="
            relative
            bg-neutral-800/90
            rounded-2xl
            border border-neutral-700/50
            shadow-lg shadow-black/20
            p-8
            transition-all duration-200
            group-hover:border-neutral-600/60
          "
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="
                      w-full px-4 py-3
                      bg-neutral-700/50
                      border border-neutral-600/50
                      rounded-lg
                      text-white placeholder-gray-400
                      focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50
                      transition-all duration-200
                    "
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="
                      w-full px-4 py-3
                      bg-neutral-700/50
                      border border-neutral-600/50
                      rounded-lg
                      text-white placeholder-gray-400
                      focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50
                      transition-all duration-200
                    "
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="
                    w-full px-4 py-3
                    bg-neutral-700/50
                    border border-neutral-600/50
                    rounded-lg
                    text-white placeholder-gray-400
                    focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50
                    transition-all duration-200
                  "
                  placeholder="What's this about?"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="
                    w-full px-4 py-3
                    bg-neutral-700/50
                    border border-neutral-600/50
                    rounded-lg
                    text-white placeholder-gray-400
                    focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50
                    transition-all duration-200
                    resize-vertical
                  "
                  placeholder="Tell me about your project or what you'd like to discuss..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    relative group
                    flex items-center gap-2.5 
                    px-8 py-4
                    bg-gradient-to-r from-blue-500/10 to-purple-500/10
                    border border-blue-500/20
                    text-gray-300
                    font-medium text-sm uppercase tracking-wider
                    rounded-lg
                    transition-all duration-300
                    hover:border-blue-400/40
                    hover:text-white
                    hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]
                    hover:translate-y-[-2px]
                    disabled:opacity-50 disabled:cursor-not-allowed
                    disabled:hover:translate-y-0 disabled:hover:shadow-none
                    overflow-hidden
                  "
                >
                  {/* Gradient background on hover */}
                  <div
                    className="
                      absolute inset-0 
                      bg-gradient-to-r from-blue-500/20 to-purple-500/20
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-300
                    "
                  />

                  {/* Content */}
                  <Send
                    size={18}
                    className={`relative z-10 transition-transform duration-200 ${
                      isSubmitting ? "animate-pulse" : ""
                    }`}
                  />
                  <span className="relative z-10">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>

                  {/* Subtle gradient border glow */}
                  <div
                    className="
                      absolute inset-0 rounded-lg
                      bg-gradient-to-r from-blue-400 to-purple-400
                      opacity-0 group-hover:opacity-20
                      blur-xl
                      transition-opacity duration-300
                    "
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
