import DashboardInteface from "../components/DashboardComponents/DashboardInterface/DashboardInterface";
import Sidebar from "../components/DashboardComponents/Sidebar/Sidebar";
import styled from "../styles/Dashboard.module.css"


const dashboard = () => {
  return (
    <div className={styled.DashboardContainer}>
        <div className={styled.SidebarWrapper}>
        <Sidebar   />
        </div>
        
       
        <DashboardInteface />

       
    </div>
  )
}

export default dashboard