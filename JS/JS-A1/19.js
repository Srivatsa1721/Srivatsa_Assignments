<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        .title{
            text-align: center;
            background-color: burlywood;
            margin: 0 auto;
           
        }
        .t{
            background-color: chocolate;
            text-align: center;
            margin: 0 auto;
        }
        
    </style>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Q19</title>
</head>
<body>
    <div class =title >Calculator</div><br>
      <table class="t" border="1">
         <tr>
            <td colspan="3"><input type="text" id="result"/></td>
            <td><input type="button" value="c" onclick="clr()"/> </td>
         </tr>
         <tr>
            <td><input type="button" value="1" onclick="dis('1')"/> </td>
            <td><input type="button" value="2" onclick="dis('2')"/> </td>
            <td><input type="button" value="3" onclick="dis('3')"/> </td>
            <td><input type="button" value="/" onclick="dis('/')"/> </td>
         </tr>
         <tr>
            <td><input type="button" value="4" onclick="dis('4')"/> </td>
            <td><input type="button" value="5" onclick="dis('5')"/> </td>
            <td><input type="button" value="6" onclick="dis('6')"/> </td>
            <td><input type="button" value="-" onclick="dis('-')"/> </td>
         </tr>
         <tr>
            <td><input type="button" value="7" onclick="dis('7')"/> </td>
            <td><input type="button" value="8" onclick="dis('8')"/> </td>
            <td><input type="button" value="9" onclick="dis('9')"/> </td>
            <td><input type="button" value="+" onclick="dis('+')"/> </td>
         </tr>
         <tr>
            <td><input type="button" value="." onclick="dis('.')"/> </td>
            <td><input type="button" value="0" onclick="dis('0')"/> </td>
            <td><input type="button" value="=" onclick="solve()"/> </td>
            <td><input type="button" value="*" onclick="dis('*')"/> </td>
         </tr>
      </table>
      <script>

function dis(val)
         {
             document.getElementById("result").value+=val
         }
           
        
         function solve()
         {
             let x = document.getElementById("result").value
             let y = eval(x)
             document.getElementById("result").value = y
         }
           
         
         function clr()
         {
             document.getElementById("result").value = ""
         }
      </script>
   </body>
</body>
</html>