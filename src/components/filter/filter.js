export class Filter {
  filterValue = "все";

  _createFilterTemplate() {
    return `
        <div class="filter">
            <div class="filter__button">
                <p class="filter__button__text">
                    ${this.filterValue} 
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none" class="filter__chevron">
                    <path d="M4 4L1 1" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7 1L4 4" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <ul class="filter__list hide">
                <li class="filter__list__item">все</li>
                <li class="filter__list__item">завершенные</li>
                <li class="filter__list__item">незавершенные</li>
            </ul>
        </div>
    `;
  }

  createFilter(selector) {
    this.parent = document.querySelector(selector);
    const filter = document.createElement("div");
    filter.classList.add("filter");
    filter.innerHTML = this._createFilterTemplate();
    this.filter = filter;

    this.parent.appendChild(filter);
  }

  handleFilterButton(button, selector) {
    const elem = document.querySelector(selector);
    this.button = button;

    button.addEventListener("click", () => {
      console.log(elem.classList.contains("hide"));
      if (elem.classList.contains("hide")) {
        elem.classList.remove("hide");
      } else {
        elem.classList.add("hide");
      }
    });
  }

  handleFilterItem() {
    const items = document.querySelectorAll(".filter__list__item");
    const filterButtonText = document.querySelector(".filter__button__text");
    const filterList = document.querySelector(".filter__list");

    items.forEach((item) => {
      item.addEventListener("click", (e) => {
        filterList.classList.add("hide");
        this.filterValue = e.target.textContent;
        filterButtonText.textContent = this.filterValue;
      });
    });
  }
}
