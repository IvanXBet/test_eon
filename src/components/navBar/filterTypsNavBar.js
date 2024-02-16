import Home from './svg/Home';
import Movies from './svg/Movies.jsx';
import Serials from './svg/Serials';
import Search from './svg/Search';
import Selected from './svg/Selected';



export const filterTypsNavBar = [
		{ text: 'Главная', type: 'main', to: '/', icon: Home},
		{ text: 'Фильмы', type: 'movie', to: '/films', icon: Movies},
		{ text: 'Сериалы', type: 'series', to: '/series', icon: Serials},
		{text: 'Поиск', type: 'search', to:'/searchMob', icon: Search},
		{text: 'Избранное', type: 'selected', to:'/selected', icon: Selected}
	];