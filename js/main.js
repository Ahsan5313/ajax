
function loadDate(){

    const xhr = new XMLHttpRequest();
   
    xhr.onload = function(){

        const demo = document.getElementById('demo');
        demo.innerHTML = xhr.responseText;
    }

    xhr.open('GET', '../demo/demo.txt');

    xhr.send();
}

const getBtn = document.getElementById('get-btn');
const sentBtn = document.getElementById('sent-btn');



const sentRequest = function(method, url, data){

   const promise =  new Promise((resolve, reject) => {

   const xhr = new XMLHttpRequest();
   
   xhr.open(method, url);
   xhr.responseType = 'json';
   xhr.setRequestHeader('Content-Type', 'application/json');
   xhr.send(data);
  
   xhr.onload = function(){

     if(xhr.status >= 400){

      reject(xhr.response);
     }else{

      resolve(xhr.response)
     }
   
   };

   });

   return promise;
            
}

const getDate = function(){

   sentRequest('GET', 'https://jsonplaceholder.typicode.com/todos/1')
   .then((responseData) => {

      console.log(responseData)
   })
};

const sentDate = function(){

       sentRequest('POST', 'https://jsonplaceholder.typicode.com/posts', JSON.stringify({

         title: 'foo',
         body: 'bar',
         userId: 1 

       }))
       .then((responseData) => {

           console.log(responseData)
       }).catch((err) => {
         
         console.log(err)
       })

};

getBtn.addEventListener('click', getDate);
sentBtn.addEventListener('click', sentDate);