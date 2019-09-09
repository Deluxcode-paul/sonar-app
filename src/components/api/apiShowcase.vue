<template>
    <div radius="3" class="pEsuO">
        <div style="background:linear-gradient(rgb(35, 88, 248), rgb(93, 132, 249), rgb(0, 63, 255), rgb(82, 35, 248), rgb(0, 42, 169), rgb(255, 255, 255), rgb(0, 63, 255)) center 0% / 100% 500% no-repeat" class="cMRGeE">
            <button class="bFMzxn">
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.8 5.1541V2.5a.7.7 0 0 1 1.4 0v5a.7.7 0 0 1-.7.7h-5a.7.7 0 0 1 0-1.4h3.573c-.7005-1.8367-2.4886-3.1-4.5308-3.1C4.8665 3.7 2.7 5.85 2.7 8.5s2.1665 4.8 4.8422 4.8c1.3035 0 2.523-.512 3.426-1.4079a.7.7 0 0 1 .986.9938C10.7915 14.0396 9.2186 14.7 7.5422 14.7 4.0957 14.7 1.3 11.9257 1.3 8.5s2.7957-6.2 6.2422-6.2c2.1801 0 4.137 1.1192 5.2578 2.8541z" fill="#fff" fill-rule="nonzero"></path>
                </svg>
            </button>
            <div class="" style="width: 400px">
                <div class="code" radius="3">
                    <pre class="return color-white padding-m margin-left-s">{{ exampleReturn }}</pre>
                </div>
            </div>
        </div>
        <div direction="column" style="position:relative" class="qqJEi">
            <div class="fGFifr">
                <div radius="3">
                    <prism-editor :readonly="false" :code="example" :language="graphql"></prism-editor>
                </div>
            </div>
            <div class="boDZEh">
                <a size="1" class="lnEJqv iUZodc" href="#">
                    <span class="">Test Request</span>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import PrismEditor from 'vue-prism-editor';
import "prismjs";
import "vue-prism-editor/dist/VuePrismEditor.css"; // import the styles

export default {
    name: 'apiShowcase',
    data() {
        return {
            exampleReturn: `{
"data": {
   "name" : "John Smith",
   "invoices" : {
      "0001" : [
         {
            "date" : "November 20, 2021",
            "url" : "/js_invoice_0001.pdf"
         }
      ]
   }
}`,
            example: `
query sonarAPI {
  customer {
    name
    invoices {
      url
    }
  }
}
`
        }
    },
    components: {
        PrismEditor
    }
}
</script>
<style>
pre.return {
    font-family: Menlo, Monaco, "Courier New", monospace;
    font-size: 12px;
}

code[class*="language-"],
pre[class*="language-"] {
    -moz-tab-size: 2;
    -o-tab-size: 2;
    tab-size: 2;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    white-space: pre;
    white-space: pre-wrap;
    word-wrap: normal;
    font-family: Menlo, Monaco, "Courier New", monospace;
    font-size: 14px;
    color: #76d9e6;
    text-shadow: none;
}

pre[class*="language-"],
:not(pre)>code[class*="language-"] {
    background: none;
}

pre[class*="language-"] {
    padding: 15px;
    overflow: auto;
}

pre[class*="language-"] {
    position: relative;
}

pre[class*="language-"] code {
    white-space: pre;
    display: block;
}

:not(pre)>code[class*="language-"] {
    padding: 0.15em 0.2em 0.05em;
    border-radius: .3em;
    border: 0.13em solid #7a6652;
    box-shadow: 1px 1px 0.3em -0.1em #000 inset;
}

.token.namespace {
    opacity: .7;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
    color: #6f705e;
}

.token.operator,
.token.boolean,
.token.number {
    color: #a77afe;
}

.token.attr-name,
.token.string {
    color: #e6d06c;
}

.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
    color: #e6d06c;
}

.token.selector,
.token.inserted {
    color: #a6e22d;
}

.token.atrule,
.token.attr-value,
.token.keyword,
.token.important,
.token.deleted {
    color: #ef3b7d;
}

.token.regex,
.token.statement {
    color: #76d9e6;
}

.token.placeholder,
.token.variable {
    color: #fff;
}

.token.important,
.token.statement,
.token.bold {
    font-weight: bold;
}

.token.punctuation {
    color: #bebec5;
}

.token.entity {
    cursor: help;
}

.token.italic {
    font-style: italic;
}

code.language-markup {
    color: #f9f9f9;
}

code.language-markup .token.tag {
    color: #ef3b7d;
}

code.language-markup .token.attr-name {
    color: #a6e22d;
}

code.language-markup .token.attr-value {
    color: #e6d06c;
}

code.language-markup .token.style,
code.language-markup .token.script {
    color: #76d9e6;
}

code.language-markup .token.script .token.keyword {
    color: #76d9e6;
}

/* Line highlight plugin */
pre[class*="language-"][data-line] {
    position: relative;
    padding: 1em 0 1em 3em;
}

pre[data-line] .line-highlight {
    position: absolute;
    left: 0;
    right: 0;
    padding: 0;
    margin-top: 1em;
    background: rgba(255, 255, 255, 0.08);
    pointer-events: none;
    line-height: inherit;
    white-space: pre;
}

pre[data-line] .line-highlight:before,
pre[data-line] .line-highlight[data-end]:after {
    content: attr(data-start);
    position: absolute;
    top: .4em;
    left: .6em;
    min-width: 1em;
    padding: 0.2em 0.5em;
    background-color: rgba(255, 255, 255, 0.4);
    color: black;
    font: bold 65%/1 sans-serif;
    height: 1em;
    line-height: 1em;
    text-align: center;
    border-radius: 999px;
    text-shadow: none;
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);
}

