import { CPT } from './CPT'
import { PayerName } from './PayerName'
import { PayerType } from './PayerType'

export const Target = () => {

  return (
    <>
      <div className='wrapper'>
        <PayerType />
        <PayerName />
        <CPT />
     </div>
    </>
  )
}