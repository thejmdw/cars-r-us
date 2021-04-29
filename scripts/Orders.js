import { getInteriors, getOrders, getPaints, getTechs, getWheels } from "./database.js"


const paints = getPaints()
const interiors = getInteriors()
const techs = getTechs()
const wheels = getWheels()

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
        const buildOrderListItem = (order) => {
            return `<li>
                Order #${order.id} was placed on ${order.timestamp} and the cost is ${order.cost} extra.
            </li>`
        }


    const orders = getOrders()
    // let costString = ""
    let total = 0 

    for (const order of orders) {
        const foundPaint = paints.find((paint) => paint.id === order.paintId)
        const foundInterior = interiors.find((interior) => interior.id === order.interiorId)
        const foundTech = techs.find((tech) => tech.id === order.techId)
        const foundWheel = wheels.find((wheel) => wheel.id === order.wheelId)
        total = foundPaint.price + foundInterior.price + foundTech.price + foundWheel.price

        order.cost = total.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
    }

    

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}