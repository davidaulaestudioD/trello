$(document).ready(function() {
    //Hacer todas las listas ordenables
    $("#listaIdea, #listaToDo, #listaDoing, #listaDone").sortable({
        connectWith: "#listaToDo, #listaDoing, #listaDone",
        placeholder: "highlight",
        opacity: 0.5,
        tolerance: "pointer",    //Posiciona la tarjeta donde el cursor
        items: "> li"   //Para que solo puedas ordenar los <li>
    }).disableSelection(); //Evita seleccionar texto sin querer

});