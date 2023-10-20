import React from 'react';
import NavLink from './NavLink';

type Props = {
  links: {
    href: string;
    title: string;
    id: number;
  }[];
};

const MenuOverlay = (props: Props) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {props.links.map((link) => (
        <li key={link.id}>
          <NavLink href={link.href} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
