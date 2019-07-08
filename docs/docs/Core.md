---
sidebarDepth: 2
---

# Core
All components that are more `generic` and can be reused are documented in here. 


## Buttons
All button components for the website

<br>

<!-- DropdownMenu component-->
### DropdownMenu
This is a button component with a dropdown menu under it.

#### Implementation
```html
<dropdown-menu>
    <!-- Button content-->
    <template>
        CV
    </template>

    <!-- Dropdown content -->
    <template v-slot:dropdown>
        <li>
            <a target="_blank" href="/img/cv/CV.png">View image</a>
        </li>
        <li>
            <a target="_blank" href="/img/cv/CV.pdf">Download PDF</a>
        </li>
    </template>
</dropdown-menu>
```

#### Props
```js
props: {
    /**
     * Open is a boolean that be set to true or false
     * to open the dropdown by default
     */
    open: {
        type: Boolean,
        default: false
    }
}
```

#### Slots
* __default__  - Button content
* __dropdown__ - the list of links on the dropdown menu

<br>

<!--Mylink component-->
### MyLink
This is a default styled router link.

#### Implementation
```html
<my-link to="/url">
    link
</my-link>
```

#### Props
```js
props: {
    /**
     * The redirect url within the website itself.
     */
    to: {
        type: String,
        required: true
    }
}
```

#### Slots
* __default__  - Link content



<br><br><br>

## Containers
All containers that the website can use

<br>

<!--Split container component-->
### SplitContainer
This component is a container with 100% width that is split in `left` and `right` compartments. By default it is that one of compartments has a big image that spans that side.

#### Implementation
```html
<split-container>
    <!-- Left compartment is for my img -->
    <template v-slot:left>
        <img src="/img/work/workplanstudent.png" alt="">
    </template>

    <!-- And right compartment for my textcontent-->
    <template v-slot:right>
        <div class="wrapper">
            <sup-header>
                DESIGN CONCEPT
            </sup-header>
            <cont-header>
                Student Monitoring Dashboard
            </cont-header>
            <big-text>
                This great tool lets you monitor, plan and keep track of your students performance without any hasle.
            </big-text>
        </div>
    </template>
</split-container>
```

#### Props
```js
props: {
    /**
     * The position of the image can be either of two values:
     *  left: Img will come in the left container
     *  right: Img will come in the right container
     */
    imgPos : {
        type: String,
        default: 'left',
        validator: function (item) {
            return ['left','right'].indexOf(item) !== -1;
        }
    }
}
```

#### Slots
* __left__ - Left container content
* __right__ - Right container content



<br><br><br>

## Items
Items are small container like objects that dont have any resemblence of a card nor the styling to be a card and therefore are classed as being an `item`.

<!-- Contact item component-->
### ContactItem
Contains a title (gender,name,etc..) and an info that pertains to the title (male, Stijn,etc..).

#### Implementation
```html
<!-- Shorthand bind a data property to the component-->
<contact-item v-bind="contactItem"></contact-item>

<script>
    export default {
        ...,
        data: () => ({
            contactItem: {
                title: 'Gender',
                info: 'Male',
            }
        }),
        ....
    }
</script>
```

#### Props
```js
props: {
    /**
     * The title is basicly like 
     *  Gender, Name, Address, etc..
     */
    title: {
        type: String,
        required: true,
    },

    /**
     * The actual info pertaining to the 
     * title
     */
    info: {
        type: String,
        required: true
    },

    /**
     * Aos animation settings
     */
    animation: {
        type: String
    },
    animationDuration: {
        type: String
    },
    animationDelay: {
        type: String
    }
}
```

<br>

<!-- SchoolWorkItem component-->
### ExperienceItem

This component is used for school and work on the `home` of my website. It allows you to put in a job or schooling, date from when it occured and a location. This component makes it look pretty.

#### Implementation
```html
<!-- Shorthand bind a data property to the component-->
<ExperienceItem v-bind="workItem"/>

<script>
    export default {
        ...,
        data: () => ({
            workItem: {
                title: 'Jr. Software developer',
                date: 'May 2018 - Now',
                location: 'ISV Software b.v.'
            }
        }),
        ....
    }
</script>
```

#### Props
```js
props: {
    /**
     * What experience did you get?
     */
    title: {
        type: String,
        required: true
    },

    /**
     * When did you get the experience
     */
    date: {
        type: String,
        required: true
    },

    /**
     * Where did you get the experience
     */
    location: {
        type: String,
        required: true
    },

    /**
     * AOS animation settings
     */
    animation: {
        type: String
    },
    animationDuration: {
        type: String
    },
    animationDelay: {
        type: String
    }
}
```

<br>

<!-- SchoolWorkItem component-->
### SkillItem

This component is used to display a skill.

#### Implementation
```html
<!-- Shorthand bind a data property to the component-->
<skill-item v-bind="skillItem"></skill-item>

<script>
    export default {
        ...,
        data: () => ({
            skillItem: {
                title: 'CSS 3',
                background: '#67D3FF',
                animation: 'fade-up',
                animationDelay: '150',
                animationDuration: '750',
            },
        }),
        ....
    }
</script>
```

#### Props
```js
props: {
    /**
     * The skill name
     */
    title: {
        type: String,
        required: true
    },

    /** 
     * The color of the colored container
     */
    background: {
        type: String,
        default: '#fff'
    },

    /**
     * Makes the container rounded
     */
    rounded: {
        type: Boolean,
        default: true
    },

    /**
     * Aos animation settings
     */
    animation: {
        type: String
    },
    animationDuration: {
        type: String
    },
    animationDelay: {
        type: String
    }
},
```



<br><br><br>

## Text
All text components for my website.

<!-- BigText component-->
### BigText
Large text component with font-size being `1.75rem`.

#### Implementation
```html
<big-text>
    Lorem Ipsum ladiedada
</big-text>
```

#### Slots
* __default__ - component content

<br>

<!-- Container Header component-->
### Cont(ainer) Header
Header component (h2) with font-size `2.5rem`

#### Implementation
```html
<cont-header>
    Lorem Ipsum ladiedada
</cont-header>
```

#### Slots
* __default__ - component content


<br>

<!-- Sup(ertext) Header component-->
### Sup(ertext) Header
Header component (h3) with font-size `2rem`

#### Implementation
```html
<sup-header>
    Lorem Ipsum ladiedada
</sup-header>
```

#### Slots
* __default__ - component content

<br>