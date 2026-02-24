import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.reset();
        },
        () => {
          setStatus("Failed to send message. Try again!");
        },
      );
  };

  return (
    <section
    id="contact"
    className="px-4 md:px-15 py-10">
      <div className="flex items-center gap-2 py-5">
        <h2 className="text-2xl md:text-3xl font-bold md:whitespace-nowrap">
          <span className="text-text-other/80">03.</span> Ping Me
        </h2>

        {/*straight line */}
        <div className="hidden md:block h-px w-full bg-text-muted"></div>
      </div>

      {/* <p className="mt-2 text-text-secondary max-w-xl">
        Want to work together? Send me a message.
      </p> */}

      <form onSubmit={sendEmail} className="mt-6 grid gap-3 md:grid-cols-2">
        <input
          name="name"
          className="p-3 rounded-md border"
          placeholder="Your name"
          required
        />
        <input
          name="email"
          className="p-3 rounded-md border"
          placeholder="Your email"
          type="email"
          required
        />
        <input
          name="title"
          className="p-3 rounded-md border md:col-span-2"
          placeholder="Subject"
          required
        />
        <textarea
          name="message"
          className="p-3 rounded-md border md:col-span-2"
          rows={5}
          placeholder="Message"
          required
        />

        <div className="md:col-span-2 flex items-center gap-3">
          <button
            type="submit"
            className="px-3 py-1 md:px-4 md:py-2 rounded-md border border-border-other text-text-other cursor-pointer hover:scale-[1.02]"
          >
            Send Message
          </button>
          <div className="text-sm text-text-secondary">
            Or email me at{" "}
            <span className="font-medium text-text-other">
              mishraramji039@gmail.com
            </span>
          </div>
        </div>
      </form>

      {status && (
        <p className="mt-4 text-green-500 text-sm font-medium">{status}</p>
      )}
    </section>
  );
}
