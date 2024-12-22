import React, { useState } from 'react'
import { auth } from '../firebase'


const ChatPage = ({ room, setRoom }) => {
    const [text, setText] = useState()
    const handleSubmmit = (e) => {
        e.preventDefault()

        if (text.trim() === "") return

    }

    return (
        <div className='chat-page'>

            <header>
                <p>{auth.currentUser.displayName}</p>
                <p>{room}</p>
                <button onClick={() => setRoom(null)}>Different Room</button>
            </header>

            <main>
                <div className='warm'>
                    <p>Sohbete ilk mesajı gönderin</p>
                </div>
            </main>

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