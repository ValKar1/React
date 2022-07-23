import React from "react";

export class ErrorBoundary extends React.Component {

  state = { hasError: false };

  componentDidCatch(error, errorInfo) {
    this.setState({hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
