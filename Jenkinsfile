pipeline {
  agent any
  parameters {
    booleanParam(name: 'DO_PUBLISH', description: 'Publish to npm')
  }
  tools {
      nodejs 'NodeJS 20.12.0'
  }
  stages {
    stage('Checkout SCM') {
      steps {
          checkout scmGit(
              branches: [[name: 'main']],
              userRemoteConfigs: [[url: 'https://github.com/MBDesu/cps2-utils']]
          )    
      }
    }
    stage('Install Dependencies') {
      steps {
        sh 'npm i'
      }
    }
    stage('Build') {
      steps {
          sh 'npm run build'
      }
    }
    stage('Publish to npm') {
      when {
        expression { params.DO_PUBLISH }
      }
      steps {
        catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
          nodejs(nodeJSInstallationName: 'NodeJS 20.12.0', configId: '5b2a9b05-4801-4dc4-b3e0-7dc0bd41f232') {
            sh 'npm publish'
          }
        }
      }
    }
    stage('Workspace Cleanup') {
      steps {
        cleanWs()
      }
    }
  }
}