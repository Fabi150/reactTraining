import react from 'react';
import DanAbramovImage from 'https://ekino-tv.pl/static/thumb/qtnun0lczts4.jpg';
const ListItem = () => (
    <li className='listItemWrapper'>
        <img src={DanAbramovImage}/>
        <div>
            <h2>Dan Abramov</h2>
            <p>
            Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.
            </p>
        </div>
    </li>
);

export default ListItem;