import { getPaints, setPaint } from "./database.js"

const paints = getPaints()

document.addEventListener(
  "change",
  (event) => {
    if (event.target.name === "paint") {
      setPaint(parseInt(event.target.value))
    }
  }
)

export const Paints = () => {
  let html = "<ul>"

  for (const paint of paints) {
    html += `<li>
      <input type="radio" name="paint" value="${paint.id}" /> ${paint.color}
    </li>`
  }

  html += "</ul>"
  return html
}