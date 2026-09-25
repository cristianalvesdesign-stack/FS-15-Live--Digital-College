import { Outlet } from "react-router"
import AppHeader from "../app-header/AppHeader"

function AppLayout () {
    return (
        <>
        <AppHeader />
        <main className="container mt-05 mb-05">
            <Outlet />
        </main>
        <footer className="bg-warning text-center py-3">
            &copy; JarvisSports - jarvissports@company.com.br - @2026
        </footer>
        </>
    )
}

export default AppLayout