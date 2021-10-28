import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {HttpService} from "../../common/http/http.service";
import {FormArray, FormBuilder, FormControl} from "@angular/forms";
import {AuthService} from "../../core/auth/auth.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit, OnDestroy {
  public id: string | undefined;
  private routeSub = new Subscription();
  public addControl = new FormControl('')
  public userInfo = this.fb.group({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(''),
    photo: new FormControl(''),
    university: new FormArray([]),
  });
  public isAdmin: boolean;
  public online!: boolean;

  constructor(
    private router: ActivatedRoute,
    private http: HttpService,
    private fb: FormBuilder,
    private toast: ToastrService,
    private authService: AuthService) {
    // @ts-ignore
    this.isAdmin = this.authService.currentUserValue.role !== 'admin';
    const subRoute = this.router.params.subscribe(param => {
      this.id = param['id'];
      this.createFormWitchUserInfo(param['id'])
    })
    this.routeSub.add(subRoute)
  }

  ngOnInit(): void {

  }

  get formArr() {
    return this.userInfo.get("university") as FormArray;
  }

  createFormWitchUserInfo(id: string) {
    const subUser = this.http.getUserInfoById(id).subscribe((user) => {
        Object.keys(user).forEach((key) => {
          if (key === "online") {
            this.online = user[key];
            return;
          }
          if (key === 'university') {
            user[key].forEach((item: string) => {
              (this.userInfo.controls[key] as FormArray).push(new FormControl(item))
            });
            return
          }
          this.userInfo.patchValue({[key]: user[key]})
        })
      }
    );
    this.routeSub.add(subUser)
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  deleteUniversity(idx: number) {
    (this.userInfo.controls['university'] as FormArray).removeAt(idx)
  }

  addUniv() {
    (this.userInfo.controls['university'] as FormArray).push(new FormControl(this.addControl.value))
  }

  postInfo() {
    const subPost = this.http.putUserInfo(this.userInfo.value, this.id).subscribe(() => {
      this.toast.success('Update complete')
    })
    this.routeSub.add(subPost)
  }
}
