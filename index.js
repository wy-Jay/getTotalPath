const getTotalPath = function ( root, code, key ) {
  if ( root == undefined || code == undefined )
    return ''
  for ( var i = 0; i < root.length; i++ ) {
    var child = root[i]
    var result = child[key]
    if ( child[key] == code ) {
      return result
    } else {
      var res = getTotalPath ( child.children, result, key )
      if ( res != '' )
        return result + ',' + res
      else
        return result
    }
  }
};
