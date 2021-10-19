const a=0, b=2, c=1;
const D=b**2 - 4*a*c;
if(a==0)
console.log("X="+ -c/b);
else if (D>0)
{
    console.log("X1=" + (-b+ Math.sqrt(D))/(2*a));
    console.log("X2=" + (-b- Math.sqrt(D))/(2*a));
}
else if (D==0)
console.log("X="+ -b/(2*a));
else 
console.log("The equation has no real solutions");