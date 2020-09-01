
import React, {useState} from 'react'
import './index.scss'
import  Brandstand from '@components/Brandstand/index'

 const Header: React.FC = (props:any) => {
     const [brandShow, setBrand] = useState(false);
     const handClick = () => {
        setBrand(!brandShow)
     }
    return (
        <div className="oc-header">
            <ul className="oc-header-list">
                <li onClick={handClick}>推荐</li>
                <li>推荐</li>
                <li>推荐</li>
                <li>推荐</li>
                <li>推荐</li>
            </ul>
            
            <Brandstand handClick={handClick} brandShow={brandShow}/>
        </div>
    )
}

export default Header