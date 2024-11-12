pipeline {
    agent any

    stages {
        stage('Repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/heyliana/ebac-ui-cypress.git'
            }
        }
        stage('Depedencias'){
            steps {
                sh 'npm install'
            }
        }
        stage('Teste'){
            steps{
                sh 'NO_COLOR=1 npm run cy:run'
            }
        }
    }
}
