import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import ReactCreditCards from 'react-credit-cards';

class Forms extends Component {
  constructor() {
    super();
    this.state = {
      addressCep: '',
      addressAdr: '',
      addressNum: '',
      addressUF: '',
      addressCity: '',
      addressType: 'same', // same or diferent local
      ccNum: '',
      ccName: '',
      ccDtMonth: '',
      ccDtYear: '',
      ccCVC: '',
      ccFocused: '' // for React Credit cards component
    };

    this.handleCardForm = this.handleCardForm.bind(this);
    this.handleAddressType = this.handleAddressType.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleCardForm(event, input, focused) {
    this.setState({
      [input]: event.target.value.toString(),
      ccFocused: focused
    });
  }

  handleAddressType(event, type) {
    this.setState({
      addressType: type
    });
  }

  submitForm(event) {
    let formError = false;
    let addrFields = ['addressAdr', 'addressNum', 'addressUF', 'addressCity'];
    let reqFields = ['ccNum', 'ccName', 'ccDtMonth', 'ccDtYear', 'ccCVC', 'addressCep'];

    reqFields.map(item => {
      if (this.state[item] === '') {
        formError = true;
      }
    })

    if (this.state.addressType === 'diferent') {
      addrFields.map(index => {
        if (this.state[index] === '') {
          formError = true;
        }
      })
    }

    this.props.submitFormError(formError);
  }

  render() {
    return (
      <div className='main-form col-lg-9'>
        <h3 className='form-title'>Pagamento</h3>

        <div className='form-wrapper'>
          <h4 className='form-title'>Endereço de cobrança</h4>
          <button className={`btn form-btn ${this.state.addressType === `same` ? `form-btn-active` : ``}`}
            onClick={(event) => this.handleAddressType(event, 'same')}
          >
            É o mesmo da Entrega
          </button>
          <button className={`btn form-btn ${this.state.addressType === `diferent` ? `form-btn-active` : ``}`}
            onClick={(event) => this.handleAddressType(event, 'diferent')}
          >
            É diferente da Entrega
          </button>
        </div>{/*form wrapper*/}

        <div className='form-wrapper'>
          <h4 className='form-title'>Qual o seu CEP de cobrança</h4>
          <div className='form-items'>
            <label className='form-label'>
              CEP
              <InputMask
                className={`form-input ${(this.props.submitErr && this.state.addressCep === '') ? `form-input-err` : ``}`}
                mask='99999-999'
                onChange={(event) => this.handleCardForm(event, 'addressCep', '')}
                value={this.state.addressCep}
              />
              <span className='form-helper'>Não sei meu CEP</span>
            </label>
          </div>
        </div>{/*form wrapper*/}

        {this.state.addressType === 'diferent' &&

          <div className='form-wrapper'>
            <h4 className='form-title'>Confirme seu endereço de cobrança</h4>
            <div className='form-items'>
              <label className='form-label'>
                Logradouro
                <input
                  className={`form-input form-input-addr ${(this.props.submitErr && this.state.addressType === 'diferent' && this.state.addressAdr === '') ? `form-input-err` : ``}`}
                  onChange={(e) => this.handleCardForm(e, 'addressAdr', '')}
                  value={this.state.addressStreet}
                  type='text'
                />
              </label>
            </div>

            <div className='form-items'>
              <label className='form-label'>
                Número
                <input
                  className={`form-input form-input-addr-num ${(this.props.submitErr && this.state.addressType === 'diferent' && this.state.addressNum === '') ? `form-input-err` : ``}`}
                  onChange={(e) => this.handleCardForm(e, 'addressNum', '')}
                  value={this.state.addressNum}
                  type='text'
                />
              </label>
            </div>

            <div className='form-items'>
              <label className='form-label'>
                Complemento
                <input className='form-input form-input-compl' type='text' />
              </label>
            </div>

            <div className='form-items'>
              <label className='form-label'>
                UF
                <div
                  className={`form-select form-select-uf ${(this.props.submitErr && this.state.addressType === 'diferent' && this.state.addressUF === '') ? `form-select-err` : ``}`}
                >
                  <select onChange={(event) => this.handleCardForm(event, 'addressUF', '')}>
                    <option>--</option>
                    <option>BA</option>
                    <option>PB</option>
                    <option>PE</option>
                  </select>
                </div>
              </label>
            </div>

            <div className='form-items'>
              <label className='form-label'>
                Cidade
                <div
                  className={`form-select form-select-city ${(this.props.submitErr && this.state.addressType === 'diferent' && this.state.addressCity === '') ? `form-select-err` : ``}`}
                >
                  <select onChange={(event) => this.handleCard(event, 'addressCity', '')}>
                    <option>--</option>
                    <option>Garanhuns</option>
                    <option>Recife</option>
                    <option>João Pessoa</option>
                  </select>
                </div>
              </label>
            </div>
          </div> //form wrapper
        }

        <div className='form-wrapper'>
          <h4 className='form-title'>Dados do cartão</h4>

          <ReactCreditCards
            number={this.state.ccNum}
            name={this.state.ccName}
            expiry={`${this.state.ccYear}/${this.state.ccMonth}`}
            cvc={this.state.ccCVC}
            focused={this.state.ccFucused}
          />

          <div className='form-items'>
            <label className='form-label'>
              Número
              <InputMask
                className={`form-input form-input-cc-num ${(this.props.submitErr && this.state.ccNum === '') ? `form-input-err` : ``}`}
                mask='9999 9999 9999 9999'
                maskChar=''
                onChange={(event) => this.handleCardForm(event, 'ccNum', 'number')}
                value={this.state.ccNumber}
              />
            </label>
          </div>

          <div className='form-items'>
            <label className='form-label'>
              Nome
              <input
                className={`form-input form-input-cc-name ${(this.props.submitErr && this.state.ccName === '') ? `form-input-err` : ``}`}
                onChange={(event) => this.handleCardForm(event, 'ccName', 'name')}
                value={this.state.ccName}
              />
            </label>
          </div>
          </div>
          <div className='form-items'>
            <label className='form-label'>
              Validade
              <div
                className={`form-select form-select-uf ${(this.props.submitErr && this.state.ccYear === '') ? `form-select-err` : ``}`}
              >
                <select onChange={(e) => this.handleCardForm(e, 'ccYear', 'expiry')}>
                  <option>--</option>
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                </select>
              </div>
            </label>
          </div>

          <div className='form-items'>
            <label className='form-label'>
              <div
                className={`form-select form-select-uf ${(this.props.submitErr && this.state.ccMonth === '') ? `form-select-err` : ``}`}
              >
                <select onChange={(event) => this.handleCardForm(event, 'ccMonth', 'expiry')}>
                  <option></option>
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                  <option>04</option>
                  <option>05</option>
                  <option>06</option>
                </select>
              </div>
            </label>
          </div>

          <div className='form-items'>
            <label className='form-label'>
              Código de segurança
              <InputMask
                className={`form-input form-input-cc-cvc ${(this.props.submitErr && this.state.ccCVC === '') ? `form-input-err` : ``}`}
                mask='999'
                maskChar=''
                onChange={(event) => this.handleCardForm(event, 'ccCVC', 'cvc')}
                value={this.state.ccCVC}
              />
            </label>
          </div>

        <div className='form-wrapper'>
          <h4 className='form-title'>Valor e parcelamento</h4>
          <label className='form-label'>
            <div className='form-select form-select-cc-installments'>
              <select>
                <option>5x de R$132,00</option>
                <option>4x de R$165,00</option>
                <option>3x de R$220,00</option>
                <option>2x de R$330,00</option>
                <option>1x de R$660,00</option>
              </select>
            </div>
          </label>
        </div>

        <div className='form-wrapper'>
            <button className='btn form-btn'>Voltar</button>
            <button 
              onClick={this.submitForm}
              className='btn form-btn form-btn-active'>Finalizar compra</button>
        </div>
      </div>
    );
  }
}

export default Forms;
