FROM alpine:latest
LABEL maintainer="Alex Vu <ffuqiangg@gmail.com>"
ENV PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin \
    LANG=zh_CN.UTF-8 \
    SHELL=/bin/bash \
    PS1="\u@\h:\w \$ " \
    JSHELL_URL=https://github.com/ffuqiangg/jshell.git \
    JSHELL_DIR=/jd
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
       perl \
    && rm -rf /var/cache/apk/* \
    && ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo "Asia/Shanghai" > /etc/timezone \
    && git clone $JSHELL_URL $JSHELL_DIR \
    && chmod +x $JSHELL_DIR/*.sh \
    && ln -sf $JSHELL_DIR/update.sh /usr/local/bin/update \
    && ln -sf $JSHELL_DIR/rmlog.sh /usr/local/bin/rmlog \
    && ln -sf $JSHELL_DIR/task.sh /usr/local/bin/task \
    && mkdir log raw scripts \
    && npm config set registry https://registry.npm.taobao.org
COPY --from=nevinee/loop:latest / /
COPY s6-overlay /
WORKDIR $JSHELL_DIR
ENTRYPOINT ["/init"]
