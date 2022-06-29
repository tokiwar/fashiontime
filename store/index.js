export const state = () => ({
  menuOpened: false
})

export const mutations = {
  openMenu(state) {
    state.menuOpened = true;
  },
  closeMenu(state) {
    state.menuOpened = false;
  },
}

export const actions = {
  toggleOverflow() {
    const body = document.querySelector('body');
    body.classList.toggle('overflow-hidden');
  }
}
