
import { inventoryBtnHandler, newItemFormHandler, printerHandler, recordFormHandler } from "./app/handlers";
import { inventoryBtn, newItemForm, printer, recordForm } from "./app/selectors";
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
    inventoryBtn.addEventListener("click",inventoryBtnHandler)
  }

  init() {

    this.initialRender();

    this.listener();
  }
}
