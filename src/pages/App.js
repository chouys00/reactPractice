import './App.scss';
import { Link,Route,withRouter  } from 'react-router-dom';
import Header from '../components/homepage/homePageHeader';
import workPage from './workPage/workPage';
import homePage from './homePage/homePage';
import workPageDetail from './workPage/workPageDetail';

const App = (props) => {
  const { location } = props;
  return (
    <div className={"app"}>
      <Header></Header>
      <section className={"app-content"}>
        <Route path="/" exact component={ homePage } />
        <Route path="/works" exact component={ workPage} />
        <Route path="/workPageDetail" exact component={ workPageDetail} />
        {/* <Route path="/works/:id" exact component={ workPageDetail} /> */}
      </section>
      <footer className={"app-footer"}>
      <div className={"app-copyRight"}>Copyright © 2020 LeoLiu All rights reserved.</div>
      </footer>
    </div>
  );
}

export default withRouter(App);
