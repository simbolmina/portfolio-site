import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <section
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative scroll-smooth"
      id="contact"
    >
      {/* <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2 z-0" /> */}
      <div>
        <h5 className="text-xl font-bold text-white my-2 z-10">
          Let's Connect
        </h5>
        <p className="text-[#adb7be] mb-4 max-w-md">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
          dolorum modi nobis unde iusto? Ducimus, voluptate corrupti, placeat
          quae accusamus excepturi a vel molestiae hic facilis dicta porro.
          Sapiente, sunt!
        </p>
        <div className="socials flex gap-2">
          <Link href="github.com/simbolmina">
            <Image
              src={'/github-icon.svg'}
              alt="github icon"
              width={50}
              height={50}
            />
          </Link>
          <Link href="github.com/simbolmina">
            <Image
              src={'/linkedin-icon.svg'}
              alt="linkedin icon"
              width={50}
              height={50}
            />
          </Link>
        </div>
      </div>
      <div>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
