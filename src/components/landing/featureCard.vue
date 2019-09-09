<template>
  <div class="container padding-l-top bg-black">
    <div class="row">
      <h1 class="title">Get a demo, it's risk free.</h1>

      <div class="container width-l padding-m-bottom">
        <p class="lead color-white">We make growing your WISP look easy with our modern cloud-based solution. Our all in
          one
          dashboard provides fingertip access on the go, while centralizing your customer support to create a
          frictionless experience, for both you and your customers.</p>
      </div>
    </div>
    <div class="row justify-content-center">

      <div class="col bg-black">
        <div class="row">
          <div class="col-md-8 col-lg-6">
            <div class="card card-body justify-content-between bg-black text-light">
              <img src="https://sonar.software/assets/images/hero_screenshot.png" alt="Image"
                class="bg-image opacity-20">
              <div class="d-flex justify-content-between mb-3 position-relative">
                <div class="text-small d-flex">
                  <div class="mr-2">
                    <a href="#">Tutorial</a>
                  </div>
                  <span class="opacity-70">New</span>
                </div>
              </div>
              <div class="d-flex position-relative">
                <a href="#" class="btn btn-primary btn-round btn-lg flex-shrink-0">
                  <svg class="icon bg-white" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <title>Icon For Play</title>
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <rect opacity="0" x="0" y="0" width="24" height="24"></rect>
                      <path
                        d="M9.82866499,18.2771971 L16.5693679,12.3976203 C16.7774696,12.2161036 16.7990211,11.9002555 16.6175044,11.6921539 C16.6029128,11.6754252 16.5872233,11.6596867 16.5705402,11.6450431 L9.82983723,5.72838979 C9.62230202,5.54622572 9.30638833,5.56679309 9.12422426,5.7743283 C9.04415337,5.86555116 9,5.98278612 9,6.10416552 L9,17.9003957 C9,18.1765381 9.22385763,18.4003957 9.5,18.4003957 C9.62084305,18.4003957 9.73759731,18.3566309 9.82866499,18.2771971 Z"
                        fill="#000000"></path>
                    </g>
                  </svg>
                </a>
                <div class="ml-3">
                  <a href="#">
                    <h4 class="mb-1">Recorded Demo</h4>
                  </a>
                  <span class="text-small opacity-70">22mins</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8 col-lg-6">
            <a href="#" class="card card-body justify-content-between bg-deepblue text-light">
              <div class="d-flex justify-content-between mb-3">
                <div class="text-small d-flex">
                  <div class="mr-2">
                    Chat
                  </div>
                </div>
              </div>
              <div class="ml-3">
                <a href="#">
                  <h4 class="mb-1">Group demo</h4>
                </a>
                <span class="text-small opacity-70">Book your demo today</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'featureCard'
  }
</script>

