app.config(function($routeProvider){
	$routeProvider
		.when('/',
		{
			templateUrl: 'html/hymt.html',
			controller: 'HymtCtrl'
		})
		.when('/aboutMe',
		{
			templateUrl: 'html/aboutMe.html',
			controller: 'AboutMeCtrl'
		})
		.when('/contact',
		{
			templateUrl: 'html/contact.html',
			controller: 'ContactCtrl'
		})
		.when('/education',
		{
			templateUrl: 'html/education.html',
			controller: 'EducationCtrl'
		})
		.when('/experience',
		{
			templateUrl: 'html/experience.html',
			controller: 'ExperienceCtrl'
		})
		.when('/expertise',
		{
			templateUrl: 'html/expertise.html',
			controller: 'ExpertiseCtrl'
		})
		.when('/portfolio',
		{
			templateUrl: 'html/portfolio.html',
			controller: 'PortfolioCtrl'
		})
		.when('/rps',
		{
			templateUrl: 'html/rps.html',
			controller: 'rpsCtrl'
		})
		.when('/immlutheran',
		{
			templateUrl: 'immanuel-colorbox-example/immanuelColorbox.html',
			controller: 'ImmLutheranCtrl'
		})
		.otherwise(
		{
			redirectTo: '/404',
			templateUrl: 'html/404.html'
			// controller: 'WhoopsCtrl'
		});
});