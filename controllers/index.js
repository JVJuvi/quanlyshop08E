console.log('hello');
var arrProduct = [
    {id:1,name:'iphone x',price: 1000,img: "https://tse4.explicit.bing.net/th?id=OIP.AW0bcbf64Hsx0gsCjNzfiwHaGJ&pid=Api&P=0&w=204&h=170"},
    {id:2,name:'iphone xs',price: 1000,img: "https://tse4.explicit.bing.net/th?id=OIP.AW0bcbf64Hsx0gsCjNzfiwHaGJ&pid=Api&P=0&w=204&h=170"},
    {id:3,name:'iphone xs max',price: 1000,img: "https://tse4.explicit.bing.net/th?id=OIP.AW0bcbf64Hsx0gsCjNzfiwHaGJ&pid=Api&P=0&w=204&h=170"}
];

function rendarProduct() {
    console.log('Dev B vừa mới sửa đoạn code này nha nha nha!');
    console.log('em mới vừa viết hàm này');
    var content = '';
    for (var i = 0 ; i < arrProduct.length; i++){
        let product = arrProduct[i];
        content +=`
        <div class="col-4 mt-2">
            <div class="card">
                <img src="${product.img}" alt="">
                <div class="card-body">
                    <p>${product.price}</p>
                    <button>Mua hàng</button>
                </div>
            </div>
        </div>
        `;
    }
    document.querySelector('#arrProduct').innerHTML = content;
}
rendarProduct();