import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {useEffect, useState} from 'react';

import Header from '../header/Header';

import HomePage from '../Pages/homePage';
import SerachPage from '../Pages/SearchPage';
import FilmPage from '../Pages/filmPage';
import SeriesPage from '../Pages/seriesPage';


import NavBar from '../navBar/NavBar';
import Modal from '../modal/Modal';

import useEonTestServise from '../../services/eonTestServices';

import modalSelected from '../../resources/icons/modal/selected.svg';
import modalShare from '../../resources/icons/modal/share.svg';
import modalEllipse from '../../resources/icons/modal/Ellipse.svg'
import modalIconPlay from '../../resources/icons/modal/play-icon.svg'

import './App.scss';

function App() {
	const [data, setData] = useState(null);
	const [modalData, setModalData] = useState(null);
	const [modalActive, setModalActive] = useState(false)
	const [isSearch, setIsSearch] = useState(false);
	
	const [activeFilter, setFilter] = useState('main');

	const {loading, error, getFilm} = useEonTestServise();

	useEffect(() => {
		getFilm(modalActive)
			.then(data => onRequsetModal(data))
			.catch(item => console.log(item))
	}, [modalActive])
		
	const onRequsetModal = (data) => {
		setModalData(data)
	}	
	

	
	return (
		<Router>
			<div className="App">

				<Header setIsSearch={setIsSearch} setData = {setData} setFilter={setFilter}/>
				<div className="main">
					<div className="container">
					<Routes>
						<Route path='/' element={<HomePage isSearch={isSearch}  setModalActive = {setModalActive}/>}/>

						<Route path='/search' element={<SerachPage isSearch={isSearch} setModalActive = {setModalActive} data={data} />}/>

						<Route path='/films' element={<FilmPage />}/>

						<Route path='/series' element={<SeriesPage />}/>
					</Routes>
					
					</div>
				</div>

				<NavBar/>
				{modalActive ? <Modal active={modalActive} setActive={setModalActive} >
					<ModalContent modalData={modalData} setModalActive={setModalActive}/>
							
						
				</Modal> : <div></div>}
			</div>
		</Router>
	);
}


const ModalContent = ({modalData, setModalActive}) => {
	console.log(modalData)
	return(
		<>
			<div className="modal__close" onClick={() =>setModalActive(false)} ></div>
			<div className="modal__img">
				<img src={modalData.poster} alt="modal-img"/>
			</div>
			<div className="modal__block">
				<div className="modal__title">{modalData.title}</div>
				<div className="modal__btns">
					<button className="modal__btn"><img src={modalIconPlay} alt=""/> <span>Смотреть</span></button>
					<div className="modal__selected">
						<img src={modalSelected} alt="selected"/>
					</div>
					<div className="modal__share">
						<img src={modalShare} alt="share"/>
					</div>
				</div>
				<div className="modal__statistic">
					<div className="modal__stars"> {modalData.ratings}</div>
						<div className="modal__separator"></div>
						<div className="modal__year">{modalData.year}</div>
					
				</div>
				<div className="modal__restriction">16+</div>
				<div className="modal__categories">
					<span>Приключения</span>
					<img src={modalEllipse} alt=""/>    
					<span>Фэнтези</span>
					<img src={modalEllipse} alt=""/>
					<span>Семейный</span>
				</div>
				<p className="modal__text">{modalData.plot}</p>
			</div>
		</>
	)
}

export default App;
