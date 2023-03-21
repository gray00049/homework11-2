import { useSelector } from "react-redux";

export default function PhotoList() {
  const photos = useSelector(state => state.photoArr);

  let photoBlock = [];

  for (let i = photos.length - 1; i > 0; i--) {
    console.log(i)
    photoBlock.push(
      <div className="col-3 my-2" key={i}>
        <div className="image-card rounded" style={{backgroundImage: `url(${photos[i]})`}}></div>
      </div>
    ) 
  }

  return (
    <div className="row">
      {photoBlock}
    </div>
  )
}