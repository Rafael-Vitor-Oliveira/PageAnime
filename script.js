const main = document.querySelector('#container');
const characterDescription = document.querySelector('.characterDescription');
const titleCharacter = document.querySelector('.titleCharacter');
const initialDescriptionBody = document.getElementsByClassName('satoru');

const addHeader = ()=> {
    const createHeader = document.createElement('header');
    createHeader.innerHTML = 
    `
    <img src="./assets/logo/logoJujutsu.png" alt="logoJujutsu" class="logoJujutsu">
    <img src="./assets/logo/logoJujutsuJapan.png" alt="logoJujutsuJapan" class="logoJujutsuJapan">
    `;
    const findSection = document.querySelector('section');
    main.insertBefore(createHeader, findSection);
}
addHeader();
const addClassBody = ()=> {
    main.classList.add('satoru');
}
const initialDescription = () =>{
    addClassBody();
    if(initialDescriptionBody){
        gojo();
    }
}
initialDescription();
function yuji(){
    console.log('oi');
    main.removeAttribute('class');
    main.classList.add('yuji');
    titleCharacter.innerHTML = 'Yuji Itadori';
    characterDescription.innerHTML = 
    'Aluno da escola Jujutsu de Tokyo, é o protagonisma de Jujutsu Kaisen e receptáculo de uma Maldição, considerada o &quotRei das Maldições&quot, Ryomen Sukuna. Ele é famoso por ter uma força sobre-humana, antes mesmo de se tornar o receptáculo de Sukuna, que fez após ter impulsivamente engolido um de seus dedos, que continha a energia amaldiçoada da Maldição, a fim de salvar a vida de Megumi. Sua maior arma são seus punhos, que reforça com energia amaldiçoada, para dar grandes impactos em seus oponentes.';
}
function gojo(){
    main.removeAttribute('class');
    main.classList.add('satoru');
    titleCharacter.innerHTML = 'Satoru Gojo';
    characterDescription.innerHTML = 
    'Professor dos alunos da escola Jujutsu de Tokyo, Também conhecido como <span>&quotO Feiticeiro mais forte do mundo&quot</span>, é membro do Clã dos Seis Olhos, de onde herdou técnicas que consedem a ele poderes extraordinários, que são eles os <span>&quotSeis olhos&quot</span>, lhe dá uma visão e conciência excepcionais, além de um incrível poder de processamento mental. E o <span>&quotInfinito&quot</span>, conseguindo manipular o espaço em nível atômico para produzir &quotimpossibilidades&quot para vários efeitos sob seu comando. Junto com os <span>&quotSeis olhos&quot</span>, Satoru Gojo pode utilizar esta técnica em seu potencial máximo.';
}
function nobara(){
    main.removeAttribute('class');
    main.classList.add('nobara');
    titleCharacter.innerHTML = 'Nobara Kugisaki';
    characterDescription.innerHTML = 
    'Aluna da escola Jujutsu de Tokyo, ela é uma mulher impetuosa e autoconfiante que acredita fortemente em ser &quotverdadeira&quot consigo mesma, Nobara já mostrou ser fisicamente mais forte do que aparenta, sendo capaz de dar muito trabalho aos Feiticeiros Jujutsu de seu nível, nos treinamentos em que tiveram. Sua maior arma é seu martelo, junto a pregos que reforça com energia amaldiçoada para criar seus feitiços.';
}
function megumi(){
    main.removeAttribute('class');
    main.classList.add('megumi');
    titleCharacter.innerHTML = 'Megumi Fushiguro';
    characterDescription.innerHTML =
    'Aluno da escola Jujutsu de Tokyo, é dos descendentes da Família Zehin, que tem forte influência no Mundo Jujutsu. Megumi deseja ajudar a proteger as pessoas que ele considera boas ou gentis, embora aparente ser estóico e calculista, ele acredita que o mundo é injusto e que um Feiticeiro é uma ferramenta para garantir que pessoas boas tenham mais chances de viver. Ele é dono de uma técnica original de sua família, a <span>&quotTécnica das Dez Sombras&quot</span> que lhe permite criar dez <span>Shikigamis</span>, cada um com atributos e habilidades diferentes.';
}
function nanami(){
    main.removeAttribute('class');
    main.classList.add('nanami');
    titleCharacter.innerHTML = 'Kento Nanami';
    characterDescription.innerHTML =
    'É um ex-aluno da Escola Jujutsu, que a deixou após ter se formado, afim de ganhar algum dinheiro, para viver uma vida tranquila e normal. Nanami é um homem sábio e reservado, parece ser o tipo de pessoa que leva muito a sério seu trabalho, sendo uma inspiração para Yuji. Seu poder cria um ponto fraco em seu oponente, que ao acertar, desfere um dano crítico, além de possuir um pacto de restrição, consigo mesmo, baseado em tempo, ativado após passar de seu tempo de &quottrabalho&quot habitual, concedendo aumento de energia e força.';
}
