import React, { Fragment } from "react";
import Header from "./header";
import book from '../../src/images/book.png';
import teacher from '../../src/images/teacher.png';

const Role = () => {
    return (
        <Fragment>
            <Header buttonDisplay={false} />
            <div className="role-container">
                <div className="role">
                    <h3>Select your role</h3>
                    <div>
                        <a href="/student-signup">
                            <img src={book} alt="" />
                            <h4>Student</h4>
                            <p>I write research papers and theses for supervisors to review.</p>
                        </a>
                        <a href="/reviewer-signup">
                            <img src={teacher} alt="" />
                            <h4>Reviewer</h4>
                            <p>I review and edit students’ research papers.</p>
                        </a>
                    </div>
                    <span>Already have admin access? </span><a href="/login">Log in as admin</a>
                </div>
            </div>
        </Fragment>
    );
}
 
export default Role;

