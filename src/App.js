import { Route, Switch } from "react-router-dom";

// Layout
import Layout from "./layout/Layout";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Questions from "./pages/Questions";
import NotFound from "./pages/NotFound";
import Info from "./pages/Info";
import Subscription from "./pages/Subscription";
import School from "./pages/School";
import GetMyPlan from "./pages/GetMyPlan";
import Payment from "./pages/Payment";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/info" component={Info} />
        <Route path="/questions" component={Questions} />
        <Route path="/subscription" component={Subscription} />
        <Route path="/school" component={School} />
        <Route path="/getmyplan" component={GetMyPlan} />
        <Route path="/payment" component={Payment} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
};

export default App;
