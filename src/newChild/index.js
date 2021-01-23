import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { format, parse } from 'date-fns';

import { Form } from './styles';
import { auth } from '../utils/firebase';

export const NewChild = () => {
  const [date, setDate] = useState(null);
  const [name, setName] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = (e) => {
    setDisabled(true);
    e.preventDefault();
    const newChild = {
      id: 'yoloo',
      name,
      birthDate: date,
      parents: [auth.currentUser.uid],
    };
    console.log('newChild: ', newChild);
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
