import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { Target } from './target/Target';
import { Rule } from './rule/Rule';
import { Message } from './message/Message';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Target',
    children: <Target />,
  },
  {
    key: '2',
    label: 'Rule',
    children: <Rule />,
  },
  {
    key: '3',
    label: 'Message',
    children: <Message />,
  },
];

export const Validation: React.FC = () => {

    const onChange = (key: string) => {
        console.log(key);
    };

    return (
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    )
};