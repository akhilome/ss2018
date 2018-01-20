# How To Code HTML And CSS

This md contains my notes from the course [Learn TO Code HTML and CSS](https://learn.shayhowe.com/html-css/building-your-first-web-page/)

## Lesson 1

The title of the lesson is "Building your first web page". Here are a few bullets I found interesting:

* As a general rule in webpages, HTML represents the actual content of the webpage, while CSS reps appearance

* Common HTML terms which would be encountered: _Elements_, _tags_, and _attributes_.

* Common CSS terms to be familiarized: _selectors, properties,_ and _values_

* Use css resets to ensure cross-browser compatibility.

## Lesson 2

_Getting to Know HTML_

Interesting bullets:

* `div` and `span` donot hold any semantic value. They exist for styling purposes only.

* `div`s are `block`-level elements, while `span`s are `inline`-level elements.

* Text-based elements include: strong, p, H1 through H6, em, e.t.c.

* Structural elements include: header, nav, article, aside, section, footer, e.t.c.

## Lesson 3

_Getting to Know CSS_

Interesting bullets:

* **The Cascade**: CSS rules are interpretted from top to bottom. Styles literally cascade from the top of the stylesheet to the bottom.

* **CSS Specificity**: Different CSS selectors (class, id, type) have different specificity weights as follows:
	- type = 0-0-1
	- class = 0-1-0 
	- id = 1-0-0 

* Generally, in terms of specificity weight, type < class < id.

* **Colors**: Color representation in CSS can be either through any of the following methods: 
	- Keywords (e.g. red, blue) 
	- Hexadecimal notation (e.g. #ff000, #0f0) 
	- RGB/RGBa (e.g. rgba(0,255,0,.5))
	- HSL/HSLa(e.g. hsla(300, 50%, 25%, .3))

* **Lengths**: Length mesurements in CSS can be either `absolute` (e.g. pixels -- px) or `relative` (e.g. percentages -- %, em).

## Lesson 4

_Opening The Box Model_

Interesting bullets:

* The CSS `display` property values include: `block`, `inline-block`, `inline`, `none`.

* **The Box Model**: Every element on a pages is a rectangular box.

* The `box-sizing` property, introduced in CSS3, allows one to change exactly how the box model works.

* The `box-sizing` property accepts the following values:
	- `content-box`: The default value (additive).
	- `padding-box`: (deprecated)
	- `border-box`: Incorporates both the size of the padding and borders around the element (best to use).

