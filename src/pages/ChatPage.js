import React from 'react'
import axios from "axios"
import {Box} from "@chakra-ui/react"
import { useEffect ,useState} from 'react'
import { useNavigate } from "react-router-dom";
import { ChatState } from "../Context/ChatProvider";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import MyChats from "../components/MyChats"
import ChatBox from "../components/ChatBox"
const ChatPage = () => {


  const { user } = ChatState();
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));


    if (!userInfo) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);


   
  // console.log(user)
  return (
    <div style={{width:"100%"}}>

        {user && <SideDrawer />}
        <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
          {user && <MyChats  />}
          {user && <ChatBox  />}
        </Box>
    </div>
  );
};

export default ChatPage