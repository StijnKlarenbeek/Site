<template>
    <div class="saveme">
        <case-header
            title="Save me"
            type="Design Concept"
            img="/img/assets/cases/saveme/header.png"
            imgalt="header img">
            <!-- Descriptio -->
            Save me is a design concept for a savings application dashboard. 
            This application allows you to create multiple bins so thatyou 
            can save for multiple things at the same time.
        </case-header>
    </div>
</template>

<script>
    import CaseHeader from '@/components/CaseHeader';
    export default {
        components: {
            CaseHeader
        }
    }
</script>

<style scoped>
    .saveme{
        position: relative;
        z-index:5;
        background: #000;
        min-height: 100vh;
        width:100%;
    }
</style>
