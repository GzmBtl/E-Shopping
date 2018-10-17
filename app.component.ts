import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { MainPage } from './MainPage';
import {globalInj} from './global.inj';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

public girisCikisButon;
  public sepetListesi;
  constructor(private router: Router,private glbl: globalInj){

  }

  ngOnInit(){
    this.router.navigateByUrl('');

    this.glbl.cartList=this.glbl.sepettekiUrunler;
    this.sepetListesi=this.glbl.cartList;

    this.glbl.buttonText=this.glbl.loginKullaniciAdi;
    this.girisCikisButon=this.glbl.buttonText;

    if(this.glbl.loginKullaniciAdi== "Gizem"){

      // this.router.navigateByUrl("sepet");
    }
    else{
      this.girisCikisButon="ÜYE GİRİRİŞİ";
    }

  }
  selectedCategory(categoryName: string) {
    this.glbl.selectedCat = categoryName;
    console.log(this.glbl.selectedCat);
  }

  sepeteGit () {
    this.router.navigateByUrl('/sepet');
    this.glbl.sepettekiUrunler=this.sepetListesi;
  }

  uyeGiris () {

    // this.gl.buttonText=giris.innerText;

    if(this.girisCikisButon=="ÜYE GİRİRİŞİ"){
      this.router.navigateByUrl('/loginpage');
      this.glbl.sepettekiUrunler=this.sepetListesi;
    }
    else if(this.girisCikisButon=="Gizem"){
      alert("çıkış yapıldı.......");
      this.girisCikisButon="ÜYE GİRİRİŞİ";
      this.sepetListesi.length=0;
    }

  }


}