pre[data-line] .line-highlight[data-end]:after {
    content: attr(data-end);
    top: auto;
    bottom: .4em;
}

.iUZodc {
    font-family: 'Inter', sans-serif;
    outline: 0px;
    border-radius: 6px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.03) 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 0px 1px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px;
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    display: inline-block;
    font-weight: 500;
    line-height: 1;
    text-align: center;
    text-decoration: none;
    transform: translateZ(0px);
    transition: box-shadow 0.3s ease 0s, background-color 0.2s ease 0s, color 0.2s ease 0s;
    white-space: nowrap;
    user-select: none;
    padding: 11px 10px 10px;
    font-size: 14px;
    letter-spacing: -0.2px;
}

.iUZodc:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 7px;
    background-color: rgb(255, 255, 255);
    color: rgb(85, 85, 85);
    cursor: pointer;
}

.iUZodc:active {
    opacity: 0.9;
}

.theme-dark .iUZodc {
    color: rgb(255, 255, 255);
    background: rgb(51, 51, 51);
}

.theme-dark .iUZodc:hover {
    background-color: rgb(68, 68, 68);
    color: rgb(238, 238, 238);
}

@media screen and (max-width: 424px) {
    .iUZodc {
        display: inline-flex;
        -webkit-box-pack: center;
        justify-content: center;
        width: 100%;
    }
}

.ejRxbV {
    border-radius: 12px;
    margin-top: 40px;
    margin-bottom: 40px;
    overflow: hidden;
    background: rgb(24, 24, 24);
}

.ejRxbV .prism-code {
    width: 100%;
}

.ejRxbV pre {
    position: relative;
    margin: 0px;
}

.ejRxbV pre code {
    margin: 0px;
    padding: 20px 20px 15px;
    border-radius: 12px;
    font-family: Input, "SF Mono", Menlo, Monaco, Courier, monospace;
    -webkit-font-smoothing: subpixel-antialiased;
    display: block;
    font-size: 12px;
    font-weight: 400;
    box-shadow: none;
    overflow: scroll hidden;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    overflow-wrap: normal;
    line-height: 1.5;
    tab-size: 4;
    hyphens: none;
    color: rgb(238, 238, 238);
}


@media only screen and (min-width: 768px) {
    .ejRxbV pre code {
        font-size: 13px;
        padding: 30px 30px 26px;
    }

    .ejRxbV pre code span:last-child {
        margin-right: 30px;
    }
}

.qqJEi {
    background-color: rgb(21, 21, 21);
    display: flex;
    flex-flow: column nowrap;
}

.theme-dark .qqJEi {
    background-color: rgb(21, 21, 21);
}



.boDZEh {
    padding: 20px;
    display: flex;
    flex-flow: row nowrap;
    -webkit-box-align: center;
    align-items: center;
    box-sizing: border-box;
    height: auto;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.lnEJqv {
    width: auto;
    margin-left: auto;
    padding-left: 13px;
    padding-right: 13px;
}

.fGFifr {
    flex: 1 1 0%;
    height: 100%;
}

.fGFifr>* {
    background: none;
    border-radius: 0px;
    margin: 0px;
}

.fGFifr pre {
    max-width: 100%;
    height: inherit;
}

.fGFifr pre code {
    background: none;
    border-radius: 0px;
    padding: 40px;
}

@media only screen and (min-width: 1024px) {
    .fGFifr pre code {
        min-height: 320px;
    }
}

@media only screen and (min-width: 1280px) {
    .fGFifr pre code {
        min-height: 360px;
    }
}

@media only screen and (min-width: 1440px) {
    .fGFifr pre code {
        min-height: 380px;
    }
}

.cMRGeE {
    display: flex;
    flex-flow: row nowrap;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    height: 60vw;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
}

.cMRGeE::after {
    content: "";
    pointer-events: none;
    border-radius: inherit;
    box-sizing: border-box;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.08) rgba(255, 255, 255, 0.08) rgba(255, 255, 255, 0.14);
    border-image: initial;
}

@media only screen and (min-width: 1024px) {
    .cMRGeE::after {
        border-bottom-color: rgba(255, 255, 255, 0.08);
        border-right-color: rgba(255, 255, 255, 0.14);
    }
}

@media only screen and (min-width: 768px) {
    .cMRGeE {
        height: 400px;
    }
}

@media only screen and (min-width: 1024px) {
    .cMRGeE {
        height: auto;
        border-top-right-radius: initial;
        border-bottom-left-radius: inherit;
    }
}

.bFMzxn {
    position: absolute;
    top: 20px;
    right: 20px;
    display: block;
    width: auto;
    outline: 0px;
    border: none;

    font-size: 14px;
    letter-spacing: -0.2px;
    font-weight: 500;
    line-height: 1;
    text-align: center;
    border-radius: 6px;
    padding: 10px 11px;
    background: rgba(255, 255, 255, 0.14);
    color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 7px;
    transition: box-shadow 0.3s ease-in-out 0s, background 0.2s 0s, opacity 0.2s 0s;
}

.bFMzxn:hover {
    background: rgba(255, 255, 255, 0.21);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 7px;
    cursor: pointer;
}

.bFMzxn:active {
    opacity: 0.9;
}

.pEsuO {
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.pEsuO::after {
    content: "";
    pointer-events: none;
    border-radius: inherit;
    box-sizing: border-box;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(255, 255, 255, 0.06);
}

@media only screen and (min-width: 1024px) {
    .pEsuO {
        flex-direction: row;
    }

    .pEsuO>* {
        width: 50%;
    }
}

</style>