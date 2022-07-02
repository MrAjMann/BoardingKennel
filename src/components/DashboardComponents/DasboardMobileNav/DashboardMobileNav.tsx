import styled from './DashboardMobileNav.module.css'
import {FaPaw  } from 'react-icons/fa'
import {BsPerson } from 'react-icons/bs'
import {AiOutlineCalendar } from 'react-icons/ai'


const DashboardMobileNav = () => {
  return (
    <section>
        <ul className={styled.MenuButtonWrapper}>
            <li className={styled.MenuButton}><a href="" ><BsPerson className={styled.MenuIcon} size="1.8rem"/></a></li>
            <li className={styled.MenuButton}> <a href=""><FaPaw className={styled.MenuIcon} size="1.8rem" /></a></li>
            <li className={styled.MenuButton}><a href=""><AiOutlineCalendar className={styled.MenuIcon} size="1.8rem" /></a></li>
        </ul>
        <div></div>
    </section>
  )
}

export default DashboardMobileNav