//  1ro capturamos el btn hamburguesa, que tiene la clase toggle y lo almacenamos en una variable

const btn = document.querySelector('.btn'); 

// 2do capturamos la lista ul de links, es decir el el tag ul y lo almacenamos en una variable

const ul = document.querySelector('ul');

// 3ro agregamos un evento click sobre el btn que ahora esta dentro de una const toggle

btn.addEventListener('click', () => {

    
    console.log ('click');

    // 4to el click efectuará un método sobre la lista (que ahora esta almecenada en una const ul), 
    // le aplicará un método classList  que busca dentro de un elemento html las clases buscadas y que 
    // además si se le añade el parámetro toggle al método, hara que el elemento si no tiene la clase,
    // que lo tenga y si la tiene que no, actúa como interruptor

    ul.classList.toggle('show');

    // showNav es la clase que hace que la ul vuelva a su lugar normal, que no se ven cuando el btn no se 
    // presiona. en nombre de la clase va sin el . delante!!
});