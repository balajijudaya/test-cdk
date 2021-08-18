import * as core from "@aws-cdk/core";
import * as apigateway from "@aws-cdk/aws-apigateway";
import * as lambda from "@aws-cdk/aws-lambda";

export class HelloService extends core.Construct {
constructor(scope: core.Construct, id: string) {
super(scope, id);

       const handler = new lambda.Function(this, "AppHandler", {
           runtime: lambda.Runtime.NODEJS_10_X,
           code: lambda.Code.fromAsset("api"),
           handler: "hello.handler",
       });

       const api = new apigateway.RestApi(this, "hello-api", {
           restApiName: "Serverless Hello API",
           description: "This is a basic API."
       });

       const apiIntegration = new apigateway.LambdaIntegration(handler, {
           requestTemplates: { "application/json": '{ "statusCode": "200" }' }
       });

       const randomRoute = api.root.addResource('randomnumber')
       randomRoute.addMethod("GET", apiIntegration);
}
}
