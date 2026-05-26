@Library('jeap-pipelinelibrary@feature/oblique9') _
nodejsPipelineTemplate {
	nodeJsVersion = 22
	npmRepository = [
		'repository': 'registry.npmjs.com',
		'email': 'oblique@bit.admin.ch',
		'userNamePasswordCredentialId': 'obliqueDeploymentUnamePassword',
		'npmCredentialId': 'npmDeploymentTokenOblique'
	]
	branches = [
		'*': [
			'lint': 'npm run lint',
			'test': 'npm run test-ci --workspaces',
			'build': 'npm run build --workspaces'
		],
		master: [
			'publish': [
				'@dariopog-foitt/oblique',
				'@dariopog-foitt/cli',
				'@dariopog-foitt/service-navigation-web-component',
				'@dariopog-foitt/toolchain'
			]
		]
	]
}
