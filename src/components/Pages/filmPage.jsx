import MainBlock from '../mainBlock/MainBlock';

const FilmPage = ({setModalActive, isSearch}) => {
    return (
        <>
            <MainBlock categoris={'Фильмы'} setActive={setModalActive}/>
        </>
    )
}

export default FilmPage;