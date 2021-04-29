import { Interiors } from "./Interiors.js"
import { Paints } from "./Paints.js"
import { Techs } from "./Techs.js"
import { Wheels } from "./Wheels.js"
import { addCustomOrder } from "./database.js"
import { Orders } from "./Orders.js"

// import { Orders } from "./Orders.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const Cars = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__paints options">
                <h2>Paints</h2>
                ${Paints()}
            </section>
            <section class="choices__interiors options">
            <h2>Interiors</h2>
                ${Interiors()}
            </section>
            <section class="choices__techs options">
                <h2>Techs</h2>
                ${Techs()}
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${Wheels()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </article>
    `
}