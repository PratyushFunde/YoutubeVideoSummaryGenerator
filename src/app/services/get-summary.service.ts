import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface ResponseData {
  response: string;
}

@Injectable({
  providedIn: 'root'
})


export class GetSummaryService {

  constructor(private http:HttpClient) { }

  private loadingSubject=new BehaviorSubject<boolean>(false);
  public loading$=this.loadingSubject.asObservable();

  private summarySubject=new BehaviorSubject<string>('');
  public summary$=this.summarySubject.asObservable();

  private pdfBehaviourSubject=new BehaviorSubject<boolean>(false);
  public pdf$=this.pdfBehaviourSubject.asObservable()

  // summary:string=''
  backendURL="http://127.0.0.1:8000/process"

  getSummary(videoId:string)
  {
    let data={"inputString":videoId}
    
    this.loadingSubject.next(true)
    this.http.post<ResponseData>(this.backendURL,data).subscribe({
      
      next:(res)=>{
        this.loadingSubject.next(false);
        this.summarySubject.next(res.response);
        this.pdfBehaviourSubject.next(true);
      },
      error:(err)=>{
        this.loadingSubject.next(false)
        console.log("Some error occured"+err)
      }
    })
    console.log(videoId)
  }

  hideDownloadButton()
  {
    this.pdfBehaviourSubject.next(false);
  }

}
