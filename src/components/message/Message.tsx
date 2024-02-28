import { InfoCircleOutlined } from "@ant-design/icons";
import { Mentions, Typography } from "antd";
import { MentionsOptionProps } from "antd/es/mentions";
import React from "react";

export const Message: React.FC = () => {
  const str =
    "One can access to the current validation subjects by tagging them (e.g. #target1-cpt-2).";

  const onChange = (value: string) => {
    console.log("Change:", value);
  };

  const onSelect = (option: MentionsOptionProps) => {
    console.log("select", option);
  };

  return (
    <>
      <div>
        <InfoCircleOutlined style={{ color: "#1677ff" }} />
        <Typography.Paragraph
          style={{ display: "inline-block", marginLeft: ".75rem", marginBottom: '1rem', marginTop: '0' }}
        >
          {str}
        </Typography.Paragraph>
      </div>
      <Mentions
        style={{ width: 700 }}
        rows={6}
        placeholder="To tag any subject of the validation type #."
        onChange={onChange}
        onSelect={onSelect}
        prefix='#'
        options={[
          {
            value: "target-1-id:payer-type-1-id#",
            label: "target 1 / payer type 1",
          },
          {
            value: "target-1-id:payer-name-1-id#",
            label: "target 1 / payer name 1",
          },
          {
            value: "target-1-id:cpt-code-1-id#",
            label: "target 1 / cpt code 1",
          },
          {
            value: "rule-1-id:condition-1-id:cpt-code-1-id#",
            label: "rule 1 / condition 1 / cpt code 1",
          },
          {
            value: "rule-1-id:condition-1-id:modifier-1-id#",
            label: "rule 1 / condition 1 / modifier 1",
          },
        ]}
      />
    </>
  );
};
