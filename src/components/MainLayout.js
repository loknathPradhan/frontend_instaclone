import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function mainLayout({ children }) {
    return (<>
        <header className='app_header'>
            <div className="logo_container">
                <img src="../image/logo.svg" alt="logo" />
                <span className='logo_name'>Instaclone</span>
            </div>

            <div className="right_camera">
                <Link to="add">
                    <img src="../image/camera.png" alt="camera" />
                </Link>

            </div>

        </header>
        <div className='main'>
            {children}
        </div>
        <Outlet></Outlet>
    </>

    )
}
