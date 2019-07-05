import * as React from 'react';

import * as style from './index.scss'

export interface LoginProps {

}

export interface LoginState {

}


export class Login extends React.Component<LoginProps, LoginState> {
    render() {
        return (
          <div className={style.account}>
                <span>Login</span>
                {/* Account Modal */}
                <article className={style.popup}>
                    <section className={style.popupItem}>
                        baibingbing2019baibingbing412824718@hotmail.com
                    </section>
                    <section className={style.popupItem}>
                        <p>Privacy and Security</p>
                        <p>Account Cancellation</p>
                    </section>
                    <section className={style.popupItem}>
                        Sign Out
                    </section>
                </article>
          </div>
        );
    }
}

export default Login