import { Select, SelectProps, Typography } from 'antd';

export const LogicalOperators = () => {
    const options: SelectProps['options'] = [
        {
            label: 'Requires',
            value: 'requires',
        },
        {
            label: 'Excludes',
            value: 'excludes',
        },
    ];

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

  return (
    <div>
        <Typography.Title level={5}>Logical Operators</Typography.Title>
        <Select
            defaultValue="requires"
            style={{ width: '100%' }}
            onChange={handleChange}
            options={options}
        />  
    </div>
  )
}
