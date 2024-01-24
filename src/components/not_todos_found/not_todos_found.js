export class NotTodosFound {
  constructor() {
    // this.parent = document.querySelector(selector);
  }

  _createNotTodosFoundTemplate() {
    return `
        <img src="../../../assets/images/detective.svg" alt='not found' class="not-todos-found__image" />
        <p class="not-todos-found__text">Пусто...</p>
    `;
  }

  createNotTodosFound() {
    const notTodosFound = document.createElement("div");
    notTodosFound.classList.add("not-todos-found__wrapper");
    notTodosFound.innerHTML = this._createNotTodosFoundTemplate();

    return notTodosFound;
  }
}
