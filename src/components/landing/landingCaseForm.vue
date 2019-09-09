<template>
<div class="padding-l bg-black border-top">
    <div class="color-white container align-center">
      <h2>See the&nbsp;difference.</h2>
      <p class="lead width-s center-block color-silver padding-xs-bottom">Read our case study on islandNet, a small WISP who was quickly transformed into a large enterprise business.</p>

      <div class="form width-xxs center-block">
        <form id="team-store-form" class="validate">
          <input type="hidden" name="form-name" value="Team Demo">
          <div class="margin-xs-bottom">
            <input id="name" class="input-l" type="text" name="Name" placeholder="Name" required="true">
          </div>
          <div class="margin-xs-bottom">
            <input id="email" class="input-l email" type="email" name="Email" placeholder="Email" required="true">
          </div>
          <div class="margin-xs-bottom">
            <input id="phone" class="input-l" type="tel" name="Phone" placeholder="Phone (optional)">
          </div>
          <div class="margin-xs-bottom">
            <input id="company" class="input-l" type="text" name="Company" placeholder="Company" required="true">
            <input id="size" class="input-l" type="number" min="0" max="1000" name="Size" placeholder="Subscribers" required="true">
          </div>
          <button type="submit" class="button stretch deepblue big">Download now</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'landingCaseForm'
  }
</script>

