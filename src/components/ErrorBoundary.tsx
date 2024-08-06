import React, { Component, ReactNode } from "react";
import styles from "./ErrorBoundary.module.scss";
type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  errorMsg: string;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, errorMsg: "" };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, errorMsg: error.message };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error.message, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.container}>Error: {this.state.errorMsg}</div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
