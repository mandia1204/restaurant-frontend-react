import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit
    }
});

const InputText = (props) => {
    const {errors, fieldName, touched, classes, ...rest} = props;
    const fieldHasError = (field) => {
        return (touched[field] && (errors[field] && errors[field].length>0));
    };
    
    return (
        <TextField 
            error={fieldHasError(fieldName)}
            name={fieldName} 
            className={classes.textField} 
            margin="normal" 
            helperText={errors[fieldName]}
            {...rest}
        /> 
    );
};

InputText.propTypes = {
    classes: PropTypes.object.isRequired,
    fieldName: PropTypes.string.isRequired,
    errors: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired
};

export default withStyles(styles)(InputText);