let productsDiv = document.getElementById('products');


fetch('https://fakestoreapi.com/products')
    // .then(res=>res.json())
    .then(function(response) {

        return response.json();
    })
    // .then(json=>console.log(json))
    .then(function(json) {

        console.log(json);

        json.forEach(function(product) {

            let prodcutImage = document.createElement('img');
            prodcutImage.setAttribute('src', product.image);
            prodcutImage.setAttribute('alt', product.title);

            let productTitle = document.createElement('h3');
            productTitle.innerText = product.title;

            let productPrice = document.createElement('p');
            productPrice.innerText = `Kaina: ${product.price}€`;

            let productDiv = document.createElement('div');
            productDiv.append(prodcutImage);
            productDiv.append(productTitle);
            productDiv.append(productPrice);

            productsDiv.append(productDiv);
        });
    })