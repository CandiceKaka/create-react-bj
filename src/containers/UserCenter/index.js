import React, {Component} from "react";
import {Switch, Route, Link} from "react-router-dom";
import {ucSubRouter} from "ROUTER/config";
import styles from "./sass/index.scss";

class UserCenter extends Component {
    constructor(props) {
        super(props);
        const {match} = props;
        this.linkList = [
            {to: `${match.url}/report`, title: "成绩单"},
            {to: `${match.url}/transcript`, title: "分析报告"}
        ];
        let pathname = this.filterFatherPath(props.location.pathname);
        this.state = {
            active: pathname || this.linkList[0].to
        };
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.location.pathname !== this.props.location.pathname){
            let pathname = this.filterFatherPath(nextProps.location.pathname);
            this.setState({
                active: pathname || this.linkList[0].to
            });
        }
    }

    filterFatherPath=pathname=>{
        return pathname === "/usercenter" ? "" : pathname;
    }

    handleClick = active => {
        this.setState({
            active
        });
    };

    render() {
        const {active} = this.state;
        return (
            <div className={`${styles.container}`}>
                <ul>
                    {this.linkList.map(item =><li key={item.to}>
                        <Link
                            to={item.to}
                            className={`${styles.link} ${active.indexOf(item.to) !== "-1" ? styles.active : null}`}
                            onClick={() => this.handleClick(item.to)}>
                            {item.title}
                        </Link>
                    </li>)}
                </ul>
                <div className={styles.content}>
                    <Switch>
                        <Route
                            path='/usercenter'
                            component={ucSubRouter[0].component}
                            exact={ucSubRouter[0].exact}
                        />
                        {ucSubRouter.map(item =><Route
                            key={item.path}
                            path={item.path}
                            component={item.component}
                            exact={item.exact}
                        />)}
                    </Switch>
                </div>
            </div>
        );
    }
}
export default UserCenter;
