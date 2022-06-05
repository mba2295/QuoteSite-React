import { Redirect } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AddQuote from "./pages/AddQuote";
import AllQuotes from "./pages/AllQuotes";
import NotFound from "./pages/NotFound";
import QuoteDetails from "./pages/QuoteDetails";
function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/QuoteSite-React/" exact>
            <Redirect to="/quotes"></Redirect>
          </Route>
          <Route path="/QuoteSite-React/quotes" exact>
            <AllQuotes></AllQuotes>
          </Route>
          <Route path="/QuoteSite-React/quotes/:quoteId">
            <QuoteDetails></QuoteDetails>
          </Route>
          <Route path="/QuoteSite-React/addquote" exact>
            <AddQuote></AddQuote>
          </Route>
          <Route path="/QuoteSite-React/*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
