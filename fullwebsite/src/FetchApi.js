import React, { useState, useEffect } from 'react';

const FetchApi = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {

        
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        setUsers(await response.json());
        //console.log(data);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>
            <h2>fetch Api from jsonplaceholder</h2>
            <div className="container-fluid mt-5">
                <div className="row text-center">

                {
                    users.map((curElem)=>{
                        return(
                            <div className="col-10 col-md-4 mt-5">
                        <div className="card p-2">
                            <div className="d-flex align-items-center">
                                <div className="image"><img src="" width="155" /></div>
                                <div className="ml-3 w-100">
                                    <h4 className="mb-0 mt-0 textleft">{curElem.name}</h4><span className="textleft">{curElem.username}</span>
                                    <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                        <div className="d-flex flex-column"><span className="articles">Articles</span><span className="number1">56</span></div>
                                        <div className="d-flex flex-column"><span className="followers">followers</span><span className="number2">57</span></div>
                                        <div className="d-flex flex-column"><span className="rating">rating</span><span className="number3">58</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        )
                    })
                }
                    



                </div>
            </div>
        </div>
    )
}

export default FetchApi;