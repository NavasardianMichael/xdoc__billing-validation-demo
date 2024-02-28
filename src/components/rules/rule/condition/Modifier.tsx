import { Select, SelectProps, Space, Typography } from "antd";

export const Modifier = () => {
  const options: SelectProps["options"] = [
    {
      label: "25",
      value: "Option 1",
      desc: "Some description about the modifier",
    },
    {
      label: "GP",
      value: "Option 2",
      desc: "Some description about the modifier",
    },
    {
      label: "LT",
      value: "Option 3",
      desc: "Some description about the modifier",
    },
    {
      label: "RT",
      value: "Option 4",
      desc: "Some description about the modifier",
    },
  ];

  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };

  return (
    <div>
      <Typography.Title level={5}>Modifier(s)</Typography.Title>
      <Select
        mode="multiple"
        style={{ width: "100%" }}
        placeholder="Select Modifier(s)"
        defaultValue={[]}
        onChange={handleChange}
        optionLabelProp="label"
        options={options}
        optionRender={(option) => (
          <Space>
            <span role="img" aria-label={option.data.label}>
              {option.data.label}:
            </span>
            {option.data.desc}
          </Space>
        )}
      />
    </div>
  );
};
