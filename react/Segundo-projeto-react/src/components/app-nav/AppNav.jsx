import { NavLink } from "react-router"

function AppNav() {
    return (
        <>
            <header className="container">
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/products">Produtos</NavLink>
                    </li>
                </ul>
            </header>
        </>
    )
}

export default AppNav