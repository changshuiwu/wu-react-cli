import React from 'react';
import Header from '@components/Header/index'; 
import Bandstand from '@components/Brandstand/index';

export default class MainLayout extends React.Component {
    render() {
        const {children} = this.props;

        return (
            <div className="qqMiusic-mainlayout">
                <Header />
                { children }
                <Bandstand />
            </div>
        )
    }
}