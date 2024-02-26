import { MinusOutlined } from '@ant-design/icons'
import { CPT } from './CPT'
import { LogicalOperators } from './LogicalOperators'
import { Modifier } from './Modifier'
import { Button } from 'antd'

export const Condition = () => {
  return (
    <>
      <div className='wrapper'>
        <LogicalOperators />
        <CPT />
        <Modifier />
        <Button danger style={{width: '100px', height: '30px', display: 'block'}} type="primary" icon={<MinusOutlined twoToneColor='red' />} />
     </div>
    </>
  )
}