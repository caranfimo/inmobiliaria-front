import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRegister, Propiedad, Task, Plan } from '../interfaces/app.interfaces'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  url = environment.url;

  registerNewUser(newUser: UserRegister): Observable<any> {
    return this.http.post(`${this.url}auth/registerUser`, newUser);
  }

  /**
   *  DEFINICIONES DE USUARIO
   */
  getUserDefinitions(): Observable<any> {
    return this.http.get(`${this.url}definition/rolType`);
  }
  setNewUserDefinition(name: string): Observable<any> {
    return this.http.post(`${this.url}definition/rolType/create`, { name });
  }
  deleteUserDefinition(id: string): Observable<any> {
    return this.http.get(`${this.url}definition/rolType/delete/${id}`);
  }

  /**
*  DEFINICIONES DE INMUEBLES
*/

  getEstateTypeDefinitions(): Observable<any> {
    return this.http.get(`${this.url}definition/estateType`);
  }
  setNewEstateTypeDefinition(name: string): Observable<any> {
    return this.http.post(`${this.url}definition/estateType/create`, { name });
  }
  deleteEstateTypeDefinition(id: string): Observable<any> {
    return this.http.delete(`${this.url}definition/estateType/delete/${id}`);
  }

  /**
   *  DEFINICIONES DE ESTADO DE PLAN
   */

  getPlanStateDefinitions(): Observable<any> {
    return this.http.get(`${this.url}definition/planState`);
  }
  setNewPlanStateDefinition(name: string): Observable<any> {
    return this.http.post(`${this.url}definition/planState/create`, { name });
  }
  deletePlanStateDefinition(id: string): Observable<any> {
    return this.http.delete(`${this.url}definition/planState/delete/${id}`);
  }

  /**
 *  DEFINICIONES DE ACTIVIDAD COMERCIAL
 */

  getComercialActivityDefinitions(): Observable<any> {
    return this.http.get(`${this.url}definition/comercialActivity`);
  }
  setNewComercialActivityDefinition(name: string): Observable<any> {
    return this.http.post(`${this.url}definition/comercialActivity/create`, { name });
  }
  deleteComercialActivityDefinition(id: string): Observable<any> {
    return this.http.delete(`${this.url}definition/comercialActivity/delete/${id}`);
  }
  /**
 *  DEFINICIONES DE ESTADO DE USUARIO
 */

  getUserStateDefinitions(): Observable<any> {
    return this.http.get(`${this.url}definition/userState`);
  }
  setNewUserStateDefinition(name: string): Observable<any> {
    return this.http.post(`${this.url}definition/userState/create`, { name });
  }
  deleteUserStateDefinition(id: string): Observable<any> {
    return this.http.delete(`${this.url}definition/userState/delete/${id}`);
  }

  /**
   * DEFINICION DE ESTADO DE TAREAS
   */

  getTaskStateDefinitions(): Observable<any> {
    return this.http.get(`${this.url}definition/taskState`);
  }
  setNewTaskStateDefinition(name: string): Observable<any> {
    return this.http.post(`${this.url}definition/taskState/create`, { name });
  }
  deleteTaskStateDefinition(id: string): Observable<any> {
    return this.http.delete(`${this.url}definition/taskState/delete/${id}`);
  }

  /**
   * MODULO DE PROPIEDADESINMUEBLES
   */

  getRealEstates(): Observable<any> {
    return this.http.get(`${this.url}realEstate/`);
  }

  deleteRealEstate(id: string): Observable<any> {
    return this.http.delete(`${this.url}realEstate/delete/${id}`);
  }

  getEstateDetail(id: string): Observable<any> {
    return this.http.get(`${this.url}realEstate/${id}`);
  }

  setNewRealEstate(newRealEstate: Propiedad): Observable<any> {
    return this.http.post(`${this.url}realEstate/create`, newRealEstate);
  }

  updateRealEstate( newImg:any ):Observable<any>{
    return this.http.post(`${this.url}realEstate/upload`, newImg );
  }

  /**
   *  UBICACION
   */

  getLocation(): Observable<any> {
    return this.http.get(`${this.url}definition/location`)
  }

  /**
   * Obtener imagenes
   * @param path of the images in the server
   */
  getImages(path: string): Observable<any> {
    return this.http.get(`${this.url}img/${path}`);
  }

  /**
   * MODULO DE TAREAS
   */
  getTasks(): Observable<any> {
    return this.http.get(`${this.url}task/`);
  }

  /**
   * @param user_id identificacion del suuario que consulta
   */
  getTaskByUser(user_id: string): Observable<any> {
    return this.http.post(`${this.url}task/user`, user_id);
  }
  /**
   * @param task Tarea que se desea ser creada debe pertenercer a la interfaz task
   */
  createTask(task: Task[]): Observable<any> {
    return this.http.post(`${this.url}task/create`, task);
  }


  /**
   * @param task Tarea que se desea ser actualizada debe pertenercer a la interfaz task
   */
  updateTask(task: Task): Observable<any> {
    return this.http.put(`${this.url}task/update`, task);
  }

  /**
   * @param task_id id de la tarea que se desea eliminar
   */
  deleteTask(task_id: string): Observable<any> {
    return this.http.post(`${this.url}task/delete`, task_id);
  }

  /**
   * MODULO DE PLANES
   */

  getPlans(): Observable<any>{
    return this.http.get(`${this.http}plan/`);
  }

  /**
   * @param user_id Cedula del usuario con el cual se traeran sus planes
   */
  getPlansByUser(user_id: string): Observable<any>{
    return this.http.post(`${this.url}plan/user`, {id_number:user_id})
  }

  /**
   * @param group Nombre del grupo por el cual se quiere buscar las tareas
   */
  getPlanByGroup( group: string ): Observable<any>{
    return this.http.post(`${this.url}plan/group`, { group });
  }

  /**
   * @param plan Plan que se quiere crear, debe pertenecer a la interfaz plan
   */
  createPlan( plan: Plan ): Observable<any>{
    return this.http.post(`${this.url}plan/create`, plan);
  }

  /**
   * @param plan Plan que se quiere actualizar, debe pertenecer a la interfaz plan
   */
  updatePlan( plan: Plan ): Observable<any>{
    return this.http.put(`${this.url}plan/update`, plan);
  }

  /**
   * @param _id Id del documento que se desea eliminar
   */
  deletePlan( _id:string ):Observable<any>{
    return this.http.post(`${this.url}plan/delete`, { _id });
  }

  getPlanTask( user:any ):Observable<any>{
    return this.http.post(`${this.url}plan/user/task`, user );
  }





}
