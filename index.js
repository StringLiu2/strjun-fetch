const fetch = require('node-fetch');
//get
module.exports.get = async url => await fetch(url).then(res => res.json())
//post
module.exports.post = async (url, data) => await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-type": "application/json"
    }
}).then(res => res.json());
//put
module.exports.put = async (url, data) => await fetch(url, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
        "Content-type": "application/json"
    }
}).then(res => res.json());
//delete
module.exports.delete = async (url, data) => await fetch(url, {
    method: "DELETE",
    body: JSON.stringify(data),
    headers: {
        "Content-type": "application/json"
    }
}).then(res => res.json());
/*
    npm version  可以查看你的项目的东西的版本
    npm version 1.0.1 设置你项目的版本 每次都要迭代

    npm adduser || npm login 两个命令都可以 添加你的npm用户
        Username: strliu
        Password: ***********(11位)
        Email: (this IS public) 2278765105@qq.com

    npm publish //上传到npm
 */