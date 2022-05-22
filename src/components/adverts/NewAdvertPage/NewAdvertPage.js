import Page from '../../layout/Page';
import FormField from '../../common/FormField';
import { useState } from 'react';
import { createAdvert } from '../service';
import { useNavigate } from 'react-router-dom';
import SelectTags from '../SelectTags/SelectTags';
import { useDispatch } from 'react-redux';
import { advertCreatedFailure, advertCreatedRequest, advertCreatedSuccess } from '../../../store/actions';



const NewAdvertPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

const [error, setError] = useState(false);

  const [info, setInfo] = useState({
    name: '',
    sale: true,
    price: '',  
    tags: []  
  });

const {name, sale, price, tags } = info;


  const handleChange = (event) => {
    setInfo( info => ({
      ...info,
      [event.target.name]: 
      event.target.type === 'select-one'
      ? (
        event.target.value === '1'
          ? true
          : false
      )
      : event.target.value
      
      
    }));
  };




  const [image, setImage] = useState(0);

  const handleChangePhoto = (event) => {
    setImage({[event.target.name]: 
        event.target.files[0]
      });
    };







  const handleSubmit = async event => {
    event.preventDefault();

    const formData = new FormData();
    for(var key in info){
        formData.append(key, info[key]);
    }

    dispatch(advertCreatedRequest());

     try {
       const createdAdvert = await createAdvert(formData);
      dispatch(advertCreatedSuccess(createdAdvert));

      navigate(`/adverts/${createdAdvert.id}`);
     } catch (error) {
      dispatch(advertCreatedFailure(error));
      }
  };



  const validName = ({ name }) => name;
const validPrice = ({ price }) =>
  !Number.isNaN(price) && Number.isFinite(price) && price >= 0;
const validTags = ({ tags }) => !!tags.length;


  return (
    <Page title="Create a new advert">
      <div className="newAdvertPage">
          <form onSubmit={handleSubmit}>
{
          <FormField
          type="text"
          name="name"
          label="Title of the advert"
          value={name}
          onChange={handleChange}
        /> }


           <FormField
          type="number"
          name="price"
          label="Price"
          value={price}
          onChange={handleChange}
        />

<div className='formField'>
<label className='formField-label'><span>Advert type</span></label>
<select className='formSel' name="sale" onChange={handleChange}>
<option   value="1">compra</option>
<option value="0">venta</option>
</select>
</div>

 
<div className='formTagCont'> 
  <label className='formTagTit'>Tags (Select, at least, 1 tag)</label>
  <SelectTags name="tags" value={tags} onChange={handleChange} />

</div>

<label className='formTagTit'>Select and image for your advert</label>

<input
          type="file"
          name="photo"
          onChange={handleChangePhoto}
        />

              <button type="submit" value='submit'
                className="formBtn"
              >
                Create!
              </button>
          </form>
        </div>
    </Page>
  );
};

export default NewAdvertPage;
