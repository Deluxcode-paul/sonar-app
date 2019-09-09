<template>
  <div
    style="margin-top: 140px; margin-bottom: -160px"
    class="bg-black padding-m-bottom padding-m-top"
  >
    <div
      style="margin-top: -160px"
      class="container-l align-center symbols-table second bottom tab-shadow"
    >
      <div class="w-tabs">
        <div class="tabs-content w-tab-content">
          <div
            v-show="currentTab == 'Billing'"
            class="table-tab w-tab-pane w--tab-active"
          >
            <img
              src="https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c278185fd28a770cdf0f01a_Chart1.jpg"
              alt="Visualization Charts"
              srcset="
                https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c278185fd28a770cdf0f01a_Chart1-p-500.jpeg   500w,
                https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c278185fd28a770cdf0f01a_Chart1-p-1080.jpeg 1080w,
                https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c278185fd28a770cdf0f01a_Chart1.jpg         1600w
              "
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 76vw, 779.21875px"
              class="table-preview"
            />
          </div>
          <div
            v-if="currentTab == 'CRM'"
            class="w-tab-pane w--tab-active"
            style=""
          >
            <img
              src="https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c278185fd28a7b64ff0f016_Column.jpg"
              srcset="
                https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c278185fd28a7b64ff0f016_Column-p-500.jpeg   500w,
                https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c278185fd28a7b64ff0f016_Column-p-1080.jpeg 1080w,
                https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c278185fd28a7b64ff0f016_Column.jpg         1600w
              "
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 76vw, 779.21875px"
              alt=""
              class="table-preview"
            />
          </div>
          <div
            v-if="currentTab == 'Contracts'"
            class="w-tab-pane w--tab-active"
            style=""
          >
            <img
              src="https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c278185fd28a71c29f0f00c_Bar.jpg"
              srcset="
                https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c278185fd28a71c29f0f00c_Bar-p-500.jpeg   500w,
                https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c278185fd28a71c29f0f00c_Bar-p-1080.jpeg 1080w,
                https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c278185fd28a71c29f0f00c_Bar.jpg         1600w
              "
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 76vw, 779.21875px"
              alt=""
              class="table-preview"
            />
          </div>
          <div
            v-if="currentTab == 'Inventory'"
            class="w-tab-pane w--tab-active"
            style=""
          >
            <img
              src="https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c278185fd28a78590f0f018_Spline.jpg"
              srcset="
                https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c278185fd28a78590f0f018_Spline-p-500.jpeg   500w,
                https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c278185fd28a78590f0f018_Spline-p-1080.jpeg 1080w,
                https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c278185fd28a78590f0f018_Spline.jpg         1600w
              "
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 76vw, 779.21875px"
              alt=""
              class="table-preview"
            />
          </div>
          <div
            v-if="currentTab == 'Mapping'"
            class="w-tab-pane w--tab-active"
            style=""
          >
            <img
              src="https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c278185fd28a76659f0f014_Ploar.jpg"
              srcset="
                https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c278185fd28a76659f0f014_Ploar-p-1080.jpeg 1080w,
                https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c278185fd28a76659f0f014_Ploar.jpg         1600w
              "
              sizes="(max-width: 767px) 100vw, 397.671875px"
              alt=""
              class="table-preview"
            />
          </div>
          <div
            v-if="currentTab == 'Portal'"
            class="w-tab-pane w--tab-active"
            style=""
          >
            <img
              src="https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c278185fd28a7051df0f00a_Gauge.jpg"
              srcset="
                https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c278185fd28a7051df0f00a_Gauge-p-800.jpeg   800w,
                https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c278185fd28a7051df0f00a_Gauge-p-1080.jpeg 1080w,
                https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c278185fd28a7051df0f00a_Gauge.jpg         1600w
              "
              sizes="(max-width: 767px) 100vw, 397.671875px"
              alt=""
              class="table-preview"
            />
          </div>
          <div
            v-if="currentTab == 'Provisioning'"
            class="w-tab-pane w--tab-active"
            style="opacity: 1; transition: opacity 300ms ease 0s;"
          >
            <img
              src="https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c278185fd28a7fd8df0f012_Donut.jpg"
              srcset="
                https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c278185fd28a7fd8df0f012_Donut-p-800.jpeg   800w,
                https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c278185fd28a7fd8df0f012_Donut-p-1080.jpeg 1080w,
                https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c278185fd28a7fd8df0f012_Donut.jpg         1600w
              "
              sizes="(max-width: 767px) 100vw, 397.671875px"
              alt=""
              class="table-preview"
            />
          </div>
          <div
            v-if="currentTab == 'Monitoring'"
            class="w-tab-pane w--tab-active"
          >
            <img
              src="https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c278185fd28a70a1df0f010_Bubble.jpg"
              srcset="
                https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c278185fd28a70a1df0f010_Bubble-p-500.jpeg   500w,
                https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c278185fd28a70a1df0f010_Bubble-p-1080.jpeg 1080w,
                https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c278185fd28a70a1df0f010_Bubble.jpg         1600w
              "
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 76vw, 779.21875px"
              alt=""
              class="table-preview"
            />
          </div>
          <div
            v-if="currentTab == 'Ticketing'"
            class="w-tab-pane w--tab-active"
            style=""
          >
            <img
              src="https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c278185fd28a7b0a8f0f00e_Combination.jpg"
              srcset="
                https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c278185fd28a7b0a8f0f00e_Combination-p-500.jpeg   500w,
                https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c278185fd28a7b0a8f0f00e_Combination-p-1080.jpeg 1080w,
                https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c278185fd28a7b0a8f0f00e_Combination.jpg         1600w
              "
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 76vw, 779.21875px"
              alt=""
              class="table-preview"
            />
          </div>
        </div>
        <div class="tabs-menu w-tab-menu">
          <a
            ref="Billing"
            v-on:click="changeTab('Billing')"
            class="table-link right-border-0 left-border-0 w-inline-block w-clearfix w-tab-link"
          >
            <div class="text-block-11">Billing</div>
          </a>
          <a
            ref="CRM"
            v-on:click="changeTab('CRM')"
            class="table-link _34-width right-border-0 w-inline-block w-clearfix w-tab-link"
          >
            <div class="text-block-11">CRM</div>
          </a>
          <a
            ref="Contracts"
            v-on:click="changeTab('Contracts')"
            class="table-link right-border-0 w-inline-block w-clearfix w-tab-link"
          >
            <div class="text-block-11">Contracts</div>
          </a>
          <a
            ref="Inventory"
            v-on:click="changeTab('Inventory')"
            class="table-link upper-border right-border-0 left-border-0 w-inline-block w-clearfix w-tab-link"
          >
            <div class="text-block-11">Inventory</div>
          </a>
          <a
            ref="Mapping"
            v-on:click="changeTab('Mapping')"
            class="table-link _34-width _1 right-border-0 w-inline-block w-clearfix w-tab-link"
          >
            <div class="text-block-11">Mapping</div>
          </a>
          <a
            ref="Portal"
            v-on:click="changeTab('Portal')"
            class="table-link upper-border right-border-0 w-inline-block w-clearfix w-tab-link"
          >
            <div class="text-block-11">Portal</div>
          </a>
          <a
            ref="Provisioning"
            v-on:click="changeTab('Provisioning')"
            class="table-link upper-border right-border-0 left-border-0 w-inline-block w-clearfix w-tab-link"
          >
            <div class="text-block-11">Provisioning</div>
          </a>
          <a
            ref="Monitoring"
            v-on:click="changeTab('Monitoring')"
            class="table-link _34-width _1 right-border-0 w-inline-block w-clearfix w-tab-link"
          >
            <div class="text-block-11">Monitoring</div>
          </a>
          <a
            ref="Ticketing"
            v-on:click="changeTab('Ticketing')"
            class="table-link upper-border right-border-0 w-inline-block w-clearfix w-tab-link"
          >
            <div class="text-block-11">Ticketing</div>
          </a>

          <a
            ref="Scheduling"
            v-on:click="changeTab('Scheduling')"
            class="table-link left-corner-6-px right-border-0 left-border-0 w-inline-block w-clearfix w-tab-link"
          >
            <div class="text-block-11">Scheduling</div>
          </a>
          <a
            ref="API"
            v-on:click="changeTab('API')"
            class="table-link _34-width _1 right-border-0 bottom-border-0 w-inline-block w-clearfix w-tab-link"
          >
            <div class="text-block-11">API</div>
          </a>
          <a
            ref="Cloud"
            v-on:click="changeTab('Cloud')"
            class="table-link corner-6px right-border-0 w-inline-block w-clearfix w-tab-link"
          >
            <div class="text-block-11">Cloud</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "landingTabs",
  data() {
    return {
      currentTab: ""
    };
  },
  methods: {
    changeTab(name) {
      this.currentTab = name;
      var tab = this.$refs[name];
      for (var ref in this.$refs) {
        if (this.$refs[ref].classList.contains("current")) {
          this.$refs[ref].classList.remove("current");
        }
      }
      tab.classList.toggle("current");
    }
  },
  mounted: function() {
    this.changeTab("Billing");
  }
};
</script>
<style scoped>
.table-link:hover {
    background: #151515;
}

