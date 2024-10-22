import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Lol from './components/ListaDin.jsx'
import Papis from './components/Filho.jsx'
import Resposta from './components/Booleano.jsx'
import Resultado from './components/Tabela.jsx'
import Imagem from './components/Images.jsx'
import DynamicStyleParagraph from './components/Styles.jsx'
import Remover from './components/Tex.jsx'
import Elementary from './components/Elementos.jsx'
import ChildrenComp from './components/Crianca.jsx'
import Alt from './components/Alt.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <>
    <Lol/>
    <br/>
    <Papis/>
    <br/>
    <Resposta  msg={false} />
    <Resultado />
    <Imagem msg="Imagem" />

    <DynamicStyleParagraph isHighlighted={true} text="Texto destacado" />
      <DynamicStyleParagraph isHighlighted={false} text="Texto normal" />
      <ChildrenComp>
          <h2>Title</h2>
          <p>Paragraph</p>
          <p>Renderização no children</p>
      </ChildrenComp>
      <br />
      <Elementary/>
        <br />
      <Remover/>
      <br />
      <Alt/>
      <br />
    </>
    <App />
  </StrictMode>,
) 
