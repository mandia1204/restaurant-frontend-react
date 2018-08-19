pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                ansiColor('xterm') {
                    sh 'npm run test'
                }
                step([$class: "TapPublisher", testResults: "**/report/test/test.out.tap", outputTapToConsole:false, enableSubtests:true ])
            }
        }
    }
}