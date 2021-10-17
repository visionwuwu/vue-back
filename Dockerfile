# 集成于node镜像
FROM node
# label就是提示文字没有特殊的含义
LABEL name="vue-back"
LABEL version="1.0"
# 将当前目录下的所有文件拷贝到node镜像下的app目录下 没有将会给你创建
COPY . /app
# 指定当前工作目录 相当于在镜像中cd /app
WORKDIR /app
# run运行一个命令 安装项目的npm依赖
RUN npm install
# 暴露一个端口号
EXPOSE 3000
# 基于镜像生成一个容器他会执行一个命令叫 npm start 
CMD npm start