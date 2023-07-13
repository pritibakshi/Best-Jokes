const jokes = document.querySelector('#joke');
        const btn = document.querySelector('#btn');
        const generateJokes=()=>{

            const setHeader={
                headers:{
                    Accept:"application/json"
                }
            }
         fetch('https://icanhazdadjoke.com',setHeader)
         .then((res) =>res.json())
         .then((data)=>{ 
            jokes.innerHTML=data.joke;
          }).catch((error)=>console.log(error))
        }
        btn.addEventListener('click',generateJokes);
        generateJokes();