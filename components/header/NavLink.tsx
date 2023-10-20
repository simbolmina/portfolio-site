import Link from 'next/link';
import React from 'react';

type Props = {
  href: string;
  title: string;
};

const NavLink = (props: Props) => {
  return (
    <Link
      href={props.href}
      className="block py-2 pl-3 pr-4 text-[#adb7be] rounded md:p-0 hover:text-white"
    >
      {props.title}
    </Link>
  );
};

export default NavLink;
