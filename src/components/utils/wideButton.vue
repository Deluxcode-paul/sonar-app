<template>
    <form>
        <div class="form-group text-center margin-xs-top">
            <button :class="buttonStyle" type="submit">{{ text }}</button>
        </div>
    </form>
</template>

<script>
    export default {
        name: 'wideButton',
        props: {
            text: {
                default: 'Click here',
                type: String
            },
            buttonStyle: {
                default: 'btn btn-lg btn-primary btn-block mb-2',
                type: String
            }
        }
    }
</script>

<style scoped>
    label {
        display: inline-block;
        margin-bottom: 0.75rem;
    }

    button {
        border-radius: 0;
    }

    button:focus {
        outline: 1px dotted;
        outline: 5px auto -webkit-focus-ring-color;
    }

    input,
    button {
        margin: 0;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    button,
    input {
        overflow: visible;
    }

    button {
        text-transform: none;
    }

    button,
    [type="submit"] {
        -webkit-appearance: button;
    }

    button:not(:disabled),
    [type="submit"]:not(:disabled) {
        cursor: pointer;
    }

    button::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
        padding: 0;
        border-style: none;
    }

    .form-control {
        display: block;
        width: 100%;
        height: calc(2.375rem + 2px);
        padding: 0.4375rem 0.75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;

        border-radius: 0.3125rem;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }

    @media (prefers-reduced-motion: reduce) {
        .form-control {
            transition: none;
        }
    }

    .form-control::-ms-expand {
        background-color: transparent;
        border: 0;
    }

    .form-control:focus {
        color: #495057;
        background-color: #fff;
        border-color: #ced4da;
        outline: 0;
        box-shadow: 0 0.125rem 0.625rem rgba(0, 0, 0, 0.05);
    }

    .form-control::-webkit-input-placeholder {
        color: #adb5bd;
        opacity: 1;
    }

    .form-control::-moz-placeholder {
        color: #adb5bd;
        opacity: 1;
    }

    .form-control:-ms-input-placeholder {
        color: #adb5bd;
        opacity: 1;
    }

    .form-control::placeholder {
        color: #adb5bd;
        opacity: 1;
    }

    .form-control:disabled {
        background-color: #e9ecef;
        opacity: 1;
    }

    .form-control-lg {
        height: calc(3.625rem + 2px);
        padding: 0.875rem 0.875rem;
        font-size: 1.25rem;
        line-height: 1.5;
        border-radius: 0.3125rem;
    }

    .form-group {
        margin-bottom: 1rem;
    }

    .btn {
        display: inline-block;
        font-weight: 500;
        color: #495057;
        text-align: center;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        background-color: transparent;
        border: 1px solid transparent;
        padding: 0.4375rem 1.5rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: 0.3125rem;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }

    @media (prefers-reduced-motion: reduce) {
        .btn {
            transition: none;
        }
    }

    .btn-primary {
        color: #fff;
        background-color: #353c46;
        border-color: #121519;
    }

    .btn-lg {
        padding: 0.875rem 2.25rem;
        font-size: 1.25rem;
        line-height: 1.5;
        border-radius: 0.3125rem;
    }

    .btn-block {
        display: block;
        width: 100%;
    }

    .custom-control {
        position: relative;
        display: block;
        min-height: 1.5rem;
        padding-left: 2.5rem;
    }

    .custom-control-input {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }
</style>