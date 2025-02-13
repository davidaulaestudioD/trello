<?php
session_start();
require '../vendor/autoload.php';

use MongoDB\Client;

if (!isset($_SESSION["usuario"])) {
    echo json_encode(["error" => "No autorizado"]);
    exit();
}

// Conectar a MongoDB
$mongoClient = new Client("mongodb+srv://davidad:a4B36EDB@clase.6z984.mongodb.net/?retryWrites=true&w=majority&appName=CLASE");
$db = $mongoClient->kanban;
$coleccion = $db->tarjetas;

// Obtener datos del POST
$tarea = $_POST["tarea"];
$nuevoEstado = $_POST["nuevoEstado"];

// Actualizar estado en la base de datos
$resultado = $coleccion->updateOne(
    ["tarea" => $tarea],
    ['$set' => ["estado" => $nuevoEstado]]
);

if ($resultado->getModifiedCount() > 0) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => "No se pudo actualizar"]);
}
?>
