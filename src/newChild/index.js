import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { format, parse } from 'date-fns';

import { Form } from './styles';
import { auth } from '../utils/firebase';
import { chidrenRef, getParentRef } from '../utils/database';
import { useHistory } from 'react-router-dom';

export const NewChild = () => {
  const history = useHistory();

  const [date, setDate] = useState(null);
  const [name, setName] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [children, setChildren] = useState([]);

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
      birthday: date,
      parents: {
        [auth.currentUser.uid]: true,
      },
    };

    const childRef = chidrenRef.push();
    childRef
      .set(newChild)
      .then(() => {
        const childId = childRef.path.pieces_.pop();
        const newChildren = [...children, childId];
        parentRef.set(newChildren);
        history.push(`/children/${childId}`);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleDateChange = (value) => {
    setDate(format(value, 'dd.MM.yyyy'));
  };

  const handeNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Form onSubmit={handleSubmit}>
        <TextField type="text" label="Name" onChange={handeNameChange} />
        <DatePicker
          value={!!date ? parse(date, 'dd.MM.yyyy', new Date()) : null}
          onChange={handleDateChange}
          disableFuture
          label="Birthday"
          format="dd.MM.yyyy"
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
