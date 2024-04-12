import {Home, Mall, UserCenter, ProductDetail, Report, Transcript} from 'ROUTER/index';
const routerConfig = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/mall',
        component: Mall,
        exact: true
    },
    {
        path: '/mall/product/:id',
        component: ProductDetail,
        exact: true
    },
    {
        path: '/usercenter',
        component: UserCenter,
        exact: false
    }
];
const ucSubRouter = [
    {
        path: '/usercenter/report',
        component: Report,
        exact: true
    },
    {
        path: '/usercenter/transcript',
        component: Transcript,
        exact: true
    }
];

export {routerConfig, ucSubRouter};
