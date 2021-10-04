 var get = require('fetch').fetchUrl;
 const url = 'https://api.gith2ub.com/users';
 
 let send = (url) => {
   return new Promise((resolve, reject) => {
     get(url, function (error, meta, body) {
       if (!error) {
         let statusCode = meta.status;
         let errorMsg = `We have error, status code: ${statusCode}`;
         statusCode === 200 ? resolve(JSON.parse(body)) : reject(errorMsg);
       }
       reject(error);
     });
   });
 };
 
 send(url)
   .then((data) => {
     console.log(data);
   })
   .catch((error) => {
     console.log(error);
   });
