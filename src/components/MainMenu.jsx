import { Link, NavLink } from "react-router-dom";

export default function MainMenu() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <NavLink to="/books">Books</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
        </nav>
    )
}