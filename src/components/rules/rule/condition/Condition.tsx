import { CPT } from './CPT'
import { LogicalOperators } from './LogicalOperators'
import { Modifier } from './Modifier'

export const Condition = () => {
  return (
    <>
      <div className='wrapper'>
        <LogicalOperators />
        <CPT />
        <Modifier />
     </div>
    </>
  )
}