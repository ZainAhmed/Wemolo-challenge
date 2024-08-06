import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@mui/material/styles";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import client from "./apollo-client";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import theme from "./theme";
const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </ErrorBoundary>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
