import Layout from "./components/Layout";
import Home from "./pages/Home";
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
   <Layout>
     <Switch>
       <Route path="/" exact>
         <Home />
       </Route>
     </Switch>
   </Layout> 
  );
}

export default App;
