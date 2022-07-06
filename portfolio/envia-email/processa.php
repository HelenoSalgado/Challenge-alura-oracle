<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
		$nome = $_POST['nome'];
		$email = $_POST['email'];
		$mensagem = $_POST['mensagem'];
		
        require 'vendor/autoload.php';

        $from = new SendGrid\Email(null, "contato@heleno.dev");
        $subject = "Contato via Portfolio";
        $to = new SendGrid\Email(null, "helenosalgado19@gmail.com");
        $content = new SendGrid\Content("text/html", "Olá Heleno, <br><br>Nova mensagem de contato<br><br>Nome: $nome<br>Email: $email <br>Mensagem: $mensagem");
        $mail = new SendGrid\Mail($from, $subject, $to, $content);
        
        //Necessário inserir a chave
        $apiKey = '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';
        $sg = new \SendGrid($apiKey);

        $response = $sg->client->mail()->send()->post($mail);
        echo "Mensagem enviada com sucesso";
		
        ?>
    </body>
</html>
