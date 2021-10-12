import Home from './pages/home/home';
import LuckyWheel from './pages/work/luckyWheel';
import SlideInOut from './pages/work2/slideInOut';
import Blur from './pages/work3/blur';
import Work4 from './pages/work4';
import Work5 from './pages/work5';
// import WorkDetail from './pages/work/workDetail';


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
    {
        path: '/slideInOut',
        component: SlideInOut,
        label: "滑進",
    },
    {
        path: '/blur',
        component: Blur,
        label: "毛玻璃",
    },
    {
        path: '/work4',
        component: Work4,
        label: "work4",
    },
    {
        path: '/work5',
        component: Work5,
        label: "work5",
    },
]

export default routes;