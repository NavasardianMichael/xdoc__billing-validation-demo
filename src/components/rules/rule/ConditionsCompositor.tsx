import { Radio, RadioChangeEvent, Typography } from 'antd'
import { useState } from 'react'

export const ConditionsCompositor = () => {
    const [value, setValue] = useState(1);

    const onChange = (e: RadioChangeEvent) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };

  return (
    <div style={{alignItems: 'center'}}>
      <Typography.Title style={{marginTop: '0'}} level={5}>Conditions composition</Typography.Title>
      <Radio.Group style={{marginTop: '.5rem', marginBottom: '1rem'}} onChange={onChange} value={value}>
        <Radio value={1}>All conditions must be met</Radio>
        <Radio value={2}>At least one condition must be met</Radio>
      </Radio.Group>
    </div>
  )
}