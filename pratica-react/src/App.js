import React, {Component} from'react'
import manga from './assets/manga.jpg'

class App extends Component{
  state = {
    nome: 'Samuel',
    idade:25,
    comida_favorita: 'lasanha',
    musicas:['look to you', 'Every Breath You Take','Right Here Waiting']
  }
  render(){
    return(
      <div>
        <h1>{`Meu nome é ${this.state.nome}`}</h1>
        <h2>{`Eu estou com ${this.state.idade} anos`}</h2>
        <h3>{`Minha comida favorita é ${this.state.comida_favorita}`}</h3>
        <ul>
          <h4>Minhas músicas favoritas são :</h4>
          <li>{this.state.musicas[0]}</li>
          <li>{this.state.musicas[1]}</li>
          <li>{this.state.musicas[2]}</li>
        </ul>
        <img src = {manga}/>
        
      </div>
    )
  }
}
export default App
