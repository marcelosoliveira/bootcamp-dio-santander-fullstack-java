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
        this.course = this.courseService.retrieveById(this.courseId);
    }

    public save() {
        this.courseService.save(this.course);
    }

}