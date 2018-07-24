```html
<div class="input-group mb-3">
  <input #inputLinksToTest type="text" class="form-control" placeholder="Put your links here to be tested"
         aria-label="Put your links here to be tested" aria-describedby="button-addon3"
         value="github.com">
  <div class="input-group-append">
    <button class="btn btn-primary btn-outline-secondary" type="button" id="button-addon3"
            (change)="this.testLinkResult = this.linkifyService.test(inputLinksToTest.value)"
            (click)="this.testLinkResult = this.linkifyService.test(inputLinksToTest.value);
             this.testLinkRequested = true">Test
    </button>
  </div>
 </div>

<div class="card mt-2">
  <div class="card-body">
    <div>{{testLinkResult}}</div>
    <div *ngIf="!testLinkRequested" class="alert alert-info" role="alert">
      Press the test button to test the link
    </div>
  </div>
</div>
```
