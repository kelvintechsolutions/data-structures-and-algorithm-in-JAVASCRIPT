function Patient(name, code) {
    this.name = name;
    this.code = code;
}

function Queue() {
    this.items = [];
}

Queue.prototype.enqueue = function(element) {
    this.items.push(element);
};

Queue.prototype.dequeue = function() {
    if (this.isEmpty()) {
        return "Underflow";
    }
    return this.items.shift();
};

Queue.prototype.isEmpty = function() {
    return this.items.length === 0;
};

Queue.prototype.toString = function() {
    return this.items.map(patient => patient.name).join(', ');
};

// Now the rest of your code:
let p = new Patient("Smith", 5);
const ed = new Queue();
ed.enqueue(p);

p = new Patient("Jones", 4);
ed.enqueue(p);

p = new Patient("Fehrenbach", 6);
ed.enqueue(p);

p = new Patient("Brown", 1);
ed.enqueue(p);

p = new Patient("Ingram", 1);
ed.enqueue(p);

console.log(ed.toString());

let seen = ed.dequeue();
console.log("Patient being treated: " + seen.name);
console.log("Patients waiting to be seen: ");
console.log(ed.toString());

// Another round
seen = ed.dequeue();
console.log("Patient being treated: " + seen.name);
console.log("Patients waiting to be seen: ");
console.log(ed.toString());

seen = ed.dequeue();
console.log("Patient being treated: " + seen.name);
console.log("Patients waiting to be seen: ");
console.log(ed.toString());
