import Observable from '../Observable';
export default function zipAll(project: (...observables: Array<Observable>) => Observable): Observable;
