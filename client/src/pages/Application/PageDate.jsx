import React from 'react';
import { Form, Label } from './Application';
import { DatePicker } from '@mantine/dates';
import { Group } from '@mantine/core';

function PageDate(props) {
    const dateRange = props.dateRange;
    const setDateRange = props.setDateRange;

    return (
        <div>
            <Form>
                <Label htmlFor="date">When do you need Storage?</Label>
                <Group position="center"
                style={{
                    marginTop:'40px'
                  }}>
                    <DatePicker type="range" value={dateRange} onChange={setDateRange} />
                </Group>
            </Form>
        </div>
    );
}

export default PageDate;
