import { Outlet } from "react-router-dom"
import Sidebar from "../../components/sidebar/sidebar"
import Header from "../../components/header/header"
import './main.css'
const Main = () => {
  return (
    <div className="main-layout">
        <Sidebar/>
        <div className="main-left">
            <Header/>
            <main>
                <Outlet/>
            </main>
        </div>
    </div>
  )
}

export default Main