import { useState } from "react";

import "./Spinner.scss";

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
};

interface ContactFormProps {
  setFlashMessage: Function;
}

const ContactForm: React.FC<ContactFormProps> = ({ setFlashMessage }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    // Simple email validation using regular expression
    const emailValidationRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const isEmailValid = emailValidationRegex.test(formData.email.trim());
  
    // Check for message length; adjust the min length as needed
    const minMessageLength = 5; // Example minimum length
    const isMessageLongEnough = formData.message.trim().length >= minMessageLength;
  
    // Validation for empty fields and specific format checks
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFlashMessage({
        message: "Please fill in all fields.",
        type: "error",
        active: true,
      });
      return;
    } else if (!isEmailValid) {
      setFlashMessage({
        message: "Please enter a valid email address.",
        type: "error",
        active: true,
      });
      return;
    } else if (!isMessageLongEnough) {
      setFlashMessage({
        message: `Please enter a message of at least ${minMessageLength} characters.`,
        type: "error",
        active: true,
      });
      return;
    }
  
    setIsSubmitting(true);
    const formProps = { ...formData };
  
    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formProps),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setFlashMessage({
        message: "Message sent successfully!",
        type: "success",
        active: true,
      });
    } catch (error) {
      console.error("Failed to send message:", error);
      setFlashMessage({
        message: "Something went wrong, please try again.",
        type: "error",
        active: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="container mx-auto py-12 sm:px-4 ">
      <div className="contact-form-container p-8">
        <h2 className="contact-form-header text-2xl font-semibold mb-6">
          Contact Me
        </h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-container mb-4">
            <label
              htmlFor="name"
              className="block text-slate-900 font-medium mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nelson Bighetti"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-slate-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="input-container">
            <label
              htmlFor="name"
              className="block text-slate-900 font-medium mb-2"
            >
              Email:
            </label>
            <input
              type="text"
              name="email"
              placeholder="big_head@hooli.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-slate-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="input-container">
            <label
              htmlFor="name"
              className="block text-slate-900 font-medium mb-2"
            >
              Message:{" "}
            </label>
            <textarea
              name="message"
              placeholder="Always blue..."
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-slate-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex items-center justify-center mt-6">
            <button
              type="submit"
              className="text-slate-100 bg-blue-500 hover:bg-blue-700 font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? <Spinner /> : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