<style scoped>
  c {
    padding: 1.5em
  }

  img.paper {
    position: absolute;
    overflow: hidden;
    top: -100px;
    left: 200px;
    min-width: 1900px;
  }

  @media all {


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

    input[type="radio"] {
      box-sizing: border-box;
      padding: 0;
    }


    @media (min-width: 576px) {
      .container {
        max-width: 540px;
      }
    }

    @media (min-width: 768px) {
      .container {
        max-width: 720px;
      }
    }

    @media (min-width: 992px) {
      .container {
        max-width: 960px;
      }
    }

    @media (min-width: 1200px) {
      .container {
        max-width: 1140px;
      }
    }

    .row {
      display: flex;
      flex-wrap: wrap;
      margin-right: -12px;
      margin-left: -12px;
    }

    .col-12,
    .col,
    .col-md-6,
    .col-lg-5,
    .col-lg-9,
    .col-lg-12,
    .col-xl-4,
    .col-xl-8 {
      position: relative;
      width: 100%;
      padding-right: 12px;
      padding-left: 12px;
    }

    .col {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }

    .col-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .col-6 {
      flex: 0 0 50%;
      max-width: 50%;
      padding: 50px;
    }

    @media (min-width: 768px) {
      .col-md-6 {
        flex: 0 0 50%;
        max-width: 50%;
      }
    }

    @media (min-width: 992px) {
      .col-lg-5 {
        flex: 0 0 41.66667%;
        max-width: 41.66667%;
      }

      .col-lg-9 {
        flex: 0 0 75%;
        max-width: 75%;
      }
    }

    @media (min-width: 1200px) {
      .col-xl-4 {
        flex: 0 0 33.33333%;
        max-width: 33.33333%;
      }

      .col-xl-8 {
        flex: 0 0 66.66667%;
        max-width: 66.66667%;
      }
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
      background-color: #008ffd;
      border-color: #0054f5;
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

    .custom-control-input:checked~.custom-control-label::before {
      color: #fff;
      border-color: #008ffd;
      background-color: #008ffd;
    }

    .custom-control-input:focus~.custom-control-label::before {
      box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(255, 98, 63, 0.25);
    }

    .custom-control-input:disabled~.custom-control-label {
      color: #6c757d;
    }

    .custom-control-input:disabled~.custom-control-label::before {
      background-color: #e9ecef;
    }

    .custom-control-label {
      position: relative;
      margin-bottom: 0;
      vertical-align: top;
    }

    .custom-control-label::before {
      position: absolute;
      top: 0.25rem;
      left: -2.5rem;
      display: block;
      width: 1rem;
      height: 1rem;
      pointer-events: none;
      content: "";
      background-color: #fff;
      border: #adb5bd solid 1px;
    }

    .custom-control-label::after {
      position: absolute;
      top: 0.25rem;
      left: -2.5rem;
      display: block;
      width: 1rem;
      height: 1rem;
      content: "";
      background: no-repeat 50% / 50% 50%;
    }

    .custom-radio .custom-control-label::before {
      border-radius: 50%;
    }

    .custom-radio .custom-control-input:checked~.custom-control-label::after {
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E");
    }

    .custom-radio .custom-control-input:disabled:checked~.custom-control-label::before {
      background-color: rgba(255, 98, 63, 0.5);
    }

    .custom-control-label::before {
      transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }

    @media (prefers-reduced-motion: reduce) {
      .custom-control-label::before {
        transition: none;
      }
    }

    .bg-primary-2 {
      background-color: #225560 !important;
    }

    .bg-primary-3 {
      background-color: #000 !important;
    }

    .bg-white {
      background-color: #fff !important;
    }

    .rounded {
      border-radius: 0.3125rem !important;
    }

    .justify-content-center {
      justify-content: center !important;
    }

    .mb-1 {
      margin-bottom: 0.375rem !important;
    }

    .mb-2 {
      margin-bottom: 0.75rem !important;
    }

    .mb-5 {
      margin-bottom: 3rem !important;
    }

    .p-2 {
      padding: 0.75rem !important;
    }

    @media (min-width: 1200px) {
      .mx-xl-6 {
        margin-right: 4.5rem !important;
      }

      .mx-xl-6 {
        margin-left: 4.5rem !important;
      }
    }

    .text-center {
      text-align: center !important;
    }

    .text-light {
      color: #f8f9fa !important;
    }

    .text-muted {
      color: #adb5bd !important;
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

      p,
      h2 {
        orphans: 3;
        widows: 3;
      }

      h2 {
        page-break-after: avoid;
      }

      .container {
        min-width: 992px !important;
      }
    }

    section {
      position: relative;
    }

    .btn:focus {
      box-shadow: none !important;
    }

    svg.bg-primary-2 * {
      fill: #3755BE;
    }

    .display-4 {
      color: #212529;
    }

    .display-4 {
      line-height: 4rem;
    }

    @media (max-width: 767.98px) {
      .display-4 {
        font-size: 2.5rem;
        line-height: 3rem;
      }


    }

    a {
      font-weight: 500;
      color: #fff;
    }

    small {
      font-weight: 500;
    }

    small {
      display: inline-block;
      line-height: 1.1875rem;
    }

    .text-light a:not(.btn),
    .text-light h2,
    .text-light .display-4 {
      color: #fff;
    }

    .text-light .text-muted {
      color: rgba(255, 255, 255, 0.7) !important;
    }

    .o-hidden {
      overflow: hidden;
    }

    section {
      padding: 6rem 0;
    }

    div.rounded {
      border-radius: 0.625rem !important;
    }

    .layer-1 {
      z-index: 1;
    }

    [class*='layer-'] {
      position: relative;
    }

    .decoration:not(.position-relative) {
      position: absolute;
    }

    .decoration svg {
      background: none !important;
    }

    .decoration.left {
      left: 0;
    }

    .decoration.bottom {
      bottom: 0;
    }

    .decoration.scale-3 svg {
      transform: scale(3);
    }

    .form-control {
      transition: background-color 0.2s ease, border-color 0.2s ease, opacity 0.2s ease;
    }

    .form-control:disabled {
      opacity: .5;
    }

    .form-group label {
      font-size: 0.875rem;
      font-weight: 500;
      color: #adb5bd;
    }

    .form-group label.custom-control-label {
      color: #495057;
    }

    .form-group label.custom-control-label:before,
    .form-group label.custom-control-label:after {
      top: 0.125rem;
    }

    .form-group.rounded {
      border-radius: 0.3125rem !important;
    }

    .text-light .form-group>label {
      color: rgba(255, 255, 255, 0.75);
    }

    @media (max-width: 767.98px) {
      .form-control {
        font-size: 16px;
      }
    }

    .form-group {
      position: relative;
    }

    .custom-control label {
      cursor: pointer;
    }

    .custom-radio {
      line-height: 1.3125rem;
      min-height: 1.3125rem;
    }

    .custom-control-label {
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    .custom-control-label:before {}

    .custom-control-input:checked~.custom-control-label:before {}

    .custom-control {
      padding-left: 1.875rem;
    }

    .custom-control .custom-control-label:before,
    .custom-control .custom-control-label:after {
      left: -1.875rem;
    }

    @media screen and (-ms-high-contrast: active),
    screen and (-ms-high-contrast: none) {
      .row {
        width: 100%;
      }
    }
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

    p,
    h3 {
      orphans: 3;
      widows: 3;
    }

    h3 {
      page-break-after: avoid;
    }
  }

  .card {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 767.98px) {
    .card {
      margin-bottom: 0.75rem;
    }

    .col-6 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }

  a.card {
    color: #495057;
    font-weight: 400;
    transition: all 0.1s ease;
  }

  .card-icon-3 {
    overflow: hidden;
  }

  .card-icon-3 h3 {
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    .card-icon-3 {
      min-height: 28rem;
    }

    .card-icon-3 .icon-round {
      transform: scale(2.5);
      position: relative;
      bottom: 1rem;
      right: 1rem;
    }
  }

  svg.icon * {
    fill: #DB162F;
  }

  svg.icon[class*='bg-'] {
    background: none !important;
  }

  svg.bg-primary * {
    fill: #0054f5;
  }

  a {
    font-weight: 500;
    color: #DB162F;
  }

  .icon {
    flex-shrink: 0;
    width: auto;
    height: 1.5rem;
  }

  .icon-round {
    flex-shrink: 0;
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon-round>.icon {
    height: 2.25rem;
  }

  .icon-round.bg-primary {
    background: rgba(35, 88, 248, 0.18) !important
  }

  @media screen and (-ms-high-contrast: active),
  screen and (-ms-high-contrast: none) {
    .card:not([class*='col-']) {
      width: 100%;
    }

    .card>div {
      max-width: 100%;
    }

    .icon {
      flex-shrink: 0 !important;
    }

    svg.icon {
      width: 1.5rem;
    }
  }
</style>