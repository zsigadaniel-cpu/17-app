import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary cought an error", error, info);
    setTimeout(() => this.setState({ redirect: true }), 5000);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          Hoho, looks like you hit an error. <Link to="/">Click here</Link> to
          go back where there are no errors, home page or wait a little, maybe 5
          seconds who knows?.
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
