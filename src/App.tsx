import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import Home from "./pages/home";
import Sobre from "./pages/sobre";
import Contato from "./pages/contato";
import Faq from "./pages/faq";
import Integrantes from "./pages/integrantes";
import DiagnosticoPage from "./pages/diagnostico";
import CarreirasPage from "./pages/carreiras";
import TransicaoPage from "./pages/transicao";

// se quiser manter as outras páginas antigas (pacientes, medicos etc.),
// você ainda pode importar aqui também

function App() {
  return (
    <Router>
      <Routes>
        {/* Página inicial de login */}
        <Route path="/" element={<Login />} />

        {/* Plataforma */}
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="/diagnostico" element={<DiagnosticoPage />} />
        <Route path="/carreiras" element={<CarreirasPage />} />
        <Route path="/transicao" element={<TransicaoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
