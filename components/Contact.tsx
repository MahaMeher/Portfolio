"use client";
import { useState } from "react";
export default function Contact() {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handlechange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handlesubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess("Message Sent Successfully!");
        setFormData({ email: "", message: "" });
      } else {
        setSuccess("Failed To Send Message.Try Again");
      }
    } catch (error) {
      console.error(error);
      setSuccess("Something Went Wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section
      id="contact"
      className="h-screen md:h-1/2 flex justify-center items-center bg-violet-400 bg-opacity-35 px-8 py-24"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full md:w-1/2 text-left py-4 ">
          <h1 className="text-4xl font-extrabold  text-blue-950 transform translate-x-[12px] hover:translate-x-0 transition-all duration-500">
            Lets Connect
          </h1>
          <h1 className="text-3xl font-bold text-blue-950 mt-4 transform transition-all animate-slide-in duration-500">
            Have A Project In Mind?
          </h1>
          <h1 className="text-2xl font-semibold text-blue-950 mt-6 transform scale-90 hover:scale-100 transition-transform duration-500">
            Drop Me A Message!
          </h1>
        </div>

        <div className="w-full md:w-1/2 px-20 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4 text-center text-blue-950 transform animate-slide-in duration-700">
            Contact Me
          </h2>
          <form onSubmit={handlesubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="your email"
              value={formData.email}
              onChange={handlechange}
              required
              className="w-full p-4 bg-violet-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950"
            />

            <textarea
              name="message"
              placeholder="your message"
              value={formData.message}
              onChange={handlechange}
              required
              className="w-full p-6 items-center bg-violet-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full p-3 text-xl font-semibold  text-blue-950 rounded-lg"
            >
              {loading ? "sending..." : "Send Message"}
            </button>
            {success && (
              <p className="text-black mt-2 flex justify-center"> {success}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
