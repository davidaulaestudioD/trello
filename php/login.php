<?php
session_start();
require '../vendor/autoload.php'; 

use MongoDB\Client;

$mongoClient = new Client("mongodb+srv://davidad:a4B36EDB@clase.6z984.mongodb.net/?retryWrites=true&w=majority&appName=CLASE");
$db = $mongoClient->kanban;
$coleccion = $db->usuarios;

//GUARDO DATOS DE INCICIO DE SESION Y HAGO LA CONSULTA, SI COINCIDEN LOS PARAMETROS SE GUARDAN LOS DATOS EN SESION Y TE LLEVA MENU
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = $_POST["usuario"];
    $contraseña = $_POST["contraseña"];

    // Buscar usuario en la base de datos
    $usuario_buscado = $coleccion->findOne(["usuario" => $usuario]);
    
    
    if ($usuario == $usuario_buscado["usuario"] && $contraseña == $usuario_buscado["contraseña"]) {
        $_SESSION["usuario"] = $usuario_buscado["usuario"];
        $_SESSION["rol"] = $usuario_buscado["rol"]; // Guardar rol en sesión
        echo json_encode(["success" => true]);
        header("Location: ../kanban.html");
    } else {
        echo json_encode(["success" => false, "message" => "Usuario o contraseña incorrectos"]);
        header("Location: index.html");
    }
    
}

?>