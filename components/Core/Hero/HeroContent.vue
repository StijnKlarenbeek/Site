<template>
    <div class="hero-content">
        
        <sup-header data-aos="fade-up" data-aos-duration="750" data-aos-delay="150">
            <slot name="subtitle"></slot>    
        </sup-header>
        <cont-header data-aos="fade-up" data-aos-duration="750" data-aos-delay="250">
            <slot name="title"></slot>
        </cont-header>
        <big-text align="justify" data-aos="fade-up" data-aos-duration=750 data-aos-delay="350">
            <slot name="text"></slot>
        </big-text>

        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>

import BigText from '@/components/Core/Text/BigText';
import ContHeader from '@/components/Core/Text/ContHeader';
import SupHeader from '@/components/Core/Text/SupHeader';

export default {
    components: {
        BigText,
        ContHeader,
        SupHeader
    }
}
</script>

<style scoped>

</style>
