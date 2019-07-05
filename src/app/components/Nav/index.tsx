import * as React from 'react';
import { Link } from 'react-router-dom'

import * as style from './index.scss'
import classNames from 'classnames/bind';

export interface NavProps {

}

export interface NavState {

}

const cx = classNames.bind(style)


export class Nav extends React.Component<NavProps, NavState> {
    render() {
        const navItemClassName = cx({
            navItem: true,
            active: true
        })

        return (
            <nav className={style.nav}>
                <span className={navItemClassName}>
                    <Link to='/home'/> Home
                </span>
                <span className={navItemClassName}>
                    <Link to='/about'/> About US
                </span>
            </nav>
        );
    }
}

export default Nav