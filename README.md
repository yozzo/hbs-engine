# Handlebars-engine
**Handlebars Gulp Precompiler**

You need Gulp installed globally:

```sh
$ npm i -g gulp
```
First off it will need to initialize the templates.js file running
```sh
$ gulp templates
```

Running the 'gulp templates' command will always compile the existing hbs files inside project/templates folder into project/build/js/templates.js, the latter needs to be linked in the html file inside script tags
```html
<script src="assets/scripts/libs/handlebars-v3.0.3.js"></script> 
<script src="build/js/templates.js"></script>
<script src="assets/scripts/main.js"></script>
```

To streamline the process this command tracks all template changes and re renders the templates.js file
```sh
$ gulp watch
```

Initializing a new template can be done inside scripts/template-rendering.js by using the following method
```js
var contentMock = {
    "component" : {
            "title": "Say hello to the new",
            "logo": "assets/images/image-large.png",
            "placeholder": "Have a question? e.g... apples, balloons, pie"
    },
};
  
function renderIndex() {
    var rendered = App.templates.index(contentMock);
    $('#template-index').html(rendered);
}
  
//then calling the method on document ready
$(function () {
    if ($('#template-index').length) {
            renderIndex();
    }
}
```

App.templates comes from templates.js and is created in gulp/templates.js 
```js

//templates stream
var templates = gulp.src('./templates/[^_]*.hbs')
    //handlebars
    .pipe(handlebars())
    //wrap
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    //namespace
    .pipe(declare({
        namespace: 'App.templates',
        noRedeclare: true
    }));
```

App.templates.index(contentMock) - index represents the name of index.hbs found inside the templates folder, this can be replaced with any other template name needed.


### Todos
 - Write Tests

License
----

MIT


**Free Software, Yeah!**


