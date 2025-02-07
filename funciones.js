/*
$(document).ready(function() {
    // Mostrar el formulario cuando se presiona el botón de agregar tarea
    $("#addTask").click(function() {
        $("#taskForm").fadeIn();
    });

    // Manejar el envío del formulario
    $("#submitTask").click(function() {
        let taskName = $("#taskName").val();
        let taskDescription = $("#taskDescription").val();
        let taskNotes = $("#taskNotes").val();
        let taskCollaborators = $("#taskCollaborators").val();
        
        if (taskName.trim() !== "") {
            let task = $("<div class='task'></div>").append(
                `<strong>${taskName}</strong>
                <p>${taskDescription}</p>
                <small>Notas: ${taskNotes}</small>
                <br>
                <small>Colaboradores: ${taskCollaborators}</small>`
            );
            
            $("#idea").append(task);
            
            // Limpiar el formulario y ocultarlo
            $("#taskForm").fadeOut();
            $("#taskForm input, #taskForm textarea").val("");
        }
    });
});
*/
$(document).ready(function() {
    // Hacer que las columnas sean zonas donde se puedan soltar tareas
    $(".column").sortable({
        connectWith: ".column",
        placeholder: "task-placeholder",
        receive: function(event, ui) {
            // Se podría agregar lógica adicional aquí si es necesario
        }
    }).disableSelection();

    // Mostrar el formulario cuando se presiona el botón de agregar tarea
    $("#addTask").click(function() {
        $("#taskForm").fadeIn();
    });

    // Manejar el envío del formulario
    $("#submitTask").click(function() {
        let taskName = $("#taskName").val();
        let taskDescription = $("#taskDescription").val();
        let taskNotes = $("#taskNotes").val();
        let taskCollaborators = $("#taskCollaborators").val();
        
        if (taskName.trim() !== "") {
            let task = $("<div class='task'></div>").append(
                `<strong>${taskName}</strong>
                <p>${taskDescription}</p>
                <small>Notas: ${taskNotes}</small>
                <br>
                <small>Colaboradores: ${taskCollaborators}</small>`
            );
            
            $("#idea").append(task);
            
            // Hacer que la nueva tarea sea arrastrable
            $(".task").draggable({
                revert: "invalid",
                opacity: 0.50,
                zIndex: 100
            });

            // Limpiar el formulario y ocultarlo
            $("#taskForm").fadeOut();
            $("#taskForm input, #taskForm textarea").val("");
        }
    });

    // Hacer que las tareas sean arrastrables
    $(".task").draggable({
        revert: "invalid",
        zIndex: 100
    });
});
