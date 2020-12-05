import React from 'react'
import '../NavBar.css'
import {Link} from 'react-router-dom'


export default function NavBar() {
    return (
        <div>
            <nav>
            <ul className={"Nav-ul"}>
            <li className={"Nav-li"}><h3>noteTaker</h3></li>
            <li className={"Nav-li"}><Link style={{color:"#fff"}} to='/new'>New Note</Link></li>
            <li className={"Nav-li"}><Link style={{color:"#fff"}} to='/login'>Sign Out</Link></li>
            </ul>
            </nav>
        </div>
    )
}
