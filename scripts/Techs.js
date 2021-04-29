import { getTechs, setTech } from "./database.js"

const techs = getTechs()

document.addEventListener(
  "change",
  (event) => {
    if (event.target.name === "tech") {
      setTech(parseInt(event.target.value))
    }
  }
)


export const Techs = () => {
  let html = "<ul>"

  for (const tech of techs) {
    html += `<li>
      <input type="radio" name="tech" value="${tech.id}" /> ${tech.package} 
    </li>`
  }

  html += "</ul>"
  return html
}