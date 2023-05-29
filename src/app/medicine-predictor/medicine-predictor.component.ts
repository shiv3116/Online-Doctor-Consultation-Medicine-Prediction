import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-medicine-predictor',
  templateUrl: './medicine-predictor.component.html',
  styleUrls: ['./medicine-predictor.component.css']
})
export class MedicinePredictorComponent {
  @Input() userInput: string;
  botMessages: string[] = [];

  constructor(private http: HttpClient) { }

  sendUserInput(): void {
    this.botMessages.push(this.userInput); // Display user message in the UI

    this.http.post<any>('http://127.0.0.1:8000/predict', { disease_name: this.userInput })
      .subscribe(response => {
        const prediction = response.prediction;
        this.botMessages.push(`A suitable drug you can use is: ${prediction}`); // Display prediction in the UI

        // Assuming the response contains the 'drug_name' key
        if ('drug_name' in response) {
          const drugName = response.drug_name;
          this.botMessages.push(`Drug Name: ${drugName}`); // Display drug name in the UI
        }
      });

    this.userInput = ''; // Clear user input field
  }
}
