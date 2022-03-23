import React from 'react'
import UIButton from '../UI/UIButton'
import InputField from '../UI/InputField'

const Students = () => {
    return (
    <section className="main-ui-section">
    <div className="main-ui-section-top main-ui-section-top--full">
        <UIButton text={"+ Add new student"} width={"280px"}  margin={"0 0 0 0"} float={"left"} value=""/>
        <InputField type={"text"} placeholder={"Search"} name={"searchBar"} width={"280px"} float={"right"}/>
    </div>
    <div className="students-list">
        <table className="students-table students-table--full">
        <thead>
            <tr>
                <th style={{width:"10px"}}>x</th>
                <th>NAME</th>
                <th>E-MAIL</th>
                <th>SUBJECT</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><div className="user-image-circle">
                        <img src="../images/users/user2.jpg" draggable="false"/>
                    </div></td>
                <td><a className="student-data--name">Anna Krótkie</a></td>
                <td><a className="student-data--email">anna.krotkie@gmail.com</a></td>
                <td><a className="student-data--subject">English</a></td>
            </tr>
            <tr>
                <td>
                    <div className="user-image-circle">
                        <img src="../images/users/user1.jpg" draggable="false"/>
                    </div>
                </td>
                <td><a className="student-data--name">Jan Kowalski</a></td>
                <td><a className="student-data--email">jan.kowalski@gmail.com</a></td>
                <td><a className="student-data--subject">Japanese</a></td>
            </tr>
            <tr>
                <td><div className="user-image-circle">
                    <img src="../images/users/user3.jpg" draggable="false"/>
                </div> </td>
                <td><a className="student-data--name">Katarzyna Bardzodługienazwisko</a></td>
                <td><a className="student-data--email">katarzyna.bardzodlugienazwisko@gmail.com</a></td>
                <td><a className="student-data--subject">Spanish</a></td>
            </tr>
        
        </tbody>
    </table>
    </div>
    <div className="student-overview">
        <a className="Exit">X</a>
    </div>
    </section>
    )
}

export default Students
