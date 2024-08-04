import { ApolloProvider } from "@apollo/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import client from "./apollo-client";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
};

export default App;
