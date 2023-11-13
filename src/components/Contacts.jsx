import { useEffect } from "react";

const Contacts = () => {
    useEffect(() => {
       const timeOutId = setTimeout(() => {
            console.log('2 seconds');
        }, 2000)

        return() => {
            clearTimeout(timeOutId)
        }
    })
    return(
        <>
            <h2>Contacts Page</h2>

            <label htmlFor="">Title</label><br />
            <input type="text" /><br />
            <label htmlFor="">Description</label><br />
            <textarea name="" id="" cols="30" rows="10"></textarea> <br />
            <input type="submit" />
        </>
    )
};

export default Contacts;