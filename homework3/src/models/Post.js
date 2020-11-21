export default class Post {
    constructor(id, author, text, media, likes) {
        this.id = id;
        this.author = author;
        this.createTime = new Date();
        this.text = text;
        this.media = media;
        this.likes = likes;
    }
}