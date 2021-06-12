/* eslint-disable no-unused-vars */
export class PostDto {
    constructor(
        public id: number,
        public title: string,
        public createdAt: Date,
        public content: string,
        public likesQuantity: number
    ) {}
}
