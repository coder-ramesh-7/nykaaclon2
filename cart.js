const product = [
    {
        id: 0,
        image:'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/9/a/9aee592843004100556_0.jpg',
        title:'Pat mcGRATH labs Mattetrance',
        price: 3420,
    },
    {
        id: 1,
        image:'https://images-static.nykaa.com/media/catalog/product/b/8/b86cf32NYKAC00000193_1a.jpg',
        title:'Nykaa Endless Nights - Dark Desire',
        price:750,

    },
    {
        id: 2,
        image:'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/5/05e1cb5303847_1.jpg',
        title:'Nykaa Matte to Last! Transfer Proof Liquid Lipstick',
        price:450,
    },
    {
        id: 3,
        image:'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/3/e/3e966fdNYKHES0000001_1.jpg',
        title:'Herbal Essences Argan Oil Shampoo & Conditioner ',
        price:1049,

    }
];

const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
             <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>Rs${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to Cart</button>"+
        `</div>
        </div>`
       

    )

}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a,1);
    displaycart();
}
function handle_buyOrder(){
    if(itemsAdded.length <= 0){
        alert("There is no order placed yet! \n Please make an order first.");
        return;
    }
    
}



function displaycart(a){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML="your cart is empty";
        document.getElementById("total").innerHTML="Rs "+0+".00";


    }
    else{
        document.getElementById("cartItem").innerHTML=cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML="Rs "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</P>
                <h2 style='font-size:15px;'>Rs ${price}.00</h2>`+
                "<i class='bx bx-trash-alt'onclick='delElement("+(j++)+")'></i></div>"
            );
           

        }).join('');

    }
    const buy_btn =document.querySelector(".btn-buy");
    buy_btn.addEventListener("click",handle_buyOrder);  
}

