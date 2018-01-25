import React, { Component} from 'react';

class CheckoutInfo extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div className='main-items col-lg-4'>
            <h3 className='main-title'>Detalhes da Compra</h3>
            <p className='items-price'>R$ 660,00 <span className='items-price-small'>em até 5x</span></p>
            <div className='items-list'>
            <h4 className='items-list-title'>Você terá direito a:</h4>
            <ul className='items-list-items'>
                <li><strong>01</strong> tênis especial para corrida</li>
                <li><strong>05</strong> peças de vestuário para você correr melhor</li>
                <li><strong>05</strong> acessórios para ajudar no seu desempenho</li>
                <li>Acompanhamento personalizado de profissionais de treino</li>
                <li>Apoio com dicas de nutrição</li>
                <li>Acesso exclusivo ao conteúdo do app <strong>EXP_</strong></li>
            </ul>
            </div>
        </div>
    )
  }
}

export default CheckoutInfo;
