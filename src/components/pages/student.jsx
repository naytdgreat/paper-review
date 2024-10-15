import React from "react";
import ButtonOne from "../ButtonOne";
import logo from '../../images/logo.png';
import plus from '../../images/plus.png';
import pen from '../../images/pen.png';
import chevronDown from '../../images/chevron-down.png';
import userIcon from '../../images/user.png';
import optionsIcon from '../../images/options.png';
import docIcon from '../../images/doc-icon.png';
import sendArrow from '../../images/send-arrow.png';
import { Formik, Form } from "formik";
import * as Yup from 'yup';


const Student = () => {
    const newProject = () => {
        console.log("create new project");
    }
    const uploadInit = () => {
        console.log("show modal");
    }

    const commentSchema = Yup.object().shape({
        comment: Yup.string().required("comment empty"),
    });

    return ( 
        <div className="profile">
            <aside className="sidebar">
                <a href="/" className="logo"><img src={logo} alt="logo" /></a>
                <div className="create-new">
                    <a href='/' onClick={newProject} >New Project 
                        <img src={plus} alt="new-project" />  
                    </a>
                    <div className="dropdown">
                        <a href="/">New Blank Page</a>
                        <a href="/">Autofill with document</a>
                    </div>
                </div>
                
                <div className="history">
                    <div className="item">
                        <span>Today</span>
                        <div className="list">
                            <div className="project">
                                <p>The History of m...</p>
                                <div className="options">
                                    <a href="/"><img src={pen} alt="edit-project" /></a>
                                    <a href="/"><img src={optionsIcon} alt="project options" /></a>
                                    <div>
                                        <a href="/">edit</a>
                                        <a href="/">delete</a>
                                    </div>
                                </div>
                            </div>
                            <div className="project">
                                <p>The History of m...</p>
                                <div className="options">
                                    <a href="/"><img src={pen} alt="edit-project" /></a>
                                    <a href="/"><img src={optionsIcon} alt="project options" /></a>
                                    <div>
                                        <a href="/">edit</a>
                                        <a href="/">delete</a>
                                    </div>
                                </div>
                            </div>
                            <div className="project">
                                <p>The History of m...</p>
                                <div className="options">
                                    <a href="/"><img src={pen} alt="edit-project" /></a>
                                    <a href="/"><img src={optionsIcon} alt="project options" /></a>
                                    <div>
                                        <a href="/">edit</a>
                                        <a href="/">delete</a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="item">
                        <span>Today</span>
                        <div className="list">
                            <div className="project">
                                <p>The History of m...</p>
                                <div className="options">
                                    <a href="/"><img src={pen} alt="edit-project" /></a>
                                    <a href="/"><img src={optionsIcon} alt="project options" /></a>
                                    <div>
                                        <a href="/">edit</a>
                                        <a href="/">delete</a>
                                    </div>
                                </div>
                            </div>
                            <div className="project">
                                <p>The History of m...</p>
                                <div className="options">
                                    <a href="/"><img src={pen} alt="edit-project" /></a>
                                    <a href="/"><img src={optionsIcon} alt="project options" /></a>
                                    <div>
                                        <a href="/">edit</a>
                                        <a href="/">delete</a>
                                    </div>
                                </div>
                            </div>
                            <div className="project">
                                <p>The History of m...</p>
                                <div className="options">
                                    <a href="/"><img src={pen} alt="edit-project" /></a>
                                    <a href="/"><img src={optionsIcon} alt="project options" /></a>
                                    <div>
                                        <a href="/">edit</a>
                                        <a href="/">delete</a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="item">
                        <span>Today</span>
                        <div className="list">
                            <div className="project">
                                <p>The History of m...</p>
                                <div className="options">
                                    <a href="/"><img src={pen} alt="edit-project" /></a>
                                    <a href="/"><img src={optionsIcon} alt="project options" /></a>
                                    <div>
                                        <a href="/">edit</a>
                                        <a href="/">delete</a>
                                    </div>
                                </div>
                            </div>
                            <div className="project">
                                <p>The History of m...</p>
                                <div className="options">
                                    <a href="/"><img src={pen} alt="edit-project" /></a>
                                    <a href="/"><img src={optionsIcon} alt="project options" /></a>
                                    <div>
                                        <a href="/">edit</a>
                                        <a href="/">delete</a>
                                    </div>
                                </div>
                            </div>
                            <div className="project">
                                <p>The History of m...</p>
                                <div className="options">
                                    <a href="/"><img src={pen} alt="edit-project" /></a>
                                    <a href="/"><img src={optionsIcon} alt="project options" /></a>
                                    <div>
                                        <a href="/">edit</a>
                                        <a href="/">delete</a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="badge">
                    <img src={userIcon} alt="user" />
                    <div>
                        <strong>Charles Baker</strong>
                        <span>Student</span>
                    </div>
                </div>
            </aside>
            <div className="content">
                <header className="fixed-top">
                    <div className="title">
                        <h5>Enhancing Cybersecurity through Machine Learning Algorithms</h5>    
                    </div>
                    <div className="create">
                        <ButtonOne onClick={uploadInit} />
                    </div>
                </header>
                <div>
                    <div className="paper-content">
                        
                            <a href="/"><img src={chevronDown} alt="collapse section" /><span>Introduction</span></a>
                            <p>
                                This is the day that the lord has made and we  aught to be proud of 
                                it and make sure to save the day anyway you can. This is the day that
                                the lord has made and we  aught to be proud of it and make sure to save
                                the day anyway you can lord has made and we  aught to be proud of it and make sure to save
                                the day anyway you can lord has made and we  aught to be proud of it and make sure to save
                                the day anyway you can 
                            </p>
                            <p>
                                This is the day that the lord has made and we  aught to be proud of 
                                it and make sure to save the day anyway you can. This is the day that
                                the lord has made and we  aught to be proud of it and make sure to save
                                the day anyway you can
                            </p>
                            <a href="/"><img src={chevronDown} alt="collapse section" /><span>Introduction</span></a>
                            <p>
                                This is the day that the lord has made and we  aught to be proud of 
                                it and make sure to save the day anyway you can. This is the day that
                                the lord has made and we  aught to be proud of it and make sure to save
                                the day anyway you can lord has made and we  aught to be proud of it and make sure to save
                                the day anyway you can lord has made and we  aught to be proud of it and make sure to save
                                the day anyway you can 
                            </p>
                            <p>
                                This is the day that the lord has made and we  aught to be proud of 
                                it and make sure to save the day anyway you can. This is the day that
                                the lord has made and we  aught to be proud of it and make sure to save
                                the day anyway you can
                            </p>
                            <a href="/"><img src={chevronDown} alt="collapse section" /><span>Introduction</span></a>
                            <p>
                                This is the day that the lord has made and we  aught to be proud of 
                                it and make sure to save the day anyway you can. This is the day that
                                the lord has made and we  aught to be proud of it and make sure to save
                                the day anyway you can lord has made and we  aught to be proud of it and make sure to save
                                the day anyway you can lord has made and we  aught to be proud of it and make sure to save
                                the day anyway you can 
                            </p>
                            <p>
                                This is the day that the lord has made and we  aught to be proud of 
                                it and make sure to save the day anyway you can. This is the day that
                                the lord has made and we  aught to be proud of it and make sure to save
                                the day anyway you can
                            </p>
                        
                        
                    </div>
                    <div className="reviews">
                        <h6>Reviewers Remarks</h6>
                        <div className="review-list">
                            <div className="item">
                                <a href="download-doc"><img src={docIcon} alt="doc" /> View in Document</a>
                                <p>In the contemporay landscape of escalating cyber threats and sophisticated attacks. the ...</p>
                                <div className="comments">
                                    <div>
                                        <span>Dr. Abelowa Joe</span>
                                        <p>Remove this paragraph from the list of paragraphs provided in this context</p>
                                    </div>
                                    <div>
                                        <span>Dr. Abelowa Joe</span>
                                        <p>Remove this paragraph from the list of paragraphs provided in this context</p>
                                    </div>
                                    
                                </div>
                                <div className="input">
                                    <Formik 
                                        initialValues={ {comment: ''} }
                                        validationSchema={ commentSchema }
                                        onSubmit={(values, { setSubmitting }) => {
                                            setTimeout(() => {
                                                alert(JSON.stringify(values, null, 2));
                                                setSubmitting(false);
                                            }, 4000);
                                        }} 

                                    >
                                        {({ isSubmitting }) => (
                                            <Form >
                                                <input type="text" placeholder="Type Something..." />
                                                <button type="submit"><img src={sendArrow} alt="send-arrow" /></button>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                            <div className="item">
                                <a href="download-doc"><img src={docIcon} alt="doc" /> View in Document</a>
                                <p>In the contemporay landscape of escalating cyber threats and sophisticated attacks. the ...</p>
                                
                                <div className="input">
                                    <Formik 
                                        initialValues={ {comment: ''} }
                                        validationSchema={ commentSchema }
                                        onSubmit={(values, { setSubmitting }) => {
                                            setTimeout(() => {
                                                alert(JSON.stringify(values, null, 2));
                                                setSubmitting(false);
                                            }, 4000);
                                        }} 

                                    >
                                        {({ isSubmitting }) => (
                                            <Form >
                                                <input type="text" placeholder="Type Something..." />
                                                <button type="submit"><img src={sendArrow} alt="send-arrow" /></button>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>    
     );
}
 
export default Student;