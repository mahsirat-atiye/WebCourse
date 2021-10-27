#Nginx config
## Setup
```angular2html
cd /etc/nginx/sites-enabled 
sudo nano web
```
copy the content of config in `web` file, and save
change root `root /home/Phanous/PycharmProjects/web/HW1/front;`
```angular2html
sudo systemctl restart nginx.service 
```


## API examples
###Post
```angular2html
{
    "message": "hi honey hjow"
}
```
```angular2html
http://localhost/node/sha256
http://localhost/go/sha256
```

###Get
```angular2html
http://localhost/go/sha256?id=5ece8e625e57a99f0c57f2abe5f49ec6f35b3f4cbbab27ac4ab62a2d60705bee
http://localhost/node/sha256?id=5ece8e625e57a99f0c57f2abe5f49ec6f35b3f4cbbab27ac4ab62a2d60705bee
```