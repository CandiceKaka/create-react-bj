import React, { Component } from "react";
import PropTypes from 'prop-types';
import styles from "./sass/index.scss";
import Iconfont from "components/Iconfont";
import Button from "components/Button";
import commonstyles from "styles/commonclass.scss";
class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: props.visible,
        };
    }

    handleClose = () => {
        this.props.onClose&&this.props.onClose();
    };

    handleConfirm = () => {
        this.props.onConfirm && this.props.onConfirm();
    };

    render() {
        const { title, onlyConfirm, className,visible} = this.props;
        return visible ? (
            <div
                className={`${styles.container}`}
            >
                <div className={`${styles.boxCont} ${className}`}>
                    <div className={`${styles.title} ${commonstyles.cf}`}>
                        <div
                            className={`${commonstyles.fl} ${styles.titleword}`}
                        >
                            {title || "提示"}
                        </div>
                        <div
                            className={`${commonstyles.fr} ${
                                styles.closeContainer
                            }`}
                        >
                            <Iconfont
                                iconId="error"
                                className={styles.close}
                                onClick={this.handleClose}
                            />
                        </div>
                    </div>
                    {this.props.children}
                    <div className={`${styles.btns} ${styles.footer}`}>
                        <Button
                            className={
                                onlyConfirm
                                    ? `${styles.confirm} ${styles.onlyConfirm}`
                                    : `${styles.confirm}`
                            }
                            onClick={this.handleConfirm}
                            type="primary"
                        >
                            确定
                        </Button>
                        {!onlyConfirm ? (
                            <Button
                                className={styles.confirm}
                                onClick={this.handleClose}
                                type="gray"
                            >
                                取消
                            </Button>
                        ) : null}
                    </div>
                </div>
            </div>
        ) : null;
    }
}

export default Modal;
//定义props类型
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  onConfirm:PropTypes.func
};
