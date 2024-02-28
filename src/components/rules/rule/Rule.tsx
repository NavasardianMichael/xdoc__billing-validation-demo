import { PlusOutlined } from '@ant-design/icons'
import { Button, Collapse, CollapseProps } from 'antd'
import { Condition } from './condition/Condition'
import { ConditionsCompositor } from './ConditionsCompositor'
import { RemoveIcon } from '../../removeIcon/RemoveIcon';
import { Assigner } from './Assigner';

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "Condition 1",
    children: <Condition />,
    extra: <RemoveIcon />
  },
  {
    key: "2",
    label: "Condition 2",
    children: <Condition />,
    extra: <RemoveIcon />
  },
];

export const Rule = () => {

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <>
      <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        <Assigner />
        <ConditionsCompositor />
      </div>
      <Collapse items={items} bordered={false} onChange={onChange} />
      <Button type='dashed' style={{marginTop: '1rem', background: 'transparent'}} icon={<PlusOutlined />}>
        Add a new condition
      </Button>
    </>
  )
}