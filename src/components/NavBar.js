import React from 'react'
import '../NavBar.css'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router'
export default function NavBar() {

    const history = useHistory()

    const pushToHome = () => {
        history.push('/')
    } 

    return (
        <div>
            <nav>
            <ul className={"Nav-ul"}>
            <li className={"Nav-li"}><h3 onClick={pushToHome}>noteTaker</h3></li>
            <li className={"Nav-li"}><Link style={{color:"#fff"}} to='/new'>New Note</Link></li>
            <li className={"Nav-li"}><Link style={{color:"#fff"}} to='/login'>Sign Out</Link></li>
            </ul>
            </nav>
        </div>
    )
}
