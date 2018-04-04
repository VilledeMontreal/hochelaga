#!groovy

@Library('cicd-shared-library')
import vdmtl.cicd.MultibranchPipeline

pipeline = new MultibranchPipeline();
ctx = pipeline.createContext([
    "hipchatRoom" : [
        "PRODUCTION": "4285211",
        "DEVELOPMENT": "4285211",
        "ACCEPTANCE": "4285211"
    ],
    "dockerImageBaseName": "vdmtl/boite-outils-web",
    "workspaceDir": "/home/jenkins/boite-outils-web",
    "developmentBranch": "develop",
    "slave": "nodejs",
    "deploymentTargetHosts": [
      "PRODUCTION": ["10.145.1.80","10.145.1.81"] //prdldk02a.ile.montreal.qc.ca
    	"DEVELOPMENT": "10.145.10.62", //dvlldk02a.ile.montreal.qc.ca
    	"ACCEPTANCE": "10.145.10.64" //accldk02a.ile.montreal.qc.ca
    ],
    "dockerComposeFiles": [
      "PRODUCTION": "docker-compose-prod.yml",
    	"DEVELOPMENT": "docker-compose-dev.yml",
    	"ACCEPTANCE": "docker-compose-accept.yml"
    ],
    "acceptApprovers" : [
      "submitter1" : [ "id" : "udall98", "mailto" : "chdallaire" ],
      "submitter2" : [ "id" : "uboul8b", "mailto" : "alexis.boulerice" ],
      "submitter3" : [ "id" : "udeboya", "mailto" : "yann.debonnel" ],
    ],
    "nexusLib" : [
      "buildCommand" : "npm run package",
      "publishFromDistDirectory" : false
    ],
]);

try {

	pipeline.start(ctx) {

        pipeline.installDependanciesStage(ctx) {
        	sh "echo testing installDependancies";
        }

        pipeline.runUnitTestsStage(ctx) {
        	sh "echo testing unitTests";
        }

        pipeline.buildImageStage(ctx) {
        	sh "echo testing el buildo";
        }
    }

    pipeline.promptForDeploymentStage(ctx);

    pipeline.end(ctx) {

        pipeline.deploymentStage(ctx) {
        	sh "echo testing deployment";
        }

        pipeline.bddTestsStage(ctx) {
        	sh "echo testing BDD tests";
        }

        pipeline.cleanupStage(ctx) {
        	sh "echo testing cleanup";
        }
    }


} catch(err) {
    // echo "Exception: ${err}"
    pipeline.errorReport(ctx, err)
    throw err
} finally {
    pipeline.postBuild(ctx) // pass build status as argument
}




