# select the starting app
FROM nginx:alpine
# copy the build output to replace the default nginx contents.
COPY . /usr/share/nginx/html
# expose port 80
EXPOSE 80
# run nginx
CMD ["nginx", "-g", "daemon off;"]