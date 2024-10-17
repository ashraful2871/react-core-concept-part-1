export default function Singer(singer) {
  console.log(singer.singer);
  return (
    <div>
      <h3>Singer: {singer.singer.name}</h3>
      <p>Age: {singer.singer.age}</p>
    </div>
  );
}
