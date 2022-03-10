
import { BrowserRouter as Router,Switch , Route} from 'react-router-dom/cjs/react-router-dom.min';

import './App.css';
import Header from './Components/layout/Header';
import Footer from './Components/layout/Footer';
import Nav from './Components/layout/Nav';

import ContactoPage from './pages/ContactoPage';
import NovedadesPage from './pages/NovedadesPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';


function App() {
  return (
  
      <Router>
        <Header/>    
          <Nav/>

          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/nosotros" exact component={NosotrosPage}/>
            <Route path="/novedades" exact component={NovedadesPage}/>
            <Route path="/contacto" exact component={ContactoPage}/>

          </Switch>
          <Footer/>

      </Router>
   
  );
}

export default App;
