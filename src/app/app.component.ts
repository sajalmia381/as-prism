import { Component } from '@angular/core';

import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-json';
// import 'prismjs/components/prism-scss';
// import 'prismjs/components/prism-typescript';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'as-prism-workspace';
  html_language: string = "html"
  html_code: string = `
  <h2>THis is simple html code</h2>
  <p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry</p>
  <h3>This is simple heading text</h3>
  <p>Dummy text ever since the <strong>1500s</strong>, when an unknown printer took a galley of type and scrambled</p>`

  yaml_code: string = `
  - required_engine_version: 8
  
  - list: "allowed_dev_files"
    items:
    - "/dev/null"
    - "/dev/urandom"
    append: true
  
  - list: "allowed_image"
    items:
    - "techincent-ci"
    append: true
  
  - rule: "Accept VPC Peering Connection"
    desc: "Detect accepting an VPC peering connection."
    condition: "jevt.value[/eventName]="AcceptVpcPeeringConnection" and not jevt.value[/errorCode]"
    exceptions: []
    output: "A VPC peering connection has been accepted (requesting user=%jevt.value[/userIdentity/arn])"
    priority: "INFO"
    tags:
    - "cloud"
    - "mitre_TA0005-defense-evasion"
    - "mitre_T1089-disabling-security-tools"
    - "aws_vpc"
    - "aws"
    - "mitre_T1108-redundant-access"
    - "mitre_TA0003-persistence"
    source: "aws_cloudtrail"`

  json_code: string = `{
    "kind": "Deployment",
    "apiVersion": "apps/v1",
    "metadata": {
      "name": "ti-dashboard",
      "namespace": "techincent",
      "uid": "8c754e-kafi-4d13-2457-855e787f4c",
      "labels": {
        "app": "techincent-dashboard",
        "role": "techincent"
      },
      "annotations": {
        "deployment.kubernetes.io/revision": "1"
      }
    },
    "spec": {
      "replicas": 1,
      "selector": {
        "matchLabels": {
          "app": "techincent-dashboard",
          "role": "techincent"
        }
      }
    }
  }`

  directive_json_code: string = `{
    "kind": "Deployment",
    "apiVersion": "apps/v1",
    "metadata": {
      "name": "ti-dashboard",
      "namespace": "techincent",
      "uid": "8c754e-kafi-4d13-2457-855e787f4c",
      "labels": {
        "app": "techincent-dashboard",
        "role": "techincent"
      },
      "annotations": {
        "deployment.kubernetes.io/revision": "1"
      }
    },
    "spec": {
      "replicas": 1,
      "selector": {
        "matchLabels": {
          "app": "techincent-dashboard",
          "role": "techincent"
        }
      }
    }
  }`
}
