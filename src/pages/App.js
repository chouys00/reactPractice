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
    </div>
  );
}

export default App;
