/* eslint-disable no-unused-vars */
export class PostDto {
    constructor(
        public title: string,
        public createdAt: string,
        public content: string,
        public likesQuantity: number
    ) {}
}
