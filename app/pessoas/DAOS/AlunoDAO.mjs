import AlunoDAO from './AlunoDAO.mjs';
import Aluno from './Aluno.js';

const dao = new AlunoDAO();

const aluno = new Aluno();
aluno.setMatricula('20240001');
aluno.setCurso('ADS');

await dao.inserir(aluno);
console.log(await dao.listar());