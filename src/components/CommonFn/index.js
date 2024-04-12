let CommonFn = {
	parseParam: (param, key) => {
		// //post请求使用json格式转换成key=value&key=value的形式(application/x-www-form-urlencoded)
		var paramStr = "";
		if (
			typeof param === "string" ||
			typeof param === "number" ||
			typeof param === "boolean" ||
			param === null
		) {
			if (!(param === false) && param) {
				paramStr += "&" + key + "=" + encodeURIComponent(param);
			}
		} else {
			if (param instanceof Array) {
				if (param.length === 0) {
					// paramStr += '&' + key + '='+encodeURIComponent(null);
				} else {
					for (let i = 0, l = param.length; i < l; i++) {
						var item = param[i];
						if (typeof item == "object") {
							for (let objKey of Object.keys(item)) {
								var newKey =
									key + "[" + i + "][" + objKey + "]";
								paramStr +=
									"&" +
									newKey +
									"=" +
									encodeURIComponent(item[objKey]);
							}
						} else {
							paramStr +=
								"&" + key + "=" + encodeURIComponent(item);
						}
					}
				}
			} else {
				if (
					typeof param === "object" &&
					Object.keys(param).length > 0
				) {
					Object.keys(param).map((item, index) => {
						if (param[`${item}`]) {
							if (
								param[`${item}`] instanceof Array &&
								param[`${item}`].length == 0
							) {
							} else {
								paramStr +=
									"&" +
									CommonFn.parseParam(param[`${item}`], item);
							}
						} else {
							if (param[`${item}`] === 0) {
								paramStr += "&" + item + "=0";
							}
						}
					});
				}
			}
		}
		return paramStr.substr(1);
	}
};
export default CommonFn;
