import { Select, SelectProps, Space, Typography } from 'antd'

export const PayerType = () => {
    const options: SelectProps['options'] = [
        {
            label: 'Option 1',
            value: 'Option 1',
        },
        {
            label: 'Option 2',
            value: 'Option 2',
        },
        {
            label: 'Option 3',
            value: 'Option 3',
        },
        {
            label: 'Option 4',
            value: 'Option 4',
        },
    ];

    const handleChange = (value: string[]) => {
        console.log(`selected ${value}`);
    };

  return (
    <div>
        <Typography.Title level={5}>Payer Type(s)</Typography.Title>
        <Select
            mode="multiple"
            filterOption={false}
            style={{ width: '100%' }}
            placeholder="Select Payer Type(s)"
            defaultValue={[]}
            onChange={handleChange}
            optionLabelProp="label"
            options={options}
            optionRender={(option) => (
                <Space>
                    <span role="img" aria-label={option.data.label}>
                        {option.data.label}
                    </span>
                </Space>
            )}
        />     
    </div>
  )
}
