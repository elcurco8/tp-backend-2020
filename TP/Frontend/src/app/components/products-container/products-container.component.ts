import { Component, OnInit } from '@angular/core';
import { ProductCardsService } from '../../services/product-cards.service';
import { ActivatedRoute } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss'],
})
export class ProductsContainerComponent implements OnInit {
  list: any = [];

  descripcionParameter = '';
  rubroParameter = '';
  empresaParameter = '';

  currentItemsToShow = [];
  pageEvent: PageEvent;

  constructor(
    private service: ProductCardsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.descripcionParameter = params.searchKey;
      this.rubroParameter = params.idRubro;
      this.empresaParameter = params.idEmpresa;
      if (this.descripcionParameter) {
        this.service
          .getProductosByDescripcion(this.descripcionParameter)
          .subscribe((res) => {
            (this.list = res), this.onPageChange({ pageIndex: 0, pageSize: 9 });
          });
      } else if (this.rubroParameter) {
        this.service
          .getProductosByRubro(this.rubroParameter)
          .subscribe((res) => {
            (this.list = res), this.onPageChange({ pageIndex: 0, pageSize: 9 });
          });
      } else if (this.empresaParameter) {
        this.service
          .getProductosByEmpresa(this.empresaParameter)
          .subscribe((res) => {
            (this.list = res), this.onPageChange({ pageIndex: 0, pageSize: 9 });
          });
      } else {
        this.service.getProductos().subscribe((res) => {
          (this.list = res), this.onPageChange({ pageIndex: 0, pageSize: 9 });
        });
      }
    });
  }

  onPageChange($event) {
    this.currentItemsToShow = this.list.slice(
      $event.pageIndex * $event.pageSize,
      $event.pageIndex * $event.pageSize + $event.pageSize
    );
  }
}
