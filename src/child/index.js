import React, { useEffect, useMemo, useState } from 'react';
import { Typography } from '@material-ui/core';

import { getChildRef } from '../utils/database';
import { useParams } from 'react-router-dom';

export const Child = () => {
  const { childId } = useParams();
  const childRef = useMemo(() => getChildRef(childId), [childId]);
  const [childData, setChildData] = useState({});

  useEffect(() => {
    childRef.once('value', (sn) => {
      setChildData(sn.val());
    });

    return () => {
      childRef.off();
    };
  }, [childRef]);

  return <Typography>{childData.name}</Typography>;
};
