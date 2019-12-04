class API {
  constructor() {
    this.apiUrl = "http://localhost:3000";
  }
  getData() {
    return fetch(`${this.apiUrl}/posts`)
      .then(response => response.json())
      .catch(error => console.log(error));
  }
}

class UI {
  constructor() {
    this.api = new API();
    this.layout = new LayoutData();
    this.newInv = new FormUI();
    this.modalForm = document.querySelector(".modal_wrapper");
  }

  init() {
    const addBtn = document.querySelector('[name="open_add_modal"]');
    const createInvBtn = document.querySelector("#create_new_invoice");
    const cancelInvBtn = document.querySelector("#cancel_invoice");

    addBtn.addEventListener("click", this.openForm.bind(this));
    createInvBtn.addEventListener("click", this.invoiceRender.bind(this));
    cancelInvBtn.addEventListener("click", this.closeForm.bind(this));

    this.api.getData().then(response => {
      this.layout.initDataTable();
      this.layout.renderAll(response);
    });
  }
  openForm() {
    this.modalForm.classList.add("d-b");
  }
  closeForm() {
    this.modalForm.classList.remove("d-b");
    this.newInv.clearForm();
  }

  invoiceRender() {
    const invoice = this.newInv.getInvoice();
    if (invoice !== undefined) {
      this.layout.appendData(this.layout.render(invoice));
      this.closeForm();
    }
  }
}

class LayoutData {
  constructor() {
    this.contenPoint = document.querySelector(".content");
  }

  initDataTable() {
    this.contenPoint.innerHTML = `
        <tr>
            <th>Create</th>
            <th>No</th>
            <th>Supply</th>
            <th>Comment</th>
        </tr>`;
  }
  render(data) {
    return `
        <tr>
            <td>${data.date_created}</td>
            <td><a href="#" class="inv">${data.number}</a></td>
            <td>${data.date_supplied}</td>
            <td>${data.comment}</td>
        </tr>`;
  }

  appendData(data) {
    this.contenPoint.insertAdjacentHTML("beforeend", data);
  }

  renderAll(dataList) {
    dataList.forEach(data => {
      const html = this.render(data);
      this.appendData(html);
    });
  }
}

class FormUI {
  constructor() {
    this.number = document.querySelector("#number_input");
    this.invoice_date = document.querySelector("#invoice_date");
    this.supply_date = document.querySelector("#supply_date");
    this.comment = document.querySelector("#comment_input");
    this.errorNumber = document.querySelector(".error_msg");
  }

  validateInvoice() {
    if (this.number.value.length < 4) {
      this.errorNumber.innerHTML =
        "Number field must be more than 3 characters";
      return false;
    }
    this.errorNumber.innerHTML = "";
    return true;
  }
  getInvoice() {
    if (this.validateInvoice()) {
      return {
        number: this.number.value,
        date_created: this.invoice_date.value,
        date_supplied: this.supply_date.value,
        comment: this.comment.value
      };
    }
  }

  clearForm() {
    this.number.value = "";
    this.invoice_date.value = "";
    this.supply_date.value = "";
    this.comment.value = "";
  }
}

const ui = new UI();
ui.init();
