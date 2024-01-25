export class Loader {
  createLoader(selector) {
    this.parent = document.querySelector(selector);
    const loader = `
      <div class="spinner"></div>
    `;
    this.loader = loader;
    // this.parent.appendChild(loader);
  }

  showLoader() {
    this.parent.innerHTML = this.loader;
    // this.loader.classList.remove("hide");
  }

  hideLoader() {
    this.parent.innerHTML = "";
  }
}
