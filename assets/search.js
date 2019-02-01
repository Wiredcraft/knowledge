/**
 * Search
 */

// Constructor
var Search = function(params) {
  this.el = params.el;
  if (params.resultsEl) {
    this.resultsEl = params.resultsEl;
  }
  else {
    this.resultsEl = document.createElement('div');
    this.resultsEl.classList.add('search-results');
    this.resultsEl.innerHTML = '<p class="default">Type in keywords</p>';
    this.el.after(this.resultsEl);
  }
  this.url = params.url;
  this.idx = null;
  this.content = [];
  this.items = [];
  this.results = [];
  this.init();
}

// Fetch the content, build the search index and listen to input changes
Search.prototype.init = function() {
  var that = this;
  var request = new XMLHttpRequest();
  request.open('GET', this.url, true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      that.content = JSON.parse(request.responseText); // Content retrieved
      that.index(); // Build the index

      // We attach search to the changes of input
      that.el.addEventListener('keyup', function () {
        if (this.value) {
          that.search(this.value);
          that.display();
        }
        else {
          this.resultsEl.innerHTML = '<p class="default">Type in keywords</p>';
        }
      });
    }
    else {
      console.log('(Search) Error: couldn\'t retrieve content.');
    }
  };
  request.onerror = function() {
    console.log('(Search) Error: couldn\'t retrieve content.');
  };
  request.send();
}

// Create the Lunr.js index
Search.prototype.index = function() {
  var that = this;
  this.idx = lunr(function () {
    this.ref('url');
    this.field('title', { boost: 10 });
    this.field('tags');
    this.field('content');

    // Add the data to lunr
    for (var i = 0; i < that.content.length; i++) {
      this.add(that.content[i]);
      that.items[that.content[i].url] = that.content[i];
    }
  });
}

// Display results
Search.prototype.display = function() {
  if (this.results.length) {
    var output = '<ul>';
    for (var i = 0; i < this.results.length; i++) {
      var item = this.items[this.results[i].ref];
      output += '<li>';
      output += '  <a href="' + item.url + '">';
      output += '    <h3>' + item.title + '</h3>';
      output += '    <p>' + item.content.substring(0, 120) + '...</p>';
      output += '  </a>';
      output += '</li>';
    }
    output += '</ul>';
    this.resultsEl.innerHTML = output;
  }
  else {
    this.resultsEl.innerHTML = '<p class="empty">No results found</p></li>';
  }
}

// Run the search with Lunr.js
Search.prototype.search = function(keywords) {
  this.results = this.idx.search(keywords);
}
