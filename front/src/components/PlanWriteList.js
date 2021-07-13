import React, { useEffect } from "react";
import { Badge, Button, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";

const PlanWriteList = ({ dateValue }) => {
  const { planData } = useSelector((state) => state.plan);
  const writedPlan = planData.filter((a, i) => a.dateValue === dateValue);

  console.log(writedPlan);
  console.log(dateValue);

  return (
    <>
      {writedPlan.map((item, i) => (
        <>
          {console.log(item.title)}
          <Badge status="success" key={i} />
          <Input
            defaultValue={item.title}
            style={{ width: "80%", paddingLeft: "0px" }}
            //value={planData.title}
            //onChange={onChangeTitle}
            key={i}
          />
          <Button type="text" key={i}>
            수정
          </Button>
        </>
      ))}
    </>
  );
};

export default PlanWriteList;
