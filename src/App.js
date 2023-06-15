import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Athletico-PR',
      cor: '#d31b17'
    },
    {
      id: uuidv4(),
      nome: 'América-MG',
      cor: '#169c45'
    },
    {
      id: uuidv4(),
      nome: 'Atletico-MG',
      cor: '#121211'
    },
    {
      id: uuidv4(),
      nome: 'Bahia',
      cor: '#3229ae'
    },
    {
      id: uuidv4(),
      nome: 'Botafogo',
      cor: '#c0c0c0'
    },
    {
      id: uuidv4(),
      nome: 'Corithians',
      cor: '#FFf'
    },
    {
      id: uuidv4(),
      nome: 'Coritiba',
      cor: '#169c45'
    },
    {
      id: uuidv4(),
      nome: 'Cruzeiro',
      cor: '#3229ae'
    },
    {
      id: uuidv4(),
      nome: 'Cuiabá',
      cor: '#169c45'
    },
    {
      id: uuidv4(),
      nome: 'Flamengo',
      cor: '#d31b17'
    },
    {
      id: uuidv4(),
      nome: 'Fluminense',
      cor: '#961333'
    },
    {
      id: uuidv4(),
      nome: 'Fortaleza',
      cor: '#3229ae'
    },
    {
      id: uuidv4(),
      nome: 'Goiás',
      cor: '#169c45'
    },
    {
      id: uuidv4(),
      nome: 'Grêmio',
      cor: '#3229ae'
    },
    {
      id: uuidv4(),
      nome: 'Internacional',
      cor: '#d31b17'
    },
    {
      id: uuidv4(),
      nome: 'Palmeiras',
      cor: '#169c45'
    },
    {
      id: uuidv4(),
      nome: 'Bragantino',
      cor: '	#191970'
    },
    {
      id: uuidv4(),
      nome: 'Santos',
      cor: '#FF8A29'
    },
    {
      id: uuidv4(),
      nome: 'São Paulo',
      cor: '#FFF'
    },
    {
      id: uuidv4(),
      nome: 'Vasco',
      cor: '#000'
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Francisco Soares',
      cargo: 'Atacante',
      imagem: '/imagens/img-jogador/tiquinho.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Luis Henrique',
      cargo: 'Meia',
      imagem: '/imagens/img-jogador/luis.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Lucas Fernandes',
      cargo: 'Meia',
      imagem: '/imagens/img-jogador/lucas.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'Junior Santos',
      cargo: 'Meia',
      imagem: '/imagens/img-jogador/junior.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Roni',
      cargo: 'Atacante',
      imagem: '/imagens/img-jogador/roni.png',
      time: times[15].nome
    },
    {
      id: uuidv4(),
      nome: 'Artur',
      cargo: 'Atacante',
      imagem: '/imagens/img-jogador/artur.png',
      time: times[15].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Rafael Veiga',
      cargo: 'Atacante',
      imagem: '/imagens/img-jogador/veiga.png',
      time: times[15].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Dudu',
      cargo: 'Atacante',
      imagem: '/imagens/img-jogador/dudu.png',
      time: times[15].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Gabriel Barbosa',
      cargo: 'Atacante',
      imagem: '/imagens/img-jogador/gabigol.png',
      time: times[9].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'De Arrascaeta',
      cargo: 'Meia',
      imagem: '/imagens/img-jogador/arrascaeta.png',
      time: times[9].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Pedro',
      cargo: 'Atacante',
      imagem: '/imagens/img-jogador/pedro.png',
      time: times[9].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Everton Ribeiro',
      cargo: 'Meia',
      imagem: '/imagens/img-jogador/evert.png',
      time: times[9].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Marcelo',
      cargo: 'Lateral',
      imagem: '/imagens/img-jogador/marcelo.png',
      time: times[10].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Jhon Arias',
      cargo: 'Meia',
      imagem: '/imagens/img-jogador/arias.png',
      time: times[10].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Paulo Henrique',
      cargo: 'Meia',
      imagem: '/imagens/img-jogador/ganso.png',
      time: times[10].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Germán Cano',
      cargo: 'Atacante',
      imagem: '/imagens/img-jogador/cano.png',
      time: times[10].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Hulk',
      cargo: 'Atacante',
      imagem: '/imagens/img-jogador/hulk.png',
      time: times[2].nome
    },    {
      id: uuidv4(),
      favorito: false,
      nome: 'Allan',
      cargo: 'Meia',
      imagem: '/imagens/img-jogador/allan.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Vargas',
      cargo: 'Atacante',
      imagem: '/imagens/img-jogador/vargas.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Edenilson',
      cargo: 'Meia',
      imagem: '/imagens/img-jogador/edenilson.png',
      time: times[2].nome
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCor(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  function cadastrarTime({ nome, cor }) {
    setTimes([...times, { nome, cor, id: uuidv4() }])
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador;
    }))
  }


  return (
    <div>
      <Banner />
      <Formulario aoCriarTime={cadastrarTime} times={times.map(time => time.nome)} aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} />
      <section className="times">
        <h1>Melhores da semana</h1>
        {times.map((time, indice) => <Time mudarCor={mudarCor} key={indice} time={time} colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} aoDeletar={deletarColaborador} aoFavoritar={resolverFavorito} />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
