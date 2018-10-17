import { Component, Injectable } from '@angular/core';
import {globalInj} from './global.inj';
import {gtextarea} from './Components/gtextarea';
import {Router} from '@angular/router';

@Component({

  selector:'sepet',
  templateUrl: './ShoppingCart.html',

})

export class ShoppingCart {

  public urunlist=[];
  public toplamFiyat=0;

constructor(private inj:globalInj,private router: Router){

 this.toplamFiyatHesapla();

}

toplamFiyatHesapla(){
  this.urunlist=this.inj.sepettekiUrunler;
  for(var i = 0; i< this.urunlist.length; i++){

    this.toplamFiyat+=this.urunlist[i].price;
  }

}
  anaSayfayaGit () {
  this.inj.sepettekiUrunler=this.urunlist;
    this.router.navigateByUrl('/anasayfa');
}
    urunuSil(ul) {

    console.log(ul);

    for(var i = 0; i< this.urunlist.length; i++){

      if(ul.name==this.urunlist[i].name){
        this.inj.sepettekiUrunler.splice(i,1);
      }

    }
    this.inj.sepettekiUrunler=this.urunlist;
    this.toplamFiyat=0;
    this.toplamFiyatHesapla();

  }

}

