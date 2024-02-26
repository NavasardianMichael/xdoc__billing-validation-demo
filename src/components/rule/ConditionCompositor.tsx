import { Radio, RadioChangeEvent } from 'antd'
import { useState } from 'react'

export const ConditionCompositor = () => {
    const [value, setValue] = useState(1);

    const onChange = (e: RadioChangeEvent) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };

  return (
    <Radio.Group style={{marginTop: '1.7rem'}} onChange={onChange} value={value}>
      <Radio value={1}>All conditions must be met</Radio>
      <Radio value={2}>At least one condition must be met</Radio>
    </Radio.Group>
  )
}