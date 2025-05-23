/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CommentDto } from '../../models/comment-dto';

export interface GetCommentById$Params {
  postId: number;
  id: number;
}

export function getCommentById(http: HttpClient, rootUrl: string, params: GetCommentById$Params, context?: HttpContext): Observable<StrictHttpResponse<CommentDto>> {
  const rb = new RequestBuilder(rootUrl, getCommentById.PATH, 'get');
  if (params) {
    rb.path('postId', params.postId, {});
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CommentDto>;
    })
  );
}

getCommentById.PATH = '/api/v1/posts/{postId}/comments/{id}';
