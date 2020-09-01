
import React from 'react'
import { CSSTransition } from 'react-transition-group'
import './index.scss'

interface IBrandstandProps {
    handClick?: () => void;
    brandShow: boolean;
}

const Brandstand: React.FC<IBrandstandProps> = ({handClick,brandShow}) => {
   return (
    <>
        <CSSTransition in={brandShow} timeout={200} classNames="brandstand" unmountOnExit>
            <div className="brandstand">
                <ul>
                    <li>12</li>
                    <li>12</li>
                    <li>12</li>
                    <li>12</li>
                    <li>12</li>
                    <li>12</li>
                    <li>12</li>
                    <li>12</li>
                </ul>
            </div>
        </CSSTransition>
       {brandShow && <div className="mask" onClick={handClick}></div>}
    </>
   )
}

export default Brandstand