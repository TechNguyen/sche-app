import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import publicRoute from './components/routes';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoute.map((route, index) => {
            const Page = route.component;
            return (
            <Route
              key={index}
              path={route.path}
              element={
                  <Page />
              }
            />
            )
            })
          }
        </Routes>
      </div>

    </Router>
  );
}

export default App;
