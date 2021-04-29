import { getInteriors, setInterior } from "./database.js"

const interiors = getInteriors()

document.addEventListener(
  "change",
  (event) => {
    if (event.target.name === "interior") {
      setInterior(parseInt(event.target.value))
    }
  }
)

export const Interiors = () => {
  let html = "<ul>"

  for (const interior of interiors) {
    html += `<li>
      <input type="radio" name="interior" value="${interior.id}" /> ${interior.style}
      </li>`
  }
  html += "</ul>"
  return html
}