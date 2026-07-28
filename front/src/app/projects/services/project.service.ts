import { HttpClient } from "@angular/common/http";
import { Injectable, } from "@angular/core";
import { Project } from "../models/project.model";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({ providedIn: 'root' })
export class ProjectService {

    constructor(private http: HttpClient){}

    private readonly apiUrl = `${environment.apiUrl}/api/projects`;

    getProjects(): Observable<Project[]>{
        return this.http.get<Project[]>(this.apiUrl);
    }

    getProjectsBySlug(slug: string): Observable<Project>{
        return this.http.get<Project>(`${this.apiUrl}/${slug}`);
    }
    
}