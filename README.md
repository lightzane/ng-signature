# Angular Signature

Creating angular signature by just copying [angular2-signaturepad](https://www.npmjs.com/package/angular2-signaturepad) locally in the project to remove dependency and be compatible with Angular v15+

But still depending on [signature_pad](https://www.npmjs.com/package/signature_pad)

## Install Signature Pad

```bash
npm i signature_pad
```

## Copy SignaturePad folder

`src/app/signature-pad`

## Import to your App

```diff
+import { SignaturePadModule } from './signature-pad/signature-pad.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
+       SignaturePadModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
```

## Use it

```html
<signature-pad
    [options]="signaturePadOptions"
    (onEndEvent)="drawComplete()">
</signature-pad>
```

## Demo

https://lightzane.github.io/ng-signature/
