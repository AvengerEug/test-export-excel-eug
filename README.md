# export-excel-eug 插件测试项目

## 流程

1. clone 代码至本地
2. npm install & npm run dev 运行项目
3. 依次在控制台上输入:  
   let data = []  
   data.push({"用户编号": 1, "账号": "15574878845", "密码": "123456"})  
   data.push({"用户编号": 2, "账号": "15574878846", "密码": "123457"})  
   vue.data = data  
   vue.$refs.exportExcelEug.startExport()  
   即可完成excel的下载  
