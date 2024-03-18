/*********************************/
// script PAGE COLOC
/*********************************/
    function goToChoice( elem, b ) {
      b.classList.add( 'active' );
      var coloc = document.getElementById( 'bloc-choix-coloc' );
      var rue = document.getElementById( 'bloc-choix-rue' );
      var checked1 = document.getElementById( 'radio-raison1' );
      var checked2 = document.getElementById( 'radio-raison2' );

      console.log( b.id );
      if ( b.id == 'choix-1' || b.id == 'mobile-choix-coloc') {
        coloc.style.display = 'block';
        coloc.scrollIntoView( true );
        rue.style.display = 'none';
        document.getElementById( 'bloc-choix-coloc' ).style.display = 'block';
        document.getElementById( 'bloc-choix-rue' ).style.display = 'none';
        console.log( 'choix-1 check' );
        document.getElementById( 'choix-2' ).classList.remove( 'active' );
        checked1.click();

      } else {
        rue.style.display = 'block';
        rue.scrollIntoView( true );
        coloc.style.display = 'none';
        document.getElementById( 'bloc-choix-rue' ).style.display = 'block';
        document.getElementById( 'bloc-choix-coloc' ).style.display = 'none';
        console.log( 'choix-2 check' );
        document.getElementById( 'choix-1' ).classList.remove( 'active' );
        checked2.click();
      }
    }

    document.getElementById( 'radio-type-han' ).addEventListener( 'click', function ( event ) {
      if ( event.target && event.target.matches( 'input[type=\'radio\']' ) ) {

        var rates = document.querySelector( '#radio-type-han input[type="radio"]:checked' ).value;
        var rate_value;
        var rue = document.getElementById( 'form-han-rue' );
        var jeune = document.getElementById( 'form-han-jeune' );
        var cta = document.getElementById( 'form-han-cta' );
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
    } 
    );

    var hanMaisons = document.querySelectorAll( '.card-choix-maison' );
    document.getElementById( 'han-select-maison' ).addEventListener( 'change', function () {
      for (let i = 0; i < hanMaisons.length; i++) {
        if ( this.value !== '' && hanMaisons[i].id === this.value ) {
          hanMaisons[i].style.display = 'block';
        } else {
          hanMaisons[i].style.display = 'none';
        }
      }
    } );

    new MultipleSelect('#vol-city', {
      placeholder: 'Sélectionnez une ou plusieurs ville(s)',
      required: true,
    })