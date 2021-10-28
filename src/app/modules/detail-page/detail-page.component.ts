import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {HttpService} from "../../common/http/http.service";
import {UsersModel} from "../../shared/models/users.model";
import {Form, FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../core/auth/auth.service";

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit, OnDestroy {
  public id: string | undefined;
  private routeSub: Subscription;
  public userInfo = this.fb.group({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(''),
    photo: new FormControl(''),
    university: new FormArray([]),
  });
  public isAdmin: boolean;

  constructor(
    private router: ActivatedRoute,
    private http: HttpService,
    private fb: FormBuilder,
    private authService: AuthService) {
    // @ts-ignore
    this.isAdmin = this.authService.currentUserValue.role !== 'admin';
    console.log(this.isAdmin)
    this.routeSub = this.router.params.subscribe(param => {
      this.id = param['id'];
      this.createFormWitchUserInfo(param['id'])
    })
  }

  ngOnInit(): void {

  }

  get formArr() {
    return this.userInfo.get("university") as FormArray;
  }

  createFormWitchUserInfo(id: string) {

    this.http.getUserInfoById(id).subscribe((user) => {
        Object.keys(user).forEach((key) => {
          if (key === 'university') {
            user[key].forEach((item: string) => {
              (this.userInfo.controls[key] as FormArray).push(new FormControl(item))
            });
            return
          }
          this.userInfo.patchValue({[key]: user[key]})
        })
      }
    )
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  deleteUniversity(idx: number) {
    (this.userInfo.controls['university'] as FormArray).removeAt(idx)
  }
}
