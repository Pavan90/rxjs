import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs";
import {BehaviorSubject} from "rxjs";
import {ReplaySubject} from "rxjs";


// Replay subject example goes here

/*
var rsubject = new ReplaySubject(2, 200)

rsubject.subscribe(
    data => addItem('Observer 1 :' + data),
    err => addItem(err),
    () => addItem('Observer 1 completed')
)

rsubject.next('first thing has been sent')
rsubject.next('another thing has been sent')
rsubject.next('...observer 2 is about to subscribe');

var observer2 = rsubject.subscribe(
    data => addItem('observer 2 :' + data)
)

rsubject.next('second thing has been sent')
rsubject.next('third thing has been sent')


observer2.unsubscribe();
rsubject.next('final thing has been sent')
*/

// more on Replay subject

/*

var rsubject = new ReplaySubject(30, 200)

rsubject.subscribe(
    data => addItem('Observer 1 :' + data),
    err => addItem(err),
    () => addItem('Observer 1 completed')
)

var i = 1;
var int = setInterval(() => rsubject.next(i++), 100);

setTimeout( () => {
    var observer2 = rsubject.subscribe(
        data => addItem('observer 2 :' + data)
    )
}, 500)

*/


/*

//behaviourSubject example down below

var bsubject = new BehaviorSubject('First');
bsubject.subscribe(
    data => addItem('observer 1 :' + data),
    err => addItem(err),
        () => addItem('completed')
)


bsubject.next('the first thing has been sent');
bsubject.next('... observer 2 is about to subscribe');

var observer2 = bsubject.subscribe(
    data => addItem('observer2' + data)
)

bsubject.next('observer2: second thing has been sent')
*/


/*

// subject example down below

var subject = new Subject()


subject.subscribe(
    data => addItem('Observer 1: '+ data),
            err => addItem(err),
    () => addItem('Observer 1 completed here!!')
)

subject.next('first thing has been sent');

var observer2 = subject.subscribe(
    data => addItem('Observer 2 : ' + data)
)

subject.next('second thing has been sent')
subject.next('third thing has been sent')


observer2.unsubscribe();
subject.next('final thing has been sent')
*/







/*
import {fromEvent} from "rxjs/observable/fromEvent";




var observable = fromEvent(document, 'mousemove')

setTimeout( () => {
    var subscription = observable.subscribe(
        (x: any) => addItem(x)
    )
}, 2000);
*/

/*var observable = Observable.create((observer: any) => {
    try {
        observer.next('hello')
        observer.next('how are you ?')
        setInterval(() => {
            observer.next('I am Good!!')
        }, 2000)
    } catch (err) {
        observer.error(err);
    }
}).share();

var observer = observable.subscribe(
    (x: any) => addItem(x),
          (error: any) => addItem(error),
    () => addItem('completed')
);

/!*

var observer2 = observable.subscribe(
    (x: any) => addItem(x),
);

observer.add(observer2);
*!/


setTimeout( () => {
    var observer2 = observable.subscribe(
        (x: any) => addItem('subscriber2: ' + x)
    )
}, 1000);*/

function addItem(val : any){
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}