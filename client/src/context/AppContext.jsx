import React, { useEffect } from 'react';
import { createContext } from 'react';
import { dummyCourses } from '../assets/assets';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AppContext = createContext()

export const AppContextProvider = (props) => {

    const currency=import.meta.env.VITE_CURRENCY
    const navigate = useNavigate()
    
    const [allCourses, setAllCourses] = useState([])
    const [isEducator, setIsEducator] = useState(false)

    //fetch all courses
    const fetchAllCourses = async () =>{
        setAllCourses(dummyCourses)
    }
    //func to calc avg rating
    const calculateRating = (course) =>{
        if(course.courseRatings.length === 0)
            return 0;
        
        let sum = 0
        course.courseRatings.forEach(rating => {
            sum+=rating.rating
        })

        return (sum/course.courseRatings.length)
    }

    useEffect(() =>{
            fetchAllCourses()
        },[]
    )
    const value = {
        currency, allCourses,navigate,calculateRating,isEducator,setIsEducator
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}