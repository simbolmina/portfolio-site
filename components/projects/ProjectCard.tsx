import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
type Props = {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
};

const ProjectCard = (props: Props) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${props.imgUrl})`, backgroundSize: 'cover' }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-700">
          <Link
            href={props.gitUrl}
            className="h-14 w-14 mr-2 border-2 rounded-full border-[#adb7be] hover:border-white flex items-center justify-center group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#adb7be] cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={props.previewUrl}
            className="h-14 w-14 border-2 rounded-full border-[#adb7be] hover:border-white flex items-center justify-center group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#adb7be] cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="font-xl font-semibold mb-2">{props.title}</h5>
        <p className="text-[#adb7be]">{props.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
