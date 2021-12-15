<template>
    <div
        class="appMain"
        :style="
            !isFlexStart ? 'justify-content: space-between;' : 'justify-content: flex-start;'
        "
    >
        <slot name="leftContent"></slot>
        <slot name="rightContent"></slot>
        <slot></slot>
    </div>
</template>

<script lang="ts">
export default {
    name: "appMain",
    props: {
        isFlexStart: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
<style  scoped>
.appMain {
    display: flex;
    align-items: center;
    padding: 5% 3%;
}
</style>
