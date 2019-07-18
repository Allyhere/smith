let felipe_smith = ['Juliana?', 'achei','Adriano?','seu cu','faz isso comigo não véi','Romero Britto?','se eu to chamando?','Katrina?', 'é obvio velho','vai doer pra caralho meu braço velho','Guarapari - Buzios é minha arte','obrigado','eu tenho quantos anos gente?','rave, RAVE?!','Felipe','Smith','seu cu','mata o papai','16' ,'18', 'quebro véi','quebro meu braço', 'QUEBRO O MEU BRAÇO VÉI','Marcelo, não', '14', 'Romero Britto?', 'minha vida', 'acabou', 'Red Bull?®','eu não sei nem onde eu tô véi','5 Km?', 'minha vida','samu? Seu cu', 'jamais será', 'pega um incenso pra mim pelo amor de deus', 'Antonella Caroline', 'meu gol', 'Cristiano Ronaldo', 'seu cu lugo Marcelo', 'MARCELO', 'meu braço vai doer, por favor!!', 'não faz isso comigo', 'Guarapari minha arte', 'que foi cabeleira?', 'não faz isso comigo não', 'Milton Nascimento', 'minha arte', 'PC Gusmão', 'vo fica pelado aqui', 'da o cu', 'sai cagando', 'eu juro vo sair cagando', 'arquitetura?', 'seu cu', 'Katrina', 'Luca', 'Jarbas', 'Jarbas... meu pai?', 'O MEU PAI??','grafite', 'Lais, minha vida', 'Renata Clara Pimenta', 'misericórdia', 'Bruno?', 'debaixo da ponte?', 'BRUNO??', 'sai daê doido', 'ce é mó playboy', 'minha vida?', 'só agora?', 'Red Bull?®', 'Antonella Caroline', 'seu cu', 'seu cu velho', 'QUEBRO MEU BRAÇO TA BRANCO VÉI', 'ta branco tiro na cabeça Marcelo', 'no meu cu?', 'coé PC?', 'COÉ PC???', 'Juliana?', 'seu cu', 'na panela?', 'achei a mina', 'arquitetura', 'piscina?'];

let felipe_smith2 = ['Juliana?', 'achei','Adriano?','seu cu','faz isso comigo não véi','Romero Britto?','se eu to chamando?','Katrina?', 'é obvio velho','vai doer pra caralho meu braço velho','Guarapari - Buzios é minha arte','obrigado','eu tenho quantos anos gente?','rave, RAVE?!','Felipe','Smith','seu cu','mata o papai','16' ,'18', 'quebro véi','quebro meu braço', 'QUEBRO O MEU BRAÇO VÉI','Marcelo, não', '14', 'Romero Britto?', 'minha vida', 'acabou', 'Red Bull?®','eu não sei nem onde eu tô véi','5 Km?', 'minha vida','samu? Seu cu', 'jamais será', 'pega um incenso pra mim pelo amor de deus', 'Antonella Caroline', 'meu gol', 'Cristiano Ronaldo', 'seu cu lugo Marcelo', 'MARCELO', 'meu braço vai doer, por favor!!', 'não faz isso comigo', 'Guarapari minha arte', 'que foi cabeleira?', 'não faz isso comigo não', 'Milton Nascimento', 'minha arte', 'PC Gusmão', 'vo fica pelado aqui', 'da o cu', 'sai cagando', 'eu juro vo sair cagando', 'arquitetura?', 'seu cu', 'Katrina', 'Luca', 'Jarbas', 'Jarbas... meu pai?', 'O MEU PAI??','grafite', 'Lais, minha vida', 'Renata Clara Pimenta', 'misericórdia', 'Bruno?', 'debaixo da ponte?', 'BRUNO??', 'sai daê doido', 'ce é mó playboy', 'minha vida?', 'só agora?', 'Red Bull?®', 'Antonella Caroline', 'seu cu', 'seu cu velho', 'QUEBRO MEU BRAÇO TA BRANCO VÉI', 'ta branco tiro na cabeça Marcelo', 'no meu cu?', 'coé PC?', 'COÉ PC???', 'Juliana?', 'seu cu', 'na panela?', 'achei a mina', 'arquitetura', 'piscina?',',',',',',',',',',',',',',','.','.','.' ];
// 

let container = document.querySelectorAll('.word');
let author = document.querySelector('.final');
let phrase = [''];
let phrase_cont = document.querySelector('.total');

let lorem_cont = document.querySelector('.lorem');
let lorem_arry = [''];



//-----------DOM das palavras
let get_word = () =>{

    for(i = 0; i < 5; i++){
        index = Math.floor(Math.random() * felipe_smith.length);
        container[i].innerHTML = felipe_smith[index].charAt(0).toUpperCase() + felipe_smith[index].slice(1);
        author.style.visibility = 'visible';
    }
};


//-----------Lorem Ipsum
let lorem = (quantity) =>{
    for(i = 0; i < quantity; i++){
        index = Math.floor(Math.random() * felipe_smith2.length);
        let loremlen = felipe_smith2[index].split("").pop().charAt(0); //pega a ultima letra da próxima palavra
        
        if(index == "," || index == "."){
            lorem_arry += felipe_smith2[index + 1].split("")[0].charAt(0).toUpperCase() + felipe_smith2[index].slice(1);    
        }
        else if(loremlen == "!" || loremlen == "?"){
            lorem_arry += " " + felipe_smith2[index].split("")[0].toUpperCase() + felipe_smith2[index].slice(1);
        }
        else if(loremlen == " "){
            lorem_arry += " " + felipe_smith2[index].slice(1);
        }
        else{
            lorem_arry += " " + felipe_smith2[index];     
        }
        if(lorem_arry[0].charAt(0) == " " || lorem_arry[0].charAt(0) == "." || lorem_arry[0].charAt(0) == "," ){
            lorem_arry.slice(1).toUpperCase();
        }
        lorem_arry[i].toUpperCase();
        
    }
}
// lorem_arry[lorem_arry.split("").length-1].charAt(0);



//----------Tentativa de gerir a animação

/*let clear = () =>{
    let i = 0;
    author.style.visibility = 'hidden';
    container.forEach(node => {
        node.innerHTML = "";
        container[i].classList.add(".hide");
        i++;
    });
}*/


//----------copiar para área de transferência

/*let run = () =>{
    container.forEach(node => {
        phrase.push(node.textContent);
        phrase_cont.innerHTML = phrase.join(" ");
    });
    copy();
}

let copy = () =>{
    let range = document.createRange();
    range.selectNode(phrase_cont);
    window.getSelection().addRange(range);
    document.execCommand("copy");
    alert("copied!");
}
*/