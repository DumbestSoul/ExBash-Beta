import '../styles/main_content.css'

export default function MainContent(){
    return(
        <div className='main--content'>
            <div className='content'>
                <h1 className='content-title'>ExBash</h1>
                <p>Your one-stop solution for all your exam stuffs.</p>
            </div>
            <div className='login-form'>
                <input type='text' placeholder='Enter your username' className='login--input'/>
                <input type='password' placeholder='Password' className='login--input'/>
                <button className='login--btn'>Login in</button>
                <a href="#" className='link'>Forgot Password?</a>
            </div>
        </div>
    )
}