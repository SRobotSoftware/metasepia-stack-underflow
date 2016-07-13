angular.module('stackUnderflow')
	.config(function ($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'app/components/main/home.html',
				controller: 'MainCtrl',
				resolve: {
					postPromise: ['posts', function (posts) {
						return posts.getAll()
					}]
				}
			})
			.state('posts', {
				url: '/posts/{id}',
				templateUrl: 'app/components/posts/posts.html',
				controller: 'PostsCtrl',
				resolve: {
					post: ['$stateParams', 'posts', function ($stateParams, posts) {
						return posts.get($stateParams.id)
					}]
				}
			})

		$urlRouterProvider.otherwise('home')

	})