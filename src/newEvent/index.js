import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import {
  DatePicker,
  MuiPickersUtilsProvider,
  TimePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useParams } from 'react-router-dom';

import { Form, FormEmoji } from './styles';

export const NewEvent = () => {
  const [disabled, setDisabled] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const { eventType } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisabled(true);
    console.log('date: ', date);
    console.log('time: ', time);
    const newDate = new Date(`${date.toDateString()} ${time.toTimeString()}`);
    console.log('newDate: ', newDate);
    const payload = {
      date: newDate,
    };

    // TODO: send payload to backend /eventType/child/
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
