import { DefaultFooter } from '@ant-design/pro-layout';
import React from 'react';

const copyright: String = 'Power Blazers';

const linkList = [
  {
    title: 'Power Blazers',
    href: 'https://www.bupt.edu.cn/',
    blankTarget: true,
  },
];

interface Props {}

const GlobalFooter: React.FC<Props> = () => (
  <DefaultFooter copyright={copyright} links={linkList} />
);

export default GlobalFooter;
