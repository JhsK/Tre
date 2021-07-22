import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge, Button, Input } from "antd";

const PlanListStyled = styled.div`
  width: 100%;
  margin-bottom: 3rem;

  button {
    float: right;
  }
`;

const PlanListComponent = ({ dateValue }) => {
  const history = useHistory();
  const { planData } = useSelector((state) => state.plan);
  const [planList, setPlanList] = useState("");

  useEffect(() => {
    console.log("list rendering");
    setPlanList(planData.filter((a, i) => a.dateValue === dateValue));
  }, [dateValue, planData]);

  //console.log(planList);

  const onClickUpdate = useCallback(
    (key) => {
      history.push({
        pathname: `/calendar/${key}`,
        state: { planList: planList },
      });
    },
    [planList]
  );

  return (
    <>
      {planList.length > 0 &&
        planList.map((item, i) => (
          <PlanListStyled>
            <Badge status="success" key={i} />
            <Input
              //defaultValue={item.title}
              style={{ width: "80%", paddingLeft: "0px" }}
              value={item.title}
              key={i}
            />
            <Button
              type="text"
              onClick={() => onClickUpdate(item.id)}
              key={item.id}
            >
              수정
            </Button>
          </PlanListStyled>
        ))}
    </>
  );
};

export default PlanListComponent;
