import React from "react";
import NavigateMenu from "./pages/NavigateMenu ";

function withNavigate(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <>
          <NavigateMenu />
          <WrappedComponent {...this.props} />;
        </>
      );
    }
  };
}

export default withNavigate;
