import DashboardPetSelectionInterface from "../../../components/DashboardComponents/DashboardPetSelectionInterface/DashboardPetSelectionInterface";
import Sidebar from "../../../components/DashboardComponents/Sidebar/Sidebar";
import styled from "../../styles/Dashboard.module.css"


const pets = () => {
  return (
    <div className={styled.DashboardContainer}>
        <div className={styled.SidebarWrapper}>
        <Sidebar   />
        </div>
        <DashboardPetSelectionInterface />
    </div>
  )
}

export default pets