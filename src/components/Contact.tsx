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
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.reset();
        },
        () => {
          setStatus("Failed to send message. Try again!");
        }
      );
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold">Contact Me</h2>
      <p className="mt-2 text-slate-600 max-w-xl">
        Want to work together? Send me a message.
      </p>

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
            className="px-4 py-2 rounded-md bg-indigo-600 text-white cursor-pointer"
          >
            Send Message
          </button>
          <div className="text-sm text-slate-500">
            Or email me at{" "}
            <span className="font-medium">mramji747@gmail.com</span>
          </div>
        </div>
      </form>

      {status && (
        <p className="mt-4 text-green-500 text-sm font-medium">{status}</p>
      )}
    </section>
  );
}
