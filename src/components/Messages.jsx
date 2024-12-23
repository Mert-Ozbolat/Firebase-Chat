import { auth } from "../firebase";

const Messages = ({ data }) => {
    if (auth.currentUser.uid === data.author.id) {
        return <div className="msg-user">{data.text}</div>;
    }
    return (
        <div>
            <div>
                <img src={data.author.photo} />
                <span>{data.author.name}</span>

                <p className="msg-text">{data.text}</p>
            </div>
        </div>
    );
};

export default Messages;