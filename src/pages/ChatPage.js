import React from 'react'
import axios from "axios"
import { useEffect ,useState} from 'react'
const ChatPage = () => {
    const [chats, setChats] = useState([])
    const fetchChats = async()=>{
        const {data}= await axios.get("https://blue-dentist-kibod.pwskills.app:8080/api/chat")

            setChats(data)

    }
    useEffect(() => {
      fetchChats();
      
    }, [])
    
  return (
    <div>
        {chats.map((chat) => {
        return (
            <div>
                {chat.chatName}
            </div>
        )
        
    }
        
    )}
    </div>
  )
}

export default ChatPage