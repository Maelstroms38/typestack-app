import axios from 'axios';
export default async function fetchBook(isbn: String) {
  const config = {
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  };
  const { data } = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&?maxResults=1`,
    config
  );
  const { items } = data;
  if (items && items.length) {
    let item = items[0];
    item.volumeInfo.thumbnail = `https://pictures.abebooks.com/isbn/${isbn}-us-300.jpg`;
    return item;
  }
  return null;
}
