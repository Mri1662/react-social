import "./feed.css"
import Share from "../share/share"
import Post from "../post/post"
import {Posts} from "../../dummy"

export default function Feed() {
  return (
    <div className="feed"><div className="feedWrapper">
      <Share />
      {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  )
}
