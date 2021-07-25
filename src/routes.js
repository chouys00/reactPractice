import Home from './pages/home/home';
import Work from './pages/work/work';
import WorkDetail from './pages/work/workDetail';

const routes=[
    {
        path: '/',
        component: Home,
        label: "首頁",
        exact: true,
    },
    {
        path: '/work',
        component: Work,
        label: "練習1",
        // exact: true,
        routes:[
            {
                path: '/work/workDetail',
                component: WorkDetail,
                label: "練習1詳細",
                exact: true,
            }
        ]
    },
]

export default routes;