FROM docker.io/node:alpine AS builder

RUN apk add git

COPY . /fns-home
WORKDIR /fns-home

RUN yarn cache clean
RUN yarn install --update-checksums 
RUN yarn build

FROM docker.io/busybox:latest

EXPOSE 3000
COPY --from=builder /fns-home/build /build
RUN echo "E404:index.html" > /etc/httpd.conf
ENTRYPOINT ["httpd", "-f", "-p", "0.0.0.0:3000", "-h", "/build", "-c", "/etc/httpd.conf"]
