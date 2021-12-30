import React, {useState} from 'react';
import { Bars } from './NavbarELements'
import { RightNav } from './RightNav';

const Burger = () => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <Bars open={open} onClick={()=>setOpen(!open)}>
                <div/>
                <div/>
                <div/>
            </Bars>
            <RightNav open={open}/>
        </>
    )
}

export default Burger
