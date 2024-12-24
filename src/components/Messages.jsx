import { auth } from "../firebase";
import generateColor from "../utils/generateColor";

const Messages = ({ data }) => {
    if (auth.currentUser.uid === data.author.id) {
        return <div className="msg-user">{data.text}</div>;
    }
    return (
        <div>
            <img src={data.author.photo} />
            <div>
                <span
                    style={{
                        color: generateColor(data.author.id)
                    }}
                >{data.author.name}</span>
                <p className="msg-text">{data.text}</p>
            </div>
        </div>
    );
};

export default Messages;