
import PropTypes from 'prop-types'
const SinglePlayer = ({player , handleDelete}) => {
    const {name , type , image , price} = player
  return (
    <div>
      <div className="border flex justify-between items-center rounded-2xl p-2 my-8">
        <div className="flex items-center">
          <img className="w-20 h-20 object-cover p-2 rounded-3xl" src={image} alt="" />
          <div className="">
            <p className="text-lg font-bold">{name}</p>
            <p className="">{type}</p>
            <p>${price}</p>
          </div>
        </div>
        <div className="">
          <div onClick={()=>handleDelete(player)} className="btn">
            <i className="fa-solid fa-trash text-red-600 "></i>
          </div>
        </div>
      </div>
    </div>
  );
};
SinglePlayer.propTypes = {
  player : PropTypes.object.isRequired
}

export default SinglePlayer;
