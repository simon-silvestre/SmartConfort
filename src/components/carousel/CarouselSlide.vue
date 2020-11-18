<template>
    <transition name="fade">
        <div v-show="visible">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            index: 0
        }
    },
    computed: {
        visible() {
            return this.index === this.$parent.index
        }
    }
}
</script>

<style scoped>
    .fade-enter-active {
        animation: fadeIn 1s;
        transform: translate(0);
    }
    .fade-leave-active {
        animation: fadeOut 1s;
        position: absolute;
        transform: translate(0);
    }
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
</style>