/* eslint-disable */
import React from 'react';
const withNewProps  = (WrappedComponent) => {
    return class enhanced extends React.Component {

        // proc(instance) {
        //     console.log(instance);
        //     instance.mytest();
        // }

        render() {
          const newProps = {
            user: 'matt',
            info:'1234',
            // ref: this.proc.bind(this)
          };
          return <WrappedComponent {...this.props} {...newProps} />;
        }
    };
};
export default withNewProps;