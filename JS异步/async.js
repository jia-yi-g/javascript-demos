const promise=new Promise((resolve,reject)=>{
    if(true){
        resolve(sth)
    }
    else{
        reject(sth)
    }
})
promise.then().then().catch()

const urls=['https://jsonplaceholder.com','https://jsonplaceholder.com','https://jsonplaceholder.com']

Promise.all(urls.map(url=>{
    fetch(url).then(res=>res.json())
})).then(array=>{
    console.log(array[0])}).catch(ooops)

const getData=async function(){

    try {
        const [user, data, profile] = await Promise.all(
          urls.map((url) => {
            fetch(url).then((res) => res.json());
          })
        );
        
    } catch (error) {
        
    }

}