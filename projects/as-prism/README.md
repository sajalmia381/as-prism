<div align="center">
  <h1>Angular Prism Code Highlighter</h1>
</div>

## Install

```bash
npm install as-prism --save
```

`prismjs` package is a required dependency

```bash
npm install prismjs --save
```

## Setup

#1 Add AsPrismModule to app NgModule

```typescript
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AsPrismModule } from "as-prism";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AsPrismModule, // AsPrismModule added
  ],
  bootstrap: [App],
  declarations: [App],
})
class MainModule {}
```

#2 Add prism theme css in styles.css or styles.scss or styles.less file

```css
/* Prismjs theme */
@import "prismjs/themes/prism.css";
```

INFO: Prism available theme

```css
/* Available themes */
@import "prismjs/themes/prism-coy.css";
@import "prismjs/themes/prism-dark.css";
@import "prismjs/themes/prism-funky.css";
@import "prismjs/themes/prism-okaidia.css";
@import "prismjs/themes/prism-solarizedlight.css";
@import "prismjs/themes/prism-tomorrow.css";
@import "prismjs/themes/prism-twilight.css";
```

#3 Optional: import language.

If you have highlighter use case all over the application. than it's better to import languages in the root component like app.component.ts file

```typescript
// language import
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-typescript';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ...
}
```

## Use

#1 Data

Note\*: if your import language in app.component.ts then you don't need to import language in particular file.

```typescript
import { Component } from '@angular/core';

// Input languages that you are using. Note: HTML language code default imported
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-json';
// import 'prismjs/components/prism-scss';
// import 'prismjs/components/prism-typescript';

@Component({...})
export class YourComponent {
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
    append: true

  - list: "allowed_image"
    items:
    - "techincent-ci"
    append: true

  - rule: "Accept VPC Peering Connection"
    tags:
    - "cloud"
    source: "aws_cloudtrail"`

  json_code: string = `{
    "kind": "Deployment",
    "apiVersion": "apps/v1",
    "metadata": {
      "name": "ti-dashboard",
      "namespace": "techincent",
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
```

#2 Render as-prism element in html

```html
<h2>HTML Code Example</h2>
<as-prism [code]="html_code" [language]="html_language"></as-prism>

<h2>YAML Code Example</h2>
<as-prism [code]="yaml_code" language="yaml"></as-prism>

<h2>JSON Code Example</h2>
<as-prism [code]="json_code" language="json"></as-prism>
```

INFO: Checkout available languages support [https://prismjs.com/#supported-languages]

---

## License

MIT

# Change Log

- 2.2.0
  directive base highlighter, Note: developmentApi (it's testing)

# Major Change Log

- 0.x.x -> Support Angular 14.x.x
- 1.x.x -> Support Angular Version 15.x.x
- 2.x.x -> Support Angular Version 16.x.x
- 2.3.x -> Support Angular Version >= 16.x.x

