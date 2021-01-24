import {Watcher} from './watcher';

export class Dep {
    static target?: Watcher;

    subs: Set<Watcher>;
    constructor() {
        this.subs = new Set();
    }

    depend() {
        if (!Dep.target) {
            return;
        }
        this.subs.add(Dep.target);
    }

    notify() {
        this.subs.forEach((watcher) => watcher.update());
    }
}

const targetStack: Watcher[] = [];

export const pushTarget = (currentTarget: Watcher) => {
    if (Dep.target) {
        targetStack.push(Dep.target);
    }
    Dep.target = currentTarget;
};

export const popTarget = () => {
    Dep.target = targetStack.pop();
};
