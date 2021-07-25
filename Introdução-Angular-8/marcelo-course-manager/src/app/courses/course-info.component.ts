import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {
    
    public courseId: number = 0;
    public course!: Course;

    constructor(private activatedRoute: ActivatedRoute,
        private courseService: CourseService) {};    
    
    ngOnInit(): void {
        this.courseId = +this.activatedRoute.snapshot.params.id;
        this.retrieveCourseById();
    }

    public retrieveCourseById(): Course {
        this.courseService.retrieveById(this.courseId).subscribe({
            next: (course) => this.course = course,
            error: (err) => console.log(`ERROR: ${err}`),
        });
        return this.course;
    }

    public save() {
        this.courseService.save(this.retrieveCourseById()).subscribe({
            next: (course) => this.course = course,
            error: (err) => console.log(`ERROR: ${err}`),
        });
    }

}