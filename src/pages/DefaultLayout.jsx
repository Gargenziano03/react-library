import { Outlet } from "react-router-dom"
import MainMenu from "../components/MainMenu"

export default function DefaultLayout() {
    return (
        <>
            <header>
                <div className="logo">
                    logo
                </div>
                <MainMenu />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}