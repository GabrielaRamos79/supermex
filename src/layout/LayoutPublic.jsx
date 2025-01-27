import { Outlet } from 'react-router-dom'
import NavBar from '../components/navbar/NavBar'

const LayoutPublic = () => {
  return (
    <>
    <NavBar />
    <Outlet />
    </>
  )
}

export default LayoutPublic