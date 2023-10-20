import React from 'react';

type Props = {
  active: boolean;
  selectTab: any;
  children: string;
};

const TabButton = (props: Props) => {
  const buttonClasses = props.active
    ? 'text-white border-b border-purple-500'
    : 'text-[#adb7be]';
  return (
    <button onClick={props.selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {props.children}
      </p>
    </button>
  );
};

export default TabButton;
