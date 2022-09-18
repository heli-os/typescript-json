import TSON from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_assert_equals } from "./_test_assert_equals";

export const test_assert_equals_constant_atomic_wrapper = _test_assert_equals(
    "wrapped atomic constant",
    ConstantAtomicWrapper.generate,
    (input) => TSON.assertEquals(input),
);