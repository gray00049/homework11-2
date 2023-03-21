import { useRef } from "react";
import { useDispatch } from "react-redux"
import { addPhoto } from "../redux/slice/photoSlice";


export default function PhotoInput() {
  const dispatch = useDispatch();

  const input = useRef()

  const handleSubmitForm = evt => {
    evt.preventDefault();
    let file = input.current.files[0];

    dispatch(addPhoto(URL.createObjectURL(file)))
  }

  return (
    <form className="p-5 border rounded text-center" onSubmit={handleSubmitForm} >
      <div className="input-group">
        <input 
          type="file" 
          className="form-control"
          accept="image/*"
          ref={input}
        />
        <button className="btn btn-outline-success">Добавить</button>
      </div>
      
    </form>
  )
}