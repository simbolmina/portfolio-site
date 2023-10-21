import React from 'react';

type Props = {};

const ContactForm = (props: Props) => {
  return (
    <form className="flex flex-col gap-6">
      <div>
        <label
          htmlFor="email"
          className="text-white block  text-sm font-medium mb-2"
        >
          Your Email
        </label>
        <input
          type="email"
          id="email"
          required
          placeholder="email@email.com"
          className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
        />
      </div>
      <div>
        <label
          htmlFor="subject"
          className="text-white block text-sm font-medium mb-2"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          required
          placeholder="Placeholder for subject"
          className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="text-white block text-sm mb-2 font-medium"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          placeholder="Leave your message here"
        />
      </div>
      <button
        disabled
        type="submit"
        className="bg-primary-500 hover:bg-purle-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
