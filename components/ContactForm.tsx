"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  college: z.string().min(2, {
    message: "College name must be at least 2 characters.",
  }),
  phone: z.string().min(1, {
    message: "Please enter a valid phone number.",
  }),
  cvLink: z
    .union([
      z.string().url({
        message: "Please enter a valid URL for your CV.",
      }),
      z.string().length(0),
    ])
    .optional(),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      college: "",
      phone: "",
      cvLink: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      console.log("Attempting to submit form with values:", values);

      // Check if db is properly initialized
      if (!db) {
        throw new Error("Firestore database not initialized");
      }

      // Create the contacts collection reference
      const contactsRef = collection(db, "contacts");
      console.log("Collection reference created");

      // Add the document
      const docRef = await addDoc(contactsRef, {
        ...values,
        timestamp: new Date().toISOString(),
      });

      console.log("Document written with ID: ", docRef.id);
      setSubmitStatus("success");
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="w-full min-h-screen py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#FFEDED]"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center rounded-full bg-[#FFE0E0] px-4 py-1.5 mb-6">
            <span className="text-sm font-medium text-[#b26469]">
              Get in touch
            </span>
          </div>
          <h2 className="text-4xl font-mabry font-semibold text-[#403334] mb-4">
            Contact <span className="text-[#b24e55]">Us</span>
          </h2>
          <p className="text-[#4A3D55] text-lg">
            We'd love to hear from you. Please fill out this form.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Grid container for name and email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#403334]">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your name"
                          className="h-12"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#403334]">Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your email"
                          type="email"
                          className="h-12"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Grid container for college and phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="college"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#403334]">College</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your college name"
                          className="h-12"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#403334]">
                        Phone/WhatsApp Number
                      </FormLabel>
                      <FormControl>
                        <PhoneInput
                          international
                          defaultCountry="IN"
                          value={field.value}
                          onChange={field.onChange}
                          className="h-12 flex"
                          style={
                            {
                              "--PhoneInputCountryFlag-height": "20px",
                            } as React.CSSProperties
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* CV Link remains full width */}
              <FormField
                control={form.control}
                name="cvLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#403334]">
                      CV Link (Optional)
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter the link to your CV (optional)"
                        type="url"
                        className="h-12"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-gradient-to-t from-[#b24e55] to-[#E3405F] text-white hover:opacity-90"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>

              {submitStatus === "success" && (
                <p className="text-green-600 text-center">
                  Thank you for contacting us! We'll get back to you soon.
                </p>
              )}

              {submitStatus === "error" && (
                <p className="text-red-600 text-center">
                  Error:{" "}
                  {errorMessage ||
                    "Something went wrong. Please try again later."}
                </p>
              )}
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
