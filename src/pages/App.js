import './App.scss';
import { Route,withRouter  } from 'react-router-dom';
import Header from '../components/homepage/homePageHeader';
// import workPage from './workPage/workPage';
// import homePage from './homePage/homePage';
// import workPageDetail from './workPage/workPageDetail';
import routes from '../routes'

const App = (props) => {
  return (
    <div className={"app"}>
      <Header></Header>
      <section className={"app-content"}>
        {
          routes&&routes.map((route,i)=>{
            const {path,exact,routes} = route
            return(
              <Route
                key={i}
                path={path}
                exact={exact}
                render={(routeProps) => <route.component routes={routes} {...routeProps} />}
              />

            )
          })
        }
      </section>
      <footer className={"app-footer"}>
        <div className={"app-copyRight"}>Copyright © 2020 LeoLiu All rights reserved.</div>
      </footer>
    </div>
  );
}

export default withRouter(App);
