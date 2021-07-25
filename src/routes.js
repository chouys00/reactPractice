import Home from './pages/home/home';
import LuckyWheel from './pages/work/luckyWheel';
import WorkDetail from './pages/work/workDetail';

const routes=[
    {
        path: '/',
        component: Home,
        label: "首頁",
        exact: true,
    },
    {
        path: '/luckyWheel',
        component: LuckyWheel,
        label: "輪盤",
        // routes:[
        //     {
        //         path: '/work/workDetail',
        //         component: WorkDetail,
        //         label: "練習1詳細",
        //         exact: true,
        //     }
        // ]
    },
]

export default routes;