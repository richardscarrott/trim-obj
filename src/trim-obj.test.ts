import { trimObj } from "./trim-obj";

describe("trimObj", () => {
  it("recursively trim object values", () => {
    class Person {
      msg: string;
      constructor(msg: string) {
        this.msg = msg;
      }
      speak() {
        console.log(this.msg);
      }
    }
    const input = {
      foo: "bar  ",
      bar: "   baz",
      baz: "   qUx  ",
      quux: {
        quuz: " CORGE",
        grault: "  garply    ",
        waldo: {
          fred: " plugh",
          xyzzy: "thud",
        },
      },
      Wibble: ["wobble", " wubble ", "     flob "],
      toto: ["wolf       ", " tata", { titi: "  tutu " }],
      hoge: 1,
      piyo: [],
      hogera: {
        fuga: false,
        hogehoge: new Date("2021-11-01"),
      },
      wobble: new Error(" Wibble  "),
      fuga: new Person(" speech  "),
    };
    const output = trimObj(input);
    expect(output).toEqual({
      foo: "bar",
      bar: "baz",
      baz: "qUx",
      quux: {
        quuz: "CORGE",
        grault: "garply",
        waldo: {
          fred: "plugh",
          xyzzy: "thud",
        },
      },
      Wibble: ["wobble", "wubble", "flob"],
      toto: ["wolf", "tata", { titi: "tutu" }],
      hoge: 1,
      piyo: [],
      hogera: {
        fuga: false,
        hogehoge: new Date("2021-11-01"),
      },
      wobble: new Error(" Wibble  "),
      fuga: new Person("speech"),
    });
    expect(output).not.toBe(input);
  });
});
