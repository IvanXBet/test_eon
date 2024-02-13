import MainBlock from '../mainBlock/MainBlock';

const SerachPage = ({setModalActive, data}) => {
    return (
        <MainBlock data={data} categoris={'Результаты поиска'} setActive={setModalActive}/>
    )
}

export default SerachPage