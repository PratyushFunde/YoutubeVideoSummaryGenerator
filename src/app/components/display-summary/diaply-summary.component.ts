import { Component, inject } from '@angular/core';
import { GetSummaryService } from '../../services/get-summary.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-diaply-summary',
  standalone: true,
  imports: [],
  templateUrl: './diaply-summary.component.html',
  styleUrl: './diaply-summary.component.scss'
})
export class DiaplySummaryComponent {
  summary=''
  getSummary=inject(GetSummaryService)
  ngOnInit(){
    this.getSummary.summary$.subscribe(
      (summary)=>{
        this.summary=this.formatResponse(summary)
        // summary;
      }
    )
  }


   formatResponse(response:string) {
    // Split the response by line breaks to get individual points
    const sections = response.split('\n').filter(line => line.trim().length > 0);

    // Create a container element
    let formattedContent = "<div id='pdfContent'>";

    sections.forEach(section => {
        // Add bolding around any initial part that starts with the number and bolded text (i.e., "1.", "2.", etc.)
        if (section.match(/^\d+\./)) {
            section = section.replace(/^\d+\.\s*\*\*(.*?)\*\*:/, '<h3><strong>$1</strong>:</h3>');
        }

        // Replace bold **text** with HTML <strong> for bolding
        section = section.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        // Wrap the formatted section with a <p> for paragraphs
        formattedContent += `<p>${section}</p>`;
    });

    formattedContent += '</div>';
    return formattedContent;
}




}
