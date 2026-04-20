FROM golang:1.22-alpine AS m3u8-builder
WORKDIR /build
RUN apk add --no-cache git
RUN git clone https://github.com/Greyh4t/m3u8-Downloader-Go.git src && \
    cd src && git checkout tags/v1.5.2 && \
    go build -o /build/m3u8-Downloader-Go

FROM alpine:latest
WORKDIR /downloads
RUN apk add --no-cache ffmpeg && \
    rm -rf /var/cache/apk/*
COPY --from=m3u8-builder /build/m3u8-Downloader-Go /m3u8-dl
ENTRYPOINT ["/m3u8-dl"]
