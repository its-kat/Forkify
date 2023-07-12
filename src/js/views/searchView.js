class SearchView {
  #parentEl = document.querySelector('.search');

  getQuery() {
    const query = this.#parentEl.querySelector('.search__field').value;
    this.#clearInput();
    return query;
  }

  #clearInput() {
    return (this.#parentEl.querySelector('.search__field').value = '');
  }

  //publisher
  addHandlerSearch(handler) {
    this.#parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

//export an instance, an object that was created by this class
export default new SearchView();
