let productos = [200,150,300,120,500]


let menorProducto=[]

menorProducto.forEach(n=> {
    if (n== 120){
        menorProducto.splice(n)
    }
    else{menorProducto.push(n)}
})



console.log(menorProducto)

productos.unshift(1000)


let envio = productos.map(n => n + " 3.5 € de gastos de envío"); 

productos.forEach(n => {
    console.log(n)
})

envio.forEach(n => {
    console.log(n)
})