import home from './pages/homePage/homePage';
import works from './pages/workPage/workPage';
import workDetail from './pages/workPage/workPageDetail';

const routes=[
    {
        path: '/',
        component: home,
        exact: true,
        breadcrumbName: 'home',
    },
    {
        path: '/works',
        component: works,
        breadcrumbName: 'works',
        routes:[
            {
                path: '/works/workDetail',
                component: workDetail,
                breadcrumbName: 'workDetail',
            }
        ]
    }
]

export default routes;