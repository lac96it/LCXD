export function getExtension(filename) {
  var parts = filename.split('.');
  return parts[parts.length - 1];
}

export function isImage(filename) {
  var ext = getExtension(filename);
  switch (ext.toLowerCase()) { // eslint-disable-line
    case 'jpg':
    case 'jpeg':
    case 'gif':
    case 'bmp':
    case 'png':
      //etc
      return true;
  }
  return false;
}

export function isVideo(filename) {
  var ext = getExtension(filename);
  switch (ext.toLowerCase()) { // eslint-disable-line
    // case 'm4v':
    // case 'avi':
    // case 'mpg':
    case 'mp4':
      // etc
      return true;
  }
  return false;
}