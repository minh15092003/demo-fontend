
import React, { useState } from 'react'
import axios from 'axios';
const ChangePassword = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [newPassword, setnewPassword] = useState("");
    const [enterpassword, setenterpassword] = useState("");

    function handleChangePassword() {

        console.log('userName', username, 'password', password, 'newPassword', newPassword, 'enterpassword', enterpassword)
        // alert(`username: ${userName} Password : ${password}`);

        axios.put('http://localhost:3000/Password', {

            username: username,
            password: password,
            newpassword: newPassword,
            enterpassword: enterpassword
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
    return (

        <div className='cd-body'>
            <div className='lq-maion'>

                <div className='dw-vosi'>
                    <h1 className='bg-main'>Đổi mật khẩu</h1>
                    <input value={username} onChange={(a) => { setUsername(a.target.value) }} type="text" placeholder="Nhập Họ và Tên" className='cd-input' />
                    <h1></h1>
                    <input value={password} onChange={(a) => { setPassword(a.target.value) }} type="text" placeholder="Nhập lại mật khẩu cũ" className='cd-input' />
                    <h1></h1>
                    <input value={newPassword} onChange={(a) => { setnewPassword(a.target.value) }} type="text" placeholder="Nhập mật khẩu mới" className='cd-input' />
                    <h1></h1>
                    <input value={enterpassword} onChange={(a) => { setenterpassword(a.target.value) }} type="text" placeholder="Nhập lại mật khẩu mới" className='cd-input' />
                    <button type="button" onClick={handleChangePassword} className='bf-mitring'>Xác nhận</button>
                </div>
            </div>
        </div>

    );
}
export default ChangePassword
