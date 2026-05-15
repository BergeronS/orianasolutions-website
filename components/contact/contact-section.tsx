"use client";

import React, { useState } from "react";
import Container from "../shared/container";
import Button from "../ui/button";
import Input from "../ui/input";
import { Typography } from "../ui/typography";
import Image from "next/image";

export default function ContactSection() {
  const [errors, setErrors] = useState<Record<string, string>>({
    name: "",
    email: "",
    message: "",
  });

  const handleFieldInput = (field: string) => () => {
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name")?.toString().trim() || "",
      email: formData.get("email")?.toString().trim() || "",
      message: formData.get("message")?.toString().trim() || "",
    };

    const newErrors = {
      name: data.name ? "" : "Name is required",
      email: data.email ? "" : "Email is required",
      message: data.message ? "" : "Message is required",
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((error) => error !== "");

    if (hasError) return;

    console.log("Form Data:", data);

    console.log("FormData Object:");
    formData.forEach((value, key) => {
      console.log(`${key}:`, value);
    });

    e.currentTarget.reset();
  };

  return (
    <section className="py-12 ">
      <Container className="sm:max-w-[80%] w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-8 gap-16 sm:items-start items-center justify-center">
          <div className="max-w-[520px] mx-auto md:mx-0 text-center md:text-left">
            <Typography variant="h3" className="mb-6 sm:block hidden">
              Contactez-nous
            </Typography>

            <div className="flex flex-col gap-5 text-sm">
              <div  className="flex flex-col gap-2.5">
                <p className="text-[#808080]">Courriel</p>
                <p className="font-medium text-base text-[#0B1226]">
                  info@orianasolutions.com
                </p>
              </div>

              <div className="flex flex-col gap-2.5">
                <p className="text-[#808080]">Téléphone</p>
                <p className="font-medium text-base text-[#0B1226]">
                  (123) 1221 2323
                </p>
              </div>

              <div className="flex flex-col gap-2.5">
                <p className="text-[#808080]">Adresse</p>
                <div className="font-medium text-base text-[#0B1226] max-w-[296px]">
                  <p>123 Innovation Avenue, Suite 456
                  Tech District, San Francisco, CA 94107
                  United States</p>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <p className="text-[#808080]">Suivez-nous</p>
                <div className="flex gap-5 items-center justify-center md:justify-start">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="inline-flex items-center justify-center"
                  >
                    <Image
                      src="/svg/FacebookLogo.svg"
                      alt="facebook"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </a>

                  <a
                    href="#"
                    aria-label="Instagram"
                    className="inline-flex items-center justify-center"
                  >
                    <Image
                      src="/svg/InstagramLogo.svg"
                      alt="instagram"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </a>

                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="inline-flex items-center justify-center"
                  >
                    <Image
                      src="/svg/LinkedinLogo.svg"
                      alt="linkedin"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="flex gap-4 flex-row">
                <div className="flex-1">
                  <Input
                    label="Votre nom"
                    placeholder="Your full name"
                    name="name"
                    onChange={handleFieldInput("name")}
                  />

                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div className="flex-1">
                  <Input
                    label="Adresse courriel"
                    placeholder="Your email"
                    name="email"
                    type="email"
                    onChange={handleFieldInput("email")}
                  />

                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <Input
                  label="Message"
                  variant="textarea"
                  placeholder="Write something..."
                  name="message"
                  onChange={handleFieldInput("message")}
                />

                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <div className="pt-2 w-full">
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full md:w-full"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
