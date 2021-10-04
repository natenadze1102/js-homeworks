 var get = require('fetch').fetchUrl;
 let url = `https://api.github.com/users`;
 
 class Countries {
   constructor(url) {
     this.url = url;
     if (typeof url !== 'string')
       throw new Error('Parameter should be a string');
   }
   //string parameter
   send(param) {
     this.param = param;
 
     if (typeof param !== 'number')
       throw new Error('Parameter should be a number');
 
     return new Promise((resolve, reject) => {
       get(url, function (error, meta, body) {
         meta.finalUrl += `?size=${param}`;
         // console.log(new URLSearchParams(meta));
         if (!error) {
           let statusCode = meta.status;
           let errorMsg = `We have error, status code: ${statusCode}`;
           statusCode === 200 ? resolve(JSON.parse(body)) : reject(errorMsg);
         }
         reject(error);
       });
     });
   }
 }
 
 const countries = new Countries(url);
 
 (async () => {
   try {
     const data = await countries.send(2);
     console.log(data); // array of countries
   } catch (error) {
     console.log(error);
   }
 })();
