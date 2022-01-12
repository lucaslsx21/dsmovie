import { ReactComponent as GithubLs } from 'assets/img/github.svg';
import './style.css';

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/lucaslsx21"></a>
                    <div className="dsmovie-contact-container">
                        <GithubLs />
                        <p className="dsmovie-contact-link">/devlucaslsx21</p>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;