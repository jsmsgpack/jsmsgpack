#!/usr/bin/env deno test

/* eslint-disable */
// @ts-ignore
import { assertEquals } from "https://deno.land\/std/testing/asserts.ts";
// @ts-ignore
import * as msgpack from "../mod.ts";

// @ts-ignore
Deno.test("Hello, world!", () => {
  // @ts-ignore
  const encoded = msgpack.encode("Hello, world!");
  // @ts-ignore
  const decoded = msgpack.decode(encoded);
  assertEquals(decoded, "Hello, world!");
});
