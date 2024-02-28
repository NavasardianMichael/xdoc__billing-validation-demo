import { Select, SelectProps, Space, Typography } from 'antd'

export const CPT = () => {
    const options: SelectProps['options'] = [
        {
            label: '98940',
            value: '98940',
            emoji: '98940:',
            desc: 'Some description about the code',
        },
        {
            label: '98941',
            value: '98941',
            emoji: '98941:',
            desc: 'Some description about the code',
        },
        {
            label: '98942',
            value: '98942',
            emoji: '98942:',
            desc: 'Some description about the code',
        },
        {
            label: '98943',
            value: '98943',
            emoji: '98943:',
            desc: 'Some description about the code',
        },
    ];

    const handleChange = (value: string[]) => {
        console.log(`selected ${value}`);
    };

  return (
    <div>
        <Typography.Title level={5}>CPT code(s)</Typography.Title>
        <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Select CPT Code(s)"
            defaultValue={[]}
            onChange={handleChange}
            optionLabelProp="label"
            options={options}
            optionRender={(option) => (
                <Space>
                    <span role="img" aria-label={option.data.label}>
                    {option.data.emoji}
                    </span>
                    {option.data.desc}
                </Space>
            )}
        />     
    </div>
  )
}
