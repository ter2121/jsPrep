// There's no break statement. 
// It does not run case '123' as it does not evaluate to True.
// But it does run case '113', and when there is no break, it falls through and keeps executing the next lines.


function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');