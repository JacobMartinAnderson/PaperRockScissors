<html>
<head>
    Add Two Numbers 
    <title> Add Two Numbers </title>
</head>
<body>  

<form>
    <input type="text" id="box1"><br>
    <input type="text" id="box2"><br>
    <input type="text" id="+">
    <input type="button" value="=" onclick="calcSum()">   
</form>

<script>
    function calcSum(){
        let bbox1 = document.getElementsById("box1") [0] .value;
        let bbox2 = document.getElementsById("box2") [0] .value;
        let sum = Number(box1) + Number(box2);
        document.getElementsById("+")[0].value = sum;
     }
</script>


</body>
</html>