import React from "react";

import {BrowserRouter as Router ,Switch ,Route} from "react-router-dom";
import Page1 from "./Component/Random";
import Page2 from "./Component/level1";

function App(props){
return(
    <Router>
        <Route path="/page1" component={Page1}/>
        <Route path="/page2" component={Page2}/>
    </Router>
)

}

export default App;
