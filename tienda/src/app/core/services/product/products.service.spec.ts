import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductsService } from './products.service';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';

describe('ProductsService', () => {

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('test for getAllProducts', () => {

    it('should return products', () => {
      // preparar
    const expectData = [
      {
        id: '1',
        image: 'assets/images/camiseta.png',
        title: 'Camiseta',
        price: 5000,
        description: 'descripcion de la camiseta'
      },
      {
        id: '2',
        image: 'assets/images/camiseta.png',
        title: 'zapatos',
        price: 5000,
        description: 'descripcion de la camiseta'
      }
    ];

    let dataError, dataResponse;
    // actuacion
    service.getAllProducts()
    .subscribe(response => {
      dataResponse = response;
    }, error => {
      dataError = error;
    });

    const req = httpTestingController.expectOne(`${environment.url_api}/products/`);
    req.flush(expectData);
    // assert
    expect(dataResponse.length).toEqual(2);
    expect(req.request.method).toEqual('GET');
    expect(dataError).toBeUndefined();
    });

  });
});
