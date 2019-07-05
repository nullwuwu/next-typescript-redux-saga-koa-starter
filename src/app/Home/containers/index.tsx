import * as React from 'react'
import { observer, inject } from "mobx-react";
import { RouteComponentProps } from 'react-router';
// import {  } from 'app/Home/stores';
// import {  } from 'app/Home/components';

export interface HomeProps extends RouteComponentProps<any> {

}

export interface HomeState {

}

@inject()
@observer
export default class HomeView extends React.Component<HomeProps, HomeState> {
    render() {
        return (
            <React.Fragment>
                aaa
            </React.Fragment>
        )
    }
}