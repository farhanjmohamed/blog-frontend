export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params);
    event.target.reset();
  };
  return (
    <div>
      <h1>{props.post.title}</h1>
      <img src={props.post.image} alt="" height="50%" />
      <p>{props.post.body}</p>
      <div>
        <h3> Edit Post</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input
            className="form-control"
            defaultValue={props.post.title}
            type="text"
            id="title"
            name="title"
            placeholder="title"
          />
          <label htmlFor="body" className="mt-2">
            Body:{" "}
          </label>
          <input
            className="form-control"
            defaultValue={props.post.body}
            type="text"
            id="body"
            name="body"
            placeholder="body"
          />
          <label htmlFor="image" className="mt-2">
            Image Url:{" "}
          </label>
          <input
            className="form-control"
            defaultValue={props.post.image}
            type="text"
            id="image"
            name="image"
            placeholder="image_url.jpg"
          />
          <button className="btn btn-primary mt-3" type="submit">
            Update Post
          </button>
        </form>
      </div>
    </div>
  );
}
