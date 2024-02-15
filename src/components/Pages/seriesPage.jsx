import MainBlock from '../mainBlock/MainBlock';

const FilmPage = ({setModalActive, isSearch}) => {
    return (
        <>
            <MainBlock categoris={'Сериалы'} setActive={setModalActive}/>
        </>
    )
}

export default FilmPage;