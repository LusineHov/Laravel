 
 <html lang="ja">
	<head>
		<meta charset="utf-8">
		<!-- <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=2.0,user-scalable=no"> -->
		<meta name="format-detection" content="telephone=no">
		<title>Codegarage</title>


		<link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="/css/font-awesome.min.css">
		<link rel="stylesheet" type="text/css" href="/css/common.css">

<!-- Angularjs library -->
        <script type="text/javascript" src="/lib/angular.min.js"></script>
        <script type="text/javascript" src="https://code.angularjs.org/1.2.16/angular-route.min.js"></script>

    <!-- Angularjs Application -->
        <script type="text/javascript" src="/angular-js/app.js"></script>
        <script type="text/javascript" src="/angular-js/controllers.js"></script>
        </head>
	<body>
		<!-- static part -->
		<nav>
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<h1 id="logo"><a href="/">Codegarage</a></h1>
					</div>
				</div>
			</div>
		</nav>
		

		<!-- dynamic part -->
		<div ng-view></div>
	</body>
</html>