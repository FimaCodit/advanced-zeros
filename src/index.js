module.exports = function getZerosCount(number, base) {
  let b,a = 0,c,num,w;
   num = number;
   b = base;
   for(let i = 2; i <= base; i++){
     if(b % i == 0){
       while(b % i == 0){
         a++;
         b = Math.floor(b/i);
     }
       w = 0;
       c = number;
       while (c/i > 0){
         w+=Math.floor(c/i);
         c = Math.floor(c/i);
     }
     if(num > w/a){ 
       num=w/a;
     } 
   }
 }
 return Math.floor(num);
}
