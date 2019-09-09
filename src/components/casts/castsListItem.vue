<template>
    <a class="menu-item platform-link">
        <div class="title">
            <slot></slot>
        </div>
        <span class="platform-count">
            {{ quantity }}
        </span>
    </a>
</template>
<script>
export default {
    name: 'castsListItem',
    props: {
        quantity: {
            type: String,
            default: "0"
        }
    }
}
</script>
<style scoped>
.menu-item {
    display: block;
    transition: all .3s;
    cursor: pointer;
    background: linear-gradient(to bottom, #fff, #fff);
}

.platform-link a {
    font-size: 13px !important;
}

.platform-link {
    display: flex;
    align-items: center;
    padding: 7px 7px;
}

.platform-link img {
    width: 25px;
    height: 25px;
    vertical-align: middle;
    margin: 0 10px 0 10px;
}

.platform-count {
    margin-left: auto;
    margin-right: 10px;
    padding: .4rem .4rem;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: .3em;
    font-size: .7em;
}

.platform-count--fade-out {
    opacity: .3;
}


.active {
    background: linear-gradient(to top, #497fd0, #1d74f5) !important;
    border-radius: 5px;
    padding: .15rem .4rem;
    box-shadow: 1px 1px 5px 0 rgba(91, 177, 150, .13);
}

.active a,
.platform-count {
    color: rgba(255, 255, 255, 0.9);
}

.active a,
.platform-link {
    padding-left: 10px;
}


.inactive a {
    color: rgba(0, 0, 0, 1)
}

.active img {
    filter: invert(100%);
    padding-left: 0.1em;

}
</style>