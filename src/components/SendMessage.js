import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import { Input } from '@mui/material';
import { db, auth } from '../firebase';
import SendIcon from '@mui/icons-material/Send';

function SendMessage() {
    const [messages, setMessages] = useState("");
    function sendMessage(e) {
        e.preventDefault();
       
        const { uid, photoURL } = auth.currentUser;
        db.collection("messages").add({
            text: messages,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL,
        });
        setMessages("");
    }
  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className='sendMsg'>
            <Input 
                style={{
                    width: "78%",
                    fontSize: "15px",
                    fontWeight: "550",
                    marginLeft: "5px",
                    marginBottom: "-3px",
                }}
                placeholder='メッセージを入力してください' 
                type='text'
                onChange={(e) => setMessages(e.target.value)}
                value={messages}
            />
            <SendIcon style={{ color: "#7AC2FF", marginLeft: "20px" }} />
        </div>
      </form>
    </div>
  )
}

export default SendMessage
