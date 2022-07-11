$( '#HEADER__BURGER-MENU-BUTTON' ).on( 'click', function() {
  $( '*' ).css( { 'transition': 'all 0s' } );
  $( '.header__mobile-menu' ).animate( { 'left': '0' }, () => {
    $( '*' ).css( { 'transition': 'all 0.5s' } );
  } );
  $( 'body' ).css( { 'overflow': 'hidden' } );
  console.log('SHOW MENU');
} );

$( '#CLOSE-BUTTON' ).click( function( ) {
  $( '*' ).css( { 'transition': 'all 0s' } );
  $( '.header__mobile-menu' ).animate( { 'left': '-100vw' }, () => {
    $( '*' ).css( { 'transition': 'all 0.5s' } );
  } );
  $( 'body' ).css( { 'overflow': 'auto' } );
  console.log('HIDE MENU');
} );