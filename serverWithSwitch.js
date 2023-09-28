const http= require ('http')
const server=http.createServer(function(req,res){
    console.log("request coming from", req.url)
    switch(req.url){
        case'/': 
            res.end("HOME PAGE");
            break;
        case'/users':
            res.end("Users Page");
            break;
        case '/UserInfo':
            res.end("User Information are listed")
            break
        default: res.end("404 ERROR")        
        }
    }
)

server.listen(8000,()=>{console.log("Server is running on port 8000")})

