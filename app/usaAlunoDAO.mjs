import Aluno from './pessoas/Aluno.js';
import AlunoDAO from './pessoas/DAOs/AlunoDAO.mjs';

const aluno = new Aluno();

aluno.setMatricula('20240001');
aluno.setCurso('ADS');

const alunoDAO = new AlunoDAO(aluno);

const dados = alunoDAO.toJSON();

alunoDAO.saveJSON();

console.log(dados);
console.log(JSON.stringify(dados));
console.log(alunoDAO.recoveryJSON());