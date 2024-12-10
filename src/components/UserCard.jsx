import '../style/UserCard.css'
import { FaTrashCan, FaGift } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
function UserCard({ user, openEdit, deleteUser }) {
  return (
    <div className="card">
      <h3 className="card_name">{user?.first_name} {user?.last_name}</h3>
      <div className="card_info">
        <div>
          <span className='card_label'>Correo</span>
          {user?.email}
        </div>
        <div>
          <span className='card_label'>Cumpleaños</span>
          <span className='card_data'><FaGift className='icon--gift'/> {user?.birthday}</span>
        </div>
      </div>
      <div className="card_btns">
        <button className='btn_delete' onClick={ () => deleteUser(user?.id)}>
          <FaTrashCan />
        </button>
        <button className='btn_edit' onClick={()=> openEdit(user)}>
          <FaEdit />
        </button>
      </div>
    </div>
  );
}

export default UserCard;
