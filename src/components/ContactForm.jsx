import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { HiMail } from "react-icons/hi";
import { Button, Textarea, TextInput, Spinner, Alert } from "flowbite-react";
import { FaUserCircle } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  const serviceID = import.meta.env.VITE_PUBLIC_EMAILJS_SERVICE_ID || "";
  const templateID = import.meta.env.VITE_PUBLIC_EMAILJS_TEMPLATE_ID || "";
  const userID = import.meta.env.VITE_PUBLIC_EMAILJS_PUBLIC_KEY || "";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setStatusMessage({ type: "", text: "" });

    try {
      const emailParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };

      await emailjs.send(serviceID, templateID, emailParams, userID);

      setStatusMessage({
        type: "success",
        text: "Message sent successfully!",
      });
      reset();
    } catch (error) {
      setStatusMessage({
        type: "error",
        text: "Failed to send message. Please try again.",
      });

      console.log(error, userID);
      
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="col-span-2    relative overflow-hidden h-fit md:h-full md:col-span-3  lg:col-span-2  flex flex-col w-full p-3 text-center">
      {/* <div>
        <h2 className="text-2xl font-Acme text-gray-800 dark:text-gray-100">
          Send a Message
        </h2>
        <p className="font-Fira text-sm">
          Any question or remarks? Just write us a message.
        </p>
      </div> */}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="py-4 gap-4 flex  h-full  justify-center flex-col"
      >
        <div className="flex w-full lg:flex-row  flex-col  justify-between gap-2">
          {/* Name Field */}
          <div className="w-full">
            <TextInput
              type="text"
              icon={FaUserCircle}
              placeholder="Name"
              color={errors.name ? "failure" : undefined}
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-red-500 text-start ms-2 font-semibold text-sm">
                Name is required
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="w-full">
            <TextInput
              type="email"
              icon={HiMail}
              placeholder="name@example.com"
              color={errors.email ? "failure" : undefined}
              {...register("email", {
                required: true,
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-start ms-2 font-semibold text-sm">
                {errors.email.message || "Email is required"}
              </p>
            )}
          </div>
        </div>

        {/* Message Field */}
        <div>
          <Textarea
            id="message"
            placeholder="Leave a comment..."
            rows={4}
            color={errors.message ? "failure" : undefined}
            {...register("message", { required: true })}
          />
          {errors.message && (
            <p className="text-red-500 text-start ms-2 transition-all duration-300 font-semibold text-sm">
              Message is required
            </p>
          )}
        </div>

        {/* Status Message */}
        {statusMessage.text && (
          <Alert
            color={statusMessage.type === "success" ? "success" : "failure"}
          >
            {statusMessage.text}
          </Alert>
        )}

        <Button
          type="submit"
          className=" bg-secondary dark:bg-secondary  cursor-pointer hover:bg-[#63cd94] dark:hover:bg-[#8ae9b6e2]"
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <Spinner size="sm" light />
              Sending...
            </div>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </div>
  );
};
