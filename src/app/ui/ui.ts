import { CommonModule, DecimalPipe } from "@angular/common";

import { Accardion } from "./accardion/accardion";
import { Component } from "@angular/core";
import { ProductItem } from "./product-item/product-item";
import { Tab } from "./tab/tab";

@Component({
  selector: "app-ui",
  imports: [DecimalPipe, ProductItem, CommonModule, Accardion, Tab],
  templateUrl: "./ui.html",
  styleUrl: "./ui.scss",
})
export class Ui {
  sections = [
    {
      title: "توضیحات تکمیلی محصول",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
      open: false,
      id: 0,
    },
    {
      title: "نظرات",
      content: "هیچ نظری ثبت نشده است",
      open: false,
      id: 2,
    },
  ];

  toggleSection(index: number) {
    this.sections[index].open = !this.sections[index].open;
  }
}
