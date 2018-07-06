import React from 'react';
import PropTypes from 'prop-types';
import withNewProps from './withNewProps';

class BaseComponent extends React.Component {
    render() {
        return (
            <div>
                {this.props.loggedIn}: {this.props.user}  - {this.props.info}
            </div>
        );
    }

    mytest() {
        console.log('mytest');
    }
}

BaseComponent.propTypes = {
    loggedIn: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired
};

export default withNewProps(BaseComponent);