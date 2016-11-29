<!DOCTYPE html>
    <head>
        <title></title>
        <link rel="stylesheet" type="text/css" href="bootstrap.css">
        <link rel="stylesheet" type="text/css" href="bootstrap-theme.css">
    </head>
    <body>
        <div class="container">
        <div class=row>
            <img src="myself.jpg" alt="pic of harshit singh" class="col-md-2 col-xs-2 hidden-xs" />
            <div class="col-md-10 col-xs-10">
                <h2>Harshit Singh</h2>
                <h3>Aspiring Web Developer</h3>
                <p>Hey if you are seeing this, then appreciate my work by shooting me an email</p>
            </div>
        </div>

        <div class="row">
            <div class="col-xs-12 col-md-6 col-md-push-6 ">
                <h2>Video Resume</h2>
                <video></video>
                </div>
            <div class=" col-md-6 col-md-pull-6 col-xs-12">
                <h2>Resume</h2>
                <div class="row">
                <div class="col-md-6">Track One</div>
                <div class="col-md-3">3:05</div>
                </div>
            </div>
        </div> 
    </div>
    <div class="container">
    <form role="form" class="form-horizontal">
        <div class="row form-group">
            <label for="title" class="col-md-2 control-label">Title</label>
            <div class="col-md-10"><input type="text" class="form-control" id="title" />
            </div>
            <div class="form-group">
                <label for="wibble" class="col-sm-2 control-label">Label</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="wibble" placeholder="label">
            </div>
        </div>
    </div>
    </form>
    </div>
        <!--add jquery here-->
        <script src="bootstrap.js"></script>
    </body>
</html>

<!--the hidden-xs will hide images on handheld devices-->

<!--create a new file in the same directory, name the file as _references.js
and drag bootstrap.js file and jquery.js file on to the _references.js page
and it will add the reference-->

<!-- container class brings in all the stuff-->
<!--MD is used for desktops and XS is used for handheld-->

<!--Controlling placements-->
<!--offset = allows us to leave space equal to specified number of columns
pull = allows us to move an item to the left 
push = allows us to move an item to the right-->

<!--Controlling visibility-->
<!-- the visibility controls work in opposite manner if you choose 
visibility hidden for xs it will be visible on md and vice-versa-->

<!-- modes = screen size and print>

<!--main classes are either form-group or form-control-->