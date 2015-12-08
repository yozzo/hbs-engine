(function() {
  renderListing();

    function renderListing() {
        var rendered = App.templates.listing(window.language);
        $('#main').html(rendered);
    }
})();
