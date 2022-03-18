import Layout from "./components/Layout";
import Home from "./pages/Home";
import Artwork from "./pages/Artwork";
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
   <Layout>
     <Switch>
       <Route path="/" exact>
         <Home />
       </Route>
       <Route path="/artwork" exact>
         <Artwork />
       </Route>
       <Route path="/acv" exact>
         <Home />
       </Route>

     </Switch>
   </Layout> 
  );
}

export default App;
