import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    // this.element.textContent = "Hello World!"
    console.log("hello controller connect")
    $('.account').on("click", function (e) {
      e.preventDefault()
      console.log("click")
    })
  }
}
