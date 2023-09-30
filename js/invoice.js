
import { newItemFormHandler, printerHandler, recordFormHandler } from "./app/handlers";
import { newItemForm, printer, recordForm } from "./app/selectors";
import { productItemRender, productOptionRender } from "./products";
import { recordObserver } from "./record";

export default class Invoice {
  initialRender() {
    productOptionRender();
    productItemRender();
    recordObserver();
  }

  listener() {
    recordForm.addEventListener("submit", recordFormHandler);
    newItemForm.addEventListener("submit", newItemFormHandler);
    printer.addEventListener("click",printerHandler)
  }

  init() {
    console.log("Invoice App Start");

    this.initialRender();

    this.listener();
  }
}
