import { Button, Collapse, CollapseProps } from "antd";
import { Target } from "./target/Target";
import { PlusOutlined } from "@ant-design/icons";
import { RemoveIcon } from "../removeIcon/RemoveIcon";

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "Target 1",
    children: <Target />,
    extra: <RemoveIcon />
  },
  {
    key: "2",
    label: "Target 2",
    children: <Target />,
    extra: <RemoveIcon />
  },
  {
    key: "3",
    label: "Target 3",
    children: <Target />,
    extra: <RemoveIcon />
  },
];

export const TargetsList = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <>
      <Collapse bordered={false} items={items} onChange={onChange} />
      <Button type='dashed' style={{marginTop: '1rem'}} icon={<PlusOutlined />}>
          Add a new target
      </Button>
    </>
  );
};
