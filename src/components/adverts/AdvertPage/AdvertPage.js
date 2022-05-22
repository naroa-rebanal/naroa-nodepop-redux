import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { advertLoaded } from '../../../store/actions';
import { getAdvert } from '../../../store/selectors';
import Page from '../../layout/Page';
import AdvertSingle from './AdvertSingle';

class AdvertPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { advert } = this.props;

    return (
      <Page title="Single advert">
        <AdvertSingle {...advert} />
      </Page>
    );
  }
}


const AdvertPageFunction = () => {
  const dispatch = useDispatch();
  const { advertId } = useParams();
 const advert = useSelector(getAdvert(advertId));

 useEffect(() => {
    dispatch(advertLoaded(advertId));

  }, [dispatch, advertId]);

  return <AdvertPage advert={advert} />;
};

export default AdvertPageFunction;
