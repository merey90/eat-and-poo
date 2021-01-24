import React, { useEffect, useMemo, useState } from 'react';
import { Button, List } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Link } from 'react-router-dom';

import { ChildItem } from './childItem';
import { auth } from '../utils/firebase';
import { getChildRef, getParentRef } from '../utils/database';

export const Children = () => {
  const parentRef = useMemo(() => getParentRef(auth.currentUser.uid), []);
  const [childrenData, setChildrenData] = useState([]);

  useEffect(() => {
    const childRefs = [];

    parentRef.on('value', (sn) => {
      const parent = sn.val() || [];

      for (const p of parent) {
        childRefs.push(getChildRef(p));
      }

      for (const childRef of childRefs) {
        childRef.on('value', (sn) => {
          const child = {
            id: sn.key,
            ...sn.val(),
          };
          setChildrenData((prevValues) => {
            return [...prevValues, child];
          });
        });
      }
    });

    return () => {
      parentRef.off();
      for (const childRef of childRefs) {
        childRef.off();
      }
    };
  }, [parentRef]);

  return (
    <>
      <List>
        {childrenData.map((child) => (
          <ChildItem key={child.id} childData={child} />
        ))}
      </List>
      <Button
        startIcon={<AddCircleIcon />}
        variant="contained"
        color="secondary"
        fullWidth
        component={Link}
        to="/new"
      >
        New child
      </Button>
    </>
  );
};
