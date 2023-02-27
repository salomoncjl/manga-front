import React from 'react'
import { useRef } from 'react'
import './reglabels.css'
import logoName from '../../images/Profile.png'
import logoArroba from '../../images/arroba.png'
import logoLock from '../../images/lock1.png'
import axios from 'axios'

export default function RegLabels() {

    let name = useRef()
    let email = useRef()
    let password = useRef()
    let confirmPassword = useRef()

    function handleSubmit(e){
        e.preventDefault()
        // console.log(name.current)
        // console.log(email.current)
        // console.log(password.current)
        // console.log(confirmPassword.current)
        let data = {
            [name.current.name]: name.current.value,
            [email.current.name]: email.current.value,
            [password.current.name]: password.current.value,
        }
        // console.log(data)
        let url = 'http://localhost:8080/users'
        try{
            if(data.password == confirmPassword.current.value){
                console.log('se creo el usuario')
                axios.post(url,data)
            }else{
                console.log('esta mal la contraseña')
            }
        } catch(error){
            console.log(error)
            console.log('ocurrio un error')
        }   
    }
   


    return (
        <div className="reg-labels">
                    <form action="" className="form-all" onSubmit={handleSubmit}>
                        <fieldset className="formA">
                            <legend>Name</legend>
                            <label htmlfor="name">
                                <input ref={name} type="text" id='name' required name='name' className="input-complete"/>
                            </label>
                            <img className="imgA" src={logoName} alt="icon-user"/>
                        </fieldset>

                        <fieldset className="formA">
                            <legend>E-mail</legend>
                            <label htmlfor="e-mail">
                                <input ref={email} type="text" id='email' required name='email' className="input-complete"/>
                            </label>
                            <img className="imgA" src={logoArroba} alt="icon-arroba"/>
                        </fieldset>

                        <fieldset className="formA">
                            <legend>Password</legend>
                            <label htmlfor="password">
                                <input ref={password} type="password" id='password' required name='password' className="input-complete"/>
                            </label>
                            <img className="imgA" src={logoLock} alt="icon-padlock"/>
                        </fieldset>

                        <fieldset className="formA">
                            <legend>Confirm password</legend>
                            <label htmlfor="confirm-password">
                                <input ref={confirmPassword} type="password" id='confirmPassword' required name='confirmPassword' className="input-complete"/>
                            </label>
                            <img className="imgA" src={logoLock} alt="icon-padlock"/>
                        </fieldset>

                        <label id="check">
                            <input  type="checkbox" name="mi-checkbox" value="1"/> 
                            Send notification to my email
                        </label>
                
                        <input type="submit" value="Sign up" className="input-size negrita c-white"/>
                        <input type="submit" value="Sign up with Google" className="input-size c-grey"/>

                    </form>
                    <p className="negrita">Already hace an account? <a href="#" className="a-props">Log in</a> </p>
                    <p className="negrita">Go back to <a href="#" className="a-props">Home page</a></p>
        </div>
  )
}
