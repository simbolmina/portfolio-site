import React from 'react';

type Props = {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
};

const ProjectTag = (props: Props) => {
  const buttonStyle = props.isSelected
    ? 'text-white border-purple-500'
    : 'text-[#adb7be] border-slate-600 hover:border-white';

  return (
    <button
      className={`${buttonStyle} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => props.onClick(props.name)}
    >
      {props.name}
    </button>
  );
};

export default ProjectTag;
