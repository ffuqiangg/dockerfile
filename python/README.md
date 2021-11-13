本项目基于 [nevinee/python](https://hub.docker.com/r/nevinee/python/) 修改而来。

集成了`bash openssl coreutils moreutils git wget curl nano tzdata perl telethon requests`，默认时区`Asia/Shanghai`。

docker cli
```shell
docker run -dit \
  -v /宿主机上的目录/:/root \
  --name python \
  --hostname python \
  ffuqiangg/python
```

docker-compose
```yaml
version: '3.7'
services:
  python:
    container_name: python
    image: ffuqiangg/python
    restart: always
    volumes:
      - ./:/root
```

进入容器：
```shell
docker exec -it python bash
```

如果映射目录下存在`crontab.list`，将在创建后以它作为容器的定时任务。2秒扫描一次`crontab.list`文件，文件发生变化自动刷新定时任务。
