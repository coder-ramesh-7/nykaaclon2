document.addEventListener('DOMContentLoaded', function () {
    const listitems = document.querySelectorAll(".listitem");

    listitems.forEach(accordian => {
      const icon = accordian.querySelector('.icon');
      const argan = accordian.querySelector('.argan');

      accordian.addEventListener('click', () => {
        if (icon.classList.contains('active')) {
          icon.classList.remove('active');
          argan.style.maxHeight = null;
        } else {
          icon.classList.add('active');
          argan.style.maxHeight = argan.scrollHeight + "px";
        }
      });
    });
  });



    fetch("product.json")
            .then(function(response) {
                return response.json();
            })
            .then(function(product) {
                productsData = product;
                renderProducts(product);
            });

        let categoryFilter = () => {
            let checkInput = document.querySelectorAll("input[type='checkbox']");
            let checkdata = [];

            checkInput.forEach((e) => {
                if (e.checked) {
                    checkdata.push(e.value);
                }
            });

            filterProducts(checkdata);
        };

        let filterProducts = (categories) => {
            let filteredProducts = productsData.filter(product => {
                return categories.length === 0 || categories.includes(product.category);
            });

            renderProducts(filteredProducts);
        };

        let renderProducts = (products) => {
            let productlist = document.querySelector(".productlist");
            productlist.innerHTML = "";

            for (let i = 0; i < products.length; i++) {
                let productTemplate = document.createElement("div");
                productTemplate.className = "list";
                productTemplate.setAttribute("onclick", "Detail()");

                productTemplate.innerHTML = `
                    <div class="innerlist">
                        <div class="listimg"><img src="${products[i].image}" alt="" srcset=""></div>
                        <div class="proddesc">
                            <div class="productdesc">${products[i].desc}</div>
                            <div class="productdesc">${products[i].price}</div>
                        </div>
                    </div>
                `;

                productlist.appendChild(productTemplate);
            }
        };







// fetch detail product


fetch('product.json').then(response => {
    return response.json();
}).then(data => {
    // console.log(data);
}).catch(err => {
    console.log("error:"+" "+err)
});



 function setnewimg(){
    document.getElementById("prodimgage").src = "./detailimg1.jpg";
 }

 function setnewimg1(){
    document.getElementById("prodimgage").src = "./detailimg2.jpg";
 }
 function setnewimg2(){
    document.getElementById("prodimgage").src = "./detailimg3.jpg";
 }
 function setoldimg(){
    document.getElementById("prodimgage").src = "./img1.jpg";
 }



    function Detail(){
        location.href = "detail.html"

}

$(document).ready(function(){
    $('#prodimgage').imagezoomsl({
        zoomrang: [5, 5]
    });
});