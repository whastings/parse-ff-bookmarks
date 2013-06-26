(function(document) {

  // Open and close folders when their titles are clicked.
  document.addEventListener('click', function(event) {
    var folder,
        folderLink,
        contents;
    folderLink = event.target;
    folder = folderLink.parentNode;
    // Don't react if the event target wasn't a folder title.
    if (folderLink.nodeName != 'A' || folder.className.indexOf('folder-title') === -1) {
      return;
    }
    // Get the folder contents and show/hide them depending on their current visibility.
    event.preventDefault();
    contents = folder.nextElementSibling;
    if (contents.style.display == 'block') {
      contents.style.display = 'none';
    }
    else {
      contents.style.display = 'block';
    }
  });

})(document);
