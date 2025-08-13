import './login_style.css';
export default function Login({ isOpen, onClose }){
    if (!isOpen)return null;
    return(
    <div className="dar page-login">
        
        <div className="box-login">
            <form>
            <h2>Login</h2>
            <input className="re-input" type="email" placeholder="Email" required/>
            <input className="re-input" type="password" placeholder="Password" required/>
            <br/>
            <br/>
            <button className='Login-button' onClick={onClose}>Close</button>
            <button className='Login-button' type="submit">Login</button>
            </form>

        </div>   
    </div>
    );
}