// tämä komponentti tarkistaa, onko käyttäjä kirjautunut. Jos ei, se ohjaa käyttäjän signin reittiin (App.js, path "/")
import { useUser } from "../context/useUser";
import { Outlet, Navigate } from 'react-router-dom'

export default function ProtectedRoute() {
    const { user } = useUser()
    if (!user || !user.token) return <Navigate to="/signin" replace />
    return (<Outlet />)
}