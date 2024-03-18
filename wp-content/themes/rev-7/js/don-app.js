const app = {

  data: {
    //periodicity: 'ponctuel'
  },

  reset() {
    this.data = {};
    this.showPaymentMethods = true;
    this.showWirement = false;
    this.showReceipt = false;
    this.showPrepay = false;
    this.showCb = false;
    this.step = 1;
    this.donationSize = 0;
    this.resetData();
    this.showChangeButton = false;
    this.showResetButton = false;
    this.paymentMethod = false;
    this.paymentId = false;

    this.periodicity = 'ponctuel';
    this.taxReduction = 'default';
    this.yourStatus = 'default';

    document
      .querySelectorAll( '.js-periodicity' )[ 0 ]
      .checked = true;

    document
      .querySelectorAll( '.js-data-field' )
      .forEach( item => {
        if ( item.tagName === 'SELECT' )
          item.value = 'default';
        else if ( [ 'radio', 'checkbox' ].includes( item.type ) )
          item.checked = false;
        else
          item.value = '';
      } );

    this
      .contactFields
      .classList
      .remove( 'was-validated' );

    jQuery('.accordion-collapse').collapse('hide');

    document.getElementById('fields-recurence').innerHTML = '';

  },

  resetData() {

  },

  getData() {
    let obj = {
      donationSize: this.donationSize,
      taxReduction: this.taxReduction,
      status: this.yourStatus,
      paymentMethod: this.paymentMethod,
      paymentId: this.paymentId,
      periodicity: this.periodicity,
      typeRecurence: this.typeRecurence,
      dateRecurence: this.dateRecurence
    };
    return Object.assign( this.data, obj );
  },

  // Hidden properties with default values.

  _title: {
    value: 'Je donne',
    target: document.getElementById( 'js-title' )
  },
  _step: {
    value: 1,
    target: document.getElementById( 'js-step' )
  },
  _stepWrapper: {
    value: 1,
    target: document.querySelectorAll( '.js-step-wrapper' )
  },
  _donationSize: {
    value: 0,
    target: document.getElementsByClassName( 'js-donation-size' )
  },
  _realDonationSize: {
    value: 0,
    target: document.getElementById( 'js-real-donation-size' )
  },
  _taxReduction: {
    value: 'default',
    target: false
  },
  _taxText: {
    value: 'default',
    values: {
      default: '<p>Vous pouvez effectuer une déduction d’impôt sur votre don en fonction du type de votre impôt.</p>' +
        '<p>Si vous êtes concernés par l’IFI et souhaitez réduire le montant de votre IFI à zéro, rendez-vous sur le site <a target="_blank" href="http://lafondationlazare.org">lafondationlazare.org</a>.<p>',
      fortune: 'De plus en plus de donateurs souhaitent bénéficier des dispositions très avantageuses de la loi Tepa, pour réduire leur IFI à 0. Voici les différentes étapes pour obtenir cette réduction d’impôt : Si vous êtes concernés par l’IFI, vous pouvez réduire le montant de votre IFI à zéro. rendez vous sur le site : lafondationlazare.org.',
      revenu: 'Vous pouvez déduire 75 % de votre don à hauteur de 1000 € par an. Au delà, votre don est déductible à hauteur de 66 % dans la limite de 20 % de votre revenu net imposable. Vous recevrez un reçu fiscal.',
      societe: 'Vous pouvez déduire de l\'impôt sur le revenu ou sur les entreprises 60% de votre don, dans la limite de 0,5% du chiffre d\'affaires. Vous recevrez un reçu fiscal. Pour profiter de cette déduction fiscale, contactez-nous.'
    },
    target: document.getElementById( 'js-tax-text' )
  },
  _periodicity: {
    value: 'ponctuel',
    target: false
  },
  _showRealDonationSize: {
    value: false,
    target: document.getElementById( 'js-show-real-donation-size' )
  },
  _alert: {
    show: false,
    text: '',
    status: 'danger',
    target: document.getElementById( 'js-alert' )
  },
  _showTaxBloc: {
    value: true,
    target: document.getElementById( 'js-tax-bloc' )
  },
  _showBackButton: {
    value: false,
    target: document.getElementById( 'js-back-button' )
  },
  _showChangeButton: {
    value: false,
    target: document.getElementById( 'js-change-button' )
  },
  _showFortune: {
    value: false,
    offElements: document.querySelectorAll( '.js-fortune-off' ),
    onElements: document.querySelectorAll( '.js-fortune-on' )
  },
  _showContactFields: {
    value: false,
    target: document.getElementById( 'js-show-contact-fields' )
  },
  _showFoundationFields: {
    value: false,
    target: document.getElementById( 'js-show-foundation-fields' )
  },
  _yourStatus: {
    value: 'default',
    target: document.getElementById( 'js-your-status' )
  },
  _paymentMethod: {
    value: false,
    target: false
  },
  _showPaymentMethods: {
    value: true,
    target: document.getElementById( 'js-show-payment-methods' )
  },
  _showWirement: {
    value: false,
    target: document.getElementById( 'js-show-wirement' )
  },
  _showPrepay: {
    value: false,
    target: document.getElementById( 'js-show-prepay' )
  },
  _showCb: {
    value: false,
    target: document.getElementById( 'js-show-cb' )
  },
  _showReceipt: {
    value: false,
    target: document.getElementById( 'js-show-receipt' )
  },
  _showLoader: {
    value: false,
    target: document.getElementById( 'js-show-loader' )
  },
  _paymentId: {
    value: false,
    target: document.getElementsByClassName( 'js-payment-id' )
  },
  _showNextButton: {
    value: true,
    target: document.getElementById( 'js-show-next-button' )
  },
  _showConfirmButton: {
    value: false,
    target: document.getElementById( 'js-confirm-reset-button' )
  },
  _showResetButton: {
    value: false,
    target: document.getElementById( 'js-reset-button' )
  },
  _onePaymentType: {
    value: false,
    target: document.getElementsByClassName( 'js-one-payment-type' )
  },
  _typeRecurence: {
    value: false,
    target: document.getElementsByClassName( 'js-recurence-type' )
  },
  _dateRecurence: {
    value: false,
    target: false
  },
  _iban: {
    value: false,
    target: false
  },
  _bic: {
    value: false,
    target: false
  },

  // Methods

  _getPercent( value, percent ) {
    return Math.floor( ( ( value / 100 * percent ) ) * 100 ) / 100;
  },
  _updateRealDonationSize() {
    if ( this.taxReduction === 'societe' )
      this.realDonationSize = this._getPercent( this.donationSize, 40 );
    else if ( this.taxReduction === 'revenu' ) {
      if ( this.donationSize <= 1000 )
        this.realDonationSize = this._getPercent( this.donationSize, 25 );
      else
        this.realDonationSize =
          this._getPercent( 1000, 25 ) + this._getPercent( this.donationSize - 1000, 34 );
    }
  },
  validation() {
    if ( this.step === 1 ) {
      if ( this.donationSize <= 0 ) {
        this.alertText = 'Le montant du don doit être supérieur à 0€';
        this.alertShow = true;
        app.alertStatus = 'danger';
        return false;
      }
      return true;
    } else if ( this.step === 2 ) {
      if ( this.yourStatus === 'default' ) {
        this.alertText = 'Veuillez sélectionner votre statut';
        this.alertShow = true;
        app.alertStatus = 'danger';
        return false;
      } else {
        this.contactFields.classList.add( 'was-validated' );
        let inputs = this.contactFields.querySelectorAll( 'input' );
        if ( [].find.call( inputs, item => !item.checkValidity()) ) {
          this.alertText = 'Veuillez remplir tous les champs obligatoires';
          this.alertShow = true;
          app.alertStatus = 'danger';
          return false;
        }
      }
      if ( [ 'une_entreprisee', 'une_fondation' ].includes( this.yourStatus ) ) {
        this.foundationFields.classList.add( 'was-validated' );
        let inputs = this.foundationFields.querySelectorAll( 'input, select' );
        if ( [].find.call( inputs, item => !item.checkValidity() ) ) {
          this.alertText = 'Veuillez remplir tous les champs obligatoires';
          this.alertShow = true;
          app.alertStatus = 'danger';
          return false;
        }
      }
      return true;
    } else if ( this.step === 3 ) {
      if ( this.paymentMethod && app.data.rgpdCheck ) {
        //console.log( app.data.rgpdCheck );
        this.alertShow = false;
        return true;
      } else {
        this.alertText = 'Veuillez accepter nos conditions d\'utilisation';
        this.alertShow = true;
        app.alertStatus = 'danger';
        //console.log( app.data.rgpdCheck );
        //console.log(app.data.paymentMethod);
        return false;
      }
    }
    return false;
  },

  // Getters

  _getter( name ) {
    return this[ name ].value;
  },
  get title() {
    return this._getter( '_title' );
  },
  get step() {
    return this._getter( '_step' );
  },
  get donationSize() {
    return this._getter( '_donationSize' );
  },
  get taxReduction() {
    return this._getter( '_taxReduction' );
  },
  get taxText() {
    return this._taxText.values[ this._taxText.value ];
  },
  get periodicity() {
    return this._getter( '_periodicity' );
  },
  get showRealDonationSize() {
    return this._getter( '_showRealDonationSize' );
  },
  get alertShow() {
    return this._alert.show;
  },
  get alertText() {
    return this._alert.text;
  },
  get alertStatus() {
    return this._alert.status;
  },
  get showTaxBloc() {
    return this._getter( '_showTaxBloc' );
  },
  get showBackButton() {
    return this._getter( '_showBackButton' );
  },
  get showChangeButton() {
    return this._getter( '_showChangeButton' );
  },
  get stepWrapper() {
    return this._getter( '_stepWrapper' );
  },
  get showFortune() {
    return this._getter( '_showFortune' );
  },
  get contactFields() {
    return this._showContactFields.target;
  },
  get foundationFields() {
    return this._showFoundationFields.target;
  },
  get showContactFields() {
    return this._getter( '_showContactFields' );
  },
  get showFoundationFields() {
    return this._getter( '_showFoundationFields' );
  },
  get yourStatus() {
    return this._getter( '_yourStatus' );
  },
  get paymentMethod() {
    return this._getter( '_paymentMethod' );
  },
  get showPaymentMethods() {
    return this._getter( '_showPaymentMethods' );
  },
  get showWirement() {
    return this._getter( '_showWirement' );
  },
  get showPrepay() {
    return this._getter( '_showPrepay' );
  },
  get showCb() {
    return this._getter( '_showCb' );
  },
  get showReceipt() {
    return this._getter( '_showReceipt' );
  },
  get showLoader() {
    return this._getter( '_showLoader' );
  },
  get paymentId() {
    return this._getter( '_paymentId' );
  },
  get showNextButton() {
    return this._getter( '_showNextButton' );
  },
  get showConfirmButton() {
    return this._getter( '_showConfirmButton' );
  },
  get showResetButton() {
    return this._getter( '_showResetButton' );
  },
  get onePaymentType() {
    return this._getter( '_onePaymentType' );
  },
  get typeRecurence() {
    return this._getter( '_typeRecurence' );
  },
  get dateRecurence() {
    return this._getter( '_dateRecurence' );
  },
  get iban() {
    return this._getter( '_iban' );
  },
  get bic() {
    return this._getter( '_bic' );
  },
  get formMoral() {
    return this._getter( '_formMoral' );
  },
  get siren() {
    return this._getter( '_siren' );
  },

  // Setters

  _setter( name, value ) {
    this[ name ].value = value;
    if ( this[ name ].target )
      this[ name ].target.innerText = value;
  },
  _setterShow( name, value ) {
    this[ name ].value = value;
    if ( value )
      this[ name ].target.style.display = 'block';
    else
      this[ name ].target.style.display = 'none';
  },
  set step( value ) {
    if ( value < 1 || value > 3 ) return;
    this.alertShow = false;
    this.stepWrapper = value;
    if ( value === 1 ) {
      this.showNextButton = true;
      this.showConfirmButton = false;
      this.showBackButton = false;
      this.title = 'Je donne';

      document.getElementById( 'js-show-next-button' ).innerText = 'continuer';
      document.getElementById( 'js-tax-bloc' ).style.display = 'block';
      document.getElementById( 'row-reverse' ).classList.add( 'flex-lg-row-reverse' );
      document.getElementById( 'row-reverse' ).classList.remove( 'justify-content-center' );
    } else if ( value === 2 ) {
      dataLayer.push( {
        'event': 'Montant',
        'eventCategory': 'Ecommerce',
        'eventAction': 'Checkout',
        'eventLabel': 'Montant',
        'ecommerce':
          {
            'checkout': {
              'actionField': {
                'step': '2',
                'label': 'Choix Montant'
              },
              'products': [ {
                'name': 'Don',
                'id': '0001',
                'price': this.donationSize,
                'brand': '',
                'variant': '',
                'category': this.periodicity,
                'quantity': 1
              } ]
            }
          }
      } );

      document.getElementById( 'row-reverse' ).classList.remove( 'flex-lg-row-reverse' );
      document.getElementById( 'row-reverse' ).classList.add( 'justify-content-center' );
      //document.getElementById('modal-don-content').classList.remove('col-lg-6');
      //document.getElementById('modal-don-content').classList.add('col-12');
      //document.getElementById('js-show-contact-fields-bis').style.display = 'block';
      document.getElementById( 'js-tax-bloc' ).style.display = 'none';
      this.showBackButton = true;
      this.title = 'MES COORDONNÉES';
      document.getElementById( 'js-show-next-button' ).innerText = 'continuer';
    } else if ( value === 3 ) {
      dataLayer.push( {
        'event': 'Coordonnees',
        'eventCategory': 'Ecommerce',
        'eventAction': 'Checkout',
        'eventLabel': 'Coordonnees',
        'ecommerce':
          {
            'checkout': {
              'actionField': {
                'step': '3',
                'label': 'Choix Coordonnées'
              },
              'products': [ {
                'name': 'Don',
                'id': '0001',
                'price': this.donationSize,
                'brand': '',
                'variant': '',
                'category': this.periodicity,
                'quantity': 1
              } ]
            }
          }
      } );

      if ( this.periodicity == 'Récurrent' ) {
        document.getElementById( 'radio-mode-one' ).disabled = true;
        document.getElementById( 'radio-mode-two' ).disabled = true;
        document.getElementById( 'radio-mode-three' ).disabled = false;
        document.getElementById( 'radio-mode-four' ).disabled = true;
        document.getElementById( 'radio-mode-three' ).click();
      } else {
        document.getElementById( 'radio-mode-one' ).disabled = false;
        document.getElementById( 'radio-mode-two' ).disabled = false;
        document.getElementById( 'radio-mode-three' ).disabled = true;
        document.getElementById( 'radio-mode-four' ).disabled = false;
        document.getElementById( 'radio-mode-three' ).checked = false;
        document.getElementById( 'radio-mode-three' ).classList.remove('show');
      }
      
      this.showBackButton = true;
      this.title = 'MON RÈGLEMENT';
      document.getElementById( 'js-tax-bloc' ).style.display = 'none';
      document.getElementById( 'js-show-next-button' ).innerText = 'Valider';
    }
    this._setter( '_step', value );
    //console.log( value );
  },
  set title( value ) {
    this._setter( '_title', value );
  },
  set donationSize( value ) {
    if ( value < 0 ) return;
    this._donationSize.value = value;
    [].forEach.call( this._donationSize.target, item => item.innerText = value );
    this._updateRealDonationSize();
  },
  set realDonationSize( value ) {
    this._setter( '_realDonationSize', value );
  },
  set taxReduction( value ) {
    this._setter( '_taxReduction', value );
    this.taxText = value;
    this.showRealDonationSize = [ 'revenu', 'societe' ].includes( value );
    this._updateRealDonationSize();
    this.showFortune = value === 'fortune';
  },
  set taxText( value ) {
    this._taxText.value = value;
    this._taxText.target.innerHTML = this._taxText.values[ this._taxText.value ];
  },
  set periodicity( value ) {
    this._setter( '_periodicity', value );
    this.onePaymentType = ( value === 'one' );
  },
  set showRealDonationSize( value ) {
    this._setterShow( '_showRealDonationSize', value );
  },
  set alertShow( value ) {
    this._setterShow( '_alert', value );
    this._alert.show = value;
  },
  set alertText( value ) {
    this._alert.text = value;
    this._alert.target.innerText = value;
  },
  set alertStatus( value ) {
    this._alert.status = value;
    this._alert.target.classList.remove( 'alert-danger' );
    this._alert.target.classList.remove( 'alert-success' );
    if ( value === 'success' )
      this._alert.target.classList.add( 'alert-success' );
    else
      this._alert.target.classList.add( 'alert-danger' );
  },
  set showTaxBlock( value ) {
    this._setterShow( '_showTaxBlock', value );
  },
  set showBackButton( value ) {
    this._setterShow( '_showBackButton', value );
  },
  set showChangeButton( value ) {
    this._setterShow( '_showChangeButton', value );
  },
  set stepWrapper( value ) {
    if ( value < 1 || value > 3 ) return;
    this._stepWrapper.value = value;
    this._stepWrapper.target.forEach( item => item.style.display = 'none' );
    this._stepWrapper.target.item( value - 1 ).style.display = 'block';
  },
  set showFortune( value ) {
    if ( value ) {
      this._showFortune.offElements.forEach( item => item.style.display = 'none' );
      this._showFortune.onElements.forEach( item => item.style.display = 'block' );
    } else {
      this._showFortune.offElements.forEach( item => item.style.display = 'block' );
      this._showFortune.onElements.forEach( item => item.style.display = 'none' );
    }
  },
  set showContactFields( value ) {
    this._setterShow( '_showContactFields', value );
  },
  set showFoundationFields( value ) {
    this._setterShow( '_showFoundationFields', value );
  },
  set yourStatus( value ) {
    this._yourStatus.value = value;
    this._yourStatus.target.value = value;
    if ( value === 'default' ) {
      this.showContactFields = false;
      this.showFoundationFields = false;
    } else if ( value === 'particulier' ) {
      this.showContactFields = true;
      this.showFoundationFields = false;
    } else {
      this.showContactFields = true;
      this.showFoundationFields = true;
    }
  },
  set paymentMethod( value ) {
    this._setter( '_paymentMethod', value );
  },
  set showPaymentMethods( value ) {
    this._setterShow( '_showPaymentMethods', value );
    this.showNextButton = value;
    this.showBackButton = value;
    this.showConfirmButton = !value;
    this.showChangeButton = !value;
  },
  set showWirement( value ) {
    this._setterShow( '_showWirement', value );
    this.showNextButton = !value;
    this.showBackButton = !value;
    this.showConfirmButton = !value;
    this.showChangeButton = !value;
    this.showResetButton = value;
  },
  set showPrepay( value ) {
    this._setterShow( '_showPrepay', value );
    this.showNextButton = !value;
    this.showBackButton = !value;
    this.showConfirmButton = !value;
    this.showChangeButton = !value;
    this.showResetButton = value;
  },
  set showCb( value ) {
    this._setterShow( '_showCb', value );
    this.showNextButton = !value;
    this.showBackButton = !value;
    this.showConfirmButton = !value;
    this.showChangeButton = !value;
    this.showResetButton = !value;
  },
  set showReceipt( value ) {
    this._setterShow( '_showReceipt', value );
    this.showNextButton = !value;
    this.showBackButton = !value;
    this.showConfirmButton = !value;
    this.showChangeButton = !value;
    this.showResetButton = value;
  },
  set showLoader( value ) {
    this._setterShow( '_showLoader', value );
    this.showNextButton = !value;
    this.showBackButton = !value;
    this.showConfirmButton = !value;
    this.showChangeButton = !value;
    this.showResetButton = !value;
  },
  set paymentId( value ) {
    this._paymentId.value = value;
    Array.prototype.forEach.call( this._paymentId.target, item => item.innerText = value );
  },
  set showNextButton( value ) {
    this._setterShow( '_showNextButton', value );
  },
  set showConfirmButton( value ) {
    this._setterShow( '_showConfirmButton', value );
  },
  set showResetButton( value ) {
    this._setterShow( '_showResetButton', value );
  },
  /*
  set onePaymentType( value ) {
    this._setter( '_onePaymentType', value );
    [].forEach.call( this._onePaymentType.target, item => item.disabled = !value );
  },*/
  set typeRecurence( value ) {
    this._setter( '_typeRecurence', value );
  },
  set dateRecurence( value ) {
    this._setter( '_dateRecurence', value );
  },
  set iban( value ) {
    this._setter( '_iban', value );
  },
  set bic( value ) {
    this._setter( '_bic', value );
  },
  set siren( value ) {
    this._setter( '_siren', value );
  },
  set formMoral( value ) {
    this._setter( '_formMoral', value );
  }
};