<?
header('Access-Control-Allow-Origin: *');
/**
 * Created by PhpStorm.
 * User: Tyler
 * Date: 1/29/2016
 * Time: 2:16 AM
 */
if(isset($_POST["name"])&&isset($_POST["email"])){
    $name = $_POST["name"];
    $email = $_POST["email"];
    $tel = $_POST["tel"];
    $comments = $_POST["comments"];

    $to = "tylerhan97@gmail.com";
    $from = $_POST["email"];
    $headers = "From: $from\r\n";
    $headers .= "Content-type: text/html\r\n";
    $subject = "$name booking request - $type";
    $message = "
    <b>Name:</b> $name <br>
    <b>E-mail:</b> $email <br>
    <b>Phone:</b> $tel <br>
    <b>Comments:</b> <br>
    $comments";
    mail($to,$subject,$message,$headers);
    echo("200");
}
?>