export interface IPost {
    id?: number;
    body?: any;
    author?: string;
    title?: string;
}

export class Post implements IPost {
    constructor(public id?: number, public body?: any, public author?: string, public title?: string) {}
}
