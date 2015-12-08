# handlebars-engine
handlebars gulp precompiler

run "gulp watch" for live compiling

run "gulp templates" to build the templates only once

Front-End Templating Engine
For Web App we are using a Gulp precompiled templating engine built on Handlebars.

In order to compile the templates you need to have npm - Node Package Manager - installed.

npm install
Will install all gulp dependencies automatically so now it should be ready to compile the hbs templates.

First off it will need to initialize the templates.js file running
gulp templates

Running the 'gulp templates' command will always compile the existing hbs files inside templates folder into build/js/templates.js, the latter needs to be linked in the html file inside script tags

To streamline the process this command tracks all template changes and re renders the templates.js file
gulp watch

Initializing a new template can be done inside scripts/template-rendering.js by using the following method
var contentMock = {
"n02" : {
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

App.templates comes from templates.js and is created in gulp/templates.js
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

App.templates.index(contentMock) - index represents the name of index.hbs found inside the templates folder, this can be replaced with any other template name needed.