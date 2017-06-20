/**
 * Register Vue Components
 */

Vue.component('left-panel', {
  template: '#left-panel'
})

Vue.component('top-panel', {
  template: '#top-panel'
})

Vue.component('main-panel', {
  template: '#main-panel'
}) 

Vue.component('board-title', {
  template: '#board-title',
  props: ['text']
})

Vue.component('card-column', {
  template: '#card-column',
  props: ['parentText']
}) 

Vue.component('col-title', {
  template: '#col-title',
  props: ['childText']
}) 

Vue.component('card', {
  template: '#card',
  props: ['heading']
}) 

Vue.component('avatar', {
  template: '#avatar',
  props: ['image']
})

Vue.component('icon-tray', {
  template: '#icon-tray'
})

Vue.component('panel-menu', {
  template: '#panel-menu'
})
