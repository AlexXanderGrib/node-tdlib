import { EventBus } from "../event-bus";

describe(EventBus.name, () => {
  test("Complete", async () => {
    const array: number[] = [];
    const bus = new EventBus<number>();

    bus.subscribe((value) => array.push(value));

    bus.emit(1).emit(2).emit(3);
    bus.complete();
    bus.emit(4);

    expect(() => bus.subscribe(console.log)).toThrow("Completed");
    expect(array).toEqual([1, 2, 3]);
    expect(bus["_completed"]).toBe(true);
    expect(bus["_subscriptions"].size).toBe(0);
    expect(bus["_onComplete"].size).toBe(0);
  });
});
