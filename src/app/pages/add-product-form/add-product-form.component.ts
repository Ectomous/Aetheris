import { Router } from '@angular/router';
import { FormControl, FormGroup ,Validators, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './../../services/product.service';
import { Component, inject } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-product-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-product-form.component.html',
  styleUrl: './add-product-form.component.scss',
})
export class AddProductFormComponent {
  productForm: FormGroup;

  constructor(
    private productService: ProductService,
    private router: Router
  ) {
    this.productService = inject(ProductService);
    this.router = inject(Router);

    this.productForm = new FormGroup({
      id: new FormControl(uuidv4()),
      name: new FormControl('', Validators.required),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
      description: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      availableInStock: new FormControl('', [Validators.required, Validators.min(0)]),
    });
  }

  submitForm() {
    if (this.productForm.invalid) {
      // Necessário criar um card na tela avisando.
      return console.log('Formulário Inválido');
    }

    console.log('Formulário Submetido!');
    console.log(this.productForm.value);

    this.productService.createProduct(this.productForm.value).subscribe({
      next: () => {
        console.log('Produto adicionado com sucesso!');
        this.router.navigate(['home']);
      }, 
      error: () => {
        console.log('Erro interno do servidor. Contate o suporte para mais informações!')
      }
    });
  }
}
