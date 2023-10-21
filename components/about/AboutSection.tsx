'use client';
import Image from 'next/image';
import React from 'react';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className="list-disc pl-2 ">
        <li>Node.JS</li>
        <li>Expres</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    title: 'Ecucation',
    id: 'education',
    content: (
      <ul className="list-disc pl-2 ">
        <li>University Of Life</li>
        <li>Academy of Pain</li>
      </ul>
    ),
  },
  {
    title: 'Experience',
    id: 'experience',
    content: (
      <ul className="list-disc pl-2 ">
        <li>Work Place I</li>
        <li>Work Place I</li>
      </ul>
    ),
  },
];

type Props = {};

const AboutSection = (props: Props) => {
  const [tab, setTab] = React.useState('skills');

  const [isPending, startTransition] = React.useTransition();

  const handleTabChange = (tab: string) => {
    startTransition(() => {
      setTab(tab);
    });
  };
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about.png" alt="phone" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full ">
          <h2 className="text-4xl font-bold text-white mb-4">Lorem Ipsum</h2>
          <p className="text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            quia molestias, ab perferendis doloribus amet nesciunt provident
            excepturi nostrum sapiente autem aliquam, quidem incidunt illo non
            itaque minima eaque in.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('experience')}
              active={tab === 'experience'}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
