基于 [emby/embyserver_arm64v8](https://hub.docker.com/r/emby/embyserver_arm64v8) 修改，arm64v8架构，版本4.6.7.0

仅替换了`System.Net.Http.dll`文件

隐藏 web 端 Premiere 按钮及推荐板块方法：设置 > 服务器 > 设置 > 自定义CSS 输入以下代码并保存
```
.btnHeaderPremiere { display: none ! important; }
.verticalSection section-appinfo focusable { display: none ! important; }
```
