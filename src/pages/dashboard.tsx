import DashboardProfileInterface from "../components/DashboardComponents/DashboardProfileInterface/DashboardProfileInterface";
import DashboardPetInterface from "../components/DashboardComponents/DashboardPetInterface/DashboardPetInterface";
import Sidebar from "../components/DashboardComponents/Sidebar/Sidebar";
import styled from "../styles/Dashboard.module.css"


const dashboard = () => {
  return (
    <div className={styled.DashboardContainer}>
        <div className={styled.SidebarWrapper}>
        <Sidebar   />
        </div>
        
        {/* <DashboardProfileInterface /> */}
        <DashboardPetInterface />

       
    </div>
  )
}

export default dashboard