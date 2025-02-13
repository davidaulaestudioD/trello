$(document).ready(function() {
    function movimiento() {
        $("#listaIdea, #listaToDo, #listaDoing, #listaDone").sortable({
            connectWith: "#listaToDo, #listaDoing, #listaDone",
            placeholder: "highlight",
            opacity: 0.5,
            tolerance: "pointer",
            items: "> .task",
            /*
            stop: function(event, ui) {
                actualizarEstadoTarjeta(ui.item);
            }
            */
        }).disableSelection();
    }
    
    //CARGAR TARJETAS DESDE EL SERVIDOR
    function cargarTarjetas() {
        $.ajax({
            url: 'php/cargarTarjetas.php',
            method: 'GET',
            dataType: 'json',
            success: function(tarjetas) {

                //$("#listaIdea, #listaToDo, #listaDoing, #listaDone").empty();
                tarjetas.forEach(tarjeta => {
                    let tarjetaHTML = `
                        <li class="task">
                            <strong>${tarjeta.tarea}</strong>
                            <p>${tarjeta.descripcion}</p>
                            <small><b>Colaboradores:</b> ${tarjeta.colaboradores.join(", ") || "Ninguno"}</small>
                        </li>
                    `;
    
                    switch (tarjeta.estado) {
                        case "Idea":
                            $("#listaIdea").append(tarjetaHTML);
                            break;
                        case "To do":
                            $("#listaToDo").append(tarjetaHTML);
                            break;
                        case "Doing":
                            $("#listaDoing").append(tarjetaHTML);
                            break;
                        case "Done":
                            $("#listaDone").append(tarjetaHTML);
                            break;
                    }
                });

                movimiento();
                console.log("hola");
               
            },
            error: function() {
                $("#error-message").text("Error al cargar las tarjetas").show();
                console.log("no se recivio respuesta");
                
            }
        });
    }

    

    // Cargar tarjetas al inicio
    cargarTarjetas();
});
