import React from 'react';
import Input from '@material-ui/core/Input';

const Filters = () => (
    <div>
        <Input
            placeholder="enter a filter..."
            inputProps={{
            'aria-label': 'Description',
            }}
        />
    </div>
);

export default Filters;