console.log(70);

setTimeout(()=>{


    console.log("i am inner timing function ");
    
},2000)

async function abc() {
  console.log(10);
  console.log(20);

  let data = await fetch("https://dummyjson.com/products");

  let resp = await data.json()

  console.log(resp);

  console.log(40);
}

abc();

console.log(90);
