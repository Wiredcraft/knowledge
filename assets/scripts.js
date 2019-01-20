document.addEventListener('DOMContentLoaded', function() {
  /**
   * Search
   */
  var inputs = document.querySelectorAll('.search');

  for (var i = 0; i < inputs.length; i++) {
    new Search({
      el: inputs[i],
      url: inputs[i].getAttribute('rel')
    });
  }
});
