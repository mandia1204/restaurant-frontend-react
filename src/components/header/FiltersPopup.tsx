import React, { Component } from 'react';
import InputIcon from '@mui/icons-material/Input';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
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
  };

  render() {
    const { values, filtersChange } = this.props;
    const { popupOpen } = this.state;
    return (
      <>
        <IconButton onClick={() => this.togglePopup(true)} color="inherit" aria-label="Menu">
          <InputIcon />
        </IconButton>
        <Drawer anchor="top" open={popupOpen} onClose={() => this.togglePopup(false)}>
          <Grid container spacing={8} alignItems="center" justifyContent="center">
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
      </>
    );
  }
}

export default FiltersPopup;
