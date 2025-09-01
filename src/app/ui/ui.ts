import { CommonModule, DecimalPipe } from '@angular/common';

import { Accardion } from './accardion/accardion';
import { Component, signal } from '@angular/core';
import { ProductItem } from './product-item/product-item';
import { Tab, TabInterface } from './tab/tab';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Button } from './button/button';

@Component({
  selector: 'app-ui',
  imports: [
    DecimalPipe,
    ProductItem,
    CommonModule,
    Accardion,
    Tab,
    ReactiveFormsModule,
    Button,
  ],
  templateUrl: './ui.html',
  styleUrl: './ui.scss',
})
export class Ui {
  /**
   * Reactive form for managing product quantity input.
   */
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      shoppingCardInput: new FormControl<number>(1, {
        nonNullable: true,
        validators: [Validators.min(1), Validators.max(this.productQuantity)],
      }),
    });
  }

  /**
   * The maximum available stock for this product.
   */
  productQuantity: number = 10;

  /**
   * Signal that tracks the remaining stock after quantity selection.
   *
   * @default productQuantity
   */
  remainingStock = signal<number>(this.productQuantity);

  /**
   * Signal that indicates if the maximum stock has been reached.
   */
  maxStockReached = signal<boolean>(false);

  /**
   * Signal indicating whether the product has been added to the cart.
   *
   * @default false
   */
  notInCart = signal<boolean>(false);

  sections = [
    {
      title: 'توضیحات تکمیلی محصول',
      content:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
      open: false,
      id: 0,
    },
    {
      title: 'نظرات',
      content: 'هیچ نظری ثبت نشده است',
      open: false,
      id: 2,
    },
  ];

  tabs: TabInterface[] = [
    {
      title: 'توضیحات تکمیلی محصول',
      content:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
      icon: 'icon-description',
    },
    {
      title: 'نظرات',
      content: 'هنوز نظری ثبت نشده است',
      icon: 'icon-comment',
    },
  ];

  toggleSection(index: number) {
    this.sections[index].open = !this.sections[index].open;
  }

  /**
   * Decreases the product quantity in the form by one,
   * if the current value is greater than zero.
   *
   * @remarks
   * - Updates the remaining stock.
   * - Resets the max stock flag if it was previously reached.
   */
  onMinusBtnClicked() {
    const control = this.form.get('shoppingCardInput');
    if (control) {
      const currentValue = control.value ?? 0;
      if (currentValue > 1) {
        control.setValue(currentValue - 1);
        this.remainingStock.update((stock) => stock + 1);
        this.maxStockReached.set(false);
      } else if (currentValue === 1) {
        this.notInCart.set(!this.notInCart());
      }
    }
  }

  /**
   * Increases the product quantity in the form by one,
   * if it does not exceed the available stock.
   *
   * @remarks
   * - Updates the remaining stock.
   * - Sets the max stock flag when the product quantity limit is reached.
   */
  onPlusBtnClicked() {
    const control = this.form.get('shoppingCardInput');
    if (control) {
      const currentValue = control.value ?? 0;
      if (currentValue < this.productQuantity) {
        control.setValue(currentValue + 1);
        this.remainingStock.update((stock) => stock - 1);
        if (currentValue + 1 === this.productQuantity) {
          this.maxStockReached.set(true);
        }
      }
    }
  }

  /**
   * Toggles the product's cart status between added and not added.
   *
   * @remarks
   * Used to change the button state and display accordingly.
   */
  onAddProductToCart() {
    this.notInCart.set(!this.notInCart());
  }
}
