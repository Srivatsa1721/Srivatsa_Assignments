<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advance1</title>
</head>
<body>
    <script>
       
         var arr=[1,2,3,4,5];
       // console.log(arr.shift());
       // console.log(arr);
      function isEven(a){
            if(a%2===0) return true;
            else return false;
        }
        var i=0;
        function findFirstEven(arr,fn){
            let ans=arr.shift();
             //console.log(ans);
                if(fn(ans))
                {
                    return ans;
                }
                else{
                    findFirstEven(arr,fn);
                }
                
            }
            
        
        console.log(findFirstEven(arr,isEven));

    </script>
</body>
</html>