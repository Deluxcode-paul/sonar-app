<template>
    <div class="sidebar">
        <div class="sidebar__block cats-block">
            <a class="header">Integration Types</a>
            <ul class="categories">
                <li class="cat-item cat-item-2">
                    <ul class="children">
                                               <li class="cat-item cat-item-37"><a href="#">Bots</a>
                        </li>                        <li class="cat-item cat-item-37"><a href="#">Bots</a>
                        </li>                        <li class="cat-item cat-item-37"><a href="#">Bots</a>
                        </li>                        <li class="cat-item cat-item-37"><a href="#">Bots</a>
                        </li>                        <li class="cat-item cat-item-37"><a href="#">Bots</a>
                        </li>                        <li class="cat-item cat-item-37"><a href="#">Bots</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'sidebar'
}
</script>
<style scoped>
@media all {
    .header {
        font-family: 'Inter', sans-serif;
        text-transform: uppercase;
        color: rgba(0, 0, 0, 0.7);
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 1px;
    }

    .header:hover {
        text-decoration: none !important
    }

    ul {
        margin-top: 0;
        margin-bottom: 1rem;
    }

    ul ul {
        margin-bottom: 0;
    }

    a {
        color: #007bff;
        text-decoration: none;
        background-color: transparent;
        -webkit-text-decoration-skip: objects;
    }

    a:hover {
        color: #0056b3;
        text-decoration: underline;
    }


    @media print {

        *,
        *::before,
        *::after {
            text-shadow: none !important;
            box-shadow: none !important;
        }

        a:not(.btn) {
            text-decoration: underline;
        }
    }

    a {
        transition: color 0.5s;
    }

    a:hover {
        color: #0048a7;
    }

    a {
        color: #0058cc;
    }

    .cat-item a {
        color: #486694;
    }

    .cat-item a:before {
        background: #f0f5fc;
    }


    .sidebar__block {
        margin-bottom: 2.4rem;
    }

    @media (max-width: 991.98px) {
        .sidebar .cats-block {
            display: block;
            padding: 1.5rem 2rem;
            margin: 0 -2rem;
            border-top: 0;
            margin-top: -3rem;
            border-left: 0;
            border-right: 0;
            margin-bottom: 2.5rem;
        }
    }

    .sidebar .open-cats {
        opacity: 0.7;
        color: #203047;
        font-size: 13px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 2px;
        position: relative;
        display: none;
    }

    .sidebar .open-cats:hover {
        text-decoration: none;
    }

    @media (max-width: 991.98px) {
        .sidebar .open-cats {
            display: block;
        }

        .sidebar .open-cats i {
            position: absolute;
            right: 0;
            top: 50%;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            opacity: 1;
        }

        .sidebar .open-cats .open {
            display: block;
            color: #203047;
            font-size: 2rem;
        }

        .sidebar .open-cats .close {
            display: none;
            color: #8c9cb8;
        }
    }

    .sidebar ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    @media (max-width: 991.98px) {
        .sidebar ul {
            display: none;
            margin-top: 1.5rem;
            z-index: 100;
            background: #fff;
            border-bottom: 2px solid #ebf1f9;
            left: 0;
            padding: 0 0 3rem;
            width: 100%;
        }
    }

    .sidebar ul .children {
        display: block;
    }

    .sidebar ul a {
        font-size: 1.6rem;
    }

    .sidebar .categories {
        border: 0;
    }

    ul.categories>li {
        margin-bottom: 32px;
    }

    ul.categories>li>a {
        font-size: 20px;
        font-weight: 600;
        color: #203047;
        letter-spacing: 0.24px;
        margin-bottom: 11px;
    }

    ul.categories>li>ul {
        margin-top: 10px;
    }

    ul.categories ul.children a {
        font-size: 16px;
        color: #636e7f;
        letter-spacing: 0.2px;
        line-height: 32px;
    }
}
</style>