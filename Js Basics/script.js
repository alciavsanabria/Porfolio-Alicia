    console.log(cualEsMayor(10,200,200))

    function cualEsMayor(a,b,c){
let mayor;
    if(a>b){
     if(a>c){
            mayor = a;
            }
            }
    if(b>a){
     if(b>c){
        mayor= b;
        }
        }
    if(c>a){
    if(c>b){
        mayor = c;
        }
        }
            
    return mayor;
    }