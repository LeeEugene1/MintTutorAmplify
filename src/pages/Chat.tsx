
import {useEffect, useState} from 'react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator} from '@chatscope/chat-ui-kit-react'

type tutorInfoType = {
    tutorType:string | null,
    name:string
}

interface Message {
    message: string;
    sender: string;
}

type Msg = {
    message: string;
    sender: string;
}

export default function Chat() {
    const [tutorInfo, setTutorInfo] = useState<tutorInfoType>()
    const [typing, setTyping] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        {
            message: "Hello, How are you!",
            sender:"ChatGPT"
        }
    ])
    const API_KEY = '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'//test

    useEffect(()=>{
        const url = new URL(window.location.href);
        const tutorType: string = url.searchParams.get('tutor') || '0';
        console.log(tutorType);
        const tutorMap:Record<string,string> = {
            '1' : 'Julia',
            '2' : 'Daniel',
            '3' : 'Romeo',
            '4' : 'Herim',
            '5' : 'Emma',
            '6' : 'Olivia'
        }
        if(tutorType){
            const name = tutorMap[tutorType]
            setTutorInfo({
                tutorType,
                name,
            })
        }
    },[])

    const handleSend = async (message:any) => {
        const MsgOption = {
            message: message,
            sender: 'user',
            direction:'outgoing'
        }

        const newMessages = [...messages, MsgOption]//prev + new msg

        //update our message state
        setMessages(newMessages)
        setTyping(true)

        //send msg to Chatgpt
        processMsgToChatGPT(newMessages)
    }

    const processMsgToChatGPT = async (chatMessages:any) => {
        let apiMessages = chatMessages.map((messageObj:any)=>{
            let role = ''
            if(messageObj.sender === 'ChatGPT'){
                role="assistant"
            }else{
                role="user"
            }
            return {role:role, content: messageObj.message}
        })

        const level = ['beginner, Independent User, Proficient User']

        const systemMessage = {
            role:"system",
            content:`Explain all conceopts like I am an English ${level[0]}.`//speak like 
        }

        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages":[
                systemMessage,
                ...apiMessages
            ]
        }

        await fetch("https://api.openai.com/v1/chat/completions", {//https://api.openai.com/vi/chat/completions
            method:'POST',
            headers:{
                "Authorization":"Bearer " + API_KEY,
                'Content-Type':"application/json"
            },
            body: JSON.stringify(apiRequestBody)
        })
        .then(e => e.json())
        .then(data=>{
            console.log(data.choices[0].message.content)
            setMessages(
                [...chatMessages,{
                    message: data.choices[0].message.content,
                    sender:"ChatGPT"
                }]
            )
            setTyping(false)
        })
    }
  return (
    <div className='p-8'>
        {
            tutorInfo &&
            <div>
                <div className='flex gap-2 items-center mb-5'>
                    <img src={`/images/${tutorInfo.tutorType}.png`} 
                    width={20}
                    height={20}
                    alt="Image" 
                    className="w-12 h-12 rounded-full object-cover" />
                    <p className='text-xl text-slate-700'>Chat with {tutorInfo.name}</p>
                </div>
                    <MainContainer>
                        <ChatContainer>
                            <MessageList
                                scrollBehavior='smooth'
                                typingIndicator={typing ? <TypingIndicator content="Tutor is typing"/>:null}
                            >
                                {messages.map((msg:Msg, i:number)=>{
                                    return <Message key={i} model={{
                                        message: msg.message,
                                        sentTime: "just now",
                                        sender: msg.sender,
                                    }}/>
                                })}
                            </MessageList>
                            <MessageInput placeholder='Type message here' onSend={handleSend} attachButton={false}/>
                        </ChatContainer>
                    </MainContainer>
            </div>
        }
    </div>
  )
}
