import * as $ from 'jquery';

declare module 'jquery' {
  interface JQuery {
    datepicker(options?: any): JQuery;
  }
}
