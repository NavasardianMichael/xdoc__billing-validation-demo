import { Select, SelectProps, Typography } from 'antd';

export const LogicalOperators = () => {
    const options: SelectProps['options'] = [
        {
            label: 'Requires all',
            value: 'requires-all',
        },
        {
            label: 'Requires one of',
            value: 'requires-one-of',
        },
        {
            label: 'Excludes all',
            value: 'excludes-all',
        },
        {
            label: 'Excludes one of',
            value: 'excludes-one-of',
        },
    ];

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

  return (
    <div>
        <Typography.Title level={5}>Logical Operator</Typography.Title>
        <Select
            placeholder="Select Logical operator"
            style={{ width: '100%' }}
            onChange={handleChange}
            options={options}
        />  
    </div>
  )
}
