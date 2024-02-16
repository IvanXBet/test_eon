import { useEffect } from 'react';
import {Link, useNavigate, NavLink} from 'react-router-dom';
import './Header.scss';
import logo from '../../resources/icons/Logo.svg';
import selected from '../../resources/icons/icon/selected.svg'
import profil from '../../resources/img/Img.svg'
import arrow from '../../resources/icons/icon/bottom-arrow.svg'

import useEonTestServise from '../../services/eonTestServices';

import { filterTyps } from './filterTyps';


const Header = ({setData, setIsSearch, setFilter}) => {
   
	const {getFilms} = useEonTestServise();

    const navigate = useNavigate();


	const onSerch = (serchName) => {
        getFilms(serchName).then(data => onRequset(data))
        .catch(data => console.log(data))
    }

    const onRequset = (data) => {
        setData(data)
    }
    
    const onChangeInput = (e) => {
        setIsSearch(true)
        if(e.target.value === '') {
            navigate("/");
            onRequset("")
            return
        }
        navigate("/search");

        onSerch(e.target.value.trim())
    }

    const onSwitchType = (type) => {
        setFilter(type)
    }

    
    
    return (
            <header className="header">
            <div className="container">
                <div className="header__content">
                    <div className="header__left-content">
                        <div className="header__humgurger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <Link to="/">
                            <img src={logo} alt="logo" className="headre__logo"/>
                        </Link>
                            
                        
                    </div>
                    <div className="header__links">

                        {filterTyps.map((item, i) => {
                           if(item.type !== 'search') {
                                return (
                                    <NavLink 
                                        onClick={() => onSwitchType(item.type)}
                                        style={({isActive})=> ({color: isActive ? '#FFFFFF' : '#737373'})} 
                                        to={item.to}
                                        key={i}
                                        data-type={item.type} 
                                        className="header__link" >{item.text}</NavLink>
                                )
                           }
                        })}

                    
                    </div>
                    <div className="header__right-content">
                    
                        <input onChange={(e) => {onChangeInput(e)}} className="header__search" name='search' type="search" placeholder="Поиск по сайту"/>
                    
                        
                        <Link to='/selected'>
                            <img src={selected} alt="selected" className="header__selected"/>
                        </Link>
                        

                        <div className="header__profil">
                            <div className="header__profil-img">
                                <img src={profil} alt="profil"/>
                            </div>
                            <div className="header__profil-arrow">
                                <img src={arrow} alt="arrow"/>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </header>
    )
}

export default Header;