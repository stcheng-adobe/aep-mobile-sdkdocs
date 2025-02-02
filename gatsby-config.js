/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
module.exports = {
    siteMetadata: {
        // versions: [
        //   {
        //     title: 'v2.0',
        //     selected: true
        //   },
        //   {
        //     title: 'v1.4',
        //     path: 'https://github.com/AdobeDocs/analytics-1.4-apis'
        //   }
        // ],
        pages: [
            {
                title: 'Mobile SDK',
                path: '/documentation',
            },
            {
                title: 'Getting Started',
                path: '/getting-started',
            },
            {
                title: 'Mobile Foundation Extensions',
                path: '/mobile-foundation-extensions',
            },
            {
                title: 'Experience Cloud extensions',
                menu: [
                    {
                         title: 'Overview',
                         path: '/experience-cloud-extensions'
                    },
                    {
                        title: 'Adobe Analytics',
                        path: '/experience-cloud-extensions/adobe-analytics/index.md',
                    },
                    {
                        title: 'Adobe Analytics - Mobile Services',
                        path: '/experience-cloud-extensions/adobe-analytics-mobile-services/index.md',
                    },
                    {
                        title: 'Adobe Media Analytics',
                        path: '/experience-cloud-extensions/adobe-media-analytics/index.md',
                    },
                    {
                        title: 'Adobe Audience Manager',
                        path: '/experience-cloud-extensions/adobe-audience-manager/index.md',
                    },
                    {
                        title: 'Adobe Campaign Classic',
                        path: '/experience-cloud-extensions/adobe-campaign-classic/index.md',
                    },
                    {
                        title: 'Adobe Campaign Standard',
                        path: '/experience-cloud-extensions/adobe-campaign-standard/index.md',
                    },
                    {
                        title: 'Adobe Journey Optimizer',
                        path: '/experience-cloud-extensions/adobe-journey-optimizer/index.md',
                    },
                    {
                        title: 'Adobe Journey Optimizer Decisioning',
                        path: '/experience-cloud-extensions/adobe-journey-optimizer-decisioning/index.md',
                    },
                    {
                        title: 'Adobe Target',
                        path: '/experience-cloud-extensions/adobe-target/index.md',
                    },
                ]
            }
        ],
        subPages: [
            {
                title: "Home",
                path: "/documentation"
            },
            {
                title: "Current SDK versions",
                path: "documentation/current-sdk-versions"
            },
            {
                title: "Release notes",
                path: "/documentation/release-notes",
                pages: [
                    {
                        title: "2022",
                        path: "/documentation/release-notes"
                    },
                    {
                        title: "2021",
                        path: "/documentation/release-notes/2021"
                    },
                    {
                        title: "2020",
                        path: "/documentation/release-notes/2020"
                    },
                    {
                        title: "2019",
                        path: "/documentation/release-notes/2019"
                    },
                    {
                        title: "2018",
                        path: "/documentation/release-notes/2018"
                    }
                ]
            },
            {
                title: "Version 4 Mobile SDKs end-of-support FAQ",
                path: "/documentation/v4-end-of-life-faq"
            },
            {
                title: "Version 4 API changelog",
                path: "/documentation/api-changelog"
            },
            {
                title: "Adobe Experience Cloud & Apple's IDFA, Privacy announcement",
                path: "/documentation/privacy-announcement"
            },
            {
                title: "Getting started",
                path: "/getting-started",
                pages: [
                    {
                        title: "Overview",
                        path: "/getting-started"
                    },
                    {
                        title: "Set up schemas and datasets",
                        path: "/getting-started/set-up-schemas-and-datasets"
                    },
                    {
                        title: "Configure datastreams",
                        path: "/getting-started/configure-datastreams"
                    },
                    {
                        title: "Set up a mobile property",
                        path: "/getting-started/create-a-mobile-property"
                    },
                    {
                        title: "Get the Experience Platform SDK",
                        path: "/getting-started/get-the-sdk"
                    },
                    {
                        title: "Debugging and lifecycle metrics",
                        path: "/getting-started/enable-debug-logging"
                    },
                    {
                        title: "Track events",
                        path: "/getting-started/track-events"
                    },
                    {
                        title: "Validation and next steps",
                        path: "/getting-started/validate"
                    }
                ]
            },
            {
                title: "Mobile Foundation extensions",
                path: "/mobile-foundation-extensions",
                pages: [
                    {
                        title: "Overview",
                        path: "/mobile-foundation-extensions"
                    },
                    {
                        title: "Mobile Core",
                        path: "/mobile-foundation-extensions/mobile-core",
                        pages: [
                            {
                                title: "Overview",
                                path: "/mobile-foundation-extensions/mobile-core"
                            },
                            {
                                title: "Configuration",
                                path: "/mobile-foundation-extensions/mobile-core/configuration",
                                pages: [
                                    {
                                        title: "Overview",
                                        path: "/mobile-foundation-extensions/mobile-core/configuration"
                                    },
                                    {
                                        title: "API reference",
                                        path: "/mobile-foundation-extensions/mobile-core/configuration/api-reference"
                                    },
                                    {
                                        title: "Event reference",
                                        path: "/mobile-foundation-extensions/mobile-core/configuration/event-reference"
                                    }
                                ]
                            },
                            {
                                title: "Identity",
                                path: "/mobile-foundation-extensions/mobile-core/identity",
                                pages: [
                                    {
                                        title: "Overview",
                                        path: "/mobile-foundation-extensions/mobile-core/identity"
                                    },
                                    {
                                        title: "API reference",
                                        path: "/mobile-foundation-extensions/mobile-core/identity/api-reference"
                                    },
                                    {
                                        title: "Event reference",
                                        path: "/mobile-foundation-extensions/mobile-core/identity/event-reference"
                                    },
                                    {
                                        title: "Migration",
                                        path: "/mobile-foundation-extensions/mobile-core/identity/migration"
                                    }
                                ]
                            },
                            {
                                title: "Lifecycle",
                                path: "/mobile-foundation-extensions/mobile-core/lifecycle",
                                pages: [
                                    {
                                        title: "Overview",
                                        path: "/mobile-foundation-extensions/mobile-core/lifecycle"
                                    },
                                    {
                                        title: "Migration",
                                        path: "/mobile-foundation-extensions/mobile-core/lifecycle/migration"
                                    },
                                    {
                                        title: "Lifecycle extension in Android",
                                        path: "/mobile-foundation-extensions/mobile-core/lifecycle/android"
                                    },
                                    {
                                        title: "Lifecycle extension in iOS",
                                        path: "/mobile-foundation-extensions/mobile-core/lifecycle/ios"
                                    },
                                    {
                                        title: "API reference",
                                        path: "/mobile-foundation-extensions/mobile-core/lifecycle/api-reference"
                                    },
                                    {
                                        title: "Event reference",
                                        path: "/mobile-foundation-extensions/mobile-core/lifecycle/event-reference"
                                    },
                                    {
                                        title: "Metrics",
                                        path: "/mobile-foundation-extensions/mobile-core/lifecycle/metrics"
                                    },
                                    {
                                        title: "Configuration keys",
                                        path: "/mobile-foundation-extensions/mobile-core/lifecycle/configuration-keys"
                                    }
                                ]
                            },
                            {
                                title: "Platform services",
                                path: "/mobile-foundation-extensions/mobile-core/platform-services",
                                pages: [
                                    {
                                        title: "Overview",
                                        path: "/mobile-foundation-extensions/mobile-core/platform-services"
                                    },
                                    {
                                        title: "Data queue service",
                                        path: "/mobile-foundation-extensions/mobile-core/platform-services/data-queue-service"
                                    },
                                    {
                                        title: "Network service",
                                        path: "/mobile-foundation-extensions/mobile-core/platform-services/network-service"
                                    },
                                    {
                                        title: "System device info service",
                                        path: "/mobile-foundation-extensions/mobile-core/platform-services/system-device-info-service"
                                    }
                                ]
                            },
                            {
                                title: "Rules Engine",
                                path: "/mobile-foundation-extensions/mobile-core/rules-engine",
                                pages: [
                                    {
                                        title: "Overview",
                                        path: "/mobile-foundation-extensions/mobile-core/rules-engine"
                                    },
                                    {
                                        title: "Technical details",
                                        path: "/mobile-foundation-extensions/mobile-core/rules-engine/technical-details"
                                    },
                                    {
                                        title: "Consequence details",
                                        path: "/mobile-foundation-extensions/mobile-core/rules-engine/consequence-details"
                                    }
                                ]
                            },
                            {
                                title: "Signal",
                                path: "/mobile-foundation-extensions/mobile-core/signal",
                                pages: [
                                    {
                                        title: "Overview",
                                        path: "/mobile-foundation-extensions/mobile-core/signal"
                                    },
                                    {
                                        title: "Migration",
                                        path: "/mobile-foundation-extensions/mobile-core/signal/migration"
                                    },
                                    {
                                        title: "API reference",
                                        path: "/mobile-foundation-extensions/mobile-core/signal/api-reference"
                                    },
                                    {
                                        title: "Event reference",
                                        path: "/mobile-foundation-extensions/mobile-core/signal/event-reference"
                                    }
                                ]
                            },
                            {
                                title: "API reference",
                                path: "/mobile-foundation-extensions/mobile-core/api-reference"
                            },
                            {
                                title: "Event reference",
                                path: "/mobile-foundation-extensions/mobile-core/event-reference"
                            },
                            {
                                title: "Migration",
                                path: "/mobile-foundation-extensions/mobile-core/migration"
                            },
                            {
                                title: "Release notes",
                                path: "/mobile-foundation-extensions/mobile-core/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Adobe Experience Platform Edge Network",
                        path: "/mobile-foundation-extensions/edge-network",
                        pages: [
                            {
                                title: "Overview",
                                path: "/mobile-foundation-extensions/edge-network"
                            },
                            {
                                title: "API reference",
                                path: "/mobile-foundation-extensions/edge-network/api-reference"
                            },
                            {
                                title: "XDM Experience Events",
                                path: "/mobile-foundation-extensions/edge-network/xdm-experience-events"
                            },
                            {
                                title: "Validation",
                                path: "/mobile-foundation-extensions/edge-network/validation"
                            },
                            {
                                title: "Release notes",
                                path: "/mobile-foundation-extensions/edge-network/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Consent for Edge Network",
                        path: "/mobile-foundation-extensions/consent-for-edge-network",
                        pages: [
                            {
                                title: "Overview",
                                path: "/mobile-foundation-extensions/consent-for-edge-network"
                            },
                            {
                                title: "API reference",
                                path: "/mobile-foundation-extensions/consent-for-edge-network/api-reference"
                            },
                            {
                                title: "Release notes",
                                path: "/mobile-foundation-extensions/consent-for-edge-network/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Identity for Edge Network",
                        path: "/mobile-foundation-extensions/identity-for-edge-network",
                        pages: [
                            {
                                title: "Overview",
                                path: "/mobile-foundation-extensions/identity-for-edge-network"
                            },
                            {
                                title: "API reference",
                                path: "/mobile-foundation-extensions/identity-for-edge-network/api-reference"
                            },
                            {
                                title: "Frequently asked questions",
                                path: "/mobile-foundation-extensions/identity-for-edge-network/faq"
                            },
                            {
                                title: "Release notes",
                                path: "/mobile-foundation-extensions/identity-for-edge-network/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Lifecycle for Edge Network",
                        path: "/mobile-foundation-extensions/lifecycle-for-edge-network",
                        pages: [
                            {
                                title: "Overview",
                                path: "/mobile-foundation-extensions/lifecycle-for-edge-network"
                            },
                            {
                                title: "API reference",
                                path: "/mobile-foundation-extensions/lifecycle-for-edge-network/api-reference"
                            },
                            {
                                title: "Event reference",
                                path: "/mobile-foundation-extensions/lifecycle-for-edge-network/event-reference"
                            },
                            {
                                title: "Metrics",
                                path: "/mobile-foundation-extensions/lifecycle-for-edge-network/metrics"
                            }
                        ]
                    },
                    {
                        title: "Adobe Experience Platform Assurance",
                        path: "/mobile-foundation-extensions/platform-assurance-sdk",
                        pages: [
                            {
                                title: "Overview",
                                path: "/mobile-foundation-extensions/platform-assurance-sdk"
                            },
                            {
                                title: "Migration",
                                path: "/mobile-foundation-extensions/platform-assurance-sdk/migration"
                            },
                            {
                                title: "API reference",
                                path: "/mobile-foundation-extensions/platform-assurance-sdk/api-reference"
                            },
                            {
                                title: "Resolving common issues",
                                path: "/mobile-foundation-extensions/platform-assurance-sdk/common-issues/"
                            },
                            {
                                title: "Release notes",
                                path: "/mobile-foundation-extensions/platform-assurance-sdk/release-notes"
                            }
                        ]
                    },


                    {
                        title: "Adobe Experience Platform Location Service",
                        path: "/mobile-foundation-extensions/places",
                        pages: [
                            {
                                title: "Overview",
                                path: "/mobile-foundation-extensions/places"
                            },
                            {
                                title: "API reference",
                                path: "/mobile-foundation-extensions/places/api-reference.md"
                            },
                            {
                                title: "Migration",
                                path: "/mobile-foundation-extensions/places/migration.md"
                            }
                        ]
                    },
                    {
                        title: "Profile",
                        path: "/mobile-foundation-extensions/profile",
                        pages: [
                            {
                                title: "Overview",
                                path: "/mobile-foundation-extensions/profile"
                            },
                            {
                                title: "Migration",
                                path: "/mobile-foundation-extensions/profile/migration"
                            },
                            {
                                title: "API reference",
                                path: "/mobile-foundation-extensions/profile/api-reference"
                            },
                            {
                                title: "Event reference",
                                path: "/mobile-foundation-extensions/profile/event-reference"
                            },
                            {
                                title: "Release notes",
                                path: "/mobile-foundation-extensions/profile/release-notes"
                            }
                        ]
                    }
                ]
            },
            {
                title: "Experience Cloud extensions",
                path: "/experience-cloud-extensions",
                pages: [
                    {
                        title: "Overview",
                        path: "/experience-cloud-extensions"
                    },
                    {
                        title: 'Adobe Analytics',
                        path: '/experience-cloud-extensions/adobe-analytics/',
                        pages: [
                            {
                                title: "Overview",
                                path: "/experience-cloud-extensions/adobe-analytics"
                            },
                            {
                                title: "API reference",
                                path: "/experience-cloud-extensions/adobe-analytics/api-reference/"
                            },
                            {
                                title: 'Event reference',
                                path: '/experience-cloud-extensions/adobe-analytics/event-reference/'
                            },
                            {
                                title: "Migration",
                                path: "/experience-cloud-extensions/adobe-analytics/migration/"
                            },
                            {
                                title: "Product variable",
                                path: "/experience-cloud-extensions/adobe-analytics/product-variable"
                            },
                            {
                                title: "Frequently asked questions",
                                path: "/experience-cloud-extensions/adobe-analytics/faq/"
                            },
                            {
                                title: 'Release notes',
                                path: '/experience-cloud-extensions/adobe-analytics/release-notes/'
                            }
                        ]
                    },
                    {
                        title: "Adobe Analytics - Mobile Services",
                        path: "/experience-cloud-extensions/adobe-analytics-mobile-services",
                        pages: [
                            {
                                title: "Overview",
                                path: "/experience-cloud-extensions/adobe-analytics-mobile-services"
                            },
                            {
                                title: "API reference",
                                path: "/experience-cloud-extensions/adobe-analytics-mobile-services/api-reference/"
                            },
                            {
                                title: "Migration",
                                path: "/experience-cloud-extensions/adobe-analytics-mobile-services/migration/"
                            },
                            {
                                title: "Release notes",
                                path: "/experience-cloud-extensions/adobe-analytics-mobile-services/release-notes/"
                            }
                        ]
                    },
                    {
                        title: "Adobe Media Analytics",
                        path: "/experience-cloud-extensions/adobe-media-analytics",
                        pages: [
                            {
                                title: "Overview",
                                path: "/experience-cloud-extensions/adobe-media-analytics"
                            },
                            {
                                title: "API reference",
                                path: "/experience-cloud-extensions/adobe-media-analytics/api-reference"
                            },
                            {
                                title: "Migration",
                                path: "/experience-cloud-extensions/adobe-media-analytics/migration"
                            },
                            {
                                title: "Release notes",
                                path: "/experience-cloud-extensions/adobe-media-analytics/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Adobe Audience Manager",
                        path: "/experience-cloud-extensions/adobe-audience-manager/",
                        pages: [
                            {
                                title: "Overview",
                                path: "/experience-cloud-extensions/adobe-audience-manager/"
                            },
                            {
                                title: "API reference",
                                path: "/experience-cloud-extensions/adobe-audience-manager/api-reference"
                            },
                            {
                                title: "Event reference",
                                path: "/experience-cloud-extensions/adobe-audience-manager/event-reference"
                            },
                            {
                                title: "Migration",
                                path: "/experience-cloud-extensions/adobe-audience-manager/migration"
                            },
                            {
                                title: "Release notes",
                                path: "/experience-cloud-extensions/adobe-audience-manager/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Adobe Campaign Classic",
                        path: "/experience-cloud-extensions/adobe-campaign-classic",
                        pages: [
                            {
                                title: "Overview",
                                path: "/experience-cloud-extensions/adobe-campaign-classic"
                            },
                            {
                                title: "API reference",
                                path: "/experience-cloud-extensions/adobe-campaign-classic/api-reference"
                            },
                            {
                                title: "Event reference",
                                path: "/experience-cloud-extensions/adobe-campaign-classic/event-reference"
                            },
                            {
                                title: "Migration",
                                path: "/experience-cloud-extensions/adobe-campaign-classic/migration"
                            },
                            {
                                title: "Release notes",
                                path: "/experience-cloud-extensions/adobe-campaign-classic/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Adobe Campaign Standard",
                        path: "/experience-cloud-extensions/adobe-campaign-standard",
                        pages: [
                            {
                                title: "Overview",
                                path: "/experience-cloud-extensions/adobe-campaign-standard"
                            },
                            {
                                title: "API reference",
                                path: "/experience-cloud-extensions/adobe-campaign-standard/api-reference"
                            },
                            {
                                title: "Event reference",
                                path: "/experience-cloud-extensions/adobe-campaign-standard/event-reference"
                            },
                            {
                                title: "Migration",
                                path: "/experience-cloud-extensions/adobe-campaign-standard/migration"
                            },
                            {
                                title: "Release notes",
                                path: "/experience-cloud-extensions/adobe-campaign-standard/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Adobe Journey Optimizer",
                        path: "/experience-cloud-extensions/adobe-journey-optimizer",
                        pages: [
                            {
                                title: "Overview",
                                path: "/experience-cloud-extensions/adobe-journey-optimizer"
                            },
                            {
                                title: "API reference",
                                path: "/experience-cloud-extensions/adobe-journey-optimizer/api-reference"
                            },
                            {
                                title: "Release notes",
                                path: "/experience-cloud-extensions/adobe-journey-optimizer/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Adobe Journey Optimizer Decisioning",
                        path: "/experience-cloud-extensions/adobe-journey-optimizer-decisioning",
                        pages: [
                            {
                                title: "Overview",
                                path: "/experience-cloud-extensions/adobe-journey-optimizer-decisioning"
                            },
                            {
                                title: "API reference",
                                path: "/experience-cloud-extensions/adobe-journey-optimizer-decisioning/api-reference"
                            },
                            {
                                title: "Release notes",
                                path: "/experience-cloud-extensions/adobe-journey-optimizer-decisioning/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Adobe Target",
                        path: "/experience-cloud-extensions/adobe-target",
                        pages: [
                            {
                                title: "Overview",
                                path: "/experience-cloud-extensions/adobe-target"
                            },
                            {
                                title: "API reference",
                                path: "/experience-cloud-extensions/adobe-target/api-reference"
                            },
                            {
                                title: "Event reference",
                                path: "/experience-cloud-extensions/adobe-target/event-reference"
                            },
                            {
                                title: "Migration",
                                path: "/experience-cloud-extensions/adobe-target/migration"
                            },
                            {
                                title: "Release notes",
                                path: "/experience-cloud-extensions/adobe-target/release-notes"
                            },
                            {
                                title: "Deprecated APIs",
                                path: "/experience-cloud-extensions/adobe-target/deprecated-apis"
                            }
                        ]
                    }
                ]
            },
            {
                title: "Adobe Experience Platform Assurance",
                path: "/documentation/platform-assurance",
                pages: [
                    {
                        title: "Overview",
                        path: "/documentation/platform-assurance"
                    },
                    {
                        title: "Using Assurance",
                        path: "/documentation/platform-assurance/tutorials",
                        pages: [
                            {
                                title: "Adobe Analytics",
                                path: "/documentation/platform-assurance/tutorials/adobe-analytics.md"
                            },
                            {
                                title: "Adobe Analytics for Streaming Media",
                                path: "/documentation/platform-assurance/tutorials/adobe-analytics-streaming-media.md"
                            },
                            {
                                title: "In-App Messaging",
                                path: "/documentation/platform-assurance/tutorials/in-app-messaging.md"
                            },
                            {
                                title: "Places Service",
                                path: "/documentation/platform-assurance/tutorials/places-service"
                            },
                            {
                                title: "Push Debug",
                                path: "/documentation/platform-assurance/tutorials/push-debug-view"
                            },
                            {
                                title: "On-device views",
                                path: "/documentation/platform-assurance/tutorials/on-device-views.md"
                            },
                            {
                                title: "Validation Editor",
                                path: "/documentation/platform-assurance/tutorials/validation-summary.md"
                            },
                            {
                                title: "Versions",
                                path: "/documentation/platform-assurance/tutorials/versions.md"
                            }
                        ]
                    },
                    {
                        title: "Get access",
                        path: "/documentation/platform-assurance/get-access/"
                    },
                    {
                        title: "Set up",
                        path: "/documentation/platform-assurance/set-up.md"
                    },
                    {
                        title: "Troubleshooting",
                        path: "/documentation/platform-assurance/troubleshooting.md"
                    }
                ]
            },
            {
                title: "Adobe Journey Optimizer - in-app messaging (BETA)",
                path: "/documentation/iam",
                pages: [
                    {
                        title: "Overview",
                        path: "/documentation/iam"
                    },
                    {
                        title: "Prerequisites",
                        path: "documentation/iam/prerequisites"
                    },
                    {
                        title: "SDK setup",
                        path: "documentation/iam/setup"
                    },
                    {
                        title: "API reference",
                        path: "documentation/iam/api-reference"
                    },
                    {
                        title: "Public classes and enums",
                        path: "documentation/iam/public-classes"
                    },
                    {
                        title: "Tutorials",
                        path: "documentation/iam/tutorials",
                        pages: [
                            {
                                title: "Implement a MessagingDelegate",
                                path: "documentation/iam/tutorials/messaging-delegate"
                            },
                            {
                                title: "Call native code from the JavaScript of an in-app message",
                                path: "documentation/iam/tutorials/native-from-javascript"
                            },
                            {
                                title: "Execute Javascript methods from native code",
                                path: "documentation/iam/tutorials/javascript-from-native"
                            },
                            {
                                title: "Handle URL clicks from an in-app message",
                                path: "documentation/iam/tutorials/handle-clicks"
                            },
                            {
                                title: "Validate in-app messaging using Assurance",
                                path: "documentation/iam/tutorials/validate-messages"
                            }
                        ]
                    }

                ]
            },


            {
                title: "Building mobile extensions",
                path: "/documentation/building-mobile-extensions",
                pages: [
                    {
                        title: "Overview",
                        path: "/documentation/building-mobile-extensions"
                    },
                    {
                        title: "Event processing",
                        path: "documentation/building-mobile-extensions/event-processing"
                    },
                    {
                        title: "Shared states and events",
                        path: "documentation/building-mobile-extensions/shared-states-and-events"
                    },
                    {
                        title: "Building an extension",
                        path: "documentation/building-mobile-extensions/building-extension"
                    },
                    {
                        title: "Listening for events",
                        path: "documentation/building-mobile-extensions/listening-for-events"
                    },
                    {
                        title: "Dispatching events from your extension",
                        path: "documentation/building-mobile-extensions/dispatching-events"
                    },
                    {
                        title: "Building a tag extension interface",
                        path: "documentation/building-mobile-extensions/building-tag-extension-interface"
                    },
                    {
                        title: "Interacting with rules",
                        path: "documentation/building-mobile-extensions/interacting-with-rules"
                    },
                    {
                        title: "Get the application context",
                        path: "documentation/building-mobile-extensions/get-application-context"
                    },
                    {
                        title: "Extension logging",
                        path: "documentation/building-mobile-extensions/extension-logging"
                    },
                    {
                        title: "Mobile extension samples",
                        path: "documentation/building-mobile-extensions/mobile-extension-samples"
                    }
                ]
            },
            {
                title: "Resources",
                path: "/documentation/resources",
                pages: [
                    {
                        title: "Overview",
                        path: "/documentation/resources"
                    },
                    {
                        title: "Upgrade to the Experience Platform SDKs",
                        path: "documentation/upgrade-platform-sdks",
                        pages: [
                            {
                                title: "Overview",
                                path: "documentation/upgrade-platform-sdks"
                            },
                            {
                                title: "SDK comparison",
                                path: "documentation/upgrade-platform-sdks/comparison"
                            },
                            {
                                title: "Manual Lifecycle implementation",
                                path: "documentation/upgrade-platform-sdks/lifecycle"
                            },
                            {
                                title: "API changelog",
                                path: "documentation/upgrade-platform-sdks/api-changelog.md"
                            },
                            {
                                title: "Analytics migration",
                                path: "documentation/upgrade-platform-sdks/analytics-comparison.md"
                            }
                        ]
                    },
                    {
                        title: "Troubleshooting guides",
                        path: "documentation/troubleshooting-guides",
                        pages: [
                            {
                                title: "Overview",
                                path: "documentation/troubleshooting-guides"
                            },
                            {
                                title: "Push messaging",
                                path: "documentation/troubleshooting-guides/push-messaging"
                            },
                            {
                                title: "Campaign push notifications",
                                path: "documentation/troubleshooting-guides/push-notifications"
                            }
                        ]
                    },
                    {
                        title: "Frequently asked questions",
                        path: "documentation/faq"
                    },
                    {
                        title: "Migrate to Swift",
                        path: "documentation/migrate-to-swift"
                    },
                    {
                        title: "Privacy and GDPR",
                        path: "documentation/privacy-and-gdpr"
                    }
                ]
            },
            {
                title: "User guides",
                path: "documentation/user-guides",
                pages: [
                    {
                        title: "Overview",
                        path: "documentation/user-guides"
                    },
                    {
                        title: "Getting started with Platform",
                        path: "documentation/user-guides/getting-started-with-platform/overview",
                        pages: [
                            {
                                title: "Overview",
                                path: "documentation/user-guides/getting-started-with-platform/overview"
                            },
                            {
                                title: "Sample XDM implementation",
                                path: "documentation/user-guides/getting-started-with-platform/sample-xdm-implementation"
                            },
                            {
                                title: "Rules and XDM events",
                                path: "documentation/user-guides/getting-started-with-platform/rules-and-xdm-events"
                            }
                        ]
                    },
                    {
                        title: "Attach data to SDK events",
                        path: "documentation/user-guides/attach-data"
                    },
                    {
                        title: "Modify data in SDK events",
                        path: "documentation/user-guides/modify-data"
                    },
                    {
                        title: "Tags data elements",
                        path: "documentation/user-guides/tags-data-elements"
                    },
                    {
                        title: "Signal and rules engine integration",
                        path: "documentation/user-guides/rules-engine-integration.md"
                    },
                    {
                        title: "iOS App Extensions",
                        path: "documentation/user-guides/app-extension"
                    },
                    {
                        title: "Tracking beacons",
                        path: "documentation/user-guides/track-beacon"
                    }
                ]
            }
        ]
    },
    plugins: [`@adobe/gatsby-theme-aio`],
    pathPrefix: process.env.PATH_PREFIX || '/client-sdks/'
};
