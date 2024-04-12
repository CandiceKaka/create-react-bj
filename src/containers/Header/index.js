import React, {Component} from "react";
import {Link} from "react-router-dom";
import Iconfont from "COMPONENT/Iconfont";
import styles from "./sass/index.scss";


const config = [
    {path: '/mall', title: '商城'},
    {path: '/usercenter', title: '个人中心'}
];
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePath: props.location.pathname
        };
    }

    handleClick = path => {
        this.setState({
            activePath: path
        });
    }

    render() {
        const {activePath} = this.state;
        return (
            <div className={styles.container}>
                <div className={styles.headerInner}>
                    <Link to="/" className={styles.tab}>
                        <Iconfont iconId="logo" className={styles.logo} onClick={()=>{
                            this.handleClick('/');
                        }}/>
                    </Link>
                    {
                        config.map((item, index)=>{
                            const {path, title} = item;
                            const className = activePath.indexOf(path) !== -1 ? styles.active : null;
                            return (
                                <Link key={index} to={path} className={`${styles.tab} ${className}`} onClick={()=>{
                                    this.handleClick(path);
                                }}>
                                    {title}
                                </Link>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}
export default Home;
