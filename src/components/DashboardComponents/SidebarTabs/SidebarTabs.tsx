import Link from 'next/link'
import {FaPaw  } from 'react-icons/fa'
import {BsPerson } from 'react-icons/bs'
import {AiOutlineCalendar } from 'react-icons/ai'
import styled from "./SidebarTabs.module.css"


export const SidebarTabProfile = () => {
  return (
    <div className = {styled.TabWrapper} style={{backgroundColor:"var(--pink)" }}> 
        <BsPerson className={styled.MenuIcon} size="2.5rem"/>
    <Link href='/dashboard/profile'>
        <h2 className={styled.TabText}>Profile</h2>
    </Link>
    </div>
    
  )
}


export const SidebarTabPets = () => {
  return (
    <div className = {styled.TabWrapper}>
        <FaPaw className={styled.MenuIcon} size="2.5rem"/>
      <Link href='/dashboard/pets'>
        <h2 className={styled.TabText}>Pets</h2>
      </Link>
    </div>
    
  )
}
export const SidebarTabBookings = () => {
  return (
    <div className = {styled.TabWrapper}>
        <AiOutlineCalendar className={styled.MenuIcon} size="2.5rem"/>
      <Link href='/dashboard/bookings'>
        <h2 className={styled.TabText}>Bookings</h2>
      </Link>
    </div>
    
  )
}

