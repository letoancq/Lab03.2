import React from 'react';

export function SearcgPage (){

    const [result, setResult] = useState([])

    return (
        <div className="container-staff">
        <h3 className="list-staffs">Danh sách nhân viên</h3>
          <input type="text" className="search-staff-input">
          </input>
          <span className="search-staff-btn">Search</span>    

          </div>
    )

}