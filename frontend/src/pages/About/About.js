import React,{useRef,useEffect, useState} from 'react'
import { Helmet } from 'react-helmet';
import {Image} from '@chakra-ui/react'
import HashLoader from "react-spinners/HashLoader";
import './aboutcss.css'
const About = () => {
    const Line = useRef(null);
    const text = useRef(null);
    useEffect(() => {
                setTimeout(() =>{
        Line.current.classList.add('lineon')
        text.current.classList.add('titleon');
        },5)


        return () => {

        }
    },[])
    return (
        

        
        <>
        <Helmet>
            <title>About</title>
        </Helmet>


            <div className='headingA'>
                <div className = 'line' ref={Line}>
                </div>
                <h1 className ='title' ref={text}>The Warriors</h1>
            </div>
            <div className='Content1'>
                <div className = 'text'>
                    <h1>
                        Why?
                    </h1>
                <p>Background: There are more than 1000 universities in India and these universities are offering thousands of undergraduate, post-Graduate and doctorate courses. The students applying for these universities have to do a lot of comparison for choosing the university/course on the basis of various criteria’s. A PAN India university information bank is required for accessing course details, comparison of courses, facilities and faculty, admission, tracking student mobility, viewing results, evaluation and certification, verification of certificates, joint online courses (MOOCs). This will help both student and faculty communities for self improvement through comparison and emulations. Lack of information is leading to self glorification and inbreeding among University and College student and faculty members. Summary: The universities in India provide various courses on different disciplines and the students have to compare these courses on the basis of various parameters. The courses range from Bachelor, Masters and P.hd courses. The integration of these details on a single platform will enhance the transparency and remove difficulty being faced by the students due to lack of information. Objective: : To develop an integrated platform to provide the information of the courses offered by Indian universities"</p>
                </div>
               
                   <div className ='imagecontainer'>
                    <div className = 'Imageabt'>
                    <Image className='mImage' boxSize = '400px' objectFit="cover" src='https://images.unsplash.com/photo-1614771637369-ed94441a651a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' alt="Segun Adebayo"/>
                    </div>
                   </div>
            </div>
            <div className ='Content2'>
                   
                   <div className ='imagecontainer'>
                    <div className = 'Imageabt'>
                    <Image className='mImage' boxSize = '400px' objectFit="cover" src='https://images.unsplash.com/photo-1614038276039-667c23bc32fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=389&q=80' alt="Segun Adebayo"/>
                    </div>
                   </div>
                   <div className = 'text'>
                    <h1>
                        How?
                    </h1>
                <p>University and course related information will be there and we can compare it like product comparison in amazon, flipkart. It can suggest best university/ courses according to your input data like your marks, your budget and you can appear in required test and get admission also from this portal. Education loan facility can also be provided if required. Student and faculty profile details will be there. It will provide student and faculty ranking in India in your course. University/ Institution Ranking- In various courses. Student Ranking- You can check your current ranking (Ranking is based on overall performance of the student), how you can improve it, what course or activity is required to increase your ranking. Faculty Ranking- Faculty ranking on the basis of their research publication, patents, experience, degree, certification, result, awards etc. Data Verification: The data and information provided by University/ Institutions/ Faculty/ Student need to be verified from different stack holders like alumni, employer, publication authority, ex-employee, parents, industry persons etc. to stop self glorification and fair comparison. Our solution will provide verified placement data from employers, genuine feedback from alumni, parent, and ex-employee. Our website will help both student and faculty communities for self improvement through comparison.</p>
                </div>
            </div>
        </>
    
    )
}

export default About
