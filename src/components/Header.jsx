import { Link } from "react-router-dom";

export default function Header() {
   return (
        <header className="header">
            <nav>
                <ul>
                    <li>
                        <Link to="/">MyWeatherApp</Link>
                    </li>
                    <li>
                        <Link to="/liked">Liked</Link>
                    </li>
                </ul>
            </nav>
        </header>
   )
}