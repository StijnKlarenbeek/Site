---
sidebarDepth: 2
---

# Directives

## ClickOutside
This directive can be set on components that need to know when someone clicked outside of said component.

### Implementation
```html
<div>
    <my-link ref="trigger">
        <!-- Click on me and the evHandler won't be executed-->
    </my-link>
    
    <component-name
        v-click-outside="{
            excluded: ['trigger'],
            evHandler: ['clickedOutside']
        }">
        
    </component-name>
</div>
<script>
    export default {
        methods: {
            clickedOutside() {
                alert('Clicked outside!');
            }
        }
    }
</script>
```