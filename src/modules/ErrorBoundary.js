import React from 'react';
import { Link, Redirect } from '@reach/router';

class ErrorBoundary extends React.Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error('ErrorBoundary:', error, info); //eslint-disable-line
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1 className="results__not-found">
          Oh No! Something went wrong!
          <span>
            Go Back to <Link to="/">Homepage</Link>
          </span>
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
