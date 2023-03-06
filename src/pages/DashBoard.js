import { useNavigate } from 'react-router-dom';

const DashBoard = () => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate("/");
    }

    return(
        <div className='container'>
            <button className='btn btn-danger' onClick={handleClick}>Log Out</button>
        </div>
    )
}

export default DashBoard;