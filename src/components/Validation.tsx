import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import React from 'react';
import { Message } from './message/Message';
import { TargetsList } from './targets/List';
import { RulesList } from './rules/List';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Target',
    children: <TargetsList />,
  },
  {
    key: '2',
    label: 'Rule',
    children: <RulesList />,
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