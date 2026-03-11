<?php
session_start();
include "conexion.php";


$correo = $_POST['correo'] ?? '';
$contrasena = $_POST['contrasena'] ?? '';


$sql = "SELECT * FROM usuario
        WHERE correo = '$correo'
        AND contrasena = '$contrasena'";


$resultado = mysqli_query($conexion, $sql);


if ($resultado && mysqli_num_rows($resultado) > 0) {
    $_SESION['username'] = $usuario;
    header("Location: ../dashboard/dashboard.html");
    exit();



} else {
    echo "DATOS INCORRECTOS";
}
?>