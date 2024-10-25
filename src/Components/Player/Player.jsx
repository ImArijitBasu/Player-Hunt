
import PropTypes from 'prop-types'

const Player = ({player , handleAddedPlayer}) => {
    const {name ,country , type , role , price , image} = player;
    return (
        <div>
            <div className="bg-slate-50 w-full rounded-2xl p-6 border">
                <div className="">
                    <img className='object-cover w-full h-64 rounded-2xl' src={image} alt="" />
                </div>
                <p className='font-bold text-xl py-3'><i className='fa-solid fa-user text-2xl pr-2'></i>{name}</p>
                <div className="flex justify-between items-center">
                    <p className='text-gray-500'> <i className='fa-solid fa-flag pr-2'></i> {country}</p>
                    <button className='btn capitalize text-base'>{role}</button>
                </div>
                <hr className='my-3' />
               <div className="space-y-3">
               <p className='font-bold'>Ratting</p>
                <div className="flex justify-between items-center">
                    <p className='font-bold'>{type}</p>
                    <p>{type}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className='font-bold'>Price : ${price}</p>
                    <button onClick={()=> handleAddedPlayer(player)} className='btn bg-white'>Choose Player</button>
                </div>
               </div>
            </div>
        </div>
    );
};
Player.propTypes ={
    player : PropTypes.object.isRequired,
    handleAddedPlayer : PropTypes.func.isRequired,
}

export default Player;