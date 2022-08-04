import Image from 'next/image';
import React from 'react';

type FooterProps = {
  sectionTitle: string;
  section: SectionProps[];
};

type SectionProps = {
  title: string;
};

const FooterData: FooterProps[] = [
  {
    sectionTitle: 'Company',
    section: [
      {
        title: 'About',
      },
      {
        title: 'TikTok Browse',
      },
      {
        title: 'Newsroom',
      },
      {
        title: 'Contact',
      },
      {
        title: 'Careers',
      },
      {
        title: 'ByteDance',
      },
    ],
  },
  {
    sectionTitle: 'Programs',
    section: [
      {
        title: 'TikTok for Good',
      },
      {
        title: 'Advertise',
      },
      {
        title: 'Developers',
      },
      {
        title: 'TikTok Rewards',
      },
    ],
  },
  {
    sectionTitle: 'Support',
    section: [
      {
        title: 'Help Center',
      },
      {
        title: 'Safety Center',
      },
      {
        title: 'Creator Portal',
      },
      {
        title: 'Community Guidelines',
      },
      {
        title: 'Transparency',
      },
      {
        title: 'Accessibility',
      },
    ],
  },
  {
    sectionTitle: 'Legal',
    section: [
      {
        title: 'Terms of Use',
      },
      {
        title: 'Privacy Policy',
      },
    ],
  },
];

export default function Footer() {
  return (
    <div className='pt-36 px-16 pb-16 bg-black text-white flex items-start justify-around '>
      <Image src='/logo-black.png' alt='tik tok logo' width={130} height={50} />

      {FooterData.map((footer, index) => (
        <div key={footer.sectionTitle}>
          <h4 className='font-bold mb-2'>{footer.sectionTitle}</h4>
          <ul>
            {footer.section.map((section, index) => (
              <li
                key={section.title}
                className='font-thin text-sm py-1 hover:opacity-60 cursor-pointer'
              >
                {section.title}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
