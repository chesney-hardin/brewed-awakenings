import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li
        data-id="${product.id}"
        data-type="product"
            >${product.name}</li>`
    }

    html += "</ul>"

    return html
}

/* Add click event listener that presents an alert box showing 
the price of a product when it is clicked by the user.
"(name of product) costs $(price of product)"*/

document.addEventListener(
    "click",
    (clickEvent) => {
        const whatClicked = clickEvent.target

        //Was a product clicked? (hint: may need to a data attribute to html element)
        if(whatClicked.dataset.type === "product") {

            //find the product object that has matching id
            let productId = whatClicked.dataset.id

            //create window alert with a message that includes the name and price property of item clicked
            for (const product of products) {
                if(product.id === parseInt(productId)){

                window.alert(`${product.name} costs $${product.price}`)

                }
            }
        }

    }
)

