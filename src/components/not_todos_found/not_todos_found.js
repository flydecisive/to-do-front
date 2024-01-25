export class NotTodosFound {
  _createNotTodosFoundTemplate() {
    return `
      <div class="not-todos-found__wrapper">
        <img src="../../../assets/images/detective.svg" alt='not found' class="not-todos-found__image" />
        <p class="not-todos-found__text">Пусто...</p>
      </div>
    `;
  }

  createNotTodosFound(parent) {
    parent.innerHTML = this._createNotTodosFoundTemplate();
  }
}
