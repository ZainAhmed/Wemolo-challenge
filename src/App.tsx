import { ApolloProvider } from "@apollo/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import client from "./apollo-client";
import Home from "./pages/Home";
import Loading from "./components/Loading";
import { Suspense } from "react";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
};

export default App;
