import useWebSocket from "react-use-websocket"
import {useState} from "react"
import { useParams } from "react-router-dom"
import useCrud from "../../hooks/useCrud"
import { IServer } from "../../@types/server"

interface Message {
  sender:string,
  content:string,
  timestamp:string
}

const MessageInterface = () => {
  const [newMessage, setNewMessage] = useState<Message[]>([])
  const [message, setMessage] = useState("")
  const {serverId, channelId} = useParams()
  const {fetchData} = useCrud<IServer>(
    [],
    `messages/?channel_id=${channelId}`
    )

  const socketUrl = channelId ? `ws://127.0.0.1:8000/${serverId}/${channelId}` : null
  
  const {sendJsonMessage} = useWebSocket(socketUrl, {
    onOpen: async () => {
      try{
        const data = await fetchData()
        setNewMessage([])
        setNewMessage(Array.isArray(data)?data:[])
        console.log("Connected");
      }
      catch(err){
        console.log(err);
        
      }
    },
    onClose: () => {
      console.log("Closed");
    },
    onError: () => {
      console.log("Error");
    },
    onMessage: (msg) =>{
      const data = JSON.parse(msg.data)
      setNewMessage((prev_msg)=>[...prev_msg, data.new_message])
    }
  })



  return (
    <div>
      {
        newMessage.map((msg:Message, index:number)=>{
          return (
            <div key={index}>
                <p>{msg.content}</p>
            </div>
          )
        })
      }
      <form action="">
        <label>
          Enter Message:
          <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)}/>
        </label>
      </form>
      <button
        onClick={()=>sendJsonMessage({type:"message", message})}
      >Send</button>
    </div>
  )
}

export default MessageInterface