import { EventBus } from "../event-bus";
import timers from "timers";

describe(EventBus.name, () => {
  test("Complete", async () => {
    const array: number[] = [];
    const bus = new EventBus<number>();

    bus.subscribe((value) => array.push(value));

    bus.emit(1).emit(2).emit(3);
    bus.complete();
    bus.emit(4);

    expect(array).toEqual([1, 2, 3]);
    expect(bus["_completed"]).toBe(true);
    expect(bus["_subscriptions"].size).toBe(0);
    expect(bus["_onComplete"].size).toBe(0);
  });

  test("Timings", async () => {
    const bus = new EventBus<number>();

    for (let index = 1; index < 10; index++) {
      timers.setTimeout(() => bus.emit(index), index * 10);
    }

    timers.setTimeout(() => bus.complete(), 55);

    const array: number[] = [];

    for await (const value of bus) {
      array.push(value);
    }

    expect(array).toEqual([1, 2, 3, 4, 5]);
  });
});
