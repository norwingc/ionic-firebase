import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseService } from './../providers/firebase-service';


const firebaseConfig = {
    apiKey: "AIzaSyDLHpkOhYSNN51BF4h-DlXj-15IwewKS6g",
    authDomain: "project-ionic-first.firebaseapp.com",
    databaseURL: "https://project-ionic-first.firebaseio.com",
    projectId: "project-ionic-first",
    storageBucket: "project-ionic-first.appspot.com",
    messagingSenderId: "122773264902"
 };

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
