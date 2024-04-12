import React, {Component} from "react";
import PropTypes from "prop-types";
import styles from './sass/index.scss';

export default class Iconfont extends Component {
	constructor(props) {
		super(props);
		if (props.isGlobal) {
			require("./global/iconfont.css");
			return;
		}
		require("./source/iconfont.js");
	}

	render() {
		const {className, iconId, useSvg,isGlobal,style} = this.props;
		return !isGlobal ? (
			<svg
				style={style}
				className={`${styles.icon} ${className}`}
				aria-hidden="true"
				onClick={this.props.onClick}>
				<use xlinkHref={"#icon-" + iconId} />
				{this.props.children}
			</svg>
		) : (
			<i
				className={`iconfont icon-${iconId} ${className}`}
				onClick={this.props.onClick}
				style={style}
			/>
		);
	}
}

Iconfont.propTypes = {
	iconId: PropTypes.string.isRequired
};
