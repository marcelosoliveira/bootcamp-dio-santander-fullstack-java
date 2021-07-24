import { Injectable } from "@angular/core";
import { Course } from "./course";

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    public retrieveAll(): Course[] {
        return COURSES;
    }

    public retrieveById(id: number): Course {
        return Object(COURSES.find((interator: Course) => id === interator.id));
    }

    public save(course: Course): void {
        if (course.id) {
            const index = COURSES.findIndex(
                (iterator: Course) => iterator.id === course.id);
                
            COURSES[index] = course;
        }
    }
   
}

var COURSES: Course[] = [
    {
        id: 1,
        name: 'Introdução Angular 8',
        imageUrl: '/assets/images/forms.png',
        price: 99.99,
        description: 'Pricipais abordagens básicas do Angular 8',
        code: 'xps-9988',
        duration: 5,
        rating: 4,
        releaseDate: '22/07/2021',
    },
    {
        id: 2,
        name: 'Trybe',
        imageUrl: '/assets/images/http.png',
        price: 36000,
        description: 'Escola que ensina a programar - Desenvolvedor Fullstack Web',
        code: 'fac-1234',
        duration: 1500,
        rating: 4.5,
        releaseDate: '10/09/2020',
    },
    {
        id: 3,
        name: 'Bootcamp Santander',
        imageUrl: '/assets/images/router.png',
        price: 0,
        description: 'Santander Bootcamp Fullstack Spring e Angular',
        code: 'STD-3245',
        duration: 400,
        rating: 5,
        releaseDate: '26/06/2021',
    },
    {
        id: 4,
        name: 'Bootcamp GFT',
        imageUrl: '/assets/images/animations.png',
        price: 0,
        description: 'Bootcamp STARTER#2 Java intensivo ao back-end',
        code: 'GFT-5678',
        duration: 400,
        rating: 5,
        releaseDate: '14/06/2021',
    }         
];
