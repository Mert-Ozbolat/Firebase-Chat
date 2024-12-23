import React, { useState } from 'react'
import { auth, db } from '../firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import Main from '../components/Main'


const ChatPage = ({ room, setRoom }) => {
    const [text, setText] = useState()
    const handleSubmmit = async (e) => {
        e.preventDefault()

        if (text.trim() === "") return

        const messagesCol = collection(db, "messages")

        await addDoc(messagesCol, {
            text,
            room,
            author: {
                id: auth.currentUser.uid,
                name: auth.currentUser.displayName,
                photo: auth.currentUser.photoURL
            },
            createdAt: serverTimestamp(),
        })

    }

    return (
        <div className='chat-page'>

            <header>
                <p>{auth.currentUser.displayName}</p>
                <p>{room}</p>
                <button onClick={() => setRoom(null)}>Different Room</button>
            </header>

            <Main room={room} />

            <form className='message-form' onSubmit={handleSubmmit}>
                <input type="text" placeholder='mesajınızı yazınız'
                    onChange={(e) => setText(e.target.value)}
                />
                <button type='submit'>Gönder</button>
            </form>

        </div>
    )
}

export default ChatPage