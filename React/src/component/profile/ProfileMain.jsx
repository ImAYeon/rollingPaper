import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProfileBody from "./ProfileBody";
import Gifts from "../gifts/Gifts";
import GiftDetail from "../gifts/GiftDetail";

const ProfileMain = () => {
  const selectedUser = useSelector((state) => state.paper.selectedUser);
  const me = useSelector((state) => state.user.me);

  //return <>{selectedUser?.uid === me?.uid ? <ProfileBody /> : <AddPaperForm />}</>;
  return (
    <>{selectedUser?.uid === me?.uid ? <ProfileBody /> : <GiftDetail />}</>
  );
};

export default ProfileMain;
