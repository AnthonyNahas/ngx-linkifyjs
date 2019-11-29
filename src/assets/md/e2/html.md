```html
<div class="row">
      <div class="card mx-auto mt-5 col-12 col-xl-9" style="width: 22rem;">
        <img class="card-img-top" src=".../200px280/" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Custom</h5>
          <div class="form-group">
            <label for="customTextFormControlTextarea">check your text with ngx-linkifyjs</label>
            <textarea #textAreaExample2 class="form-control" id="customTextFormControlTextarea" rows="4">
            Put you content here to test it with ngx-linkifyjs, e.g: https://github.com/AnthonyNahas
          </textarea>

            <div class="card mt-3">
              <div class="card-body" [innerHTML]="example2">
              </div>
            </div>
          </div>

          <button class="btn btn-primary" (click)="this.example2 = this.linkifyService.linkify(textAreaExample2.value)">
            Linkify
          </button>
        </div>
      </div>
    </div>
```
