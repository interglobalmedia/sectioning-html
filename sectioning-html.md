<h1 class="capitalize">COMD2451</h1>
<h2 class="capitalize center">Sectioning HTML Documents</h2>
<h3 class="capitalize center">Adding external style sheets</h3>

---

<section class="section">
    <h2 class="sentence">What sectioning "means" for HTML5 documents</h2>

The [`HTML5 specification`](https://html.spec.whatwg.org/multipage/#toc-introduction) `introduced` ***several*** `semantic sectioning elements` to ***help organize*** the `structure` ***of*** `documents`.

`Semantic sectioning elements` are ***specifically*** `designed` to ***communicate*** `structural meaning` to `browsers` and ***other*** `technologies` ***interpreting*** the `document` on ***behalf*** of `users`, ***such as*** `screen readers` and `voice assistants`.

`Semantic sectioning elements` ***clarify*** the ***larger-scale*** `structures` ***within*** a `document`. They are ***intended*** to `enhance` the ***limited*** `semantics` of ***earlier versions*** of `HTML`, `which included` ***only*** the `div element` as a ***generic mechanism*** for ***grouping*** `related content`. For ***example***, `<div class="navigation"></div>` does ***not*** `hint` at ***any meaning*** about its `content` to a `browser`. ***Only*** a ***human*** `reading` the `HTML source markup` in the `Elements tab` in `Chrome Developer Tools `(or ***some other*** `browser`) could `figure out` the ***purpose*** of the `element` ***because*** of the `.navigation` ***class***.

On the ***other hand***, the `nav` *`section element`* ***more clearly*** `describes` to `browsers` and ***other*** `devices` the `content` ***contained therein***, ***like*** `links` or ***other*** `navigational structures` to ***help*** `users` ***move through*** the `site` and ***understand*** where they ***are*** in the `site`'s or `page`'s ***content***.

***New*** `semantic elements` were ***added*** to `HTML5 `to ***improve*** and ***clarify*** the `sectioning` of `web sites` into ***meaningful*** `areas` of `content`.

***According*** to `MDN` in ***their*** `documentation` ***entitled*** [Using HTML sections and outlines](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines),

> Many accessibility tools as well as reader views provided by some browsers rely on semantic sectioning elements. So don't (simply) swap out an existing tangle of `<div>` elements for a bunch of `<section>` elements.
> -- <cite>[Using HTML sections and outlines](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines) -- MDN</cite>

</section>

---

<section class="section">
    <h2 class="sentence">Semantic section elements in HTML5</h2>

`main element`: ***represents*** the **dominant content** of the `body element``. The main` **content area** consists of `content` that is ***directly related*** to or ***expands upon*** the **central topic** of a `document`, or the **central functionality** of an `application`. The **content** of a `main element` should be ***unique*** to the `document` (`page`). **Content** that is ***repeated*** across a **set** of `documents` or `document sections` such as `sidebars`, `navigation links`, `copyright information`, `site logos`, and `search forms` ***shouldn't*** be ***included*** unless the `search form` is the **main function** of the **page**. The `main element` ***doesn't contribute*** to the `document`'s **outline**. ***Unlike elements*** such as `body`, ***headings***such as `h2`, etc., `main` ***doesn't affect*** the `DOM`'s **concept** of the **structure** of the **page**.** It's ***strictly informative***.

`nav element` (***aka*** `HTML navigational element`): ***defines*** a `section` that ***contains*** `navigation links` that ***usually appear*** on a `site`. There ***can*** be `primary` and `secondary menus`, but a `nav element` ***cannot*** be ***nested*** inside ***another*** `nav element`.

`article element` (***aka*** `HTML article element`): ***defines*** a ***piece*** of `self-contained content`. It ***does not*** only ***refer*** to the ***main content***, and **can** be ***used*** for `comments` and `widgets` as ***well***.

`section element` (***aka*** `HTML section element`): ***defines*** a `section` of a `document` to ***indicate*** a ***related*** `grouping` of ***semantic*** `meaning`. It ***makes sense*** to ***use*** the `section element` to ***provide*** `extra context` for the `parent element`.

`aside element` (***aka*** `HTML aside element`): ***defines*** a `section` ***that***, ***though related*** to the ***main element*** (`content`), ***does not*** `belong` to the ***main flow***, i.e., an `explanation/description box` or an `advertisement`. The `aside element` ***has*** its ***own*** `outline`, and ***doesn't belong*** to the ***main*** one.

An [outline in HTML5](https://bitsofco.de/document-outlines-in-html-5-1/) ***shows*** the ***structure*** of the `content` on the ***page***. This is ***useful*** for `user agents`, who ***can use*** the `outline` to ***create***, for ***example***, a `table of contents` for the `document`. This ***can then*** be ***used*** by `screen readers` to ***help*** people ***better navigate*** the `page`.

</section>

---

<section class="section">
    <h2 class="sentence">Other semantic elements used for sectioning</h2>

`body element` (***aka*** `HTML body element`): ***defines*** the `content` of a `document`. It `contains` ***all*** the `content` (***what*** is ***between*** the ***tags***) and `HTML tags` (`elements`).

`header element` (***aka*** `HTML header element`): ***defines*** a `page area` that ***typically*** `contains` a `logo,` `title`, and `navigation`. The `header` ***can also*** be ***used*** inside ***other*** `semantic elements` ***such as*** `article` or `section`. A `section header` ***might contain*** the `section`'s ***heading***, ***author name***, etc. `article`, `section`, `aside`, ***and*** `nav` can have ***their own*** `header`. ***Despite*** the ***name***, the `header` is ***not necessarily*** `positioned` at the ***beginning*** of a `page` or `section`.

`footer element` (***aka*** `HTML footer element`): ***defines*** a `page footer`, ***which typically*** contains `copyright` or `legal notices`, and ***sometimes*** some `links`. As ***regards*** a `section`, a `footer` ***might contain*** the ***sectioned*** `content`'s `publication date`, `license information`, etc. `article`, `section`, `aside`, and `nav` ***can*** have their ***own*** `footer`. ***Despite*** its ***name***, the `footer` is ***not necessarily*** `positioned` at the ***end*** of a `section` (or `page`).  

In ***order*** to see ***examples*** of `sectional elements` and ***how*** they ***work***, we can ***visit*** [Using HTML sections and outlines](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines) on `MDN`.
</section>

---

<section class="section">
    <h2 class="sentence">The nav element and its content</h2>

The `nav element` ***indicates*** a `navigation block` and ***should*** be ***used*** for ***major*** `navigational menus` (i.e., ***major*** `sections` (`pages`) of a `web site`).

***Example*** of a ***basic*** `navigation` ***using*** the ***links*** that will ***populate*** your `portfolio/resume sites` ***which*** you ***will complete*** by the ***end*** of the `course`:

```html
<nav>
    <ul>
        <li>
            <a href="index.html">Home</a>
        </li>
        <li>
            <a href="portfolio.html">Portfolio</a>
        </li>
        <li>
            <a href="resume.html">Résumé</a>
        </li>
        <li>
            <a href="about.html">About</a>
        </li>
        <li>
            <a href="contact.html">Contact</a>
        </li>
    </ul>
</nav>
```

***More often*** than ***not***, and as ***shown above***, the `ul element` ( ***aka*** `unordered element`) is `used` to ***encapsulate*** the `navigation links`, and the `li element` (***aka*** `list element`) is `used` to ***encapsulate*** the ***individual*** `navigation link`. ***However***, a `li element` ***alone*** won't ***do*** the ***trick***. It ***has*** to ***wrap around*** the `a element` which ***contains*** the `url` to the ***targeted page*** on a `web site`.

</section>

---

<section class="section">
    <h2 class="sentence">The nav element and the ul element</h2>

A `ul element` is ***nested inside*** a `nav element` so it ***can provide*** `structure` to the `li elements` ***which contain*** the `links` to ***pages*** on a `web site`.

`ul element`: ***represents*** an `unordered list` of ***items***, ***rendered*** as a `bulleted list` (***the*** `disc value` for ***list-style-type*** `CSS property`) by ***default***.

`ul element list-style-type`: ***sets*** the `bullet style` for the ***list*** in the CSS stylesheet. The `values` ***available*** are:

+ circle

+ disc

+ square

A ***fourth*** `type` has been ***defined*** in the [WebTV interface](http://sep.stanford.edu/sep/jon/family/jos/webtv/developer3/authoring/sysgde/Default.htm), but ***not all*** `browsers` ***support*** it. It is the `triangle` ***value*** for the ***list-style-type*** `CSS property`.

If ***no*** `list-style-type property`  is ***applied*** to the `ul element`, the `user-agent` ***selects*** a `bullet type` ***depending*** on the `nesting level` of the `li` (***list item***) `element`.

`ul element` ***usage***: ***used*** for `grouping` a `collection` of ***items*** that ***do not*** `have` a `numerical ordering`, and ***their order*** in the `list` is ***meaningless***.

The `ul element` can be ***nested*** as ***deeply*** as ***needed*** or ***desired***.

To ***view examples*** of `unordered lists`, please ***visit*** the [The Unordered List Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul) on `MDN`.

</section>

---

<section class="section">
    <h2 class="sentence">The ul element and the li element</h2>

[li element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li): is ***used*** to ***represent*** an `item` in a `list`. It ***must*** be ***contained*** in a `parent element`: an `ordered list` (`ol`), ***or*** an `unordered list` (`ul`). In ***unordered lists***, `list items` are ***usually displayed*** using `bullet points`.
</section>

---

<section class="section">
    <h2 class="sentence">The li element, a element and site navigation</h2>

***Each*** `li element` ***contains*** an `a element` ***between*** its `opening` and `closing tag`.

[a element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a): ***with*** its `href attribute`, ***creates*** a ***hyperlink*** to `web pages`, `files`, `email addresses`, `locations` in the ***same page***, or ***anything else*** a `URL` ***can address***. `Content` ***within each*** `a element` ***should indicate*** the `link`'s ***destination***.

</section>

---

<section class="section">
    <h2 class="sentence">Commonly used a element attributes</h2>

`download attribute`:  ***prompts*** the `user` to ***save*** the ***linked*** `URL` ***instead*** of ***navigating*** to it. **Can** be `used` ***with*** or ***without*** a `value`. We will be ***using*** this `attribute` for the `non-HTML` ***version*** of the `résumé` so ***potential employers*** can `download` it ***onto*** `their computers` ***for reference***.

If `used` ***without*** a `value`, the `browser` ***will suggest*** a `filename/extension,` ***generated*** from ***various*** `sources` ***such as***:

+ [Content-Disposition HTTP header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition): in a ***regular*** `HTTP response`, the `Content-Disposition` **response header** is a `header` that ***indicates*** if the `content` is ***expected*** to be ***displayed*** `in-line` in the `browser`, ***meaning*** as a `web page` or as *`part`* of a `web page`, ***or*** as an ***attachment*** that is ***downloaded*** and ***saved locally*** on the `user`'s ***machine***.

+ The ***final segment*** of the [URL path](https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname): ***this means*** what ***comes after*** the ***last*** `/` in a `URL path`. ***Just as*** I ***indicate*** in the `href` ***values*** of the `a elements` in the ***example*** `navigation menu` for ***our*** `portfolio site`.

+ [media type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type) ***aka*** `MIME type` (***from*** the ([Content-Type header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type), the ***start*** of a [data: URL](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs), or [Blob.type](https://developer.mozilla.org/en-US/docs/Web/API/Blob/type) for a [blob: URL](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL)) `->` ***some*** of ***which*** is ***beyond*** the `scope` of ***this course***, but ***thought*** I would ***mention*** it!

***Defining*** a `value` for the `download attribute` ***results*** in ***suggesting*** it as the `filename`. `/` and `\` ***characters*** are ***converted*** to `underscores` (`_`). `File systems` ***may forbid*** `other characters` in `filenames`, so `browsers` ***will adjust*** the ***suggested name*** if ***necessary***.

The `download attribute` ***only works*** for [same-origin URLs](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy), ***or*** the [`blob:` ](https://flaviocopes.com/blob/) and [`data:` scheme attributes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs). `same-origin URL` ***means*** `URL` (`path`) ***within*** the ***same*** `site`. For ***example***, the `résumé` ***file*** would be ***hosted*** on the ***same*** `site`, and ***therefore*** would ***contain*** a `"same-origin URL"`.

***If*** the `Content-Disposition header` has ***different information*** from the `download attribute`, the ***following*** may ***happen***:

+ ***If*** the `header` ***specifies*** a `filename`, it ***takes priority*** over a `filename` ***specified*** in the `download attribute` ***value***.

+ ***If*** the `header` ***specifies*** a `disposition` of `in-line` (***meaning*** it is ***shown*** as ***being*** `in-line`), `Chrome` and `Firefox 82` and ***later***, ***prioritize*** the `attribute` ***value*** and ***treat*** it as a `download`. `Firefox versions` ***before*** `82` ***prioritize*** the `header` and ***will display*** the `content` ***in-line***.

`href`: ***indicates*** (and ***contains***) the `URL` ***that*** the `hyperlink` ***points*** to. `Links` are ***not restricted*** to `HTTP-based` ***URL***s. They `can use` ***any*** `URL scheme` ***supported*** by `browsers`:

+ ***Sections*** of a ***page*** with `fragment URL`s

+ ***Pieces*** of ***media files*** with `media fragments`

+ ***Telephone numbers*** with `tel: URL`s

+ ***Email addresses*** with `mailto: URL`s

+ ***While*** `web browsers` may ***not support*** other `URL schemes`, `web sites` ***can*** with the [registerProtocolHandler()](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/registerProtocolHandler) (*`JavaScript`*, so ***beyond*** the ***scope*** of ***this course***!) method

A **hyperlink** is ***simply*** a `link` ***from*** a `hypertext` (`HTML`) ***file*** or `document` to ***another*** `location` or `file`, ***typically*** `activated` by ***clicking*** on an ***underlined word*** or `image` on the ***screen***.

`target`: ***indicates*** `where` to ***display*** the ***linked*** `URL`, as the ***name*** for a `browsing context` (***such as*** a `tab`, `window`, or `iframe)`. The ***following*** `keywords` (which are the ***available values*** for the `attribute`) have ***special meaning*** for ***where*** to ***load*** the `URL`:

+ `_blank`: ***usually*** a ***new*** `tab`, but ***users*** can ***configure*** `browsers` to ***open*** a ***new*** `window` ***instead***.

The `_blank` ***value*** is the ***most common*** `value` to ***use***, and the ***one*** you should ***familiarize yourself*** with.

In ***addition***, when ***using*** the `target attribute`, ***make sure*** to ***add*** `rel="noreferrer noopener"` to the `a element` ***opening tag*** to ***avoid*** `exploitation` of the [window.opener API](https://developer.mozilla.org/en-US/docs/Web/API/Window/opener) (security move). If `rel="noreferrer noopener"` is ***not added*** to the ***opening*** `a tag`, the (***browser***) ***Window***'s `interface opener property` ***returns*** a `reference` to the `window` that ***opened*** the `window` ***using*** the `target attribute` ***value***. This is ***not*** the ***best behavior*** as it ***poses*** a `security issue`. By ***default***, when you ***open*** a `web page` in a ***new*** `tab` by ***clicking*** on a `link` with `target="_blank"`, ***this page*** now has ***limited access*** to the ***linking page***. ***Nowadays***, with `Firefox 79` and ***after***, for ***example***, ***giving*** the `target attribute` the ***value*** `"_blank"` ***implicitly provides*** the ***same*** `rel` ***behavior*** as ***setting*** `rel="noreferrer noopener"`. ***However***, it can ***never*** hurt to ***add*** `rel="noreferrer noopener"` ***just*** in ***case***, since one **should cover** ***all*** `browser` ***bases***, and ***not just*** `Firefox`.

</section>

---

<section class="section">
    <h2 class="sentence">How sectional elements work together on the page</h2>

A ***basic example*** of how `sectional elements` ***work together*** on the ***page***:

```html
<body>
    <header>
      <nav>
        <ul>
          <li><a href="#">link</a></li>
          <li><a href="#">link</a></li>
          <li><a href="#">link</a></li>
        </ul>
      </nav>
      <h1>
        Page Title
      </h1>
    </header>

    <section>
      <h2>
        My Blog Posts
      </h2>
      <article>
        <header>
          <h3>
            Article Title
		</h3>
        </header>
        <p>
          content
        </p>
      </article>
      <article>
        <header>
          <h3>
            Article Title
		</h3>
        </header>
        <p>
          content
        </p>
      </article>
      <aside>
        <p>
          Author info
        </p>
      </aside>
    </section>

    <footer>
      Copyright Info
    </footer>
  </body>
```
-- <cite>[Using HTML sections and outlines](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines) -- MDN</cite>

</section>

---

<section class="section">
    <h2 class="sentence">Breaking it down: the header area</h2>

In our ***example*** *`semantically sectioned`* `HTML document`, we ***begin*** at the `top` with the `header element`.

```html
<header>
  <nav>
    <ul>
      <li><a href="#">link</a></li>
      <li><a href="#">link</a></li>
      <li><a href="#">link</a></li>
    </ul>
  </nav>
  <h1>
    Page Title
  </h1>
</header>
```

This is a ***very basic*** `header layout`. There are ***other*** `navigation layouts` that ***include*** a `"brand icon"`. For ***example***, on ***my*** `site`, I ***have*** the ***following***:

+ [interglobalmedianetwork.com](https://www.interglobalmedianetwork.com/)

***How*** you ***want*** to ***set up*** your `navigation` ***depends*** on ***what*** you are ***trying*** to ***convey*** on your `site`. If you ***don't*** `currently have` a `"brand"` for ***yourself*** in ***mind***, you ***don't*** have to ***add*** the `brand icon` ***now***. It is **something** you can `add` ***later***. ***Otherwise***, the ***structure*** of my `navigation menu` is ***quite similar*** to the ***structure*** of the `navigation menu` ***here***.

If you ***want*** to ***add*** `sub-menus` ***later***, you can do that ***as well***. I ***find*** that ***keeping*** it ***simple***, ***especially*** for a `portfolio site`, is ***best practice***.

***Under*** the `navigation menu` is the ***main heading*** for the `page` ***represented*** by the `h1 element`. This is ***textually*** `semantic`, and ***should*** be ***placed*** at the ***top*** of the ***page***. There **should** be ***only one*** `h1 element` per ***page***. You ***can*** `re-use` `h2 elements`, or even `h3 elements` (as done here), one ***per*** `article element`, for ***example***, as the *`"title heading"`* for the `article element`.

</section>

---

<section class="section">
    <h2 class="sentence"> The section element "sectioning"</h2>

```html
<body>
    <header>
        ...
    </header>
    <section>
        ...
    </section>
    <footer>
        ...
    </footer>
</body>
```

In ***our*** `example page layout`, the `section element` is ***used*** to `wrap` ***all*** the `article elements` and the `aside element` ***contained therein***. This ***signals*** that ***all*** the `content` ***inside*** the `section element` is ***part*** of ***that*** `section`.

One ***can*** have ***many sections*** on a ***page***. One can ***also*** `choose` to `use` the `main element` as the *`"main wrapper"`* of the **page content**, ***then*** `section element`(s) ***within*** the *`main element`*, and `article elements` and `aside elements` ***within*** those `section elements`. And ***so on***. ***Both approaches*** are ***valid***.

</section>

---

<section class="section">
    <h2 class="sentence">Breaking it down: the article "sectioning"</h2>

In the `example` ***provided***, the `designer` ***chose*** to ***use*** the `p element` for the `article` ***title***. ***That*** is ***fine***, but ***not*** `semantic`. ***Using*** an `h3 element`, as I did, ***would*** be ***better***, as it ***would indicate*** the ***next*** `heading` ***down*** from the `h2 element`, and ***since*** it ***would*** be `repeated` ***only once*** per `article "section"`, it would ***also indicate*** that it is the `heading` of the `article`, as well as ***differentiating*** it ***from*** the ***rest*** of the ***text*** that ***follows***. That `text` ***can*** be ***placed*** between `opening` and `closing p tags`.

</section>

---

<section class="section">
    <h2 class="sentence">Breaking it down: the aside "sectioning"</h2>

`aside element`: The `aside element` ***defines content*** `aside` ***from*** the `content` it is ***placed in***.

The `aside element` content ***should*** be ***indirectly related*** to the ***surrounding*** `content`.

`Tip`: The `aside element` ***and*** its `content` ***can*** be ***used*** as a `sidebar` in a `document`.

The `aside element` does ***not*** `render` as ***anything special*** in the `browser`. It ***can***, however, be ***styled*** in **such** a **way** that it *`"pops out"`* on the ***page***.

By ***default***, the `browser` (`user-agent`) ***styles*** the `aside element` with the ***following*** `CSS`:

```css
aside {
  display: block;
}
```

This ***usually happens*** `before` ***any*** `custom styling` has been ***applied*** to the `aside element`.

</section>

---

<section class="section">
    <h2 class="sentence">The footer element</h2>

***Last*** of ***all***, ***and*** at the ***bottom*** of the ***page layout***, we ***arrive*** at the `site footer` (`footer element`).

```html
<footer>
    Copyright Info
</footer>
```

In our ***basic*** `example page layout`, the `footer` ***appears***` right above` the `closing body tag`. The `footer element` ***typically contains*** the `credits` of the `site owner` ***such as*** the `site owner`'s (***or*** `business`) ***name***, ***perhaps*** a ***link*** to ***their*** `email address`, ***links*** to their `social media accounts`, `business address`,` copyright attribution`, ***etc***.

On ***my*** `site`, for ***example***, the `footer` **looks like** the ***following***:

+ [interglobalmedianetwork.com](https://www.interglobalmedianetwork.com/)

On ***other pages*** of the `site`, the `content` of the `footer element` ***differs***:

+ [interglobalmedianetwork.com/sitemap](https://www.interglobalmedianetwork.com/sitemap)

On a `portfolio site`, one ***should*** keep it as ***simple*** as ***possible***. `Copyright attribution` ***with*** the `name` of the `creator/site owner`, and `social media` ***links*** are ***good things*** to ***have***. But ***just*** the `copyright attribution` with the `name` of the `creator/site owner` and `date` is ***plenty***.

`Social media` ***links*** can be ***placed elsewhere*** where it ***might*** be ***more*** `semantically appropriate`.

</section>

---

<section class="section">
    <h2 class="sentence">Adding an external style sheet to the head element</h2>

***So far***, we ***have*** been ***styling*** our `HTML document` ***mostly using*** the `internal style` ***approach***, which ***consists*** of ***placing*** `CSS` ***within*** the `style element` ***located*** in the `head element` of the `document`.

***This*** is ***not*** the ***best approach***. It would ***mean*** `copying` and `pasting` that `style element` and its ***associated*** `CSS` into ***each page*** on the `site`. That ***means*** `repetition`, which ***affects*** the `performance` of the `site`. ***Extra*** or ***repetitive*** `CSS` ***slows down*** the ***loading*** of `pages`. The ***more*** `CSS` ***code*** there is to ***load***, the ***longer*** it ***takes***! This could ***result*** in `visitors` ***leaving*** the ***site***, because they ***don't want*** to ***waste time*** `waiting` for the ***page***(s) to ***complete*** `loading` the `assets` ***onto*** the `page`.

To ***avoid*** these ***issues***, we can ***add*** an `external resource link element` to ***link*** to an ***external*** `style sheet`. This `link element` can be ***added*** to the `head element` of ***each page***. For ***example***, we can ***do*** the ***following***:

```html
<link rel="stylesheet" href="main.css">
```

This `link element/tag` can be ***placed*** right under the `title element` ***located*** in the `head element` of the `HTML document`. ***Having*** an ***external*** `style sheet` ***also*** makes ***adding changes*** to the `CSS` ***much easier*** to `track` and `manage`!

The `rel attribute` of the `external resource link element` is ***used*** to ***define*** the `type` of ***content*** the `link element` is ***linking*** to. So a `value` of `"stylesheet"` ***indicates*** that the `link element` is ***linking*** to an `external stylesheet`.

The `href attribute` of the `link element` ***specifies*** the `location` of the ***linked document***.

If you ***want*** to ***get*** `fancier` and ***more*** `organized`, you can ***add*** a `styles folder` to the ***root*** of your `project folder`, and ***place*** your `main.css` file ***inside***. You would then ***need*** to ***make*** a ***change*** to your `link element`, ***pointing*** the `main.css` ***file*** to ***that*** `folder`:

```html
<link rel="stylesheet" href="styles/main.css">
```

The `path` to ***this*** `main.css` ***file*** is ***relative*** to the `location` of the `index.html` ***file*** at the ***root*** of your `project folder`.


***Everyone***, please ***add*** a `styles folder` to the `root` of your `project folder`. ***As*** a ***result***, your `folder/file` ***hierarchy*** of your `project folder` ***contents*** on your `computer` should ***look*** something like ***this***:

```shell
- project-folder/
  - index.html
  - styles/
    - main.css
```

Now ***all pages*** of `your site` ***can*** be ***styled*** with the ***same*** `link element` ***just*** by ***adding*** it to the `head element` of ***each page***! In ***order*** to ***make*** this ***happen***, you ***have*** to `cut` and `paste` the `contents` of the `style element` ***into*** the `main.css` ***file***, and then ***remove*** the `style element` itself ***from*** the `head element`. It ***now*** is ***no longer*** `necessary` to ***have*** the `style element` ***there***!

</section>

---

<section class="section">
    <h2 class="sentence">Related Resources</h2>

+ [Using HTML sections and outlines: MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines)

+ [HTML `<nav>` Tag: w3schools](https://www.w3schools.com/tags/tag_nav.asp)

+ [CSS list-style-type Property: w3schools](https://www.w3schools.com/cssref/pr_list-style-type.asp)

+ [`<ul>`: The Unordered List element: MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)

+ [`<li>`: MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)

+ [How to get the last segment of a path or URL using JavaScript: Flavio Copes](https://flaviocopes.com/how-to-get-last-item-path-javascript/)

+ [Difference between _self, _top, and _parent in the anchor tag target attribute: stackoverflow](https://stackoverflow.com/questions/18470097/difference-between-self-top-and-parent-in-the-anchor-tag-target-attribute)

+ [How to fix target=”_blank” links: a security and performance issue in web pages: Medium](https://medium.com/sedeo/how-to-fix-target-blank-a-security-and-performance-issue-in-web-pages-2118eba1ce2f)

+ [How to create a responsive Navigation Bar with HTML, CSS and jQuery— step by step tutorial: ITNext](https://itnext.io/how-to-create-a-responsive-navigation-bar-with-html-css-and-jquery-step-by-step-tutorial-9c780b58479f)

+ [HTML Living Standard — Last Updated 5 February 2021](https://html.spec.whatwg.org/multipage/#toc-introduction)

+ [HTML `<aside>` Tag: w3schools](https://www.w3schools.com/tags/tag_aside.asp)

+ [Document Outlines in HTML 5.1: bits of code](https://bitsofco.de/document-outlines-in-html-5-1/)

+ [`<link>`: The External Resource Link element: MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/linkhttps://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)

</section>
