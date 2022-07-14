import DashboardProfileInterface from "../../../components/DashboardComponents/DashboardProfileInterface/DashboardProfileInterface";
import Sidebar from "../../../components/DashboardComponents/Sidebar/Sidebar";
import styled from "../../../styles/Dashboard.module.css"


const profile = () => {
  return (
    <div className={styled.DashboardContainer}>
        <div className={styled.SidebarWrapper}>
        <Sidebar   />
        </div>
        
        <DashboardProfileInterface />
       

       
    </div>
  )
}

export default profile