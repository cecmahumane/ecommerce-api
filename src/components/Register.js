import React from 'react'

const Register = () => {
  return (
    <div className='register'>
        <div className='profile-image'></div>
        <h2>Register a new <br/>account below!</h2>
        <form>
            <input
                className='username'
                type="text"
                placeholder="Username"
                // onChange={handleChange}
                name="username"
                // value={formData.firstName}
                />
            <input
                className='password'
                type="text"
                placeholder="Password"
                // onChange={handleChange}
                name="password"
                // value={formData.firstName}
                />
            <input
                className='confirm-password'
                type="text"
                placeholder="Confirm Password"
                // onChange={handleChange}
                name="confirmPassword"
                // value={formData.firstName}
                />
            <br/> 
            <input
                type="checkbox" 
                id="isFriendly" 
                // checked={formData.isFriendly}
                // onChange={handleChange}
                name="isFriendly"
                />
            <label htmlFor='isFriendly'>Remember me</label>
            <br/>
            <button className='register-button'>Register</button>
        </form>
    </div>
  )
}

export default Register