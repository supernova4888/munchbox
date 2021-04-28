// NPM packages
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Project files


export default function App() {
  // State

  // Constants

  // Methods

  return (
    <div className="App">
      <header className="App-header">
        <div>
            Hello welcome to MunchBox
            <BrowserRouter>
                
                <Switch>
                    <Route component={PageA} path="/" exact />
                    <Route component={PageB} path="/page-b" />
                    <Route component={PageC} path="/page-c" />
                </Switch>
            </BrowserRouter>
        </div>
      </header>
    </div>
  );
}