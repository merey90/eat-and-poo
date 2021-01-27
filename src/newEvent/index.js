import React, { useContext, useState } from 'react';
import { Button } from '@material-ui/core';
import {
  DatePicker,
  MuiPickersUtilsProvider,
  TimePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useHistory, useParams } from 'react-router-dom';

import { Form, FormEmoji } from './styles';
import { getEatRef, getPooRef } from '../utils/database';
import { ChildContext } from '../utils/childContext';

export const NewEvent = () => {
  const [disabled, setDisabled] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const { eventType } = useParams();
  const { child } = useContext(ChildContext);
  const history = useHistory();

  const refMapper = {
    eat: getEatRef(child?.id),
    poo: getPooRef(child?.id),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisabled(true);
    const newDate = new Date(`${date.toDateString()} ${time.toTimeString()}`);
    const payload = {
      date: newDate.getTime(),
    };

    const ref = refMapper[eventType];
    ref
      .set(payload)
      .then(() => {
        history.push(`/child`);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleDateChange = (value) => {
    setDate(value);
  };

  const handleTimeChange = (value) => {
    setTime(value);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <FormEmoji emoji={eventType} />
      <Form onSubmit={handleSubmit}>
        <DatePicker
          value={date}
          onChange={handleDateChange}
          disableFuture
          label="Date"
          format="MMMM do, yyyy"
          autoOk
        />
        <TimePicker
          value={time}
          onChange={handleTimeChange}
          label="Time"
          ampm={false}
          minutesStep={5}
          autoOk
        />
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          disabled={disabled}
        >
          Submit
        </Button>
      </Form>
    </MuiPickersUtilsProvider>
  );
};
