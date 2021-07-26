import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MemoryLayout from "../components/MemoryLayout";
import MenuComponents from "../components/MenuComponents";
import { LOAD_POST_REQUEST } from "../reducers/post";
import { ScheduleContainer } from "./schedule";

const Memory = () => {
  const dispatch = useDispatch();
  const { mainPosts, hasMorePost } = useSelector((state) => state.post);

  useEffect(() => {
    const lastId = mainPosts[mainPosts.length - 1]?.id;
    if (hasMorePost) {
      dispatch({
        type: LOAD_POST_REQUEST,
        lastId,
      });
    }
  }, [hasMorePost]);

  return (
    <ScheduleContainer>
      <MenuComponents />
      <MemoryLayout />
    </ScheduleContainer>
  );
};

export default Memory;
