import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import {PostService} from '../entities/post/post.service';
import { IPost } from 'app/shared/model/post.model';
import { Principal } from 'app/core';
import { JhiAlertService } from 'ng-jhipster';

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: ['home.css']
})
export class HomeComponent implements OnInit {

    posts: IPost[] = [];
    currentAccount: any;

    constructor(private postService: PostService,
        private jhiAlertService: JhiAlertService
        private principal: Principal) {

    }

    loadAll() {
        this.postService.query().subscribe(
            (res: HttpResponse<IPost[]>) => {
                this.posts = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    ngOnInit() {
        this.loadAll();
        this.principal.identity().then(account => {
            this.currentAccount = account;
        });
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

}
