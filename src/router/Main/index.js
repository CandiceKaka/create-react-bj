import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import {withRouter} from "react-router";
//
import Header from 'CONTAINERS/Header';
import {routerConfig} from 'ROUTER/config';
//style
import styles from "./sass/index.scss";

class Main extends Component {
    render() {
        return (
            <div className={`${styles.container}`}>
                <Header location={this.props.location}/>
                <div className={styles.content}>
                    <Switch>
                        {
                            routerConfig.map((item, index)=>{
                                const {path, component, exact} = item;
                                return (
                                    <Route
                                        key={index}
                                        path={path}
                                        component={component}
                                        exact={exact}
                                    />
                                );
                            })
                        }
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(Main);
