# How To Code HTML And CSS

This md contains my notes from the course [Learn TO Code HTML and CSS](https://learn.shayhowe.com/html-css/building-your-first-web-page/)

## Lesson 1

The title of the lesson is "Building your first web page". Here are a few bullets I found interesting:

* As a general rule in webpages, HTML represents the actual content of the webpage, while CSS reps appearance

* Common HTML terms which would be encountered: _Elements_, _tags_, and _attributes_.

* Common CSS terms to be familiarized: _selectors, properties,_ and _values_

* Use css resets to ensure cross-browser compatibility.

## Lesson 2: Getting to Know HTML

Interesting bullets:

* `div` and `span` donot hold any semantic value. They exist for styling purposes only.

* `div`s are `block`-level elements, while `span`s are `inline`-level elements.

* Text-based elements include: strong, p, H1 through H6, em, e.t.c.

* Structural elements include: header, nav, article, aside, section, footer, e.t.c.

## Lesson 3: Getting to Know CSS

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

## Lesson 4: Opening the Box Model

Interesting bullets:

* The CSS `display` property values include: `block`, `inline-block`, `inline`, `none`.

* **The Box Model**: Every element on a pages is a rectangular box.

* The `box-sizing` property, introduced in CSS3, allows one to change exactly how the box model works.

* The `box-sizing` property accepts the following values:
	- `content-box`: The default value (additive).
	- `padding-box`: (deprecated)
	- `border-box`: Incorporates both the size of the padding and borders around the element (best to use).


## Lesson 5: Positioning Content

Interesting bullets:

* One way to position elements on a page is to use the `float` property which accepts common values such as `left` and `right`.

* To prevent unwanted layouts when positioning using `float`s, the `clear` property as well as _containing_ can be used.

* The `clear` property accepts different values; commonly `left`, `right` or `both`
	
	+ `left` clears left floats, `right`, right floats and `both`, left and right floats.

* The `clear` property should be applied to the element after the floated elements to return the HTML document to its 'normal' flow.

* _Containing_ floats is not an explicit CSS property. It involves literally containing the floats with, say, a class and _self clearing_ the group (the class, that is) using the `:before` and `:after` pseudo elements. -- This explanation maybe be a bit vague, but this process, according to the course, is also commonly known as a **_clearfix_**

* Positioning can also be done using the `display` property with the `inline-block` value.

* Elements can also be uniquely positioned using the `position` property.

* Every HTML element, by default, has a `position` value of `static`, which can be overwritten with the `relative` or `absolute` values.

* Using `relative` or `absolute` in conjuction with the _box offset_ properties -- `bottom`, `left`, `right`, `top` -- gives one the 'power' to uniquely position a portion of the HTML document anywhere on the page.


## Lesson 6: Working With Typography

Interesting bullets:

Prior to reading this section of the course, I was already pretty well-versed most of the concepts presented in this lesson. Properties like `font-weight`, `text-transform`, `letter-spacing`, `line-height`, and most css properties that have to do with manipulating the look of text on a html page are not foreign to me.

A few properties/elements/concepts that were strange to me are bulleted below:

* To include citations/quotes within a webpage, the following HTML elements are used:
	- `<cite>`: to reference a creative work, author or resource.
	- `<q>`: for short inline quotes.
	- `<blockquote>`: for longer quotes.


## Lesson 7: Setting Backgrounds and Gradients

Interesting bullets:

* Adding a background color to a HTML page can be done fairly easily by using the `background-color` or `background` CSS properties.

* Adding a background image is also easy using either the `background` or `background-image` CSS properties. However to modify and/or properly define a setting for the background image, the following properties can be used:
 - `background-repeat`
 - `background-position`

* Gradient backgrounds can either be `linear` or `radial`. They are added to a HTML document using the `background` or `background-image` CSS properties.

* Linear gradients can be added using the `linear-gradient()` within the `background` or `background-image` CSS property. The function accepts two color values (Hex, rgba, hsla values). The first color value passed is the begining color value of the gradient and the second color value, the end color of the gradient. transition between the two color values within the gradient is handled by the browser.

* Generally the color transition in a gradient occurs from top to bottom, but that can be changed using keywords within the gradient function value. Keywords such as `to right`, `to left top`, `to right bottom`, and degree values such as `300deg`, `270` can be used.

* Like the `linear-gradient()` function, there's also the `radial-gradient()` function for Radial background gradients accepts values similar to the `linear-gradient()` function.

* Radial gradients work from the inside to the out of the element.


## Lesson 8: Creating Lists

Interesting bullets:

* Lists on HTML pages can be one of the the following three types:
  - unordered lists `<ul>`
  - ordered lists `<ol>`
  - description lists `<dl>`

* A `start` attribute used in an ordered list can be used to define at what point (e.g. number) the list starts from. For example `<ol start="20">` creates a list where the first `<li>` starts with the number 20 and progresses onward (i.e. 20, 21, 22, ...).

* Also an attribute for `<ol>`, the `reversed` attribute, used like so; `<ol reversed>` turns the count into a 'count-down'. (i.e. 5, 4, 3, ...).

* Still on `<ol>`s, there's also the `value` attribute used like so; `<ol> ... <li value="3"></li> ... </ol>`; which specifies the particular value for that `<li>`. `<li>`s following a `<li>` with a defined value would continue chronologically. For ex., say an `<li>` was given a `value` of 69, the next `<li>` would automatically have the `value` of 70 even if the `value` before the defined `value` was, say, 21.

* Lists can be nested within each other.

* The `list-style-type` CSS property can be used to modify the default `<li>` markers for `<ul>`s and `<ol>`s.


## Lesson 9: Adding Media

Interesting bullets:

* Images can be added to a HTML page using the `<img>` inline HTML element.

* Images, although appearing as inline elements by default in HTML pages, are usually set to a CSS `display` property value of `block`.

* The `<audio></audio>` HTML element, introduced in HTML 5, can enable one to add audio files to the HTML webpage.

* Attributes accepted by the `<audio>` element include: 

	- `src`: like with the `img` element, the `src` attribute specifies the source URL of the audio file, whether local or otherwise.

	- `autoplay`

	- `controls`

	- `loop`

	- `preload`

* `autoplay`, `controls`, and `loop` above are known as "Boolean attributes". They, according to the textbook, "don't require a stated value".

* `<audio>`, by default, would not be visible on the webpage even when present. When the `autoplay` attribute value is present, the `src`ed audio file starts playing in the background on page-load albeit an "audio player" not visible on the webpage.

  If, however, the `controls` attr. is added to `<audio>`, the player would become visible on the webpage having the default browser audio control properties: pause/play, seek, vol. up/vol. down.

* The `loop` attr., while present, causes the audio file to play continuously from begining to end while the webpage is open.

* The `preload` attr. accepts the values: `none` (preloads no information), `auto` (preloads all information), and `metadata` (preloads metadata information).

* Another format used to embed audio to HTML pages involves including more than one source URL. This is mostly done to provide an array of file formats so at least one of the formats would be recognized by the browser. To use this format, a few things change in the syntax. Instead of:

```html 

<audio src="file.mp3" autoplay controls></audio>

```
	
We now have:

```html

<audio autoplay controls>
	<source src="file.ogg" type="audio/ogg">
	<source src="file.mp3" type="audio/mpeg">
	<source src="file.wav" type="audio/wav">
</audio>

```

* Similar to the `<audio>` element introduced in HTML 5, there's also the `<video>` element which works similar to the audio element, but this time adds video to the HTML page. For example:  

```html

<video src="earth.ogv" controls></video>

```

* Apart from the similar attributes such as `controls`, `autoplay`, `preload`, `src`, and `loop` which the `<audio>` and `<video>` attributes both use, there's also the __`poster`__ attribute, which is specific to `<video>`

* The `poster` attr. allows one to specify an image to be used as something like a "placeholder" before the video starts playing. Think of it like a "video thumbnail". Usage is as follows:

```html

<video src="some-video.ogv" controls poster="some-thumb.jpg"></video>

```

* Just like with `<audio>`, `<video>` can also be written in the following form/syntax (using multiple `source`s) which allows room for the provision of fallbacks in case a specific browser (_looking at you IE_) doesn't, for some reason, support your 'default' video format:
	
```html

<video controls>
	<source src="some-video.ogv" type="video/ogg">
	<source src="some-video.mp4" type="video/mp4">
	Some text specifying the video's <a href="#">download link</a>
</video>

```

* Another important HTML element to note is the `<iframe>` element.

* `<iframe>`, when used, embeds another HTML page into your HTML page. `<iframe>`s can be used to embed media files such as maps, videos and images from other sites into your webpage.

* A few default styles every `<iframe>` possesses which can be manipulated 'to taste' as HTML attributes includes:
	- `frameborder`
	- `width`
	- `height`  

  like so:

```html

<iframe src="some-url" frameborder="some-value" width="some-other-value" height="yep-more-values"></iframe>

```

* A few final important things to note about `<iframe>`s (for now):

	- Links within the page href-ed within the `<iframe>` will open inside that frame leaving the page containing the frame unchanged.

	- Styles applied to the page containing the frame would not affect the elements in the `<iframe>`. Those `<iframe>` elements play by their own rules (the rules specified at `src`).

* And two more tags before this lesson ends:

	- `<figure>`
	- `<figcaption>`
  
  These semantically markup self-contained content or media within the HTML Page. They are used like so:

```html

<figure>
  	<img src="some-image.jpg">
  	<figcaption>caption used in place of image alt</figcaption>
</figure>

```

## Lesson 10: Building Forms

Interesting bullets: 

* To initialize/add a form to a HTML page, the `<form></form>` element is used and it element accepts different attributes, two of  which include: 
  - `action`: contains the URL to which information contained within the form would be sent.
  - `method`: specifies the "method" the browser should use for sending the information collected from the form to the server for processing.

* For gathering text inputs from users the following elements and attributes are applicable:

 - `<input>`: A self-closing HTML element which uses a `type` attribute to note what kind of information is to be collected by the form field.  
   - `name`: a second common attr. used together with `type` in `<input>` which specifies the name of the control being collected by that text field.  
  
  To tie these all together, here's an illustration:  

```html 

<input type="text" name="username">

```

* Asides the `text` value parsed into the `type` attribute above, some other 'useful' values (mostly introduced by HTML 5) include:  

  - `date`,   
  - `datetime`,
  - `email`,  
  - `month`,  
  - `number`,  
  - `time`,  
  - `url`,  e.t.c.

* So say, for example, I was trynna get the email, date of birthday and telephone number from a user, my HTML form would have 3 input fields like so:  

```html 

<form action="#" method="post">

<input type="email" name="useremail">
<input type="date" name="userdob">
<input type="tel" name="usertel">

</form>

```

* Apart from the above discussed method of capturing 'text' input from the user, there's also the `<textarea></textarea>` way. This is mainly used for collecting text which span multiple lines and unlike the `<input>` element, this one doesn't use the `type` attribute, just `name`.

* Applying the `<textarea>` element to a HTML page is done like so:  

```html

<textarea name="userstory">Some Placeholder Text</textarea>

```

* Another form of data collection using HTML forms is the use of multiple choice inputs and menus. These exist in HTML as:  
  - Radio Buttons `type="radio"`  
  - Check Boxes `type="checkbox"`  
  - Drop-down Lists `<select><option> ... </option> ... </select>`  
  - Drop-down lists with multiple selections `<select multiple> ... </select>`  

  Let's discuss each one and show their corresponding syntax.

* Radio buttons allows for the user to pick a value from a set of multiple choice values defined by the author of the page. In addition to the `type` and `name` attributes, a radio input also features a `value` attribute and a `checked` boolean attribute. `checked` preselects a specific radio input. The syntax is as thus:

```html

<input type="radio" name="month" value="June" checked> June
<input type="radio" name="month" value="July"> July
<input type="radio" name="month" value="August"> August

```

* One **important** thing to note in the syntax is that for a group of radio buttons must have the same `name` value (like `name="month"` above).

* Check Boxes are very similar to Radio buttons only that they give the user the capability of selecting more than one option at a time. Syntax:  

```html 

<input type="checkbox" name="food" value="None" checked> None
<input type="checkbox" name="food" value="Egg"> Egg
<input type="checkbox" name="food" value="Fish"> Fish
<input type="checkbox" name="food" Value="Meat"> Meat

```

* Drop-down lists Syntax:

```html 

<select name="gender">
	<option value="None" selected>None</option>
	<option value="Male">Male</option>
	<option value="Female">Female</option>
</select>

```

* Adding a `multiple` boolean attribute to the `<select>` element enables multiple selection for the user. 

* To submit a form, the `submit` input (see below) is used.

```html

<input type="submit" name="submit" value="Send">

```

  - Here, the value parsed into the `value` attri. specifies the text that'll be on the submit button.

* Other inputs include:

  - Hidden inputs: `<input type="hidden" name="tracking-code" value="some-value">`

  - File input: `<input type="file" name="file">`

* For organizing form elements, `label`, `fieldset` and `legend` are used so forms created can be more meaningful to the user.

* `label` provides captions or headings for form controls. e.g.  

```html

...

<label>
	<input type="checkbox" name="month" value="April"> April
</label>
<label>
	<input type="checkbox" name="month" value="May" checked> May
</label>
<label>
	<input type="checkbox" name="month" value="June"> June
</label>

...

```

* `fieldset` groups form controls and labels into organized sections. E.g.  

```html

...

<fieldset>

<label>
	...
</label>

...

</fieldset>

...

```

* `legend` provides caption (or heading) for `fieldset`

* ___Even more___ form and input attributes include:  

  - `disabled`: A boolean attribute which disables an input field. I.e. renders the field inaccessible to the user.

  - `placeholder`: accepts a value which serves as a, _wait for it_, placeholder for the form controls.

  - `required`: Another boolean attribute which makes sure a control is filled before submitting.

  - e.t.c. (check MDN for more please.)


## Lesson 11: Organizing Data with Tables

Interesting bullets:

* Tables, in general, comprise data which is contained in columns and rows. To create a table in HTML, the following elements are required:  

  - `<table>`,  
  - `<tr>`: table row,  
  - `<th>`: table header,  
  - `<td>`: table data

* A 'general' format for HTML tables follow this:

```html

<table>
	<tr>
		<th>Heading 1</th>
		<th>Heading 2</th>
		<th>Heading 3</th>
		<th>Heading 4</th>
	</tr>

	<tr>
		<td>Text 1.1</td>
		<td>Text 1.2</td>
		<td>Text 1.3</td>
		<td>Text 1.4</td>	
	</tr>

	<tr>
		<td>Text 2.1</td>
		<td>Text 2.2</td>
		<td>Text 2.3</td>
		<td>Text 2.4</td>
	</tr>

	<tr>
		<td>Text 3.1</td>
		<td>Text 3.2</td>
		<td>Text 3.3</td>
		<td>Text 3.4</td>
	</tr>

</table>

```

* To provide more context, the `scope` attr. may be used within `<th>` to identify exact what content (row/column) the `<th>` is applicable to. `scope` accepts the following values:  

  - `col`  
  - `row`  
  - `colgroup`  
  - `rowgroup`  

* To organize the data on the table and its structure, the following elements are used:

  - `<caption>Some text here</caption>`: provides caption or title for the table.  
  - `<thead> ... </thead>`: wraps the heading row to denote the head.  
  - `<tbody></tbody>`: contains primary table data.  
  - `<tfoot></tfoot>`: use your fucking imagination for what this does.

* Putting together what we've looked at so far, we have:

```html 

<table>

	<caption>Placeholder Text</caption>

	<thead>
		<tr>
			<th> ... </th>

			...

		</tr>
	</thead>

	<tbody>
		<tr>
			<td> ... </td>

			...

		</tr>

		...

	</tbody>

	<tfoot>
		<tr>
			<td> ... </td>

			... 

		</tr>

		...

	</tfoot>

</table>

```

* The `colspan` or `rowspan` attr. used within `<th>` or `<td>` can be used to combine multiple cells in columns or rows. I.e. A cell with a `colspan` value of 3 (`colspan="3"`) would span 3 columns.  

* For styling tables with CSS, the following properties would come in handy:  

  - `border-collapse`: accepts `collapse`, `separate`, and `inherit`, values.  
  - `border-spacing`: only works when `border-collapse` is `separate`  

* More table styling stuff to take note of:  

  - Table striping: involves giving table rows alternating backgroud color using CSS for improved legibility.
  - Alignment of text within cells. This can be done using the `text-align` or `vertical-align` CSS properties.  

* `vertical-align` only works with `inline` and `table-cell` elements. Using it with `inline-block`, `block` or other element levels won't work. `vertical-align` accepts an array of values, a few of which include; `top`, `middle`, `bottom`.  