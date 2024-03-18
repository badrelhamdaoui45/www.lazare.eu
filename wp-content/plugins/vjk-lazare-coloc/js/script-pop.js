
/*********************************/
// script POP UP
/*********************************/
  let btnHead = document.getElementById( 'pop-colocation-head' );
  if (btnHead != undefined) {
    btnHead.addEventListener( 'click', function () {
      document.querySelector( '.pop-colocation' ).classList.toggle( 'd-none' );
    });
  }
  

  document.querySelector( '#pop-news-closer' ).addEventListener( 'click', function () {
    document.querySelector( '.pop-colocation' ).classList.toggle( 'd-none' );
  } );

  console.log('pop !!!');
  new MultipleSelect('#vol-city-pop', {
    // options here
    placeholder: 'Sélectionnez une ou plusieurs ville(s)',
    required: true,
  })

  if (document.getElementById( 'radio-type-han-pop' ) != undefined) {
    document.getElementById( 'radio-type-han-pop' ).addEventListener( 'click', function ( event ) {
      if ( event.target && event.target.matches( 'input[type=\'radio\']' ) ) {
        // do something here ...
        var rates = document.querySelector( '#radio-type-han-pop input[type="radio"]:checked' ).value;

        var rate_value;
        var rue = document.getElementById( 'form-han-rue-pop' );
        var jeune = document.getElementById( 'form-han-jeunepop' );
        var cta = document.getElementById( 'form-han-cta-pop' );
        if ( rates == 'rue' ) {
          rue.style.display = 'block';
          jeune.style.display = 'none';
          cta.style.display = 'none';
        } else {
          rue.style.display = 'none';
          jeune.style.display = 'block';
          cta.style.display = 'block';
        }
      }
    });
  }

  var hanMaisonsPop = document.querySelectorAll( '.card-choix-maison-pop' );
  if (document.getElementById( 'han-select-maison-pop' ) != undefined) {
    document.getElementById( 'han-select-maison-pop' ).addEventListener( 'change', function () {
      for (let i = 0; i < hanMaisonsPop.length; i++) {
        if ( this.value !== '' && hanMaisonsPop[i].id === this.value ) {
          hanMaisonsPop[i].style.display = 'block';
        } else {
          hanMaisonsPop[i].style.display = 'none';
        }
      }
    });
  }
  
