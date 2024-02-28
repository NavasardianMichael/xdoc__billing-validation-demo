import { MinusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

export const RemoveIcon: React.FC = () => {
    return (
        <Button danger type='dashed' style={{padding: '4px 9px', background: 'transparent'}}>
            <MinusOutlined onClick={(event) => event.stopPropagation()} />
        </Button>
    )
};