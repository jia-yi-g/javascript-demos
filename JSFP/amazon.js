const user={
    name:"kim",
    active:true,
    cart:[],
    purchases:[]
}
//implement cart features!
//1.add item
//2.add tax
//3.buy
//4.clear cart

const compose=(f,g)=>(...args)=>f(g(...args))


function purchaseIte(...funcs){
//完成下面四个函数
return funcs.reduce(compose)//重要
}

function itemToCart(user,item){
    const newCart=[...user.cart]
    return {...user,cart:newCart}
}
function applyTaxToItem(user){
    const {cart}=user
    const taxRate=1.3
    const updatedCart=cart.map(item=> {
        return {name:item.name,
        price:item.price*taxRate,}
    })
    return {...user,cart:updatedCart}
}
function buyItem(user){
    return{...user,purchases:user.cart}
}
function emptyItem(user){
    return {...user,cart:[]}
}