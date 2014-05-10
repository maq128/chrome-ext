(function() {
    var rso = document.getElementById( 'rso' );
    if ( !rso ) return;

    var arr = rso.getElementsByTagName('a');
    var links = [];
    for ( var i = 0; i < arr.length; i ++ ) {
        if ( arr[i].className == 'l' ) {
            links.push( arr[i] );
        }
    }

    while ( link = links.pop() ) {
        link.insertAdjacentHTML( 'beforebegin', '<a target="_blank" href="' + link.href + '">[^]</a> ' );
    }
})();
