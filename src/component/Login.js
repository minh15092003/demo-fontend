import React, { useState } from 'react'
import Sile from '../assets/images/mjksd.png'
import axios from 'axios';

const Loginpage = () => {

    const [username, setUsername] = useState("");
    const [Password, setPassword] = useState("");


    function handlelogin() {
        console.log('userName', username, 'password', Password)
        // alert(`username: ${userName} Password : ${password}`);

        axios.post('http://localhost:3000/login', {

            username: username,
            password: Password

        })
            .then(res => {
                alert(res.data.message)
                console.log(res);
                window.location.href = "/Home";

            })
            .catch(error => {
                alert(error.response.data.message)
                console.log(error);
            }
            )
    };
    function handleDangnhap() {

        alert('Hệ thống đang được bảo trì..');
    }
    return (

        <div className='cover'>
            <div className='gw-kiyt'>
                <input value={username} onChange={(a) => { setUsername(a.target.value) }} type="text" placeholder="Email hoặc số điện thoại" className='cd-input' />
                <h1></h1>
                <input value={Password} onChange={(a) => { setPassword(a.target.value) }} type="text" placeholder="nhập mật khẩu" className='cd-input' />
                <svg xmlns="http://www.w3.org/2000/svg" class="eye-open" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
                <button type="button" onClick={handlelogin} className='bf-mitr'>Đăng nhập</button>
                <h1></h1>
                <h4 className='myt'>hoặc...</h4>
                <button onClick={handleDangnhap} type="button" className='bf-mitr'>Đăng nhập bằng Facebook</button>
            </div>
            <h2 className='cd-h2'>Chào mừng bạn đến với <br></br>  ARODA !</h2>
            <div className='cd-lest'>
                <img src={Sile} width="750px" height="550px"></img>
            </div>
            <a onClick={handleDangnhap} class="cd-lrnt">Quên mật khẩu...?</a>
        </div>
    );
}
export default Loginpage











