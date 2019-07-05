import * as React from 'react';

import * as style from './index.scss'
import Nav from '../Nav/index';
import Login from '../Login/index';

export interface HeaderProps {

}

export interface HeaderState {

}


export class Header extends React.Component<HeaderProps, HeaderState> {
    render() {
        return (
          <header className={style.header}>
              <Nav />
              <Login />
          </header>
        );
    }
}