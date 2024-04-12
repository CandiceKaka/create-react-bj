let api={
    allocSheetId:'/auth/common/sheet/download/allocSheetId.htm',//根据paperId获取sheetId(参数 paperId)
    getSheetInitData:'/auth/common/sheet/download/getSheetInitData.htm',//获取答题卡基础信息(参数 paperId)
    generateSettings:'/auth/common/sheet/download/generateSettings.htm',//生成配置信息(参数  sheetMode 答题卡版式 pageJson 答题卡配置信息)

}
export default api;
