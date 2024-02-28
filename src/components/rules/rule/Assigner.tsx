import { Select, SelectProps, Typography } from "antd";

export const Assigner = () => {
  const options: SelectProps["options"] = [
    {
      label: "Target 1",
      value: "requires-all",
    },
    {
      label: "Target 2",
      value: "requires-one-of",
    },
    {
      label: "Target 3",
      value: "excludes-all",
    },
  ];

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div>
      <Typography.Title style={{marginTop: '1rem'}} level={5}>Assign to target</Typography.Title>
      <Select
        placeholder="Assign to target"
        style={{ width: 250 }}
        onChange={handleChange}
        options={options}
      />
    </div>
  );
};
