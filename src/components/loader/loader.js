export class Loader {
  createLoader(selector) {
    this.parent = document.querySelector(selector);
    const loader = `
      <div class="spinner"></div>
    `;
    this.loader = loader;
  }

  showLoader() {
    this.parent.innerHTML = this.loader;
  }

  hideLoader() {
    this.parent.innerHTML = "";
  }
}
