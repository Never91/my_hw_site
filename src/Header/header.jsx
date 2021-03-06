import React from 'react';
import './header.css';
import logo from '../Images/PikPng.com_anonymous-mask-png_1125985.png'


export default function Header({Header}) {
    return (
        <header className = {'header'}>
            <a href="#" className = {'logo_link'}>
                <img src = {logo} alt="photo"  className = {'logo'} />
            </a>

            <nav className = {'menu'}>
                <ul className = {'menu_list'}>
                    <li className = {'menu_list_item'} >
                        <a href="#" className = {'menu_list_link'}>About</a>  
                    </li>
                    <li className = {'menu_list_item'} >
                        <a href="#" className = {'menu_list_link'}>About</a>  
                    </li>
                    <li className = {'menu_list_item'} >
                        <a href="#" className = {'menu_list_link'}>About</a>  
                    </li>
                    <li className = {'menu_list_item'} >
                        <a href="#" className = {'menu_list_link'}>About</a>  
                    </li>
                    <li className = {'menu_list_item'} >
                        <a href="#" className = {'menu_list_link'}>About</a>  
                    </li>
                    
                </ul>
            </nav>
        </header>
    )
}
