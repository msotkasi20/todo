export default function Row({item,deleteTask}) {
    return (
         <li>
            {item.description}
            <button //tehdään button, jolla deletoidaan valittu rivi
              className='delete-button' onClick={ () => 
              deleteTask(item.id)}>Delete</button>
          </li> 
    )
}