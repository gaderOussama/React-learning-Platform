import { useState, useEffect} from 'react'
import React from 'react'
import CourseListing from './CourseListing'
import Spinner from './Spinner';
import axios from 'axios';


const CoursesListings = ({ isHome=false }) => {

    const [Courses, setCourses]= useState([]);
    const[Loading, setLoading] = useState(true);

    useEffect( () =>{
        const apiurl= isHome ? 'api/Courses?_limit=3' : 'api/Courses'
        axios.get(apiurl)
        .then(response =>{
            setCourses(response.data);
        })
        .catch(error =>{
            console.log('Error in fetching data',error);
        })
        .finally(()=>{
            setLoading(false);
        });
    },[]);

        /* useEffect(() =>{
            const fetchCourses= async() =>{
                const apiUrl= isHome ? 'api/Courses?_limit=3' : 'api/Courses' ;
                try{
                    const res=await fetch(apiUrl)
                    const Data= await res.json()
                    setCourses(Data)
                }catch{
                    console.log("error in fetching data",error)
                }finally{
                    setLoading(false);
                }
            }
            fetchCourses();
    }, [])  */

  return (
    <section className='bg-blue-50 py-5 px-3'>
        <div className="container-xl lg:container m-auto mb-6">
            <h2 className='text-indigo-500 text-center text-2xl mb-5'>
                {isHome ? 'latest Courses' : 'Available Courses'}
            </h2>
        
            {Loading ? (<Spinner loading={Loading}/>) : (
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {Courses.map((Course) =>(
                <CourseListing  key={Course.id} Course={Course} /> ))}
               </div>
                )}
        
        </div>
        
    </section>
  )
}

export default CoursesListings