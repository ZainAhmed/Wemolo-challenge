import { ApolloProvider } from "@apollo/client";
import { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import client from "./apollo-client";
import ErrorBoundary from "./components/ErrorBoundary";
import Loading from "./components/Loading";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <ErrorBoundary fallback="There was an Error">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<Loading />}>
                  <Home />
                </Suspense>
              }
            />
          </Routes>
        </Router>
      </ErrorBoundary>
    </ApolloProvider>
  );
};

export default App;
