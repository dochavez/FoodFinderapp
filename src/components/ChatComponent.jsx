import * as React from 'react';
import { Chat } from '@progress/kendo-react-conversational-ui';
const user = {
    id: 1,
    avatarUrl: "https://via.placeholder.com/24/008000/008000.png"
};
const bot = {
    id: 0
};


const ChatComponent = (props) => {
    const initialMessages = [{
        author: bot,
        suggestedActions: [{
            type: 'reply',
            value: 'Hey guys, do you want to go to '+props.author+'?'
        }, {
            type: 'reply',
            value: 'Thanks, but this is boring.'
        }],
        timestamp: new Date(),
        text: "Hello, this is a demo bot. I don't do much, but I can count symbols!"
    }];
    const [messages, setMessages] = React.useState(initialMessages);

    const addNewMessage = event => {
        let botResponse = Object.assign({}, event.message);
        botResponse.text = countReplayLength(event.message.text);
        botResponse.author = bot;
        setMessages([...messages, event.message]);
        setTimeout(() => {
            setMessages(oldMessages => [...oldMessages, botResponse]);
        }, 1000);
    };

    const countReplayLength = question => {
        let length = question.length;
        let answer = question + " contains exactly " + length + " symbols.";
        return answer;
    };

    return <div>
        <Chat user={user} messages={messages} onMessageSend={addNewMessage} placeholder={props.author} width={400} />
    </div>;
};

export default ChatComponent;