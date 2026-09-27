const query = new URLSearchParams( window.location.search );

if ( !query.has( 'locale' ) ) {
  window.phet.chipper.locale = 'km';
}

const fontFamily = query.get( 'fontFamily' );
if ( !fontFamily || fontFamily === '"Kantumruy Pro"' ) {
  query.set( 'fontFamily', 'Arial, "Kantumruy Pro"' );
}

const search = query.toString().replace( /\+/g, '%20' );
if ( search !== window.location.search.substring( 1 ) ) {
  window.history.replaceState( null, '', `${window.location.pathname}?${search}${window.location.hash}` );
}

const style = document.createElement( 'style' );
style.textContent = `
  @font-face {
    font-family: 'Kantumruy Pro';
    src: url('images/KantumruyPro-Khmer.woff2') format('woff2');
    font-style: normal;
    font-weight: 100 900;
    font-display: swap;
    unicode-range: U+1780-17FF, U+19E0-19FF, U+200C-200D, U+25CC;
  }
`;
document.head.appendChild( style );