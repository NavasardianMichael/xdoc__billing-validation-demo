import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { Condition } from './Condition'
import { ConditionCompositor } from './ConditionCompositor'

export const Rule = () => {

  return (
    <>
      <ConditionCompositor />
      <Condition />
      <Condition />
      <Button style={{marginTop: '1.67rem'}} type="primary" icon={<PlusOutlined />}>
        Add Condition
      </Button>
    </>
  )
}