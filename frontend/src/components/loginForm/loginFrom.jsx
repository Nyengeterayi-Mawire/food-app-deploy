import { useState } from 'react';
import './loginForn.css'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setUser } from '../../features/user';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
    const [loginData,setLoginData] = useState({email:'',password:''});
    const [error,setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const url = useSelector(state=>state.user.url);

    const handleFormInput = (e) => {
        setLoginData(state=>state={...state,[e.target.name]:e.target.value});
    }
    const submit = (e) => {
        e.preventDefault();
        if(loginData.email.trim()==='' || loginData.password.trim()===''){
            setError('All fields must be filled')
        }else{
            axios.post(`${url}/users/login`,loginData).then(res=>{
                if(res.data.error){
                    setError(res.data.error)
                }else{                    
                    dispatch(setUser(res.data));
                    navigate('/home');
                }
            }).catch(error=>{
                if(error.response.data.error){
                    setError(error.response.data.error)

                }
            })
        }
    }
    return (
        <main className="login">
            <form className="loginForm" onSubmit={submit}>  
                <h1>Login</h1>
                <section className="labelInput">
                    <label>
                        Email
                    </label>
                    <input name='email' onChange={handleFormInput}></input>
                </section>
                <section className="labelInput">
                    <label>
                        Password
                    </label>
                    <input name='password' onChange={handleFormInput}></input>
                </section>
                <p className='errorMessage'>{error}</p> 
                <section className='loginSection'>
                    <button type='submit'>Login</button> 
                </section> 
                <p className='formRoutes'>Don't have an account?Click <Link to='/signup'>SignUp</Link></p>


            </form>
        </main>
    )
}
export default Login;