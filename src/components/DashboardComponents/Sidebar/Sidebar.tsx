import Image from 'next/image'
import styled from './Sidebar.module.css'
import {SidebarTabProfile, SidebarTabPets, SidebarTabBookings} from '../SidebarTabs/SidebarTabs';
import profilePic from "../assets/dogOwner.jpg";
type Props = {
  classes?: string
}

const Sidebar: React.FC<Props> = (props)=> {
  return (
    <div className={props.classes}>
      <div className={styled.SidebarContainer}>
       
          <div className={styled.profileImageWrapper}>
            <Image
              className={styled.profileImage}
              src={profilePic}
              alt="A dog and it's owner"
              />
          </div>
            <SidebarTabProfile />
            <SidebarTabPets />
            <SidebarTabBookings />
        
        <div className={styled.SidebarBorder}></div>
      </div>
    </div>
  )
}

export default Sidebar