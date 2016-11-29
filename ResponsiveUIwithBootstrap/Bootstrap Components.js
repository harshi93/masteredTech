<!--why use it
// They look good 
// they are themeable
// replacement for html server components
// great for AJAX

// getbootstrap.com/components

//Grouping 
/** Jumbotron is mostly the welcoming section with a button or a slider
*/
-->
<!DOCTYPE html>
    <head>
        <title></title>
        <link rel="stylesheet" type="text/css" href="bootstrap.css" />
    </head>
    <body>
    <div class ="jumbotron">
        <!--jumbotron is a nice div that can be used for the sake of slider-->
      <h1>This is called jumbotron</h1>
      <p><a href="" class="btn btn-primary btn-lg">Learn More</p>
      <div class="panel panel-default">List of things</div>
      <div class="panel-body">
      <span class="label label-success">Hooray!</span>
      </div>
      <div class="panel-body">
      <span class="label label-danger">Danger</span>
      </div>
      <button type="button" class="btn btn-danger btn-lg">Hello
     </button>
     <div class="btn-group">
       <button type="button"class="btn btn-default dropdown-toggle" data-toggle="dropdown-menu">Actions <span class="caret"></span>
       </button>
       <ul class="dropdown-menu" role="menu">
         <li><a href="#">Action</li>
         <li><a href="#">Another Action</li>
         <li><a href="#">Something else here</li>
         <li class="divider"></li>
         <li><a href="#">Separated link</li>
       </ul>
       <ul class="pagination">
    <li class="disabled"><a href="#">&laquo;</a></li>
    <!-- change disable to enable; to enable switching of pages on button click-->
    <li class="active"><a href="#">1<span class="sr-only"></span></a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">&raquo;</a></li>
    </ul>
     </div>
     <div class="btn-toolbar" role="toolbar" style="margin:0;">
       <div class="btn-group">
         <button type="button" class="btn btn-default">1</button>
         <button type="button" class="btn btn-default">2</button>
         <button type="button" class="btn btn-default">3</button>
         </div>
         <div class="btn-group">
           <button type="button" class="btn btn-default">4</button>
           <button type="button" class="btn btn-default">5</button>
           <button type="button" class="btn btn-default">6</button>
         </div>
    </body>
</html>

col-lg-6 
<!--col = column
lg/md/sm/xs = large/medium/small/extra small
6 = takes upto 6 columns
-->
<!--
Large = >1200px
Medium = <1200px
Small = <991px
Extra small = <768px
-->
 	
<!--Labels 
Panels
objects
navigation
breadcrumbs
pagination-->