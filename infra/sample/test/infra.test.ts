import * as cdk from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import * as CdkAppSample from "../lib/infra-stack";
import { addAssetSnapshotSerializer } from "./add";

test("CDK Sample App Stack", () => {
  const app = new cdk.App();
  const stack = new CdkAppSample.InfraStack(app, "CdkAppSampleStack");
  const template = Template.fromStack(stack);
  addAssetSnapshotSerializer();
  expect(template).toMatchSnapshot();
});
