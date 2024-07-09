import React from 'react';
import classes from './header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
    const user = 'Aadit';
  return (
    <header className={classes.header}>
        <div className={classes.container}>
            <Link to='/' className={classes.logo}>
                <img src='/logo192.png' alt='logo' />
                CSE-CHAOS!!!
            </Link>
            <nav>
                <ul>
                    {user ? (<li className={classes.menu_container}>
                        <Link>{user}</Link>
                        <div className={classes.menu}>
                            <Link to='/dashboard'>Dashboard</Link>
                            <Link to='/profile'>Profile</Link>
                            <Link to='/logout'>Logout</Link>
                        </div>
                    </li>) : 
                    (<Link to='/login'>LogIn</Link>)
                    }
                    <li>
                        <Link to='https://iitr.ac.in/Departments/Computer%20Science%20and%20Engineering%20Department/index.html' className={classes.link}>
                            IITRCSE
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  );
}
