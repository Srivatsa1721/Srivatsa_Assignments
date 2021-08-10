<!DOCTYPE html>
<html>
<body>


<p id="demo"></p>

<script>
const txt = '{"firstname":"Srivatsa",  "lastname":"Reddy"}'
const obj = JSON.parse(txt);
document.getElementById("demo").innerHTML = obj.firstname + " " + obj.lastname;
</script>

</body>
</html>
