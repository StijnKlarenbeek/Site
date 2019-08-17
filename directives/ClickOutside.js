export default {

    /**
     * We set the priority level at 700 (starting from 0) to give our directive the highest priority possible.
     * HOWEVER!:
     *      Logic control directives v-if and v-for will ALWAYS have the highest priority in the compilation process
     *      because they are terminal.
     */
    priority: 700,

    /**
     * Part of a directive's lifecycle, this binds the directive to the element.
     */
    bind(el, binding, vnode) {
        let handleEvent = function (event) {
            event.stopPropagation(); // first lets stop any events coming after this.

            // Load in the values that we bound to the directive.
            const {evHandler, excluded} = binding.value;

            // We need to check if an excluded element has been targeted
            let clickedOnExcludedElement = false;
            if(typeof exluced !== 'undefined'){
               
                excluded.forEach(excluded => {
                    // First check if an excluded element has already been checked (no need to make something true TWICE.
                    if (!clickedOnExcludedElement) {
                        /**
                         * To get the context in a vue directive we need to use vnode.context since the "this" object
                         * has been removed from directives somewhere in Vue 2.X.
                         * @type {*|Vue|Element|Vue[]|Element[]}
                         */
                        const excludedEl = vnode.context.$refs[excluded];

                        // We use .contains to check if the event target is our excluded element.
                        clickedOnExcludedElement = excludedEl.$el.contains(event.target);
                    }
                }); 
            }

            /**
             * Check if there is being clicked inside the element or on an excluded element, if not then handle
             * whatever event has been passed to evHandler.
             */
            if (!el.contains(event.target) && !clickedOnExcludedElement) {
                vnode.context[evHandler]();
            }
        };

        // Add the event listeners right here (gotta make it work with touch so we use touchstart for this)
        document.addEventListener('click', handleEvent);
        document.addEventListener('touchstart', handleEvent);

        /**
         * We bind our event to our element so we can remove the event in the unbind. This is because our unbind
         * has no idea of the existence of the event since it isnt defined outside of the export.
         *
         * @type {handleEvent} our event
         */
        el._clickOutside = handleEvent;
    },

    /**
     * Part of the directive's lifecycle, this removes the directive from the element. Used to clean up the event listeners
     * and stops potential memory leaks.
     */
    unbind(el) {
        /**
         * We load in the event listener that we assigned in bind and remove the eventlisteners from the document.
         * We also "clean up" the element by removing clickOutside.
         */
        if (!el._clickOutside) {
            return;
        }
        const handleEvent = el._clickOutside;
        document.removeEventListener('click', handleEvent);
        document.removeEventListener('touchstart', handleEvent);
        delete el._clickOutside;
    },
}
