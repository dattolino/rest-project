import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CategoryDto } from "../models";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class CategoryControllerService{

    private baseUrl = 'http://localhost:8080/api/v1/categories';

    constructor(private http: HttpClient) {}

    getCategories(): Observable<CategoryDto[]> {
        return this.http.get<CategoryDto[]>(`${this.baseUrl}`);
    }

    getCategory(id: number): Observable<CategoryDto> {
        return this.http.get<CategoryDto>(`${this.baseUrl}/${id}`);
    }

    createCategory(category: any): Observable<CategoryDto> {
        return this.http.post<CategoryDto>(this.baseUrl, category);
    }

    updateCategory(id: number, category: any): Observable<CategoryDto> {
        return this.http.put<CategoryDto>(`${this.baseUrl}/${id}`, category);
    }

    deleteCategory(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

}
