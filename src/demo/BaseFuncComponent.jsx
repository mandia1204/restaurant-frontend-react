import React from 'react';
import PropTypes from 'prop-types';
import withNewProps from './withNewProps';

const BaseFuncComponent = (props) => {
    return (
        <div>
            {props.loggedIn}: {props.user} - {props.info}
        </div>
    );
};

BaseFuncComponent.propTypes = {
    loggedIn: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired
};

export default withNewProps(BaseFuncComponent);