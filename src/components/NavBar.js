import React from 'react'
import '../NavBar.css'
import Background from '../nav-img3.png'

import {useHistory} from 'react-router'

import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';


export default function NavBar() {

    const history = useHistory()

    const pushToHome = () => {
        history.push('/')
    } 

    return (
        <div>
            <nav style={{ width:'100%', height:'10vh', backgroundImage:`url(${Background})`}}>
            <Breadcrumbs aria-label="breadcrumb">
            
            <Typography variant="h4" color="textPrimary"><h3 onClick={pushToHome}>noteTaker</h3></Typography>
            <Link variant="h5" color="inherit" href="/new">New Note</Link>
            <Link variant="h5" color="inherit" href="/login">Sign Out</Link>
    
            </Breadcrumbs>
            </nav>
        </div>
    )
}