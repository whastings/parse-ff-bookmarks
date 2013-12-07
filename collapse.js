(function(document) {

  var allFolders = document.getElementsByTagName('ul');

  // Make sure all but top level folder are collapsed by default.
  (function() {
    closeAll();
    document.querySelector('body > .folder > ul').style.display = 'block';
    // Open path to a nested link if there's one.
    var nestedPath = location.hash;
    if (nestedPath) {
      nestedPath = nestedPath.replace(/^#\//, '');
      openNestedPath(nestedPath);
    }
  })();

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

  // Enable open/close all links.
  document.getElementById('open-all-link').addEventListener('click', function(event) {
    event.preventDefault();
    openAll();
  });
  function openAll(event) {
    for (var i = 0, length = allFolders.length; i < length; i++) {
      var folder = allFolders[i];
      if (folder.style.display != 'block') {
        folder.style.display = 'block';
      }
    }
  }
  document.getElementById('close-all-link').addEventListener('click', function(event) {
    event.preventDefault();
    closeAll();
  });
  function closeAll() {
    for (var i = 0, length = allFolders.length; i < length; i++) {
      var folder = allFolders[i];
      if (folder.style.display != 'none') {
        folder.style.display = 'none';
      }
    }
  }

  function openNestedPath(path, startFolder) {
    if (typeof path === 'string') {
      path = path.split('/');
    }
    if (!startFolder) {
      startFolder = document.querySelector('body > .folder > ul');
    }
    var pathPart = path[0],
        children = startFolder.children;
        foundFolder = false;
    for (var i = 0, length = children.length; i < length; i++) {
      var childFolder = children[i].firstChild;
      if (childFolder && childFolder.getAttribute('data-folder-id') == pathPart) {
        foundFolder = childFolder.querySelector('ul');
      }
    }
    if (foundFolder) {
      foundFolder.style.display = 'block';
      path = path.slice(1);
      if (path.length > 0) {
        openNestedPath(path, foundFolder);
      }
      else {
        foundFolder.parentNode.scrollIntoView();
      }
    }
    else {
      startFolder.parentNode.scrollIntoView();
    }
  }

})(document);
