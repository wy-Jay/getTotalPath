const getTotalPath = ( root, code, key ) => {
  for ( var i = 0; i < root.length; i++ ) {
    var child = root[i]   
    if ( child[key] == code ) {
      return child[key]
    } else if ( child.childs ) {
      var res = getTotalPath ( child.childs, code, key )
      if ( res )
        return child[key] + ',' + res
    }
  }
}
