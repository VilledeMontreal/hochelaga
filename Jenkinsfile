#!groovy
@Library('cicd-lib')
import vdmtl.cicd.*
import jenkins.model.*


pipeline = new Pipeline()

// For more information on the configuration options,
// see https://bitbucket.org/villemontreal/cicd-lib/src/master/docs/Config.md
ctx = pipeline.createContext([
    // Namespaces are used in K8s to group similar microservices together.
    // For example, if two APIs and a SPA are used to provide the complete application
    // they should all use the same namespace.
    namespace: [
        'sn',
        'boite-outils',
    ],
    application: [
        name: 'boite-outils4-web',
        tier: 'frontend',
        runtime: 'nodejs',
        framework: 'angular',
        keywords: [
            'boite-outils',
            'web',
            'lib',
        ],
        type: 'service',
        description: 'boite-outils4-web',
        icon: 'https://cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/svgs/fi-lightbulb.svg',
    ],
    packaging: [
        dockerfilePath: './Dockerfile',
    ],
    execution: [
        service: [
            port: 3000
        ],
        resources: [
            minCpu: '100m',
            minMemory: '150Mi',
            maxCpu: '1000m',
            maxMemory: '1000Mi',
        ],
        autoScaling: [
            // K8s will start more containers of your application when the current ones
            // reach the cpuUsagePercentage limit set below.
            // minReplicas indicates the minimum number of instances of containers of
            // your app, while maxReplicas is the maximum K8s will be allowed to start.
            // NOTE: It is the responsibility of your application to synchronize its
            // data between multiple replicas.  If your application does not support
            // such scaling, set both Replicas values to 1.
            minReplicas: 1,
            maxReplicas: 1,
            cpuUsagePercentage: 50
        ],
        probes: [
            liveness: [
                enabled: false,
                path: '/',
            ],
            readiness: [
                enabled: false,
                path: '/',
            ],
        ],
        monitoring: [
            enabled: false,
            path: '/',
        ],
    ],
    ingress: [
        overrides: [
            dev: [
                hosts: [
                    [
                        uri: 'services.kube.dev.ile.montreal.qc.ca',
                        paths: [
                            '/boite-outils4',
                        ],
                    ],
                    [
                        uri: 'services.dev.interne.montreal.ca',
                        paths: [
                            '/boite-outils4',
                        ],
                    ],
                ],
            ],
            accept: [
                hosts: [
                    [
                        uri: 'services.kube.acc.ile.montreal.qc.ca',
                        paths: [
                            '/boite-outils4',
                        ],
                    ],
                    [
                        uri: 'services.accept.montreal.ca',
                        paths: [
                            '/boite-outils4',
                        ],
                    ],
                ],
            ],
            prod: [
                hosts: [
                    [
                        uri: 'services.kube.ile.montreal.qc.ca',
                        paths: [
                            '/boite-outils4',
                        ],
                    ],
                    [
                        uri: 'services.montreal.ca',
                        paths: [
                            '/boite-outils4',
                        ],
                    ],
                ],
            ],
        ],
    ],
    notifications: [
        chat: [
            room: 'boîte-à-outils-web',
            notify: true
        ],
        mail: [
            to: [
                'tola.sam',
                'alexis.boulerice'
            ],
        ],
    ],
    approvers: [
        enabled: true,
        overrides: [
            accept: [
                approvers: [
                    'G-UNIX-Jenkins-Admin',
                    'udall98',
                    'usamtol',
                    'utamtra',
                    'uboul8b',
                    'udesm8n',
                    'ujanezx',
                ],
            ],
            prod: [
                approvers: [
                    'G-UNIX-Jenkins-Admin',
                    'utamtra',
                    'uboul8b',
                    'udesm8n',
                    'ujanezx',
                ],
            ],
        ],
    ],
    debug: true,
    approval: [
        enabled: true,
        overrides: [
            accept: [
                approvers: [
                    'G-UNIX-Jenkins-Admin',
                    'udall98',
                    'usamtol',
                    'utamtra',
                    'uboul8b',
                    'udesm8n',
                    'ujanezx',
                ],
            ],
            prod: [
                approvers: [
                    'G-UNIX-Jenkins-Admin',
                    'utamtra',
                    'uboul8b',
                    'udesm8n',
                    'ujanezx',
                ],
            ],
        ],
    ],
])

pipeline.start(ctx) {

    pipeline.withSourceCode(ctx) {

        pipeline.buildStage(ctx) {
            pipeline.buildDockerImage(ctx)
        }

        pipeline.prePublishStage(ctx) {
            pipeline.publishDraftDockerImage(ctx)
        }
    }

    pipeline.withDraftDockerImage(ctx) {
        pipeline.publishStage(ctx) {
            pipeline.publishDockerImage(ctx)
        }

        pipeline.deployStage(ctx) {
            pipeline.deployApp(ctx)
        }
    }

}
