import { Component, inject } from '@angular/core';
import { InputComponent } from "../input/input.component";
import { DiaplySummaryComponent } from "../display-summary/diaply-summary.component";
import { LoaderComponent } from "../loader/loader.component";
import { NgIf } from '@angular/common';
import { GetSummaryService } from '../../services/get-summary.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [InputComponent, DiaplySummaryComponent, LoaderComponent, NgIf],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  isLoading: boolean = false;

  getSummary = inject(GetSummaryService);

  ngOnInit() {
    this.getSummary.loading$.subscribe(
      (loading) => {
        this.isLoading = loading;
      }
    )
  }

}
