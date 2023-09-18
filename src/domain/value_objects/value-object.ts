
export interface ValueObject<T> {
    _value: T;
    isEqualTo: (object: ValueObject<T>) => boolean;
    get: () => T;
}
