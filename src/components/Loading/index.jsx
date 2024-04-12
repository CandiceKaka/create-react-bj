//react-router切换中间过渡动画组件
import React from "react";
import styles from "./sass/index.scss";

const Loading = props => {
    if (props.error){
        console.error(props.error);
        return '报错了';
    }
    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                <div className={styles.boxLoading} />
                <div className={styles.title}>努力加载中...</div>
            </div>
        </div>
    );
};
export default Loading;
