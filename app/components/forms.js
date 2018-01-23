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
  }

  handleCardForm(event, input, focused) {
    this.setState({
      [input]: event.target.value.toString(),
      ccFocused: focused
    });
  }

  render() {
    return (
      <section className="container main">
        <div className="main-form col-lg-9">
          <h3>Pagamento</h3>
        <div className="form-wrapper">
        <h4 className="form-title">Endereço de cobrança</h4>
          <button className="btn form-btn">É o mesmo da Entrega</button>
          <button className="btn form-btn form-btn-active">É diferente da Entrega</button>
        </div>

        <div className="form-wrapper">
        <h4 className="form-title">Qual o seu CEP de cobrança?</h4>
        <div className="form-items">
        <label className="form-label">
            CEP
            <InputMask className="form-input" mask="99999-999" />
            <span className="form-helper">Não sei meu CEP</span>
        </label>
        </div>
        </div>

        <div className="form-wrapper">
        <h4 className="form-title">Confirme seu endereço de cobrança</h4>
        <div className="form-items">
        <label className="form-label">
            Logradouro
            <input className="form-input form-input-addr" type="text"></input>
        </label>
        </div>
        <div className="form-items">
        <label className="form-label">
            Número
            <input className="form-input form-input-addr-num" type="text"></input>
        </label>
        </div>

        <div className="form-items">
        <label className="form-label">
            Complemento
            <input className="form-input form-input-compl" type="text"></input>
        </label>
        </div>

        <div className="form-items">
        <label className="form-label">
            UF
            <div className="form-select form-select-uf">
            <select>
              <option>--</option>
              <option>BA</option>
              <option>PE</option>
              <option>SC</option>
              <option>SP</option>
            </select>
            </div>
        </label>
        </div>
        </div>

        <div className="form-wrapper">
        <div className="form-items">
          <label className="form-label">
            Cidade
            <div className="form-select form-select-city">
            <select>
              <option>--</option>
              <option>Custódia</option>
              <option>Garanhuns</option>
              <option>Recife</option>
            </select>
            </div>
         </label>
         </div>
        </div>

        <div className="form-wrapper">
        <h4 className="form-title">Dados do cartão de crédito</h4>
            <ReactCreditCards
              number={this.state.ccNum}
              name={this.state.ccName}
              expiry={`${this.state.ccDtMonth}/${this.state.ccDtYear}`}
              cvc={this.state.ccCVC}
              focused={this.state.ccFocused}
            />
        </div>

        <div className="form-wrapper">
        <div className="form-items">
        <label className="form-label">
          Número
          <InputMask
            className="form-input form-input-cc-num"
            mask='9999 9999 9999 9999'
            maskChar=''
            onChange={(e) => this.handleCardForm(e, 'ccNum', 'number')}
            value={this.state.ccNumber}
          />
        </label>
        </div>

        <div className="form-items">
        <label className="form-label">
          Nome
          <InputMask
            className="form-input form-input-cc-name"
            onChange={(e) => this.handleCardForm(e, 'ccName', 'name')}
            value={this.state.ccNumber}
          />
        </label>
        </div>
        </div>

        <div className="form-wrapper">
          <div className="form-items">
          <label className="form-label">
            Validade
            <div className="form-select form-select-uf">
            <select onChange={(e) => this.handleCardForm(e, 'ccDtMonth', 'expiry')}>
              <option>Mês</option>
              <option>01</option>
              <option>02</option>
              <option>03</option>
              <option>04</option>
            </select>
            </div>
            <div className="form-select form-select-uf">
            <select onChange={(e) => this.handleCardForm(e, 'ccDtYear', 'expiry')}>
              <option>Ano</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
            </select>
            </div>
         </label>
         </div>

         <div className="form-items">
         <label className="form-label">
         Código de segurança
         <InputMask
           className='form-input form-input-cc-cvc'
           mask='999'
           maskChar=''
           onChange={(e) => this.handleCardForm(e, 'ccCVC', 'cvc')}
           value={this.state.ccCVC}
         />
         </label>
         </div>

        </div>
        </div>
      </section>
    );
  }
}

export default Forms;
