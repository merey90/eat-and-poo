import React from 'react';
import { Button, List } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Link } from 'react-router-dom';

import { ChildItem } from './childItem';

const ChildrenData = [
  {
    id: 'someId',
    name: 'Alan',
    parents: ['sgDuMYSfVcbSC93o19xgKcWK8Dn1'],
    birthDate: '21.12.2020',
  },
];

export const Children = () => {
  return (
    <>
      <List>
        {ChildrenData.map((child) => (
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
