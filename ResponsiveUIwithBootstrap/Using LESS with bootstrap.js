/*LESS is meta-syntax for CSS, it gives you variables which can further be used to define 
one color and then call that variable anywhere in the program

LESS = CSS + Variables +  Functions + Mixins

// Mixins

the idea is define a style and call it from within something else

for example

.a, #b{ // so here we are saying for element with class a and id 'b' set color equals red
    color:red
}
.mixin-class{
    .a();
}
.mixin-id{
    #b();
}

// note that unless you are having parameters passed on you can actually skip use of brackets

lesscss.org 

less and Sass are css preprocessors

rename a css file to .less and it will still work

Sass originally stood for syntactically awesome stylesheet but did not allowed to
rename css file to sass and still be able to use 

for example

@base: #f938ab;

.box-shadow(@style, @c)when(iscolor(@c)){
    -webkit-box-shadow: @style @c;
    box-shadow:         @style @c;
}

.box-shadow(@style, @alpha: 50%) when(isnumber(@alpha)){
    .box-shadow(@style, rgb(0,0,0, @alpha));
}

.box{
    color: saturate(@base, 5%);
    border-color: lighten(@base, 30%);
    div{
        .box-shadow(@ @ 5px, 30%)
    }
}

compiles to 
.box{
    color: #fe33ac;
    border-color: #fdcdea;
}
.box div{
    -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

LESS workflows with bootstrap

These can be compiled by following means

Compiling with Grunt
Compiling with Visual Studio
Compiling via ASP.NET bundling

bower and npm package manager

use bower to install bootstrap

> descendant selector 

the line says i want to assign container to div which is child to whatever parent class(in our case its nav) 
maybe

nav{ 
> div{ .container; }
} 

advanced application of LESS
Variables
Vendor mixin
utility mixin
*/
