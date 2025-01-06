import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { GetSummaryService } from '../../services/get-summary.service';
import { NgIf } from '@angular/common';
import { PdfService } from '../../services/pdf.service';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  getSummary = inject(GetSummaryService);
  pdfService=inject(PdfService)

  pdf: boolean = false;

  ngOnInit() {
    this.getSummary.pdf$.subscribe(
      (data) => {
        this.pdf = data;
      }
    )
  }


  onGenerateClick(form: NgForm) {
    let id = form.value.url.split("=")[1]
    this.getSummary.getSummary(id)

  }

  onDownloadClick(){
    this.pdfService.generatePdf();
  }

  hideDownload()
  {
    this.getSummary.hideDownloadButton()
  }
}
