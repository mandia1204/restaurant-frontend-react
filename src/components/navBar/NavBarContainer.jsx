import React, { Component } from 'react';

class NavBarContainer extends Component {
    constructor(props){
      super(props);
      this.state = { filters: { navFilterYear: '2017', navFilterMonth: '4', type: ''} };
    }

    logout() {

    }

    render() {
      return (
        <div></div>
      );
    }
  }

  export default NavBarContainer;