import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Page from '../../layout/Page';
import Advert from './Advert';
import { useDispatch, useSelector } from 'react-redux';
import { advertsLoaded } from '../../../store/actions';
import React from 'react';
import { getAdverts } from '../../../store/selectors';

const EmptyList = () => (
  <div style={{ textAlign: 'center' }}>
    <p>There are no adverts published yet!</p>
    <Link as={Link} to="/adverts/new" className='newadbtn'>
      Create new advert
    </Link>
  </div>
);




const useAdverts = () => {
  const dispatch = useDispatch();
   const adverts = useSelector(getAdverts);

  useEffect(() => {
   dispatch(advertsLoaded());
  },[dispatch]);

  return adverts;
};



const AdvertsPage = () => {

const adverts = useAdverts();

  return (
    <Page title="what are you looking for?">

      <div className='adverts-colum'>
        {adverts.length
        ? (<ul>
            {adverts.map(advert => (
              <li key={advert.id}>
                <Link to={`/adverts/${advert.id}`}>
                  <Advert {...advert} />
                </Link>
              </li>
             ))}
          </ul>)
         
        : (<EmptyList />
        )}
      </div>
    </Page>
  );


};

export default AdvertsPage;
