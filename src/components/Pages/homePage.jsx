import './MainBlock.scss';
import useEonTestServise from '../../services/eonTestServices';
import poster from '../../resources/img/moves/avatar.svg'
import star from '../../resources/icons/icon/star.svg'

import Card from '../card/Card';

import {popularFilm} from './popularFilm.js';


const HomePage = ({setModalActive}) => {

    const {loading, error, getFilm} = useEonTestServise();
    return (
       <>
            <div className="mainBlock">
                <h1 className="mainBlock__title">Популярное</h1>
                <div className="mainBlock__block">
                    {popularFilm.map(item => {
                        return(
                            <Card dataFilm={item} setModalActive={setModalActive} key={item.id}/>
                    )})}
                </div>

                <h1 className="mainBlock__title">Просмотренное</h1>
                    <div className="mainBlock__block">
                    <div class="card">
                        <img class="card__img" src={poster} alt="cars-img"/>
                        <div class="card__title">Аватар: Путь воды </div>
                        <div class="card__stars">
                            <img src={star} alt="star"/>
                            <span>9.0</span>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card__img" src={poster} alt="cars-img"/>
                        <div class="card__title">Аватар: Путь воды </div>
                        <div class="card__stars">
                            <img src={star} alt="star"/>
                            <span>9.0</span>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card__img" src={poster} alt="cars-img"/>
                        <div class="card__title">Аватар: Путь воды </div>
                        <div class="card__stars">
                            <img src={star} alt="star"/>
                            <span>9.0</span>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card__img" src={poster} alt="cars-img"/>
                        <div class="card__title">Аватар: Путь воды </div>
                        <div class="card__stars">
                            <img src={star} alt="star"/>
                            <span>9.0</span>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card__img" src={poster} alt="cars-img"/>
                        <div class="card__title">Аватар: Путь воды </div>
                        <div class="card__stars">
                            <img src={star} alt="star"/>
                            <span>9.0</span>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card__img" src={poster} alt="cars-img"/>
                        <div class="card__title">Аватар: Путь воды </div>
                        <div class="card__stars">
                            <img src={star} alt="star"/>
                            <span>9.0</span>
                        </div>
                    </div>

                </div>
            </div>   

            
        </>
    )
}

export default HomePage;