import React from 'react';
import Header from '@components/Header/index'; 
import Footer  from "@components/Footer/index";
import './index.scss'

export default class MainLayout extends React.Component {
    render() {
        const {children} = this.props;

        return (
            <div className="qqMiusic-mainlayout">
                <Header />
                <section className="qqMiusic-content">
                    { children }
                </section>
                <Footer />
            </div>
        )
    }
}