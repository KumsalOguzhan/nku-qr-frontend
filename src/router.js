import { useEffect, useContext } from "react"
import { Outlet, BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"

import SignIn from "./pages/signIn"

const router =() => {

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/sign-in" element={<SignIn />} />
        </Routes>
        </BrowserRouter>
    )
}

export default router