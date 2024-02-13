import { useState, createContext } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './Header.scss';
import logo from '../../resources/icons/Logo.svg';
import selected from '../../resources/icons/icon/selected.svg'
import profil from '../../resources/img/Img.svg'
import arrow from '../../resources/icons/icon/bottom-arrow.svg'

import useEonTestServise from '../../services/eonTestServices';




const Header = ({setData, setIsSearch}) => {

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
                        <a  className="header__link" href="##">Главная</a>
                        <a  className="header__link header__link_activ" href="##">Фильмы</a>
                        <a  className="header__link" href="##">Сериалы</a>
                    </div>
                    <div className="header__right-content">
                    
                        <input onChange={(e) => {onChangeInput(e)}}  className="header__search" name='search' type="search" placeholder="Поиск по сайту"/>
                    
                        

                        <img src={selected} alt="selected" className="header__selected"/>
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