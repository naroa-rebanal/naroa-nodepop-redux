import React from 'react';

import { getTags } from '../service';
import CheckboxGroup from '../../common/CheckboxGroup';
import useQuery from '../../../hooks/useQuery';
import { tagsLoaded } from '../../../store/actions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function SelectTags(props) {
  const dispatch = useDispatch();

  const { data: tags = [] } = useQuery(getTags);

useEffect(() => {
     dispatch(tagsLoaded(tags));
}, [dispatch, tags]);

  return <CheckboxGroup options={tags} {...props} />;
}

export default SelectTags;




