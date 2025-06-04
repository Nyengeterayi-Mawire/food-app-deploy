import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Signupform = () => {
    const [signupData,setSignupData] = useState({firstname:'',lastname:'',email:'',password:''}); 
    const [confirmPassword,setConfirmPassword] = useState('');
    const [error,setError] = useState('');
    const navigate = useNavigate();

    const url = useSelector(state=>state.user.url);

    const handleFormInput = (e) => {
        setSignupData(state=>state={...state,[e.target.name]:e.target.value});
    }

    const submit = (e) => {
        e.preventDefault();
        if(signupData.firstname.trim()==='' ||signupData.lastname.trim()==='' || signupData.email.trim()==='' || signupData.password.trim()==='' || confirmPassword.trim()===''){
            setError('All fields must be filled')
        }else if(confirmPassword.trim()!==signupData.password.trim()){
            setError('Passwords do not match')
        }else{
            axios.post(`${url}/users/register`,signupData).then(res=>{
                if(res.data.error){
                    setError(res.data.error)
                }else{                    
                    navigate('/login');
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
                <h1>Sign Up</h1>
                <section className="labelInput">
                    <label>
                        Firstname
                    </label>
                    <input name='firstname' onChange={handleFormInput}></input>
                </section>
                <section className="labelInput">
                    <label>
                        Lastname
                    </label>
                    <input name='lastname' onChange={handleFormInput}></input>
                </section>
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
                <section className="labelInput">
                    <label>
                        Confirm Password
                    </label>
                    <input name='password' onChange={e=>setConfirmPassword(e.target.value)}></input>
                </section>
                <p>{error}</p> 
                <section className='loginSection'>
                    <button type='submit'>Sign Up</button>
                </section> 
                <p className='formRoutes'>Already have an account?Click <Link to='/login'>Login</Link></p>


            </form>
        </main>
    )
}
export default Signupform;