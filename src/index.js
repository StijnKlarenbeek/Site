import ClickOutside from './directives/ClickOutside' //Directive export

const Components = {
    install (Vue) {
        Vue.directive('click-outside', ClickOutside);
    }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Components)
}

export default Components;
