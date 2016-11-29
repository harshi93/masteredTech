remember to reference jQuery first and then 
call in bootstrap.js; sequence does matter a 
lot

Modal dialog
we configure dialog using classes
there will be one container having class as modal
containing another container having 
class as modal-dialog having container 
containing having class as modal-content which
will hold our container

when it comes to launching modal we use two 
methods 
data-toggle="modal" the method will notify js
to invoke modal 
data-target="<id>" the method will notify which
modal class to invoke id should be prefixed 
with # also

once our work is done in order to close modal
we need to attach following
method to the button
data-dismiss="modal"

// use modal dialogs only when you want to make user not move ahead
// without doing what you want him to do

# Dialogs.html
//fade options will give little fade in sort of animation
//&times is used to display X sign
<body>
	<div class="container">
		<div id="alert-container">
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModal-label" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times</button>
					<h4 class="modal-title" id="myModal-label">Modal title</h4>
	</div>
	<div class="modal-body">
		<p>hey hi how are you this simple implementation of modal</p>
	</div>	
	<div class="modal-footer">
		<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
		<button type="button" class="btn btn-primary" data-dismiss="modal" id="commit-changes">Save</button>
	</div>
    </div>
 </div>
</div>
	<script>
		$(function(){
			$('#commit-changes').click(function(){
			var alerthtml = '<div class="alert alert-success fade in role="alert">
			+'<strong>Changes saved</strong>'
			+'<div>You should see your changes reflected shortly</div>'+
			'</div>';
		$(#alert-container).append(alerthtml);
		});
	     });
		</script>


Alerts
alert alert-type="warning/info/danger/success" // for example see above


Providing Help:
Whenever possible, provide inline help
Bootstrap offers two main options
- Tooltip for a mouseover
<div class="form-group" data-toggle="tooltip" data-placement="top" title="Album title">

// title defines what you wanna display when user points somewhere
// data-placement defines where you wanna place the title

- Popover for a click


Grouping Data

<body data-spy="scroll" data-target="#affix-nav" style="position:relative;">
	<div class="container">
		<div class="row">
			<nav id="affix-nav" class="nav col-md-2">
				<ul class="nav" data-spy="affix" data-offset-top="top">
					<li class="active"><a href="#scrollspy-demo">Scrollspy</a></li>
					<li><a href="#tabs-demo">Tabs</a></li>
					<li><a href="#accordion-demo">Accordion</a></li>
					<li><a href="#carousel-demo">Carousel</a></li>
				</ul>
			</nav>
			<div class="col-md-10">
<!--Tabs-->			
			<section id="tabs-demo"></h2>
			<ul class="nav nav-tabs" role="tablist">
				<li class="active"><a href="first" role="tab" data-toggle="tab">First</a></li>
			</ul>
				
			<div class="tab-content">
				<div id="first" class="tab-pane active fade in">abdc</div>
			</div>
			</section>

<!--Scroll Spy-->
			<h2 id="scrollspy-demo">Scrollspy</h2>
			<div style="position:relative;">
				<nav class="navbar navbar-dfault navbar-static" role="navigation" id="navbar-spy">
					<div class="collapse navbar-collapse">
						<ul class="nav navbar-nav">
							<li><a href="#scroll-first">First</a></li>
						</ul>
					</div>
				</nav>
			<div data-target="#navbar-spy" data-spy="scroll" style="height:"150px overflow-y:scroll; position:relative>
				<p id="scroll-first"></p>
				<p id="scroll-second"></p>
			</div>
			</div>

<!--Accordion-->
			<h2 id="accordion-demo">Accordion</h2>
			<div class="panel-group" id="accordion">
				<div class="panel panel-default">
					<div class="panel-heading">
						<h4 class="panel-title">
							<a data-toggle="collapse" data-parent="#accordion" href="#accordion-first">First</a>
						</h4>
					</div>
					<div id="accordion-first" class="panel collapse collapse in">
						<div class="panel-body">
						</div>
					</div>
				 </div>	
				 <div class="panel panel-default">			
					<div class="panel-heading">
						<h4 class="panel-title">
							<a data-toggle="collapse" data-parent="#accordion" href="#accordion-second">Second</a>
						</h4>
					</div>
					<div id="accordion-second" class="panel-collapse collapse">
						<div class="panel-body">
						</div>
					</div>
				 </div>
<!--Carousel-->
			<h2 id="carousel-demo">Carousel</h2>
			<div id="carousel" class="carousel slide" style="width:548px" data-ride="carousel">
				<ol class="carousel-indicators">		
					<li data-target="#carousel" data-slide-to="0" class="active"></li>
					<li data-target="#carousel" data-slide-to="1"></li>
					<li data-target="#carousel" data-slide-to="2"></li>
				</ol>
				<div class="carousel-inner">
					<div class="item active">
						<img src="Image/One.png">
						<div class="carousel-caption">
						</div>
					</div>
					<div class="item">
						<img src="Image/Two.png">
						<div class="carousel-caption">
						</div>
					</div>
					<div class="item">
						<img src="Image/Three.png">
						<div class="carousel-caption">
						</div>
					</div>