.table-link.current:hover {
    background: #266efd;
}

.tab-shadow {
  -webkit-box-shadow: 0 8px 18px 0 rgba(0, 0, 0, 0.07),
    0 1px 0 0 rgba(0, 0, 0, 0.07);
  box-shadow: 0 8px 18px 0 rgba(0, 0, 0, 0.07), 0 1px 0 0 rgba(0, 0, 0, 0.07);
}

img {
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
}

.w-clearfix:after,
.w-clearfix:before {
  content: " ";
  grid-column-start: 1;
  grid-row-start: 1;
  grid-column-end: 2;
  grid-row-end: 2;
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.w-inline-block {
  max-width: 100%;
  display: inline-block;
}

.w-clearfix:after,
.w-clearfix:before {
  display: table;
}

.w-clearfix:after {
  clear: both;
}

@media screen and (max-width: 767px) {
  .w-hidden-small {
    display: none !important;
  }
}

@media screen and (max-width: 479px) {
  .w-hidden-small {
    display: inherit !important;
  }
  .w-hidden-tiny {
    display: none !important;
  }
}

.w-tabs:after,
.w-tabs:before {
  content: " ";
  display: table;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
}

.w-tabs:after {
  clear: both;
}

.w-tab-link {
  vertical-align: top;
  text-decoration: none;
  color: #222;
}

.w-tab-content,
.w-tab-link,
.w-tab-menu,
.w-tab-pane,
.w-tabs {
  position: relative;
}

.w-tab-link {
  display: inline-block;
  padding: 9px 30px;
  text-align: left;
  cursor: pointer;
  background-color: #ddd;
}

.current {
  background-color: #c8c8c8;
}

.w-tab-content {
  display: block;
  overflow: hidden;
  min-height: 500px;
}

.w-tab-pane {
  display: none;
}

.w--tab-active {
  display: block;
}

@media screen and (max-width: 479px) {
  .w-tab-link {
    display: block;
  }
}

a {
  color: #0479c7;
  text-decoration: underline;
}

.text-block-11 {
  font-family: "Inter ui", sans-serif;
}

.text-block-11 {
  text-align: left;
  float: left;
  font-weight: 400;
}

.text-block-11 {
  color: #fff;
}

.table-link {
  font-weight: 700;
}

.symbols-table {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
}

.symbols-table {
  -webkit-flex-direction: column;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
}

.symbols-table {
  display: flex;
  width: 960px;
  margin-top: auto;
  padding-top: 60px;
  padding-bottom: 72px;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #131313;
}

.symbols-table.second {
  border-color: #0191ff;
  background-color: #0191ff;
}

.symbols-table.second.bottom {
  /* margin-top: 84px; */
  padding-top: 0;
  padding-bottom: 25px;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  border-radius: 6px;
  background-image: linear-gradient(#1d1d1d, #000);
}

.tabs-menu {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
}

.tabs-menu {
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.table-link {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 33%;
  height: 78px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  -webkit-box-flex: 0;
  -webkit-flex: 0 auto;
  -ms-flex: 0 auto;
  flex: 0 auto;
  border: 1px solid #31a2f6;
  background-color: #1d1d1d00;
  color: hsla(0, 0%, 100%, 0.5);
  font-size: 18px;
  text-align: center;
  transition: all 240ms ease-in-out;
}

.table-link._34-width._1,
.table-link.corner-6px,
.table-link.upper-border {
  border-top-style: none;
}

.table-link._34-width._1.right-border-0.bottom-border-0,
.table-link.corner-6px,
.table-link.left-corner-6-px.right-border-0.left-border-0 {
  border-bottom-style: none;
}

.current {
  width: 33%;
  background-color: #0052f5;
  -webkit-box-shadow: 0 8px 18px 0 rgba(0, 0, 0, 0.07),
    0 1px 0 0 rgba(0, 0, 0, 0.07);
  box-shadow: 0 8px 18px 0 rgba(0, 0, 0, 0.07), 0 1px 0 0 rgba(0, 0, 0, 0.07);
  color: #fff;
}

.table-link._34-width {
  width: 34%;
}

.table-link._34-width.right-border-0 {
  display: block;
  padding-top: 28px;
  border: none;
}

.table-link._34-width._1.right-border-0 {
  border: none;
}

.table-link.upper-border.right-border-0 {
  display: block;
}

.table-link.upper-border.right-border-0.left-border-0 {
  display: block;
  border-left-style: none;
}

.table-link.left-corner-6-px {
  border-style: none;
  border-bottom-left-radius: 6px;
}

.table-link.right-border-0 {
  display: block;
  padding-top: 28px;
  border: none;
}

.table-link.right-border-0.left-border-0 {
  border-left-style: none;
}

.current {
  display: block;
}

.table-link.corner-6px {
  border-bottom-right-radius: 6px;
}

.table-link.corner-6px.right-border-0 {
  display: block;
}

.table-preview {
  display: block;
  margin-right: auto;
  margin-left: auto;
}

.table-preview {
  max-height: 300px;
  border-radius: 6px;
  box-shadow: 12px 9px 41px -6px rgba(12, 50, 88, 0.45);
}

.tabs-content {
  padding: 100px 82px;
  border-radius: 6px 6px 0 0;
  background: none;
}

.text-block-20 {
  display: block;
  float: left;
}

.text-block-20 {
  position: relative;
  left: 4px;
  top: -7px;
  color: #feda31;
  font-size: 12px;
  font-weight: 400;
}

@media (max-width: 991px) {
  .text-block-11 {
    font-size: 15.5px;
  }
  .symbols-table.second.bottom {
    width: 100%;
    margin-right: 7vw;
    margin-left: 7vw;
  }
  .tabs-content {
    padding: 82px 48px;
  }
}

@media (max-width: 767px) {
  .text-block-11 {
    font-size: 17px;
  }
  .symbols-table.second {
    width: 100%;
  }
  .symbols-table.second.bottom {
    width: 100vw;
    margin-right: 0;
    margin-left: 0;
    border-radius: 0;
  }
  .table-link._34-width.right-border-0 {
    width: 50%;
    border-left-style: none;
  }
  .table-link._34-width._1.right-border-0 {
    height: 64px;
    padding-top: 24px;
    border-style: none;
  }
  .table-link._34-width._1.right-border-0.bottom-border-0 {
    border-style: none;
  }
  .table-link.upper-border.right-border-0 {
    height: 64px;
    border-style: none;
  }
  .table-link.right-border-0 {
    width: 50%;
    height: 64px;
    padding-top: 24px;
    padding-left: 7vw;
    border-style: none;
  }
  .table-link.right-border-0.left-border-0 {
    height: 64px;
  }
  .table-link.corner-6px.right-border-0 {
    border-style: none;
    border-bottom-right-radius: 0;
  }
  .tabs-content {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}

@media (max-width: 479px) {
  .symbols-table {
    width: 100%;
  }
  .table-link._34-width._1.right-border-0,
  .table-link._34-width.right-border-0 {
    width: 100%;
  }
  .table-link._34-width._1.right-border-0.bottom-border-0 {
    width: 100%;
    border-style: none;
  }
  .table-link.left-corner-6-px.right-border-0.left-border-0 {
    border-bottom-style: solid;
  }
  .table-link.right-border-0 {
    width: 100%;
  }
  .table-link.right-border-0.left-border-0 {
    display: block;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
  }
  .table-link.corner-6px.right-border-0 {
    border-radius: 0;
  }
  .tabs-content {
    padding: 12vw 7vw;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
</style>
