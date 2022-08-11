import React from 'react'

const Login = () => {
  return (
    <div className='login'>
        <div className='profile-image'></div>
        <h2>Welcome Back <br/>Name!</h2>
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
        <p className='no-account'>No account? Register here.</p>
    </div>
  )
}

export default Login