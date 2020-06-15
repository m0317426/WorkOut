import { Component, OnInit } from '@angular/core';
import { Oefening } from '../model/oefening';
import { WorkOutPlan } from '../model/workoutplan'
import * as _ from 'lodash';


@Component({
  selector: 'app-work-out-plan',
  templateUrl: './work-out-plan.component.html',
  styleUrls: ['./work-out-plan.component.css']
})

export class WorkOutPlanComponent implements OnInit {
 
  public displayOefening:boolean=false;
  public displayStartButton:boolean=true;
  public displayPauzeButton:boolean=false;
  public displayTime:boolean=true;

  public activeOefening: Oefening;
  public oefeningNummer: number=0;
  workoutPlan:WorkOutPlan=new WorkOutPlan();

  constructor() { 
    this.workoutPlan.Naam = 'Workout plan - Xtreme edition';
    this.workoutPlan.Titel = '5 eenvoudige workout oefeningen om je zomerlijn te halen';
    this.workoutPlan.RustTussenOefeningen = 10;
    //maak oefeningen aan, https://www.ladylemonade.nl/thuis-sporten-work-out-oefeningen/
    
    this.workoutPlan.Oefeningen.push(
      new Oefening(
        'Leg lifts',
        'Leg lifts zijn de perfecte oefening om je bilspieren te trainen. Je kern train je ook gelijk mee voor een betere stabiliteit',
        'Ga op handen en knieën zitten, je onderarmen plat op de mat en je rechterbeen lang uitgestrekt naar achter. Til je been naar het plafond en laat hem dan langzaam weer zakken, terwijl je bilspieren aangespannen zijn. Als je het lastig vindt om dit ‘gevoel’ te vinden, knijp dan je billen samen en begin van daaruit met de beweging. Houd je buikspieren bij deze work out oefeningen ook altijd strak aangespannen zodat je ook je core traint, maar ook omdat het rugpijn voorkomt',
        30
      )
    );
    this.workoutPlan.Oefeningen.push(
      new Oefening(
        'Squats',
        'Squats zijn super goeie oefeningen voor het versterken van de spieren rond je benen en billen. Dit zijn relatief grote spieren waarmee je veel calorieën kunt verbranden.',
        'Zet je voeten op schouderbreedte, strek je armen voor je uit op schouderhoogte en buig je benen 90 graden alsof je wilt gaan zitten. Duw je billen naar achteren, je borst naar voren, schouders laag en je hakken stevig in de grond en kom weer omhoog. Je moet je gewicht op je hielen voelen.',
        30
      )
    );
    this.workoutPlan.Oefeningen.push(
      new Oefening(
        'Push ups',
        'Push ups kennen we allemaal wel. Ze hebben een groot effect op het bovenlichaam; ze maken je armen en borst sterker en gespierder.',
        'Ga op handen en voeten op je matje liggen. Zet je handen voor je, zodat ze direct onder je schouders staan. Zorg dat je lichaam een rechte lijn vormt, span je buikspieren strak aan, je ellebogen wijzen iets naar achteren. Laat je lichaam dan naar de grond zakken en duw jezelf weer omhoog. Wanneer je normale push ups vanuit je tenen nog te lastig vindt, kun je starten met push ups op handen en knieën.',
        30
      )
    );
    this.workoutPlan.Oefeningen.push(
      new Oefening(
        'Burpees',
        'De Burpee is een variatie op de Squat. Met burpees train je je benen, armen, borst, rug en buikspieren.',
        'Sta rechtop – je voeten weer op schouderbreedte – buig door je benen en zet je handen op de grond. Stap met je rechtervoet en daarna met je linkervoet naar achteren, zodat je in een push-up positie komt. Doe de push up. Stap dan met je rechtervoet en daarna je linkervoet richting je handen en spring omhoog met je handen in de lucht.',
        30
      )
    );
    this.workoutPlan.Oefeningen.push(
      new Oefening(
        'Sit ups',
        'Sit-ups zijn verreweg de beste oefeningen om je buikspieren te trainen. Niet de leukste oefeningen want het is hard werken, maar zeker de moeite waard.',
        'Ga plat op je rug liggen en plaats je benen in een hoek van 90 graden. Plaats je handen bij je oren en beweeg rustig met je hoofd naar je knieën. Als je ellebogen je knieën raken (ongeveer) dan ga je weer rustig omlaag. Bij deze oefening moet je voelen dat je buikspieren het werk doen.',
        30)
    )
  }

  public timeLeft: number = 30;
  public interval;
  public pauze: boolean=false;

  start(){
    this.displayOefening=true;
    this.displayStartButton=false;
    this.displayPauzeButton=true;

    this.oefeningNummer=0;
    this.timeLeft=0;
    this.pauze=false;
    
    this.interval = setInterval(() => {
      if(this.timeLeft>0){
        this.timeLeft--;
      }
      else {
        if (this.pauze == false) {
          this.activeOefening = this.workoutPlan.Oefeningen[
            this.oefeningNummer
          ];
          this.timeLeft = this.activeOefening.tijdsduur;
          this.pauze = true;
          this.oefeningNummer++;
        } else {
          
            if (this.workoutPlan.Oefeningen.length === this.oefeningNummer) {
            this.activeOefening.titel = 'Gefeliciteerd!';
            this.activeOefening.beschrijving =
              'Uw heeft alle oefeningen gemaakt.';
              this.displayTime=false;
              this.timeLeft = -1;
            this.pauseTimer();
          } else {
            this.activeOefening.naam = 'Pauze';
            this.activeOefening.titel = 'Goed bezig, je hebt even pauze verdient';
            this.activeOefening.beschrijving = 'Even rusten, we gaan dadelijk terug verder';
            this.timeLeft = this.workoutPlan.RustTussenOefeningen;
            this.activeOefening.tijdsduur = this.workoutPlan.RustTussenOefeningen;
            this.pauze = false;
          
          }
      
    }}}, 1000)
  }
  
  reset() {
    this.oefeningNummer=0;
    this.pauseTimer();    
    this.displayStartButton=true;
    this.displayPauzeButton=false;
    this.displayOefening=false;
    
  }
  pauseTimer() {
    clearInterval(this.interval);
  }
 
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
}
}
