<template>
    <div class="code-container">
        <prism-editor readonly="true" class="code-box" :code="example" language="js">
        </prism-editor>
    </div>
</template>
<script>
import PrismEditor from 'vue-prism-editor';
import "prismjs";

export default {
    name: 'codeCard',
    components: {
        PrismEditor
    },
    data() {
        return {
            example: `HTTP/1.1 201 OK
{
 "data": {
   "id": 3,
    "line1": "555 Packers Ln",
    "line2": "Suite 1337",
    "city": "Green Bay",
    "state": "Wisconsin",
    "county": "Green Bay Co.",
    "zip": "54332",
    "country": "US",
    "latitude": null,
    "longitude": null,
    "address_type_id": 2
  }
}

POST /api/v1/accounts/bulk_granular_data_usage

{
 "data": [
   {
     "timestamp": 1451606400,
     "in": 1,
     "out": 3,
     "data_source_identifier": "192.168.100.123",
     "data_source_parent": "Router-01-Example.sonar.software",
     "data_type": "Unknown",
     "account_id": 12
   },
   {
     "timestamp": 1451606460,
     "in": 141,
     "out": 1807,
     "data_source_identifier": "192.168.100.123",
     "data_source_parent": "Router-01-Example.sonar.software",
     "data_type": "Unknown",
     "account_id": 4938
   }
 ]
}
`
        }
    }
}
</script>
<style>
.code-container {
    overflow: hidden;
    overflow-y: hidden;
    height: 700px;
}

.code-box {
    position: relative;
    width: 100%;
    height: 100%;
}

code[class*="language-"],
pre[class*="language-"] {
    color: #c5c8c6;
    text-shadow: 0 1px rgba(0, 0, 0, 0.3);
    font-family: Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
    padding: 1em;
    margin: .5em 0;
    overflow: auto;
    border-radius: 0.3em;
}

:not(pre)>code[class*="language-"],
pre[class*="language-"] {}

/* Inline code */
:not(pre)>code[class*="language-"] {
    padding: .1em;
    border-radius: .3em;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
    color: #7C7C7C;
}

.token.punctuation {
    color: #c5c8c6;
}

.namespace {
    opacity: .7;
}

.token.property,
.token.keyword,
.token.tag {
    color: #96CBFE;
}

.token.class-name {
    color: #FFFFB6;
    text-decoration: underline;
}

.token.boolean,
.token.constant {
    color: #99CC99;
}

.token.symbol,
.token.deleted {
    color: #f92672;
}

.token.number {
    color: #FF73FD;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
    color: #A8FF60;
}

.token.variable {
    color: #C6C5FE;
}

.token.operator {
    color: #EDEDED;
}

.token.entity {
    color: #FFFFB6;
    /* text-decoration: underline; */
}

.token.url {
    color: #96CBFE;
}

.language-css .token.string,
.style .token.string {
    color: #87C38A;
}

.token.atrule,
.token.attr-value {
    color: #F9EE98;
}

.token.function {
    color: #DAD085;
}

.token.regex {
    color: #E9C062;
}

.token.important {
    color: #fd971f;
}

.token.important,
.token.bold {
    font-weight: bold;
}

.token.italic {
    font-style: italic;
}

.token.entity {
    cursor: help;
}
</style>
