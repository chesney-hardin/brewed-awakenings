import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li
                data-id="${employee.id}"
                data-type="employee"
                >${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

/* add a click event listener that presents an alert box showing 
how many products an employee has sold when their name is clicked */

document.addEventListener (
    "click",
    (clickEvent) => {
        //create variable to capture the element that was clicked on
        const whatClicked = clickEvent.target

        //was an employee list item clicked? (add data attribbute)
        if(whatClicked.dataset.type === "employee"){

            // get the id of the employee clicked
            const employeeIdClicked = whatClicked.dataset.id

            //find the name of the employee clicked
            let employeeName = { name: "Name Here" }
            for (const employee of employees) {
                if(parseInt(employeeIdClicked) === employee.id) {
                    employeeName = employee.name
                }
            }
            
            // start a counter variable at 0
            let counter = 0
            
            //get the array of orders and iterate through them
            const orders = getOrders()
            
            //find the orders that have an employeeId that match our employee clicked id
            for (const order of orders) {
                if(order.employeeId === parseInt(employeeIdClicked)) {

                    //each time one matches, increase the counter by 1
                    counter++
                }
            }
        
            window.alert(`${employeeName} sold ${counter} products`)            
            
        }

    }
)