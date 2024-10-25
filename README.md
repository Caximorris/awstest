# AWS Lambda Time Service

This project is a simple AWS Lambda function deployed using the AWS SAM (Serverless Application Model) framework. The Lambda function returns the current time in hours, minutes, and seconds (formatted as `HH:MM:SS`).

## Features
- The function accepts an HTTP GET request and returns the current time.
- Deployed using AWS Lambda and accessible via an API Gateway or Lambda Function URL.
- Built using Node.js 20.x runtime.

## Prerequisites

Before you begin, make sure you have the following installed:
- **AWS CLI**: [Install AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
- **AWS SAM CLI**: [Install SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html)
- **Node.js**: [Install Node.js](https://nodejs.org/en/download/)
- **AWS Account**: You need an AWS account with appropriate permissions to deploy Lambda functions.

# Setup Instructions
1. Clone the Repository
```bash
git clone https://github.com/caximorrise/awstest.git
cd awstest
```

2. Build the Project
Build the project using the AWS SAM CLI:

```bash
sam build
```
3. Deploy the Project
Deploy the project to your AWS account using the SAM CLI:

```bash
sam deploy --guided
```
You will be prompted to provide:

A stack name
The AWS region
Confirm changes before deployment
Permissions for the Lambda function
Once the deployment is complete, you will get a URL (either from API Gateway or Lambda Function URL) where the Lambda function is accessible.
My case:
https://jarx53tp6qt6cpaplyag5kvew40gkunw.lambda-url.eu-west-3.on.aws/Prod/dev-mati?name=coquixo
