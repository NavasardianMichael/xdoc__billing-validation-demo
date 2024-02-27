import { PlusOutlined } from '@ant-design/icons'
import { Button, Divider, Typography } from 'antd'
import { Condition } from './Condition'
import { ConditionCompositor } from './ConditionCompositor'

export const Rule = () => {

  return (
    <>
      <ConditionCompositor />
      <Condition />
      <Condition />
      <Button type='dashed' style={{marginTop: '1.67rem'}} icon={<PlusOutlined />}>
        Add a new condition
      </Button>
    </>
  )
}