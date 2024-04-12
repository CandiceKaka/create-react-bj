import Loadable from "react-loadable";
import Loading from 'COMPONENT/Loading';
const timeout = 1000;
//文件按需加载批处理
// export const Home=Loading;

export const Home = Loadable({
    loader: () => import("CONTAINERS/Home"),
    loading: Loading,
    timeout: timeout
});
export const Mall = Loadable({
    loader: () => import("CONTAINERS/Mall"),
    loading: Loading,
    timeout: timeout
});
export const ProductDetail = Loadable({
    loader: () => import("CONTAINERS/Mall/ProductDetail"),
    loading: Loading,
    timeout: timeout
});
export const UserCenter = Loadable({
    loader: () => import("CONTAINERS/UserCenter"),
    loading: Loading,
    timeout: timeout
});
export const Report = Loadable({
    loader: () => import("CONTAINERS/UserCenter/Report"),
    loading: Loading,
    timeout: timeout
});
export const Transcript = Loadable({
    loader: () => import("CONTAINERS/UserCenter/Transcript"),
    loading: Loading,
    timeout: timeout
});
