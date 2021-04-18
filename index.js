const axios = require("axios")
const fs = require("fs")
// default configs
const BASE_URL = "https://jsonplaceholder.typicode.com/"
axios.defaults.baseURL = BASE_URL;



const getPosts = async()=>{
    try {
        // get posts from https://jsonplaceholder.typicode.com/
        const posts = await axios.get("posts")
        if(!posts) return null
        return posts.data
    }catch(e){
        throw new Error(e.response.data)
    }
}
const writeFile = async(fileName) => {
    try{

    if(!fileName) throw new Error("File name can't be empty")
    const posts =  await getPosts()
    fs.writeFile(`result/${fileName}`,JSON.stringify(posts),'utf8', function (err,data) {
        if (err) {
            throw new Error(err);
        }
        return data
        });
    }catch(e){
        throw new Error(e)

    }

}
// getPosts()
// add file name as an argument
writeFile('posts.json')