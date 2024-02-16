import Card from '../card/Card';

import './MainBlock.scss';

const SerachPage = ({setModalActive, data}) => {
    return (
            <div className="mainBlock">
            <h1 className="mainBlock__title">Результаты поиска</h1>
            <div className="mainBlock__block">
                {data ? data.sort((a, b) => b.year - a.year)
                            .map(item => 
                                    {
                                        return (
                                            <Card 
                                            setModalActive={setModalActive} 
                                            dataFilm={item} 
                                            key={item.id}/>
                                        )
                                    }) : 
                <dvi>В нашей базе нет такого фильма</dvi>}
            </div>
            </div>
    )
}

export default SerachPage
