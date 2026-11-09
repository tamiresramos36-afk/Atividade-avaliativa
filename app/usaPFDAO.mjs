import PF from './pessoas/PF.js';
import PFDAO from './pessoas/DAOs/PFDAO.mjs';

const pf = new Pf();

pf.setCPF('12345678910');

const end = new CPF();

end.setCPF('12345678910');

pf.setCPF(end);

const pfdao = new PFDAO(pf);

const dados = pfdao.toJSON();

pfdao.saveJSON();

console.log(dados);
console.log(JSON.stringify(dados));
console.log(pfdao.recoveryJSON());