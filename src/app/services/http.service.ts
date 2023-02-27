import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export abstract class HttpService {
	public readonly HOST_URL: string = environment.apiUrl;
	protected readonly httpClient: HttpClient;

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json',
		}),
	};

	constructor(httpClient: HttpClient) {
		this.httpClient = httpClient;
	}    
}
