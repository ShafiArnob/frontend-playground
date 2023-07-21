import useWebSocket from "react-use-websocket"
import {useState} from "react"
const socketUrl = "ws://127.0.0.1:8000/ws/test"



const Server = () => {
  const [message, setMessage] = useState("")
  const [input, setInput] = useState("")

  const {sendJsonMessage} = useWebSocket(socketUrl, {
    onOpen: () => {
      console.log("Connected");
    },
    onClose: () => {
      console.log("Closed");
    },
    onError: () => {
      console.log("Error");
    },
    onMessage: (msg) =>{
      // const data = JSON.parse(msg.data)
      setMessage(msg.data)
    }
  })

  const sendInputValue = () => {
    const message = {text: input}
    sendJsonMessage(message)
    setInput("")
  }

  const sendHello = () => {
    const messgae = {text:"Hello"}
    sendJsonMessage(messgae)
  }

  return (
    <div>
      <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
      <button onClick={sendInputValue}>Send</button>
      <div>
        <p>Received Data: {message}</p>
      </div>
    </div>
  )
}

export default Server