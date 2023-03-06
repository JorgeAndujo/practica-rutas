import { Link } from 'react-router-dom';

const Home = () => {
    const userId = 10;

    return(
        <div className='container'>
            <h1>Aplication</h1>
            <a href='/users'>Users Anchor</a>
            <p></p>
            <Link to={"/users"} >Users Link</Link>
            <p></p>
            <Link to={`/users/${userId}`} >Users Link Parametros</Link>
        </div>
    )
}

export default Home;