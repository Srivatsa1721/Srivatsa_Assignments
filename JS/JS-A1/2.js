<html>
<head>

</head>
<body>
<table>
<tr>
<td> <input type="text" name="a" id="first" placeholder="Enter a number"/> </td>
</tr>
<tr>
<td> <button onclick="sum ()">Submit</button></td>
</tr>
</table>
<div id="num"></div>
</body>

<script type="text/javascript">
function sum()
{
var n,i, sum = 0;
n = parseInt(document.getElementById ("first").value);
for (i = 1; i <= n; i++)
{
if(i%3==0 || i%5==0)
  {
    sum = sum+i;
  }
}
document.getElementById ("num").innerHTML="Sum of "+n+ " numbers is :"+sum;
}
</script>
</html>