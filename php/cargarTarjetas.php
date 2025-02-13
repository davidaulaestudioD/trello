<?php
session_start();
require '../vendor/autoload.php';

use MongoDB\Client;

// Verificar si el usuario está autenticado
if (!isset($_SESSION["usuario"])) {
    echo json_encode(["error" => "No autorizado"]);
    exit();
}

// Conexión a MongoDB
$mongoClient = new Client("mongodb+srv://davidad:a4B36EDB@clase.6z984.mongodb.net/?retryWrites=true&w=majority&appName=CLASE");
$db = $mongoClient->kanban;
$coleccion = $db->tarjetas;

// Obtener todas las tarjetas de la base de datos
$tarjetas = $coleccion->find();

// Convertir el cursor a un array de PHP
$tarjetasArray = [];
foreach ($tarjetas as $tarjeta) {
    $tarjetasArray[] = [
        "tarea" => $tarjeta["tarea"],
        "descripcion" => $tarjeta["descripcion"],
        "colaboradores" => $tarjeta["colaboradores"],
        "estado" => $tarjeta["estado"],
        "propietario" => $tarjeta["propietario"]
    ];
}

// Devolver en formato JSON
header('Content-Type: application/json');
echo json_encode($tarjetasArray);
?>
