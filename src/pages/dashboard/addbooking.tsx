import DashboardCreateBookingInterface from "../../components/DashboardComponents/DashboardCreateBookingInterface/DashboardCreateBookingInterface";
import Sidebar from "../../components/DashboardComponents/Sidebar/Sidebar";
import styled from "../../styles/Dashboard.module.css"


const petInfo = () => {
  return (
    <div className={styled.DashboardContainer}>
        <div className={styled.SidebarWrapper}>
        <Sidebar   />
        </div>
        <DashboardCreateBookingInterface />
    </div>
  )
}

export default petInfo