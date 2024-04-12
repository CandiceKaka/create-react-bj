import React, {Component} from 'react';
import styles from './sass/index.scss';
class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
            left: 0
        };
        this.baseLeft = 1;
        this.raf = null;
    }

    componentDidMount(){
        this.animationStart();
    }

    animationStart = ()=>{
        const animation = ()=>{
            this.setState({
                left: this.state.left + this.baseLeft
            }, ()=>{
                this.raf = requestAnimationFrame(animation);
            });
        };
        this.raf = requestAnimationFrame(animation);
    }

    render(){
        const {left} = this.state;
        return (
            <div className={styles.container}>
                学生成绩单
                <div className={styles.swipe} style={{left}}></div>
            </div>
        );
    }
}

export default Report;
