//jest配置文件
const {defaults} = require("jest-config");
module.exports = {
	transform: {
      "^.+\\.js$": "babel-jest",
      "^.+\\.jsx$": "babel-jest",
      ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform"
    },
	moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
	rootDir: "../",
	testEnvironment: "jest-environment-node",
	setupFiles:["./tests/setUp.js"]
};
// jest 命令行参数
//@params -u     快照替换
//@params --coverage 测试结果表格展示
