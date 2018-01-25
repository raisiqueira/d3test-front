import React, { Component } from 'react';

class ErrorBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showWidget: props.show
    };

    this.handleShowWidget = this.handleShowWidget.bind(this);
  }

  handleShowWidget() {
    this.setState({
      showWidget: false
    });
  }

  componentDidMount() {
    window.top.scrollTo(0,390);
  }

  render() {
    return (
      <div className="container">
        {this.state.showWidget &&
          <div className='box'>
            <span onClick={this.handleShowWidget} className='box-close'>Fechar</span>
            <div className='box-alert'>Preenchimento obrigatório</div>
            <h2 className='box-title'>Falha ao processar os dados do cartão.</h2>
            <p className='box-menssage'>
              Verifique se as informações do seu cartão de crédito estão corretas 
              (Nome, Número, Data de Validade, Código de Segurança).
              <br />
              Se o problema persistir você pode usar outro cartão de crédito ou escolher 
              como forma de pagamento o boleto bancário. 
              Ou então, se preferir, entre em contato com seu banco ou administradora 
              de cartão de crédito e tente realizar a compra novamente.
            </p>
          </div>
        }
      </div>
    )
  }
}

export default ErrorBox;
