import '../styles/header_bar.css';

export default function Header(){
    return(
        <header className="header--bar">
            <h2 className="header--title">Exbash</h2>
            <a href="./aboutus" className="link abt-us">About us</a>
            <a href="./singup" className="link btn--link">Sign Up</a>
        </header>
    )
}