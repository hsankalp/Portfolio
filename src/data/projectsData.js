export const data = [
  {
    name: "Simulation Platform for Autonomous Vehicles",
    description:
      "I am currently working on the AV Simulation Platform that mimics real world scenarios for autonomous vehicles moving on the road for the transportation-as-a-service (TaaS) teams to test their features in a risk-free environment. We are currently migrating the existing spring boot application to serverless architecture with the help of AWS Lambda functions, Nodejs and Java. The user facing web application that allows users to test the TaaS features is being built using Reactjs and Mapbox. We follow eXtreme Programming (XP) practices including Pair/Mob programming and Test-first/Test Driven Development (TDD) to achieve continuous delivery and better quality of code."
  },
  {
    name: "Subscription Management and Orchestration for Ford Mobility",
    description:
      "I previously worked on Subscription Services Platform (SSP) that orchestrated the events for subscription and enrollment of features in a vehicle. We worked on migrating the existing monolith application to the Microservice architecture using Java, Spring Boot and Pivotal Cloud Foundry. The application was split into 6 smaller loosely coupled independent services (that could be deployed and scaled individually) based on their business capabilities. We followed eXtreme Programming (XP) practices including Pair/Mob programming and Test-first/Test Driven Development (TDD) to achieve continuous delivery and better quality of code. We setup automated workflows for Continuous Integration and Delivery with the help of Pivotal’s Concourse CI"
  },
  {
    name: "Web application for monitoring microservices",
    description:
      "I created a web application (or dashboard) for the Subscription Services Platform (SSP) with the help of Reactjs and Spring Boot that monitors all the events received by the platform as well as monitors all the SSP microservices. It gives a count of total events,completed events, pending events and failed events for a day, week or a month. It alerts if any internal errors occur due to bad code. It also monitors the health of all the SSP microservices and other services like databases and messaging queues and alerts if any of them are down. It also monitors the messaging queues and alerts if any of the queues start piling up. It helps us scale up the microservices during heavy traffic. This application is being used by production support to prevent any issues from happening."
  },
  {
    name: "Web application to replay Dead-Letter-Queue (DLQ) messages",
    description:
      "I created another web application for the Subscription Services Platform (SSP) with the help of Reactjs, Spring Boot and RabbitMQ that monitored the messages that went to the dead-letter-queues due to maximum retry attempts after a failure. The application gave user the ability to selectively replay the message back to the original queue once the issue in the code was detected and fixed."
  }
];
