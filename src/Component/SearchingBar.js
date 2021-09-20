
import React from 'react'

export default function SearchingBar({ searchinp, searchkey, searchitem }) {



    return (
        <div className="m-2 form-control row searchbar">
            <input type="text" className="col-9 searchinp" onChange={searchinp} value={searchkey} />

            <input type="button" value="Serach" className="col-3 btn btn-outline-warning " style={{ alignContent: 'flex-end' }} onClick={searchitem} />

        </div>
    )
}
