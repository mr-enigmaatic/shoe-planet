import React from 'react'
import './Error.css'
import { Link } from 'react-router-dom'


function Error404() {
    return (
        <div className='content'>
            <h1 className='error'>Error 404: Not Found</h1>
            <p>The page you are looking for does not available at the moment.</p>
            <h3>you must login to view this page</h3>
            <small><Link to={'/'}>click here</Link> to goto Hompage</small>
        </div>
    )
}

export default Error404