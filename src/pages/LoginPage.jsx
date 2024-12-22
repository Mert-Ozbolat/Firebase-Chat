import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase'


const LoginPage = ({ setIsAuth }) => {

    const handleClick = () => {
        signInWithPopup(auth, provider)
            .then((res) => {
                setIsAuth(true)
            })
            .catch((err) => console.log(err))
    }




    return (
        <div className='container'>
            <div className='login'>
                <h1>Chat Room</h1>
                <p>Devam etmek için giriş yap</p>

                <button onClick={handleClick}>
                    <img src="google.png" alt="google logo" width={30} />
                    <span>Google ile giriş yap</span>
                </button>


            </div>
        </div>
    )
}

export default LoginPage