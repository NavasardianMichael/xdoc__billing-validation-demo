import { InfoCircleOutlined } from '@ant-design/icons';
import { Input, Tooltip, Typography } from 'antd';
import React from 'react';

export const Message: React.FC = () => {
  const str = "One can has access to the current validation target and rule using it in brackets (e.g. {target} has the code {rule:1:1}, but it shouldn't have)."
    return (
      <>
        <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
        <Typography.Title style={{display: 'inline-block', marginLeft: '.75rem'}} level={5}>
          {str}
        </Typography.Title>
        <Input
          placeholder="Type the validation message here: e.g. {target} has the code {rule:1:1}, but it shouldn't have."
          suffix={
            <Tooltip color='blue' title="">
            </Tooltip>
          }
        />      
      </>
    )
};