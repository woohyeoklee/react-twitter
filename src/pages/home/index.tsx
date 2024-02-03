import PostForm from "components/posts/PostForm";
import PostBox from "components/posts/PostBox";




export interface PostProps {
  id: string;
  email: string;
  content: string;
  createdAt: string;
  uid: string;
  profileUrl?: string;
  likes?: string[];
  likeCount?: number;
  comments?: string[];
}

const posts: PostProps[] = [
  {
    id: "1",
    email: "abc@example.com",
    content: "This is my first post!",
    createdAt: "2021-10-10T12:00:00Z",
    uid: "123123"
  },
  {
    id: "2",
    email: "abc@example.com",
    content: "This is my first post!",
    createdAt: "2021-10-10T12:00:00Z",
    uid: "123123"
  },
  {
    id: "3",
    email: "abc@example.com",
    content: "This is my first post!",
    createdAt: "2021-10-10T12:00:00Z",
    uid: "123123"
  },
  {
    id: "4",
    email: "abc@example.com",
    content: "This is my first post!",
    createdAt: "2021-10-10T12:00:00Z",
    uid: "123123"
  },
  {
    id: "5",
    email: "abc@example.com",
    content: "This is my first post!",
    createdAt: "2021-10-10T12:00:00Z",
    uid: "123123"
  },
  {
    id: "6",
    email: "abc@example.com",
    content: "This is my first post!",
    createdAt: "2021-10-10T12:00:00Z",
    uid: "123123"
  }
  
]

export default function HomePage() {


  return (
    <div className="home">
      <div className="home__title">Home</div>
      <div className="home__tabs">
        <div className="home__tab--active">For You</div>
        <div className="home__tab">Following</div>
      </div>

      <PostForm />
      <div className="post">
        {posts?.map((post) => (
          <PostBox post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}