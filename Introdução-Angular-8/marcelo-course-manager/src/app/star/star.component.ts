import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

    @Input()
    public rating: number = 0;
    public starWidth: number = 0;

    ngOnChanges(): void {
        this.starWidth = this.rating * (74 / 5); 
    }

}