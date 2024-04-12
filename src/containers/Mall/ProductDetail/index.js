import React, {Component} from 'react';
import Iconfont from 'COMPONENT/Iconfont';
import styles from './sass/index.scss';
class ProductDetail extends Component {
    handleClick=()=>{
        if (this.props.history.length <= 2){
            //当前没有历史记录
            this.props.history.push({
                pathname: '/mall',
                state: {fromProductDetail: true}
            });
            return;
        }
        this.props.history.goBack();
    }

    render(){
        return (
            <div className={styles.container}>
                <div className={styles.icon}>
                    <Iconfont iconId='back' onClick={this.handleClick}/>
                </div>
                商品ID:<i>{this.props.match.params.id}</i>
            </div>
        );
    }
}

export default ProductDetail;
