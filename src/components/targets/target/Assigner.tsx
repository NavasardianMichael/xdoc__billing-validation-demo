import { Select, SelectProps, Typography } from "antd";

export const Assigner = () => {
  const options: SelectProps["options"] = [
    {
      label: "Rule 1",
      value: "requires-all",
    },
    {
      label: "Rule 2",
      value: "requires-one-of",
    },
    {
      label: "Rule 3",
      value: "excludes-all",
    },
  ];

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div>
      <Typography.Title level={5}>Assign a rule</Typography.Title>
      <Select
        placeholder="Select Logical operator"
        style={{ width: "100%" }}
        onChange={handleChange}
        options={options}
      />
    </div>
  );
};
