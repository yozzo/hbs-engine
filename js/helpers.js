
Handlebars.registerHelper('isChosen', function(type) {
  if (type === this.chosen) {
    return 'mdl-button--colored';
  }
});

Handlebars.registerHelper('getLanguageFilter', function(langId) {
  var queryParam = '';
  if (langId) {
    queryParam = '&language=' + Handlebars.escapeExpression(langId);
  }
  return new Handlebars.SafeString(queryParam);
});

Handlebars.registerHelper('generatePages', function(dogs) {
    var pages = [],
        link,
        pageCount = Math.ceil(dogs.length / DogPack.getNumberOfDogs());

    for (var i = 1; i <= pageCount; i++) {
      link = DogPack.generateUrlParameters('page') + 'page=' + i;
      pages.push({
        number: i,
        link: link
      });
    }
    return pages;
});

Handlebars.registerHelper('generateScore', function(context, options) {
  var score = DogPack.scoreDogs(context);
  return options.fn({
    correct: score.correct,
    incorrect: score.incorrect,
    incomplete: score.incomplete,
    language: options.hash.language
  });
});
