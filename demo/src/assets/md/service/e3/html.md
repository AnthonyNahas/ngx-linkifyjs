```html
<div class="input-group mb-3">
   <div class="input-group-prepend">
     <span class="input-group-text" id="basic-addon1">Find</span>
   </div>
   <input #inputLinksToFind type="text" class="form-control" placeholder="Put your links here to be found"
          aria-label="Put your links here to be found" aria-describedby="basic-addon1"
          (change)="this.foundLinks = this.linkifyService.find(inputLinksToFind.value)">
</div>

<div class="card mt-2">
  <div class="card-body">
    <div *ngFor="let link of foundLinks"  [innerHTML]="link  | json"></div>
  </div>
</div>
```
