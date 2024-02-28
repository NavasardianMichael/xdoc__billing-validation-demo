import { InfoCircleOutlined } from "@ant-design/icons";
import { Mentions, Typography } from "antd";
import { MentionsOptionProps } from "antd/es/mentions";
import React from "react";

export const Message: React.FC = () => {
  const str =
    "One can has access to the current validation subjects by tagging them (e.g. #target1-cpt-2).";

  const onChange = (value: string) => {
    console.log("Change:", value);
  };

  const onSelect = (option: MentionsOptionProps) => {
    console.log("select", option);
  };

  return (
    <>
      <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
      <Typography.Title
        style={{ display: "inline-block", marginLeft: ".75rem" }}
        level={5}
      >
        {str}
      </Typography.Title>
      <Mentions
        style={{ width: 500 }}
        rows={6}
        placeholder="To tag any subject of the validation type #"
        onChange={onChange}
        onSelect={onSelect}
        prefix={'#'}
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
