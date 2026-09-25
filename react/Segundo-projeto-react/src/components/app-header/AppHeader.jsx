import { NavLink } from "react-router"
import AppNav from "../app-nav/AppNav"
import AppBanner from "../app-banner/AppBanner"


function AppHeader() {
    return (
        <>
            <AppNav />
            <AppBanner />
        </>
    )
}

export default AppHeader