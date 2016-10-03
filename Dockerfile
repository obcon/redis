FROM obcon/alpine
USER root
RUN apk --update add redis
ADD rootfs /
RUN chown -R obcon:obcon /home/obcon
USER obcon
EXPOSE 6379
CMD ["redis-server", "/home/obcon/redis.conf"]