import styled from '../../styles/Dashboard.module.css'



const Welcome = () => {
    return (
        <div className={styled.profileUserWrapper}>
            <p className={styled.profileDate}>30 June 2022</p>
            <p className={styled.profileUserWelcome}>
            Hi <span className={styled.profileUserWelcomeName}>John</span>,
            Welcome back, nice to see you again.
            </p>
        </div>

    )

}

export default Welcome