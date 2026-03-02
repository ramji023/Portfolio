import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Mail, MoveUpRight, Twitter } from "lucide-react";

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
    <section id="contact" className="px-4 md:px-15 py-10">
      <div className="flex items-center gap-2 py-3">
        <h2 className="text-lg md:text-3xl font-bold md:whitespace-nowrap">
          <span className="text-text-other/80">04.</span> Ping Me
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
          className="p-2 md:p-3 rounded-md border"
          placeholder="Your name"
          required
        />
        <input
          name="email"
          className="p-2 md:p-3 rounded-md border"
          placeholder="Your email"
          type="email"
          required
        />
        <input
          name="title"
          className="p-2 md:p-3 rounded-md border md:col-span-2"
          placeholder="Subject"
          required
        />
        <textarea
          name="message"
          className="p-2 md:p-3 rounded-md border md:col-span-2"
          rows={5}
          placeholder="Message"
          required
        />

        <div className="md:col-span-2 flex items-center gap-3">
          <button
            type="submit"
            className="px-2.5 py-1.5 md:px-4 md:py-2 text-sm md:text-base flex items-center justify-center gap-2 rounded-md border border-border-other text-text-other cursor-pointer hover:scale-[1.02]"
          >
            Send Message
            <MoveUpRight className="w-5 h-5" />
          </button>
          <div className="text-xs md:text-sm text-text-secondary">
            Or Connect with me {/* social links  */}
            <div className="flex flex-row justify-start items-center gap-3 text-text-muted">
              <a
                href="mailto:mramji747@gmail.com"
                className="cursor-pointer hover:scale-110 w-7 h-7 rounded-full hover:text-text-other flex justify-center items-center"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/ramji023"
                target="_blank"
                className="cursor-pointer hover:scale-110 w-7 h-7 rounded-full hover:text-text-other flex justify-center items-center"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ram-ji-mishra-2081bb25a/"
                target="_blank"
                className="cursor-pointer hover:scale-110 w-7 h-7 rounded-full hover:text-text-other flex justify-center items-center"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/ramjimishra001"
                target="_blank"
                className="cursor-pointer hover:scale-110 w-7 h-7 rounded-full hover:text-text-other flex justify-center items-center"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </form>

      {status && (
        <p className="mt-4 text-green-500 text-sm font-medium">{status}</p>
      )}
    </section>
  );
}
