import { Button, Collapse, CollapseProps } from "antd";
import { Rule } from "./rule/Rule";
import { PlusOutlined } from "@ant-design/icons";
import { RemoveIcon } from "../removeIcon/RemoveIcon";

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "Rule 1",
    children: <Rule />,
    extra: <RemoveIcon />
  },
  {
    key: "2",
    label: "Rule 2",
    children: <Rule />,
    extra: <RemoveIcon />
  },
  {
    key: "3",
    label: "Rule 3",
    children: <Rule />,
    extra: <RemoveIcon />
  },
];

export const RulesList = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <>
      <Collapse bordered={false} items={items} onChange={onChange} />
      <Button type='dashed' style={{marginTop: '1rem'}} icon={<PlusOutlined />}>
        Add a new rule
      </Button>
    </>
  );
};
