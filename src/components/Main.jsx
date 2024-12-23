import {
    collection,
    onSnapshot,
    query,
    orderBy,
    where,
} from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { db } from "../firebase";
import Messages from "./Messages";



const Main = ({ room }) => {
    const [messages, setMessages] = useState([]);
    const lastMessage = useRef();

    useEffect(() => {
        const messagesCol = collection(db, "messages");

        const q = query(
            messagesCol,
            where("room", "==", room),
            orderBy("createdAt", "asc")
        );

        const unsub = onSnapshot(q, (data) => {
            const temp = [];
            data.docs.forEach((doc) => temp.push(doc.data()));

            setMessages(temp);
        });

        return () => unsub();
    }, []);

    useEffect(() => {
        lastMessage.current.scrollIntoView();
    }, [messages]);
    return (
        <main>
            {messages.length < 1 ? (
                <div className="warn">
                    <p>Send the first message to the chat!</p>
                </div>
            ) : (
                messages.map((i, key) => <Messages key={key} data={i} />)
            )}
            <div ref={lastMessage} />
        </main>
    );
};

export default Main;