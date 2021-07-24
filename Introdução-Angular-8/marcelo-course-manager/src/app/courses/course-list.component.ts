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
        this.courses = this.courseService.retrieveAll();
        this.filteredCourse = this.courses;
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