import React, { Component, Fragment } from 'react';
import InputIcon from '@material-ui/icons/Input';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';
import Filters from './Filters';

class FiltersPopup extends Component {
  constructor(props) {
    super(props);
    this.state = { popupOpen: false };
  }

    togglePopup = (open) => {
      this.setState({
        popupOpen: open,
      });
    }

    render() {
      const { values, filtersChange } = this.props;
      const { popupOpen } = this.state;
      return (
        <Fragment>
          <IconButton onClick={() => this.togglePopup(true)} color="inherit" aria-label="Menu">
            <InputIcon />
          </IconButton>
          <Drawer anchor="top" open={popupOpen} onClose={() => this.togglePopup(false)}>
            <Grid container spacing={8} alignItems="center" justify="center">
              <Grid item>
                <Filters values={values} filtersChange={filtersChange} />
              </Grid>
              <Grid item>
                <IconButton onClick={() => this.togglePopup(false)} color="inherit" aria-label="Menu">
                  <CloseIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Drawer>
        </Fragment>
      );
    }
}

FiltersPopup.propTypes = {
  values: PropTypes.object.isRequired,
  filtersChange: PropTypes.func.isRequired,
};

export default FiltersPopup;
