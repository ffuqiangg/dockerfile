FROM alpine
LABEL maintainer="AlexVu <ffuqiangg@gmail.com>"
ENV PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin \
    HOME=/jd \
    LANG=zh_CN.UTF-8 \
    SHELL=/bin/bash \
    PS1="\u@\h:\w \$ " \
    JD_URL=https://github.com/ffuqiangg/JD_Shell.git \
    JD_DIR=/jd
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories \
    && apk update -f \
    && apk --no-cache add -f \
       bash \
       s6-overlay \
       nodejs \
       npm \
       yarn \
       openssl \
       coreutils \
       moreutils \
       git \
       wget \
       curl \
       nano \
       tzdata \
    && rm -rf /var/cache/apk/* \
    && ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo "Asia/Shanghai" > /etc/timezone \
    && git clone $JD_URL $JD_DIR \
    && mkdir $JD_DIR/log $JD_DIR/raw $JD_DIR/config \
    && chmod +x $JD_DIR/*.sh \
    && ln -sf $JD_DIR/update.sh /usr/local/bin/update \
    && ln -sf $JD_DIR/rmlog.sh /usr/local/bin/rmlog \
    && ln -sf $JD_DIR/task.sh /usr/local/bin/task \
    && npm config set registry https://registry.npm.taobao.org
COPY --from=nevinee/loop:latest / /
COPY s6-overlay /
WORKDIR /root
ENTRYPOINT ["/init"]
