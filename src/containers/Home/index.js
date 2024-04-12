import React, {Component} from "react";
import {Button, Card, message, Row, Col} from "antd";
import moment from "moment";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Middleware from "MODULES/root/middleware";
import IMG from "ASSETS/test.jpg";
import styles from "./sass/index.scss";

const mapStateToProps = ({root}) => ({
    root: root
});
const mapDispatchToProps = dispatch =>bindActionCreators(
    {
        setNormal: () => Middleware.setNormal(),
        signin: userInfo => Middleware.signin(userInfo)
    },
    dispatch
);
@connect(mapStateToProps, mapDispatchToProps)
class Home extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.root.failed) {
            message.error("很不幸,你登录失败了~~", 1, () => {
                this.props.setNormal();
            });
        }
    }

    async clickHandle(index, classId) {
        //这是一段无用的代码，仅仅是为了配置兼容async和await
        const data = await this.getStudentData(classId);
        this.props.setStudents(data);
        console.log("data", data);
        this.setState({
            checked: index
        });
    }

    handleClick = () => {
        this.props.setNormal();
    }

    handleSign = () => {
        this.props.signin({
            userName: "用户23",
            userId: 23,
            content: "这是一段用户简介"
        });
    }

    render() {
        const {
            title,
            isNormal,
            isSignin,
            successful,
            userInfo
        } = this.props.root;
        // const {time} = this.state;
        return (
            <div className={styles.container}>
                <Row>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                </Row>
                <div className={styles.imgBlock}>
                    <img src={IMG} className={styles.img} />
                    <div className={styles.imgBg} />
                </div>
                <Button type="primary" onClick={this.handleClick}>
                    {title}
                </Button>
                {isNormal && <Button
                    type={successful ? "primary" : "normal"}
                    onClick={this.handleSign}
                    disabled={!!successful}
                    className={styles.btn}>
                    {isSignin ? "拼命登录中..." : successful ? "登录成功" : "登录"}
                </Button>}
                {userInfo && <Card
                    title={userInfo.userName}
                    extra={<a href="#">More</a>}
                    style={{width: 300}}>
                    <p>{userInfo.content}</p>
                    <p>{userInfo.content}</p>
                    <p>{userInfo.content}</p>
                </Card>}
                <div>{moment().format("YYYY-MM-DD HH:mm:ss")}</div>
            </div>
        );
    }
}
export default Home;
