import React, {Component, useState} from 'react';
import {NavLink} from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'
import './index.scss';

interface IFooterProps {
    backgroundColor?: string;
    itemcolor?: string;
}

const Footer: React.FC<IFooterProps> = (props) => {
    const {backgroundColor, itemcolor} = props;

    const [linkIn, setLinkin] = useState(false) 
    const [linkIn1, setLinkin1] = useState(false) 
    const [linkIn2, setLinkin2] = useState(false) 
    const [linkIn3, setLinkin3] = useState(false) 
    const style = {
        color: itemcolor,
    }
    return(
        <div className="qqMusic-footer">
            <section className="qqMusic-footer-list">
                <CSSTransition in={linkIn} timeout={2000} classNames="qqMusic" onClick={ () => setLinkin(!linkIn)}>
                    <NavLink exact to="/" activeStyle={style}>
                        <span className="fa fa-rocket"></span>
                        <p>首页</p>
                    </NavLink>
                </CSSTransition>

                <CSSTransition in={linkIn1} timeout={200} classNames="qqMusic" onClick={ () => setLinkin1(!linkIn1)}>
                    <NavLink to="/video" activeStyle={style}>
                        <span className="fa fa-rocket"></span>
                        <p>视频</p>
                    </NavLink>
                </CSSTransition>
                    
                <CSSTransition in={linkIn2} timeout={200} classNames="qqMusic" onClick={ () => setLinkin2(!linkIn2)}>
                    <NavLink to="/putong" activeStyle={style}>
                        <span className="fa fa-rocket"></span>
                        <p>扑通</p>
                    </NavLink>
                </CSSTransition>
                   
                    
                <CSSTransition in={linkIn3} timeout={200} classNames="qqMusic" onClick={ () => setLinkin3(!linkIn3)}>
                    <NavLink to="/myCenter" activeStyle={style}>
                        <span className="fa fa-rocket"></span>
                        <p>我的</p>
                    </NavLink>
                </CSSTransition>
               
            </section>
        </div>
    )
}

Footer.defaultProps = {
    backgroundColor:`#fff`,
    itemcolor: `#31c37c`
}

export default Footer