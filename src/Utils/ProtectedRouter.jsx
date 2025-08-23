import { Navigate, Outlet } from "react-router-dom"

const ProtectedRouter = ()=>{
    const user = true
    return user ? <Outlet/>: <Navigate to='/home'/>
}
export default ProtectedRouter
