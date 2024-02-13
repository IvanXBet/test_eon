import hosue from '../../resources/icons/icon-navbar/hous.svg';
import moves from '../../resources/icons/icon-navbar/moves.svg';
import smile from '../../resources/icons/icon-navbar/smile.svg';
import search from '../../resources/icons/icon-navbar/search.svg';
import selected from '../../resources/icons/icon-navbar/selected.svg';

import './NavBar.scss'

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar__items">
                <div className="navbar__item">
                    <img src={hosue} alt="hosue" className="navbar__img"/>
                    <div className="navbar__text">Главная</div>
                </div>
                <div className="navbar__item ">
                    <img src={moves} alt="moves" className="navbar__img"/>
                    <div className="navbar__text navbar__text_activ">Фильмы</div>
                </div>
                <div className="navbar__item">
                    <img src={smile} alt="smile" className="navbar__img"/>
                    <div className="navbar__text">Сериалы</div>
                </div>
                <div className="navbar__item">
                    <img src={search} alt="search" className="navbar__img"/>
                    <div className="navbar__text">Поиск</div>
                </div>
                <div className="navbar__item">
                    <img src={selected} alt="selected" className="navbar__img"/>
                    <div className="navbar__text">Избранное</div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;