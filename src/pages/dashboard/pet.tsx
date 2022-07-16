import DashboardPetInterface from "../../components/DashboardComponents/DashboardPetInterface/DashboardPetInterface";
import Sidebar from "../../components/DashboardComponents/Sidebar/Sidebar";
import styled from "../../styles/Dashboard.module.css"


const petInfo = () => {
  return (
    <div className={styled.DashboardContainer}>
        <div className={styled.SidebarWrapper}>
        <Sidebar   />
        </div>
        <DashboardPetInterface />
    </div>
  )
}

export default petInfo