import MainBlock from '../mainBlock/MainBlock';

const HomePage = ({setModalActive, isSearch}) => {
    return (
        <>
            <MainBlock categoris={'Популярные'} setActive={setModalActive}/>
			<MainBlock categoris={'Недавно просмотренные'}/>
        </>
    )
}

export default HomePage;