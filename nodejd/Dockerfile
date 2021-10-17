FROM alpine:latest
ENV PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin \
    LANG=zh_CN.UTF-8 \
    SHELL=/bin/bash \
    PS1="\u@\h:\w \$ " \
    JD_DIR=/jd \
    JD_SHELL_URL=https://github.com/ffuqiangg/JD_Shell.git
WORKDIR $JD_DIR
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories \
    && apk update -f \
    && apk upgrade \
    && apk --no-cache add -f \
       bash \
       s6-overlay \
       coreutils \
       diffutils \
       git \
       wget \
       curl \
       nano \
       tzdata \
       perl \
       openssh \
       nodejs \
       npm \
       yarn \
    && ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo "Asia/Shanghai" > /etc/timezone \
    && git clone $JD_SHELL_URL $JD_DIR \
    && chmod +x $JD_DIR/*.sh \
    && ln -sf $JD_DIR/task.sh /usr/local/bin/task \
    && ln -sf $JD_DIR/update.sh /usr/local/bin/update \
    && ln -sf $JD_DIR/rmlog.sh /usr/local/bin/rmlog \
    && rm -rf /root/.npm /var/cache/apk/*
COPY --from=nevinee/loop:latest / /
COPY s6-overlay /
ENTRYPOINT ["/init"]
