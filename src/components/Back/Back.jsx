import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

function Back() {
    const navigate = useNavigate();

    function backNavigate() {
        navigate(-1)
    }

    return(
        <>
            <BsArrowLeft onClick={backNavigate}/>
        </>
    )
}
export default Back;