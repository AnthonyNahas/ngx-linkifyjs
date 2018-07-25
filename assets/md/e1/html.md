```html
<div class="row">
  <div class="card mx-auto col-12 col-xl-9" style="width: 22rem;">
    <img class="card-img-top" src=".../200px280/" alt="Card image cap">
       <div class="card-body">
        <h5 class="card-title">Linkify some HTML</h5>
        <p class="card-text" [innerHTML]="example1"></p>
        <button class="btn btn-primary" (click)="this.example1 = this.linkifyService.linkify(this.example1)">Linkify          </button>
       </div>
  </div>
</div>
```
