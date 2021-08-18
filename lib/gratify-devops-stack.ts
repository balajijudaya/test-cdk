import * as cdk from '@aws-cdk/core';
import * as hello_service from '../lib/hello_service';

export class GratifyDevopsStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    new hello_service.HelloService(this, 'HelloApi');
  }
}
