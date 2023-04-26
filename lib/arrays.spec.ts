import { difference, includesSubset, isEqual } from "./arrays";

describe("arrays", () => {
  it("isEqual | Says when two arrays are equal", () => {
    const array = ["foo", "bar", "baz"];
    const equal = ["foo", "bar", "baz"];
    const different = ["bar", "baz"];

    expect(isEqual(array, equal)).toBe(true);
    expect(isEqual(array, different)).toBe(false);
  });

  it("difference | returns a new array with the fields that are not included", () => {
    const array = ["foo", "bar"];
    const valuesBigger = ["foo", "bar", "baz"];
    const valuesEqual = ["foo", "bar"];
    const valuesAllDifferent = ["a", "b"];

    expect(difference(array, valuesBigger)).toMatchObject(["baz"]);
    expect(difference(array, valuesEqual)).toMatchObject([]);
    expect(difference(array, valuesAllDifferent)).toMatchObject(["a", "b"]);
    expect(difference(array, ["a", "b", "foo"])).toMatchObject(["a", "b"]);
  });

  it("includesSubset | Says if an array is a subset of a second array", () => {
    const array = ["foo", "bar", "baz"];
    const subset = ["foo", "bar"];
    const subsetBigger = ["foo", "b", "d"];

    const notSubset = ["a", "b"];
    const notSubsetBigger = ["a", "b", "d"];

    expect(includesSubset(array, subset)).toBe(true);
    expect(includesSubset(array, subsetBigger)).toBe(true);
    expect(includesSubset(array, notSubset)).toBe(false);
    expect(includesSubset(array, notSubsetBigger)).toBe(false);
  });
});
