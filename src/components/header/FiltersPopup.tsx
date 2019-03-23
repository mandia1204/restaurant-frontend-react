import React, { Component, Fragment } from 'react';
import InputIcon from '@material-ui/icons/Input';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';
import Filters from './Filters';

interface Props {
  values: any;
  filtersChange: any;
}

interface State {
  popupOpen: boolean;
}

class FiltersPopup extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { popupOpen: false };
  }

  togglePopup = (popupOpen: boolean) => {
    this.setState({
      popupOpen,
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

export default FiltersPopup;
