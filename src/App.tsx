import { ApolloProvider } from "@apollo/client";

import client from "./apollo-client";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">Hello World!</div>
    </ApolloProvider>
  );
};

export default App;
