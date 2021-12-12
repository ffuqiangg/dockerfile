nodejs 脚本运行环境，集成了`nodejs yarn npm bash openssl coreutils moreutils git wget curl nano tzdata perl svn`，默认时区`Asia/Shanghai`。

docker cli
```shell
docker run -dit \
  -v /宿主机上的目录/:/root \
  --name nodejs \
  --hostname nodejs \
  ffuqiangg/nodejs
```
docker-compose
```yaml
version: '3.7'
services:
  nodejs:
    container_name: nodejs
    image: ffuqiangg/nodejs
    restart: always
    volumes:
      - ./:/root
```

进入容器：

```shell
docker exec -it nodejs bash
```

如果映射目录下存在`crontab.list`，将在创建后以它作为容器的定时任务。2秒扫描一次`crontab.list`文件，文件发生变化自动刷新定时任务。
