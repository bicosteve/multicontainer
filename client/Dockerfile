FROM node:alpine as builder 

WORKDIR '/usr/app'

COPY ./package.json ./
RUN npm install 

COPY . .

RUN npm run build 


FROM nginx

EXPOSE 3000

#copy client prod .conf to nginx .conf file
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
#copy build/compiled files from builer to nginx
COPY --from=builder /usr/app/build /usr/share/nginx/html

