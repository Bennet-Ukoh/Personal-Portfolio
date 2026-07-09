"use client";

import SectionHeading from "@/components/ui/section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/features/contact/actions";
import SubmitBtn from "@/components/ui/submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-12 w-[min(100%,38rem)] scroll-mt-28 text-center sm:mb-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact</SectionHeading>

      <p className="-mt-6 text-gray-700 dark:text-white/80">
        I'm currently open to{" "}
        <span className="font-medium">remote Frontend Engineer opportunities</span>.
        Reach me directly at{" "}
        <a className="underline" href="mailto:bennetukoh@gmail.com">
          bennetukoh@gmail.com
        </a>{" "}
        or through the form below.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <label htmlFor="senderEmail" className="sr-only">
          Your email
        </label>
        <input
          id="senderEmail"
          className="borderBlack h-12 rounded-lg px-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <label htmlFor="message" className="sr-only">
          Your message
        </label>
        <textarea
          id="message"
          className="borderBlack my-3 h-40 rounded-lg p-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
