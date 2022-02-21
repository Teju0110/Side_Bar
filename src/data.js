import { AiFillHome } from 'react-icons/ai';
import { IoDocuments } from 'react-icons/io5';
import { FaShoppingCart } from 'react-icons/fa'
import { RiTeamFill } from 'react-icons/ri'
import { RiMessage3Fill } from 'react-icons/ri'
import { MdContactSupport } from 'react-icons/md';

export const sideBarData =[
    {
        title:'Home',
        path:'/',
        icon:<AiFillHome/>,
        cName:'nav-text'

    },
    {
        title:'Report',
        path:'/report',
        icon:<IoDocuments/>,
        cName:'nav-text'

    },
    {
        title:'Cart',
        path:'/cart',
        icon:<FaShoppingCart/>,
        cName:'nav-text'

    },
    {
        title:'Team',
        path:'/team',
        icon:<RiTeamFill/>,
        cName:'nav-text'

    },
    {
        title:'Message',
        path:'/message',
        icon:<RiMessage3Fill/>,
        cName:'nav-text'

    },
    {
        title:'Support',
        path:'/support',
        icon:<MdContactSupport/>,
        cName:'nav-text'

    },
]

