import './App.scss';
import Header from '../components/homepage/homePageHeader';
import { renderRoutes } from 'react-router-config';
import routes from '../routes'

const App = () => {
  return (
    <div className={"app"}>
      <Header></Header>
      <section className={"app-content"}>
        {renderRoutes(routes)}
      </section>
      <footer className={"app-footer"}>
        <div className={"app-copyRight"}>Copyright © 2020 All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