<style scoped>
  @media all {

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    h2,
    h4 {
      margin-top: 0;
      margin-bottom: 1.5rem;
    }

    a {
      color: #3755BE;
      text-decoration: none;
      background-color: transparent;
    }

    a:hover {
      color: #263a83;
      text-decoration: none;
    }

    img {
      vertical-align: middle;
      border-style: none;
    }

    svg {
      overflow: hidden;
      vertical-align: middle;
    }

    h1.title {
      font-size: 2.5rem;
      font-family: Biosans, sans-serif;
      font-size: 58px;
      line-height: 1;
      color: white;
      letter-spacing: -2.5px;
      margin-bottom: 1em;
    }

    h2,
    h4 {
      margin-bottom: 1.5rem;
      font-family: inherit;
      font-weight: 500;
      line-height: 1.2;
      color: #212529;
    }

    h2 {
      font-size: 2rem;
    }

    h4 {
      font-size: 1.5rem;
    }

    .container {
      width: 100%;
      padding-right: 12px;
      padding-left: 12px;
      margin-right: auto;
      margin-left: auto;
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

    .col,
    .col-md-8,
    .col-lg-6 {
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

    @media (min-width: 768px) {
      .col-md-8 {
        flex: 0 0 66.66667%;
        max-width: 66.66667%;
      }
    }

    @media (min-width: 992px) {
      .col-lg-6 {
        flex: 0 0 50%;
        max-width: 50%;
      }
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

    .btn:hover {
      color: #495057;
      text-decoration: none;
    }

    .btn:focus {
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(55, 85, 190, 0.25);
    }

    .btn:disabled {
      opacity: 0.65;
    }

    .btn-primary {
      color: #fff;
      background-color: #3755BE;
      border-color: #3755BE;
    }

    .btn-primary:hover {
      color: #fff;
      background-color: #2e48a0;
      border-color: #2c4396;
    }

    .btn-primary:focus {
      box-shadow: 0 0 0 0.2rem rgba(85, 111, 200, 0.5);
    }

    .btn-primary:disabled {
      color: #fff;
      background-color: #3755BE;
      border-color: #3755BE;
    }

    .btn-lg {
      padding: 0.875rem 2.25rem;
      font-size: 1.25rem;
      line-height: 1.5;
      border-radius: 0.3125rem;
    }

    .card {
      position: relative;
      display: flex;
      flex-direction: column;
      min-width: 0;
      word-wrap: break-word;
      background-color: #fff;
      background-clip: border-box;
      border: 1px solid rgba(0, 0, 0, 0.125);
      border-radius: 0.625rem;
    }

    .card-body {
      flex: 1 1 auto;
      padding: 2rem;
    }

    .badge {
      display: inline-block;
      padding: 0.5em 0.5rem;
      font-size: 0.75rem;
      font-weight: 600;
      line-height: 1;
      text-align: center;
      white-space: nowrap;
      vertical-align: baseline;
      border-radius: 0.3125rem;
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }

    @media (prefers-reduced-motion: reduce) {
      .badge {
        transition: none;
      }
    }

    .badge:empty {
      display: none;
    }

    .bg-primary {
      background-color: #3755BE !important;
    }

    .bg-primary-3 {
      background-color: #040303 !important
    }

    .bg-white {
      background-color: #fff !important;
    }

    .d-flex {
      display: flex !important;
    }

    .flex-shrink-0 {
      flex-shrink: 0 !important;
    }

    .justify-content-center {
      justify-content: center !important;
    }

    .justify-content-between {
      justify-content: space-between !important;
    }

    .position-relative {
      position: relative !important;
    }

    .mb-1 {
      margin-bottom: 0.375rem !important;
    }

    .mr-2 {
      margin-right: 0.75rem !important;
    }

    .mb-3 {
      margin-bottom: 1.5rem !important;
    }

    .ml-3 {
      margin-left: 1.5rem !important;
    }

    .text-light {
      color: #f8f9fa !important;
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

      img {
        page-break-inside: avoid;
      }

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

      .badge {
        border: 1px solid #000;
      }
    }

    .bg-image {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }

    .bg-image:not([class*='absolute']) {
      position: absolute;
    }

    img.bg-image {
      object-fit: cover;
    }

    .btn>.icon:first-child {
      margin-right: .5rem;
    }

    .btn>.icon:last-child {
      margin-left: .5rem;
    }

    .btn:focus {
      box-shadow: none !important;
    }

    [class*='-flex']>.btn {
      flex-shrink: 0;
    }

    .btn.btn-primary * {
      fill: #fff;
    }

    .btn-round {
      border-radius: 50%;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .btn-round>.icon:only-child {
      margin: 0;
    }

    .btn-round.btn-lg {
      width: 3.75rem;
      height: 3.75rem;
    }

    .btn-round.btn-lg>.icon {
      height: 2rem;
    }

    .card {
      margin-bottom: 1.5rem;
    }

    .card[class*='bg-primary']:not([class*='hover-bg-primary']) {
      border-color: rgba(0, 0, 0, 0);
    }

    .card>.bg-image {
      border-radius: 0.625rem;
    }

    @media (max-width: 767.98px) {
      .card {
        margin-bottom: 0.75rem;
      }
    }

    img {
      max-width: 100%;
    }

    svg.icon * {
      fill: #3755BE;
    }

    svg.icon[class*='bg-'] {
      background: none !important;
    }

    svg.bg-white * {
      fill: #fff;
    }

    a {
      font-weight: 500;
      color: #3755BE;
    }

    .text-small {
      font-weight: 500;
    }

    .text-small {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }

    .text-light a:not(.btn),
    .text-light h4 {
      color: #fff;
    }

    .opacity-20 {
      opacity: 0.2;
    }

    .opacity-70 {
      opacity: 0.7;
    }

    .position-relative {
      z-index: 1;
    }

    .badge {
      text-transform: uppercase;
      position: relative;
      bottom: 1px;
      vertical-align: middle;
    }

    .badge .icon {
      height: .75rem;
      vertical-align: top;
    }

    .icon {
      flex-shrink: 0;
      width: auto;
      height: 1.5rem;
    }

    .icon.icon-sm {
      height: 0.75rem;
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

      svg.icon.icon-sm {
        width: 0.75rem;
      }

      img {
        flex-shrink: 0;
      }

      .row {
        width: 100%;
      }
    }
  }
</style>