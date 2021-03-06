import React, { useContext, useEffect, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { format } from 'date-fns';
import { useHistory } from 'react-router-dom';

import { Form } from './styles';
import { auth } from '../utils/firebase';
import { childrenRef, getParentRef } from '../utils/database';
import { ChildContext } from '../utils/childContext';

export const NewChild = () => {
  const history = useHistory();

  const [date, setDate] = useState(null);
  const [name, setName] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [children, setChildren] = useState([]);
  const { setChild } = useContext(ChildContext);

  const parentRef = getParentRef(auth.currentUser.uid);

  useEffect(() => {
    parentRef.on('value', (sn) => {
      if (!!sn.val() && sn.val().length) {
        setChildren(sn.val());
      }
    });

    return () => {
      parentRef.off();
    };
  });

  const handleSubmit = (e) => {
    setDisabled(true);
    e.preventDefault();
    const newChild = {
      name,
      birthday: format(date, 'dd.MM.yyyy'),
      parents: {
        [auth.currentUser.uid]: true,
      },
    };

    const childRef = childrenRef.push();
    childRef
      .set(newChild)
      .then(() => {
        const childId = childRef.path.pieces_.pop();
        const newChildren = [...children, childId];
        parentRef.set(newChildren);
        setChild({ ...newChild, id: childId });
        history.push(`/child`);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleDateChange = (value) => {
    setDate(value);
  };

  const handeNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Form onSubmit={handleSubmit}>
        <TextField type="text" label="Name" onChange={handeNameChange} />
        <DatePicker
          value={date}
          onChange={handleDateChange}
          disableFuture
          label="Birthday"
          format="MMMM do, yyyy"
          autoOk
        />
        <Button
          type="submit"
          startIcon={<AddCircleIcon />}
          color="secondary"
          variant="contained"
          disabled={disabled || !date || !name}
        >
          Add new child
        </Button>
      </Form>
    </MuiPickersUtilsProvider>
  );
};
