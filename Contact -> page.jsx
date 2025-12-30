"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ PREVENT REDIRECT

    if (!formData.name || !formData.email || !formData.message) {
      toast.warning("Please fill all fields ⚠️");
      return;
    }

    setLoading(true);

    // Show loading toast
    const toastId = toast.loading("Sending your message, please wait... ⏳");

    try {
      // 🔹 simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Success toast
      toast.success("Message sent successfully ✅", { id: toastId });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message ❌", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 space-y-4 page-enter">
      <div className="text-lg font-semibold text-theme">Contact Us</div>
      <hr className="border-theme/30 mb-4" />

      <div className="flex items-center justify-center">
        <div
          className="w-full max-w-md rounded-2xl p-6 shadow-lg border transition-colors duration-300"
          style={{
            backgroundColor: "var(--secondary)",
            borderColor: "var(--accent)",
          }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div>
              <label className="block mb-1 text-theme" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg border transition-colors duration-300"
                style={{
                  backgroundColor: "var(--background)",
                  borderColor: "var(--accent)",
                  color: "var(--text-color)",
                }}
              />
            </div>

            <div>
              <label className="block mb-1 text-theme" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-lg border transition-colors duration-300"
                style={{
                  backgroundColor: "var(--background)",
                  borderColor: "var(--accent)",
                  color: "var(--text-color)",
                }}
              />
            </div>

            <div>
              <label className="block mb-1 text-theme" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                className="w-full px-4 py-2 rounded-lg border resize-none h-32 transition-colors duration-300"
                style={{
                  backgroundColor: "var(--background)",
                  borderColor: "var(--accent)",
                  color: "var(--text-color)",
                }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full font-semibold py-2 rounded-lg shadow-md transition
                btn-theme ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      <p className="text-center text-theme/70 text-sm mt-6 italic">
        For any queries or support related to buffalo and cattle breed detection, feel free to contact us.
      </p>
    </div>
  );
}
