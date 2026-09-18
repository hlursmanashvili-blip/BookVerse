export default function BookCard({ title, author, genre, coverImage }) {
  return (
    <div
      style={{
        height: 500,
        width: 300,
        border: "1px solid gray",
        borderRadius: 15,
      }}
    >
      <div
        style={{
          height: 300,
          width: 300,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          backgroundImage: `url(${coverImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        style={{
          padding: 10,
        }}
      >
        <h1>{title}</h1>
        <p>{author}</p>
        <p>{genre}</p>
      </div>
    </div>
  );
}
