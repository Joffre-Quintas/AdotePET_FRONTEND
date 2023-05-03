import Back from '../Back/Back';
import { IoPersonCircleOutline } from 'react-icons/io5'

import './Header.scss';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Header() {
    const [showBack, setShowBack] = useState(false)
    const location = useLocation()

    useEffect(() => {
        if(window.location.pathname != '/' && window.innerWidth <= 768) {
            setShowBack(true)
        } else {
            setShowBack(false)
        }
    },[location.pathname])

        
    return(
        <>
            <header className='header'>
            <div className='header_back'>
                {showBack ? <Back/> : null}
            </div>

                <div className='header_logo'>LOGO</div>
                <div className='header_loginIcon'><IoPersonCircleOutline/></div>
            </header>
            <div className='headerGhost'></div>
        </>
    )
}

export default Header;