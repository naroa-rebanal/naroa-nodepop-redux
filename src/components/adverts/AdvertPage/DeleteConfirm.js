import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { advertDeleted } from '../../../store/actions';

export const DeleteConfirm = (id) => {

    const navigate = useNavigate();
    const adId = id['id'];
    const dispatch = useDispatch();

    const confirmacion = async () =>{
       dispatch(advertDeleted(adId));
       navigate(`/adverts`);
      
    }

    
  
    return (
      <div className='confirmBlock'>
      <p>Are you sure you want to delete this advert? </p>
      <button onClick={confirmacion}>Sí</button>
      </div>
    )
  }