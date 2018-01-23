import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import ReactCreditCards from 'react-credit-cards';

class Forms extends Component {
  constructor() {
    super();
    this.state = {
      // states
    }
  };

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
        <label className="form-label">
            CEP
            <InputMask className="form-input" mask="99999-999" />
            <span className="form-helper">Não sei meu CEP</span>
        </label>
        </div>

        <div className="form-wrapper">
        <h4 className="form-title">Confirme seu endereço de cobrança</h4>
        <label className="form-label">
            Logradouro
            <input className="form-input form-input-addr" type="text"></input>
        </label>

        <label className="form-label">
            Número
            <input className="form-input form-input-addr-num" type="text"></input>
        </label>

        <label className="form-label">
            Complemento
            <input className="form-input form-input-compl" type="text"></input>
        </label>

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
        <div className="form-wrapper">
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
      </section>
    );
  }
}

export default Forms;
