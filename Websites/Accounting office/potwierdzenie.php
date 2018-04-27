<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Sukces!</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script>
        $(function () {
            $("#succes").delay(300).slideDown(500);
        });
    </script>
</head>
<body>
<style>
    #succes {
        width: 290px;
        height: 190px;
        background-color: #111;
        border-radius: 5px;
        color: white;
        padding: 30px;
        text-align: center;
        font-size: 17px;
        font-family: Verdana;
        margin: 0 auto;
        margin-top: 35px;
        box-shadow: 0 0 6px #333;
        display: none;
    }
    
    a {
        display: block;
        padding: 15px;
        border-radius: 3px;
        color: white;
        background-color: #c31e1e;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 14px;
        margin-top: 50px;
        transition: background-color 300ms;
    }
    
    a:hover {
        background-color: #d42f2f;
    }
</style>
    <div id="succes">
        <h3>
            Wiadomość została wysłana
        </h3>
        <a href="index.html">Powrót do strony głównej</a>
    </div>
</body>
</html>