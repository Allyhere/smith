let felipe_smith = ['Juliana?', 'achei','Adriano?','seu cu','faz isso comigo não véi','Romero Britto?','se eu to chamando?','Katrina?', 'É obvio velho','vai doer pra caralho meu braço velho','Guarapari - Buzios é minha arte','obrigado','Eu tenho quantos anos gente?','rave, RAVE?!','Felipe','Smith','seu cu','mata o papai',16 , 18, 'quebro véi','quebro meu braço', 'QUEBRO O MEU BRAÇO VÉI','Marcelo, não', 14, 'Romero Britto?', 'minha vida', 'acabou', 'Red Bull?®','Eu não sei nem onde eu tô véi','5 Km?', 'Minha vida','Samu? Seu cu', 'jamais será', 'pega um incenso pra mim pelo amor de deus', 'Antonella Caroline', 'Meu gol', 'Cristiano Ronaldo', 'Seu cu lugo Marcelo', 'MARCELO', 'Meu braço vai doer, por favor!!', 'não faz isso comigo', 'Guarapari minha arte', 'que foi cabeleira?', 'não faz isso comigo não', 'Milton Nascimento', 'minha arte', 'PC Gusmão', 'Vo fica pelado aqui', 'da o cu', 'sai cagando', 'eu juro vo sair cagando', 'arquitetura?', 'seu cu', 'Katrina', 'Luca', 'Jarbas', 'Jarbas... meu pai?', 'O MEU PAI??','grafite', 'Lais, minha vida', 'Renata Clara Pimenta', 'misericórdia', 'Bruno?', 'debaixo da ponte?', 'BRUNO??', 'sai daê doido', 'ce é mó playboy', 'minha vida?', 'só agora?', 'Red Bull?®', 'Antonella Caroline', 'seu cu', 'seu cu velho', 'QUEBRO MEU BRAÇO TA BRANCO VÉI', 'Ta branco tiro na cabeça Marcelo', 'No meu cu?', 'coé PC?', 'COÉ PC???', 'Juliana?', 'seu cu', 'Na panela?', 'achei a mina', 'arquitetura', 'piscina?' ] ;

let fe_len = felipe_smith.length;
let containers = document.querySelectorAll('.word');
let author = document.querySelector('.final');

let get_word = () =>{
    for(i = 0; i < 5; i++){
        index = Math.floor(Math.random() * felipe_smith.length);
        containers[i].innerHTML = felipe_smith[index].charAt(0).toUpperCase() + felipe_smith[index].slice(1);
        author.style.visibility = 'visible';
        console.log(`${felipe_smith[index]}, ${index}`);
    }
};
