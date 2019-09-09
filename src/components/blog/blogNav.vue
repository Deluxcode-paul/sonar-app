<template>
<article class="subnav-set">
          <div class="content">
            <div class="meta">
              <span class="tag">
                <a>Categories</a>
              </span>
            </div>

<div class="subnav">
  <a class="log-url">
    <p>
      <span class="category"><strong>new</strong></span>
      <span class="category-name">Updates</span>
    </p>
  </a>
</div>

<div class="subnav">
  <a class="log-url">
    <p>
      <span class="category"><strong>new</strong></span>
      <span class="category-name">Marketing</span>
    </p>
  </a>
</div>

            <div class="meta">
              <span class="tag">
                <a>Links</a>
              </span>
            </div>

<div class="subnav">
  <a class="log-url">
    <p>
      <span class="category-name">Demo</span>
    </p>
  </a>
</div>

<div class="subnav">
  <a class="log-url">
    <p>
      <span class="category-name">Support</span>
    </p>
  </a>
</div>

<div class="subnav">
  <a class="log-url">
    <p>
      <span class="category-name">Cases</span>
    </p>
  </a>
</div>



          </div>
        </article>
</template>

<script>
export default {
	name: 'blogNav'
}
</script>
<style scoped>
article {
	padding: 10px 0;
	position: relative;
	border-radius: .625rem;
}

@media screen and (max-width:768px) {
	article {
		width: 100%;
		border-left: none;
		border-right: none;
		padding: 60px 30px 30px;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		font-size: 12px;
	}
}

article .content {
	width: 100%;
	color: #89a4f5;
}

@media screen and (max-width:768px) {
	article .content {
		cursor: pointer;
		width: 100%;
	}
}

article .content p {
	font-size: 1.4em;
	line-height: 1.9;
	margin: 15px 0;
}

@media screen and (max-width:768px) {
	article .content p {
		line-height: 1.8;
	}
}

article .content strong {
	font-weight: 600;
	color: #292e31;
}

article.subnav-set {
	margin: 0 auto;
	max-height: 50vh;
	padding: 15px 0 30px;
}

article.subnav-set .content {
	width: auto;
}

article.subnav-set .content .meta {
	font-size: 11px;
	text-transform: uppercase;
	margin: 10px 0 25px;
	text-align: left;
}

article.subnav-set .content .meta a {
	color: inherit;
}

article.subnav-set .content .meta span.tag {
	font-weight: 600;
}

article.subnav-set .content .meta span.bull {
	color: #008cdd;
	font-size: 20px;
	position: relative;
	top: 3px;
	padding: 0 5px;
}

article.subnav-set .content .subnav {
	cursor: pointer;
	padding-top: 10px;
	padding-bottom: 10px;
	overflow: visible;
	border-top: 1px solid #8396f66e;
	-webkit-transition: all .2s ease;
	-moz-transition: all .2s ease;
	-o-transition: all .2s ease;
	-ms-transition: all .2s ease;
	transition: all .2s ease;
}

article.subnav-set .content .subnav:last-of-type {
	border-bottom: 1px solid #8396f66e
}

article.subnav-set .content .subnav p {
	line-height: 1.7;
}

article.subnav-set .content .subnav a {
	color: #fff;
	display: inline-block;
	margin: -12px -40px -8px;
	padding: 12px 40px 8px;
	width: 100%;
}

article.subnav-set .content .subnav a span.category {
	display: inline-block;
	float: left;
	width: 16%;
	text-align: left;
}

@media screen and (max-width:1012px) {
	article.subnav-set .content .subnav a span.category {
		width: 20%;
	}
}

article.subnav-set .content .subnav a span.category strong {
	height: 19px;
	padding: 3px 3px;
	margin-right: 10px;
	border-radius: 3px;
	border: 1px solid rgba(0, 140, 221, .4);
	font-size: 9px;
	line-height: 19px;
	color: #008cdd;
	text-transform: uppercase;
	-webkit-font-smoothing: subpixel-antialiased;
	position: relative;
	top: -1px;
}

article.subnav-set .content .subnav a span.category strong,
article.subnav-set .content .subnav a span.category-name {
	-webkit-transition: all .2s ease;
	-moz-transition: all .2s ease;
	-o-transition: all .2s ease;
	-ms-transition: all .2s ease;
	transition: all .2s ease;
}

article.subnav-set .content .subnav a span.category-name {
	font-size: .7em;
	display: inline-block;
	padding-left: 33px;
	width: 50%;
}

@media screen and (max-width:1012px) {
	article.subnav-set .content .subnav a span.category-name {
		width: 80%;
	}
}

article.subnav-set .content .subnav:hover {

}

article.subnav-set .content .subnav:hover span.category-name {
	color: #aabfff;
}

article.subnav-set .content .subnav:hover .category strong {
	color: #aabfff;
	border-color: #aabfff;
}

@media screen and (max-width:768px) {
	article.subnav-set .content .subnav {
		background-image: none!important;
		padding: 30px 20px;
	}
}

article.subnav-set .content .subnav p {
	margin: 0;
}

</style>