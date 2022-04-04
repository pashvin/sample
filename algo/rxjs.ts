import { Observable, Subject } from "rxjs";

// Observer are unicast and it makes copy of call back
// so both subscribe gets two diff value of random number
const myObservable = new Observable<number>((subscriber) => {
  const rdn = Math.floor(Math.random() * 200) + 1;
  subscriber.next(rdn);
});
myObservable.subscribe((a) => console.log("Subscription A", a));
myObservable.subscribe((a) => console.log("Subscription B", a));


// Subject are event emitter. It sands data to all subscriber so it is multicast
let obs = new Subject();

obs.subscribe((res) => {
  console.log("subscription a :", res); // subscription a : 0.91767565496093
});

obs.subscribe((res) => {
  console.log("subscription b :", res); // subscription b : 0.91767565496093
});

obs.next(Math.floor(Math.random() * 200) + 1);

//Subject does not hold data so only next executed after subscribe gives notification so subscriber.
//BehaviorSubject holds last data so that means if next happen first and subscribe happen after, then subscriber will be called immediately with last value
//ReplaySubject holds all old values and give to subscriber so next called three times and then subscribe is initiated, then subscribe will be called three times
//AsyncSubject only send last value after subject.completion function is called. 