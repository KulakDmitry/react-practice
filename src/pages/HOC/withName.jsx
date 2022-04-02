import React from "react";

function withName(WrappedComponent) {
  return class extends React.Component {
    render() {
      return <WrappedComponent name="UserName" {...this.props} />;
    }
  };
}

export default withName;
