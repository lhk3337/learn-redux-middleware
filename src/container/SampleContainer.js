import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sample from "../components/Sample";
import { getPost, getUsers } from "../module/sample";

const SampleContainer = () => {
  const dispatch = useDispatch();
  const { post, users, loadingPost, loadingUsers } = useSelector(({ sample, loading }) => ({
    post: sample.post,
    users: sample.users,
    loadingPost: loading["sample/GET_POST"],
    loadingUsers: loading["sample/GET_USERS"],
  }));
  useEffect(() => {
    const fn = async () => {
      try {
        dispatch(getPost(1));
        dispatch(getUsers(1));
      } catch (e) {
        console.log(e);
      }
    };
    fn();
  }, [dispatch]);

  return <Sample post={post} users={users} loadingPost={loadingPost} loadingUsers={loadingUsers} />;
};

export default SampleContainer;
