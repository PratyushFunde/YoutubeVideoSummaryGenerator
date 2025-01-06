import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }



  generatePdf() {
    const marginTop = 10;    // Top margin in mm
    const marginLeft = 15;   // Left margin in mm
    const marginRight = 15;  // Right margin in mm
    const marginBottom = 10;

    const pdfJs = document.querySelector('#pdfContent') as HTMLElement;
    console.log(pdfJs.innerHTML)
    pdfJs.classList.add('text-black')

    const contentWidth = pdfJs.offsetWidth;
    const contentHeight = pdfJs.offsetHeight;

    // Calculate A4 dimensions (210x297mm)
  const pageWidth = 210;
  const pageHeight = 297;

    // Calculate the available space for content within the margins
  const availableWidth = pageWidth - marginLeft - marginRight;
  const availableHeight = pageHeight - marginTop - marginBottom;

  // Calculate scale based on the available space
  const scaleX = availableWidth / contentWidth;  // Scale for width (available width / content width)
  const scaleY = availableHeight / contentHeight; // Scale for height (available height / content height)
  const scale = Math.min(scaleX, scaleY); // Use the smaller scale factor to ensure content fits


    // Calculate scale based on the content size
    // const scaleX = 210 / contentWidth;  // Scale for width (A4 width / content width)
    // const scaleY = 297 / contentHeight; // Scale for height (A4 height / content height)
    // const scale = Math.min(scaleX, scaleY);

    let doc = new jsPDF();
    
    doc.html(pdfJs, {
      callback: function (doc) {
        doc.save("newpdf.pdf");
      },
      x: marginLeft,
      y: marginTop,
      // Set to full page width (A4 width)
      // height: 297, 
      // Adjust content width to fit the A4 page (A4 width minus margins)
      // height: 190
      html2canvas: {
        scale: scale // Scale down the content to fit the page if it's too large
      }
    })

    // doc.save('test.pdf')
    // pdfJs.classList.remove('text-white');
  }

}
