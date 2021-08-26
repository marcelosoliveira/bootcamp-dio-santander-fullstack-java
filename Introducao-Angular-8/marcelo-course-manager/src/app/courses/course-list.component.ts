import { Component, OnInit } from "@angular/core";
import { Course } from "./course";import { CourseService } from "./course.service";
 "./course";

@Component({
    // selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

    public filteredCourse: Course[] = [];

    public courses: Course[] = [];

    private filterBy: string = '';

    constructor(private courseService: CourseService) {};

    ngOnInit(): void {
        this.retrieveAll();
    }

    public retrieveAll(): void {
        this.courseService.retrieveAll().subscribe({
            next: courses => { 
                this.courses = courses;
                this.filteredCourse = this.courses;        
            },
            error: err => console.log(`ERROR: ${err}`),
        });
    }

    public delete(id: number) {
        this.courseService.deleteById(id).subscribe({
            next: () => {
                console.log("Delete with success");
                this.retrieveAll();
            },
            error: (err) => console.log(`ERRROR: ${err}`),
        });
    }

    set filter(value: string) {
        this.filterBy = value;
        this.filteredCourse = this.courses.filter(
            (course) => course.name.toLowerCase()
            .indexOf(this.filterBy.toLowerCase()) > -1)
    }

    get filter() {
        return this.filterBy;
    }

}