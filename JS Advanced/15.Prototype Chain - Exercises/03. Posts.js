function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.coments = [];
        }

        addComment(value) {
            this.coments.push(" * " + value);
        }

        toString() {
            let parentStr = super.toString();
            parentStr += `\nRating: ${this.likes - this.dislikes}`;
            if (this.coments.length > 0) {
                parentStr += `\nComments:\n${this.coments.join("\n")}`;
            }
            return parentStr;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            return super.toString() + `\nViews: ${this.views}`;
        }
    }

    return {Post, SocialMediaPost, BlogPost}
}
